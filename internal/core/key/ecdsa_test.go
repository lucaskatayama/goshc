package key

import (
	"fmt"
	"os"
	"testing"
)

func TestName(t *testing.T) {
	pk, _ := GeneratePrivateKey()

	a, b := Encode(pk, &pk.PublicKey)
	fmt.Printf("||||||||||%s|||||||||%s||||||||||", a, b)

	os.Setenv("A", a)
	os.Setenv("B", b)
	pk, _ = Decode(a, b)

	fmt.Println(pk)

}
