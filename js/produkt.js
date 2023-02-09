console.log("hej");

// lav url search obejkt
const urlParams = new URLSearchParams(window.location.search);

// find id
const id = urlParams.get("id");

// find Url og imagePath
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;
const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

function hentData() {
  fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector("#model").textContent = produkt.productdisplayname;
  document.querySelector("#productdisplayname").textContent =
    produkt.productdisplayname;
  document.querySelector("#brandname").textContent = produkt.brandname;
  document.querySelector("#articletype").textContent = produkt.articletype;
  document.querySelector("#brandname").textContent = produkt.brandname;
  document.querySelector("#basecolour").textContent = produkt.basecolour;
  document.querySelector("#relid").textContent = produkt.relid;
  document.querySelector("#brandname").textContent = produkt.brandname;
  document.querySelector("#brandbio").textContent = produkt.brandbio;
  document.querySelector("img").src = imagePath;

  if (produkt.subcategory === "Shoes")
    document.querySelector(".option_0").textContent = "37";
  document.querySelector(".option_1").textContent = "38";
  document.querySelector(".option_2").textContent = "39";
  document.querySelector(".option_3").textContent = "40";
  document.querySelector(".option_4").textContent = "41";
  document.querySelector(".option_5").textContent = "42";
  document.querySelector(".option_6").textContent = "43";
}

hentData();
