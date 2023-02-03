console.log("hej");

const url = "https://kea-alt-del.dk/t7/api/products/1532";

function hentData(){
fetch(url)
.then(res => res.json())
.then(visProdukt);
}

function visProdukt(){
    console.log(produkt);
}


hentData();