package key

import (
	"crypto/ecdsa"
	"crypto/sha256"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"os"
	"strings"
)

var (
	privateKey *ecdsa.PrivateKey
	publicKey  *ecdsa.PublicKey
	jwks       = map[string]interface{}{}
)

func init() {
	var err error
	privateKey, publicKey = Decode(strings.ReplaceAll(os.Getenv("PRIVATE_KEY"), "\\n", "\n"), strings.ReplaceAll(os.Getenv("PUBLIC_KEY"), "\\n", "\n"))
	privateKey.PublicKey = *publicKey

	encoded, err := jwkEncode(&privateKey.PublicKey)
	if err != nil {
		panic(err)
	}
	if err := json.Unmarshal([]byte(encoded), &jwks); err != nil {
		panic(err)
	}
	thumb, err := jwkThumbprint(&privateKey.PublicKey)
	if err != nil {
		panic(err)
	}
	jwks["kid"] = thumb
	jwks["use"] = "sig"
	jwks["alg"] = "ES256"
}

type Keys struct {
	Keys []interface{} `json:"keys"`
}

func JWKS() Keys {
	return Keys{Keys: []interface{}{jwks}}
}

func kid() string {
	if kid, ok := jwks["kid"]; ok {
		return kid.(string)
	}
	panic("no kid available")
}

func jwkEncode(pub *ecdsa.PublicKey) (string, error) {
	// https://tools.ietf.org/html/rfc7518#section-6.2.1
	p := pub.Curve.Params()
	n := p.BitSize / 8
	if p.BitSize%8 != 0 {
		n++
	}
	x := pub.X.Bytes()
	if n > len(x) {
		x = append(make([]byte, n-len(x)), x...)
	}
	y := pub.Y.Bytes()
	if n > len(y) {
		y = append(make([]byte, n-len(y)), y...)
	}
	// Field order is important.
	// See https://tools.ietf.org/html/rfc7638#section-3.3 for details.
	return fmt.Sprintf(`{"crv":"%s","kty":"EC","x":"%s","y":"%s"}`,
		p.Name,
		base64.RawURLEncoding.EncodeToString(x),
		base64.RawURLEncoding.EncodeToString(y),
	), nil
}

func jwkThumbprint(pub *ecdsa.PublicKey) (string, error) {
	jwk, err := jwkEncode(pub)
	if err != nil {
		return "", err
	}
	b := sha256.Sum256([]byte(jwk))
	return base64.RawURLEncoding.EncodeToString(b[:]), nil
}
