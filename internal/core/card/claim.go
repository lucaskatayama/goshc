package card

import (
	"encoding/json"

	"github.com/lucaskatayama/goshc/internal/core/key"
)

func (c CustomClaims) Sign() ([]byte, error) {
	b, err := json.Marshal(c)
	if err != nil {
		return nil, err
	}
	return key.Sign(b)
}
