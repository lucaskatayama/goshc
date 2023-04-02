package keys

import (
	"github.com/gofiber/fiber/v2"

	"github.com/lucaskatayama/goshc/internal/core/key"
)

func JWKSHandler(c *fiber.Ctx) error {
	c.Set("Content-Type", "application/json")

	return c.JSON(key.JWKS())
}
