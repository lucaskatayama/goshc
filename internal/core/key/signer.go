package key

import (
	"bytes"
	"compress/flate"
	"crypto"
	"crypto/ecdsa"
	"crypto/rand"
	"crypto/rsa"
	"crypto/sha256"
	"encoding/asn1"
	"encoding/base64"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"math/big"
)

func jwsSign(key crypto.Signer, hash crypto.Hash, digest []byte) ([]byte, error) {
	switch pub := key.Public().(type) {
	case *rsa.PublicKey:
		return key.Sign(rand.Reader, digest, hash)
	case *ecdsa.PublicKey:
		sigASN1, err := key.Sign(rand.Reader, digest, hash)
		if err != nil {
			return nil, err
		}

		var rs struct{ R, S *big.Int }
		if _, err := asn1.Unmarshal(sigASN1, &rs); err != nil {
			return nil, err
		}

		rb, sb := rs.R.Bytes(), rs.S.Bytes()
		size := pub.Params().BitSize / 8
		if size%8 > 0 {
			size++
		}
		sig := make([]byte, size*2)
		copy(sig[size-len(rb):], rb)
		copy(sig[size*2-len(sb):], sb)
		return sig, nil
	}
	return nil, errors.New("unsupported key")
}

func Sign(payload []byte) ([]byte, error) {
	header := map[string]interface{}{
		"kid": kid(),
		"zip": "DEF",
		"alg": "ES256",
	}
	var b bytes.Buffer
	// Compress the data using the specially crafted dictionary.

	zw, err := flate.NewWriter(&b, flate.BestCompression)
	if err != nil {
		return nil, err
	}

	if _, err := io.Copy(zw, bytes.NewReader(payload)); err != nil {
		return nil, err
	}
	if err := zw.Close(); err != nil {
		return nil, err
	}

	headerBytes, _ := json.Marshal(header)
	headerSeg := base64.RawURLEncoding.EncodeToString(headerBytes)
	payloadSeg := base64.RawURLEncoding.EncodeToString(b.Bytes())

	hash := sha256.New()
	hash.Write([]byte(headerSeg + "." + payloadSeg))
	sig, err := jwsSign(privateKey, crypto.SHA256, hash.Sum(nil))
	if err != nil {
		return nil, err
	}
	sigSeg := base64.RawURLEncoding.EncodeToString(sig)

	return []byte(fmt.Sprintf("%s.%s.%s", headerSeg, payloadSeg, sigSeg)), nil
}
