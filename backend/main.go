package main

import (
	"context"
	"log"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/mattn/go-sqlite3"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
	"github.com/mmildd_s/app/controllers"
	"github.com/mmildd_s/app/ent"
)

type Nurses struct {
	Nurse []Nurse
}

type Nurse struct {
	Name     string
	Email    string
	Password string
	Tel      string
}

type Examinationrooms struct {
	Examinationroom []Examinationroom
}
type Examinationroom struct {
	ExaminationroomName string
}

type Tools struct {
	Tool []Tool
}
type Tool struct {
	ToolName string
	ToolAmount   string
}

type Operatives struct {
	Operative []Operative
}
type Operative struct {
	OperativeName string
	OperativeType string
}

type Operativerecords struct {
	Operativerecord []Operativerecord
}
type Operativerecord struct {
	OperativerecordTime string
}

// @title SUT SA Example API
// @version 1.0
// @description This is a sample server for SUT SE 2563
// @termsOfService http://swagger.io/terms/

// @contact.name API Support
// @contact.url http://www.swagger.io/support
// @contact.email support@swagger.io
// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html

// @host localhost:8080
// @BasePath /api/v1

// @securityDefinitions.basic BasicAuth

// @securityDefinitions.apikey ApiKeyAuth
// @in header
// @name Authorization

// @securitydefinitions.oauth2.application OAuth2Application
// @tokenUrl https://example.com/oauth/token
// @scope.write Grants write access
// @scope.admin Grants read and write access to administrative information

// @securitydefinitions.oauth2.implicit OAuth2Implicit
// @authorizationUrl https://example.com/oauth/authorize
// @scope.write Grants write access
// @scope.admin Grants read and write access to administrative information

// @securitydefinitions.oauth2.password OAuth2Password
// @tokenUrl https://example.com/oauth/token
// @scope.read Grants read access
// @scope.write Grants write access
// @scope.admin Grants read and write access to administrative information

// @securitydefinitions.oauth2.accessCode OAuth2AccessCode
// @tokenUrl https://example.com/oauth/token
// @authorizationUrl https://example.com/oauth/authorize
// @scope.admin Grants read and write access to administrative information
func main() {
	router := gin.Default()
	router.Use(cors.Default())

	client, err := ent.Open("sqlite3", "file:operationrecord.db?cache=shared&_fk=1")
	if err != nil {
		log.Fatalf("fail to open sqlite3: %v", err)
	}
	defer client.Close()

	if err := client.Schema.Create(context.Background()); err != nil {
		log.Fatalf("failed creating schema resources: %v", err)
	}

	v1 := router.Group("/api/v1")

	controllers.NewExaminationroomController(v1, client)
	controllers.NewToolController(v1, client)
	controllers.NewNurseController(v1, client)
	controllers.NewOperativeController(v1, client)
	controllers.NewOperativerecordController(v1, client)

	// Set Nuses Data
	nurses := Nurses{
		Nurse: []Nurse{
			Nurse{"น.ส. สมร เย็นตา", "samon_123@hotmail.com", "samon123456", "097-2345678"},
			Nurse{"นาง ตาหวาน ตากลม", "tawan_eiei@gmail.com", "12345678", "067-7893452"},
		},
	}

	for _, n := range nurses.Nurse {
		client.Nurse.
			Create().
			SetNurseName(n.Name).
			SetNurseEmail(n.Email).
			SetNursePassword(n.Password).
			SetNurseTel(n.Tel).
			Save(context.Background())
	}

	// Set Tool Data
	tools := Tools{
		Tool: []Tool{
			Tool{"เข็ม", "1"},
			Tool{"ถุงน้ำเกลือ", "3"},
			Tool{"เครื่องมือทำคลอด", "3"},
		},
	}
	for _, t := range tools.Tool {
		client.Tool.
			Create().
			SetToolName(t.ToolName).
			SetToolAmount(t.ToolAmount).
			Save(context.Background())
	}

	// Set Operative Data
	operatives := Operatives{
		Operative: []Operative{
			Operative{"ผ่าตัด", "ศัลยศาสตร์"},
			Operative{"เย็บแผล", "ฉุกเฉิน"},
			Operative{"ให้น้ำเกลือ", "ทั่วไป"},
		},
	}
	for _, o := range operatives.Operative {
		client.Operative.
			Create().
			SetOperativeName(o.OperativeName).
			SetOperativeType(o.OperativeType).
			Save(context.Background())
	}

	// Set Examinationroom Data
	examinationrooms := Examinationrooms{
		Examinationroom: []Examinationroom{
			Examinationroom{"ห้องผ่าตัด"},
			Examinationroom{"ห้องเย็บแผล"},
			Examinationroom{"ห้องให้น้ำเกลือ"},
		},
	}
	for _, e := range examinationrooms.Examinationroom {
		client.Examinationroom.
			Create().
			SetExaminationroomName(e.ExaminationroomName).
			Save(context.Background())
	}

	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	router.Run()
}
