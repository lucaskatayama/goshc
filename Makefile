
create-privatekey:
	openssl ecparam -genkey -name prime256v1 -noout -out private.pem

create-publickey:
	openssl ec -in private.pem -pubout -out public.pem

sign:
	openssl dgst -sha256 -sign private.pem -out yourinput.sha256 yourinputdocument

verify:
	openssl dgst -sha256 -verify public.pem -signature yourinput.sha256 yourinputdocument

