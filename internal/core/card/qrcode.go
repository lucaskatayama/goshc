package card

import (
	"fmt"
	"strings"

	"github.com/skip2/go-qrcode"
)

func QRCode(b []byte) ([]byte, error) {
	if len(string(b)) > 1195 {
		chunks := len(string(b)) / 1195
		if len(string(b))%1195 > 0 {
			chunks += 1
		}
	}
	var str strings.Builder
	for _, bi := range b {
		str.WriteString(fmt.Sprintf("%02d", bi-45))
	}
	toEncode := fmt.Sprintf("shc:/%s", str.String())

	q, err := qrcode.New(toEncode, qrcode.Highest)
	if err != nil {
		return nil, err
	}
	return q.PNG(len(toEncode))
}
