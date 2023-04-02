package keys

import (
	"net/http"

	"github.com/gofiber/fiber/v2"

	"github.com/lucaskatayama/goshc/internal/ui/rest/handlers"
)

var Routes = []handlers.Route{

	{
		Path:    "/.well-known/jwks.json",
		Method:  http.MethodGet,
		Handler: JWKSHandler,
	},
}

func Router() *fiber.App {
	api := fiber.New(fiber.Config{})

	for _, route := range Routes {
		api.Add(route.Method, route.Path, route.Handler)
	}
	return api
}
