package card

import "github.com/golang-jwt/jwt"

type Payload struct {
	Types             []string `json:"type"`
	CredentialSubject FHIR     `json:"credentialSubject"`
}

type CustomClaims struct {
	*jwt.StandardClaims
	Issuer    string  `json:"iss"`
	Vc        Payload `json:"vc"`
	NotBefore float64 `json:"nbf"`
}

type FHIR struct {
	Version string `json:"fhirVersion"`
	Bundle  Bundle `json:"fhirBundle"`
}

func NewCustomClaim() CustomClaims {
	return CustomClaims{
		Issuer:    "https://brazilhealthcard.herokuapp.com",
		NotBefore: 1638317968.355,
		Vc: Payload{
			Types: []string{
				"https://smarthealth.cards#health-card",
				"https://smarthealth.cards#immunization",
				"https://smarthealth.cards#covid19",
			},
			CredentialSubject: FHIR{
				Version: "4.0.1",
				Bundle: Bundle{
					ResourceType: "Bundle",
					Type:         "collection",
					Entry:        []Entry{},
				},
			},
		},
	}
}

func NewPatient(family, given, birth string) Entry {
	return Entry{
		FullUrl: "resource:0",
		Resource: PatientResource{
			ResourceType: "Patient",
			Name: []Name{
				{
					Family: family,
					Given: []string{
						given,
					},
				},
			},
			BirthDate: birth,
		},
	}
}

func NewImmunization(id, code, date, performer, lotNumber string) Entry {
	return Entry{
		FullUrl: "resource:" + id,
		Resource: ImmunizationResource{
			ResourceType: "Immunization",
			Status:       "completed",
			VaccineCode: VaccineCode{
				Coding: []Coding{
					{
						System: "http://hl7.org/fhir/sid/cvx",
						Code:   code,
					},
				},
			},
			Patient: Patient{
				Reference: "resource:0",
			},
			OccurrenceDateTime: date,
			Performer: []Performer{
				{
					Actor{Display: performer},
				},
			},
			LotNumber: lotNumber,
		},
	}
}

var Claim = CustomClaims{
	Issuer:    "https://brazilhealthcard.herokuapp.com",
	NotBefore: 1638317968.355,
	Vc: Payload{
		Types: []string{
			"https://smarthealth.cards#health-card",
			"https://smarthealth.cards#immunization",
			"https://smarthealth.cards#covid19",
		},
		CredentialSubject: FHIR{
			Version: "4.0.1",
			Bundle: Bundle{
				ResourceType: "Bundle",
				Type:         "collection",
				Entry: []Entry{
					{
						FullUrl: "resource:0",
						Resource: PatientResource{
							ResourceType: "Patient",
							Name: []Name{
								{
									Family: "Katayama",
									Given: []string{
										"Lucas",
									},
								},
							},
							BirthDate: "1988-07-30",
						},
					},
					{
						FullUrl: "resource:1",
						Resource: ImmunizationResource{
							ResourceType: "Immunization",
							Status:       "completed",
							VaccineCode: VaccineCode{
								Coding: []Coding{
									{
										System: "http://hl7.org/fhir/sid/cvx",
										Code:   "218",
									},
								},
							},
							Patient: Patient{
								Reference: "resource:0",
							},
							OccurrenceDateTime: "2021-12-22",
							Performer: []Performer{
								{
									Actor{Display: "JBS DR WALDOMIRO REGNOLATTO CUPECE"},
								},
							},
							LotNumber: "FL3207",
						},
					},
				},
			},
		},
	},
}
