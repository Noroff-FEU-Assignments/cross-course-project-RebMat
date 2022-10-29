const url = "http://rebmat.site/rainydays/wp-json/wc/store/products?category=26";
const productContainer = document.querySelector(".products-women");

async function getProducts(url) {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    console.log(getResults);
    productContainer.innerHTML = "";
    getResults.forEach(function (product) {
      productContainer.innerHTML += `
        <div class="product">
          <img src="${product.images[0].src}" alt="" class="product-img"> 
          <div class="info-container">
           <h2 class="">${product.name}</h2>
           <p class="price">${product.prices.price} NOK</p>
          </div>
          <a href="jacket-specific.html?id=${product.id}"><button>View Product</button></a>
        </div>
      `;
    });
  } catch (error) {
    console.log(error);
  }
}

getProducts(url);
