package v1

import (
	"net/http"

	"github.com/gofiber/fiber/v2"

	"github.com/lucaskatayama/goshc/internal/core/card"
)

func Sign(c *fiber.Ctx) error {
	return fiber.NewError(http.StatusNotImplemented, "Not Implemented")
}

func QRCode(c *fiber.Ctx) error {
	jws := c.Query("jws", "")
	if jws == "" {
		return fiber.NewError(http.StatusBadRequest, "missing required query param: jws")
	}

	code, err := card.QRCode([]byte(jws))
	if err != nil {
		return fiber.NewError(http.StatusInternalServerError, "error processing qrcode")
	}

	c.Response().Header.Add(fiber.HeaderContentType, "image/png")
	return c.Send(code)
}
