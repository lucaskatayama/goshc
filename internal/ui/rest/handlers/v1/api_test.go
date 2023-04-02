package v1

import (
	"fmt"
	"testing"
)

func TestInit(t *testing.T) {
	Init()
}

func TestName(t *testing.T) {
	a := "ABCXabcx"
	for i, alpha := range a {
		fmt.Printf("%d = %d\n", i, alpha-45)
	}
}
