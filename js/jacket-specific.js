const jacketSpecific = document.querySelector(".jacket-specific");
const queryString = document.location.search;
// console.log(queryString);

const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const url = "https://rebmat.site/rainydays/wp-json/wc/store/products/" + id;

async function getProduct() {
  try {
    const response = await fetch(url);
    const product = await response.json();
    // console.log(product);
    jacketSpecific.innerHTML = "";
    jacketSpecific.innerHTML = `
        <img src="${product.images[0].src}" alt="" class="product-img"> 
        <h1 class="product-specific-name">${product.name}</h1>
        <p class="price">${product.prices.price} NOK</p>
        <a href="" class="add-to-cart-button"><button>Add to cart</button></a>
        <div class="product-description">
        <p>${product.description}</p>
        </div>
    `;
  } catch (error) {
    console.log(error);
  }
}

getProduct();
