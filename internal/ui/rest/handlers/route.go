package handlers

import (
	"encoding/json"
	"fmt"

	"github.com/gofiber/fiber/v2"

	"github.com/lucaskatayama/goshc/internal/core/card"
	"github.com/lucaskatayama/goshc/internal/core/key"
)

type Route struct {
	Path    string
	Method  string
	Handler fiber.Handler
}

type Vaccine struct {
	CVX       string `json:"cvx"`
	Performer string `json:"performer"`
	Date      string `json:"date"`
	LotNumber string `json:"lotNumber"`
}

type CardRequest struct {
	BirthDate  string `json:"birthDate"`
	FamilyName string `json:"familyName"`
	GivenName  string `json:"givenName"`
	Vaccines   []Vaccine
}

func DummyHandler(c *fiber.Ctx) error {
	var cardRequest CardRequest
	if err := c.BodyParser(&cardRequest); err != nil {
		return err
	}
	claim := card.NewCustomClaim()
	patient := card.NewPatient(cardRequest.FamilyName, cardRequest.GivenName, cardRequest.BirthDate)
	claim.Vc.CredentialSubject.Bundle.Entry = append(claim.Vc.CredentialSubject.Bundle.Entry, patient)

	for idx, vacc := range cardRequest.Vaccines {
		resourceId := idx + 1
		im := card.NewImmunization(
			fmt.Sprintf("%d", resourceId),
			vacc.CVX,
			vacc.Date,
			vacc.Performer,
			vacc.LotNumber,
		)
		claim.Vc.CredentialSubject.Bundle.Entry = append(claim.Vc.CredentialSubject.Bundle.Entry, im)
	}

	b, _ := json.Marshal(claim)
	signed, err := key.Sign(b)
	if err != nil {
		return err
	}
	
	return c.SendString(string(signed))
}

func ErrorHandler(c *fiber.Ctx, err error) error {
	code := fiber.StatusInternalServerError
	msg := err.Error()

	switch t := err.(type) {
	case *fiber.Error:
		code = t.Code
		msg = t.Message
	}

	return c.Status(code).JSON(fiber.Map{
		"msg": msg,
	})
}
