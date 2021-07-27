const basePath = "https://henri-potier.techx.fr/"

const JsonPath = {
    books:`${basePath}books`,
    promotions : (bookSelected)=>`${basePath}books/${bookSelected}/commercialOffers`
}

export  {JsonPath}