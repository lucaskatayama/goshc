package rest

import (
	"math/rand"
	"net"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/etag"
	"github.com/gofiber/fiber/v2/middleware/favicon"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/gofiber/fiber/v2/middleware/requestid"
	"github.com/oklog/ulid/v2"

	"github.com/lucaskatayama/goshc/internal/ui/rest/handlers/keys"
	v1 "github.com/lucaskatayama/goshc/internal/ui/rest/handlers/v1"
	"github.com/lucaskatayama/goshc/pkg/log"
)

func Run() {
	app := fiber.New(fiber.Config{
		Prefork:   false,
		Immutable: true,
		AppName:   "goshc",
	})

	app.Use(favicon.New(favicon.Config{
		File: "./web/dist/favicon.ico",
	}))
	app.Use(recover.New())
	app.Use(logger.New())
	app.Use(etag.New())
	app.Use(requestid.New(requestid.Config{Generator: func() string {
		now := time.Now()
		entropy := ulid.Monotonic(rand.New(rand.NewSource(now.UnixNano())), 0)
		return ulid.MustNew(ulid.Timestamp(now), entropy).String()
	}}))

	app.Mount("/", keys.Router())
	app.Mount("/v1", v1.Router())

	app.Static("/", "./web/dist")

	done := make(chan os.Signal, 1)

	signal.Notify(done, syscall.SIGTERM, syscall.SIGINT, syscall.SIGKILL)

	go func() {
		if err := app.Listen(net.JoinHostPort(os.Getenv("HOST"), os.Getenv("PORT"))); err != nil {
			log.Panicf("starting http server: %+v\n", err)
		}
	}()

	<-done

	log.Infof("stopping")
	if err := app.Shutdown(); err != nil {
		log.Errorf("shutting down server: %+v", err)
	}

	log.Infof("server stopped")
}
