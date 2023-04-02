package v1

import (
	"net/http"

	"github.com/gofiber/fiber/v2"

	"github.com/lucaskatayama/goshc/internal/ui/rest/handlers"
)

var Routes = []handlers.Route{
	{
		Path:    "/sign",
		Method:  http.MethodPost,
		Handler: Sign,
	},
	{
		Path:    "/qr",
		Method:  http.MethodGet,
		Handler: QRCode,
	},
	{
		Path:    "/card",
		Method:  http.MethodPost,
		Handler: handlers.DummyHandler,
	},
}

func Router() *fiber.App {
	api := fiber.New(fiber.Config{
		ErrorHandler: handlers.ErrorHandler,
	})

	for _, route := range Routes {
		api.Add(route.Method, route.Path, route.Handler)
	}
	return api
}
