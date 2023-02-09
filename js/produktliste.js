console.log("Vi er i produktlisten");

const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("cat");
const url = `https://kea-alt-del.dk/t7/api/products?limit=100&category=${cat}`;

document.querySelector("h2").textContent = cat;

// 1. Hente data:
async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);

  // 2. loope igennem dataen // 3. For hver af dem
  data.forEach(showProduct);
}
function showProduct(product) {
  console.log(product);
  // 4. fange vores template
  const template = document.querySelector("#smallproductTemplate").content;
  const id = product.id;
  const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
  // console.log(template);

  // 5. klone den
  const copy = template.cloneNode(true);
  // 6. skifte data
  // 6.1. skiftning af tekst + billeder:
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".subtle").textContent = product.articletype;
  copy.querySelector(".price").textContent = product.price;
  copy.querySelector("a").href = "produkt.html?id=" + product.id;
  copy.querySelector("img").src = imagePath;

  // 6.2 Hvordan man laver ting udsolgt
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
    // copy.querySelector("ny_pris").textContent = Math.round(object.price - (object.price * object.discount) / 100);
  }
  // 7. appende
  document.querySelector("main").appendChild(copy);
}
getData();
