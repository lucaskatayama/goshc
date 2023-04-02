package card

import "encoding/json"

type Name struct {
	Family string   `json:"family"`
	Given  []string `json:"given"`
}

type Coding struct {
	System string `json:"system"`
	Code   string `json:"code"`
}

type VaccineCode struct {
	Coding []Coding `json:"coding"`
}

type Patient struct {
	Reference string `json:"reference"`
}

type Actor struct {
	Display string `json:"display"`
}

type Performer struct {
	Actor Actor `json:"actor"`
}

type Resourcer interface {
	Resource() json.RawMessage
}

type PatientResource struct {
	ResourceType string `json:"resourceType"`
	Name         []Name `json:"name"`
	BirthDate    string `json:"birthDate"`
}

func (pr PatientResource) Resource() json.RawMessage {
	b, _ := json.Marshal(pr)
	return b
}

type ImmunizationResource struct {
	ResourceType       string      `json:"resourceType"`
	Status             string      `json:"status"`
	VaccineCode        VaccineCode `json:"vaccineCode"`
	Patient            Patient     `json:"patient"`
	OccurrenceDateTime string      `json:"occurrenceDateTime"`
	Performer          []Performer `json:"performer"`
	LotNumber          string      `json:"lotNumber"`
}

func (ir ImmunizationResource) Resource() json.RawMessage {
	b, _ := json.Marshal(ir)
	return b
}

type Entry struct {
	FullUrl  string    `json:"fullUrl"`
	Resource Resourcer `json:"resource"`
}

type Bundle struct {
	ResourceType string  `json:"resourceType"`
	Type         string  `json:"type"`
	Entry        []Entry `json:"entry"`
}
