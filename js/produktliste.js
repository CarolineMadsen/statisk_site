console.log("Vi er i produktlisten");

// https://kea-alt-del.dk/t7/api/products

// 1. Hente data:
async function getData () {
    const response = await fetch ("https://kea-alt-del.dk/t7/api/products?limit=10");
    const data = await response.json();
    // console.log(data);

    // 2. loope igennem dataen // 3. For hver af dem
    data.forEach (showProduct); 
    };
    function showProduct (product) {
    console.log(product);
        // 4. fange vores template
        const template = document.querySelector("#smallproductTemplate").content;
        // console.log(template);
        // 5. klone den
        const copy = template.cloneNode(true);
        // 6. skifte data
            // 6.1. skiftning af tekst + billeder:
            copy.querySelector("h3").textContent=product.productdisplayname;
            copy.querySelector(".subtle").textContent=product.articletype;
            copy.querySelector(".price").textContent=product.price;

            // document.querySelector("img").src = imagePath;
            
            // 6.2 Hvordan man laver ting udsolgt
            if(product.soldout){
                copy.querySelector("article").classList.add("soldOut");
            }
            if(product.discount){
                copy.querySelector("article").classList.add("onSale");
            }
        // 7. appende
        document.querySelector("main").appendChild(copy);
    }
    // articletype:"Tshirts"
    // brandname:"Nike"
    // category:"Apparel"
    // discount:null
    // gender:"Men"
    // id:1163
    // price:895
    // productdisplayname:"Sahara Team India Fanwear Round Neck Jersey"
    // productionyear: 2011
    // season: "Summer"
    // soldout: 0
    // subcategory: "Topwear"
    // usagetype: "Sports"

getData();