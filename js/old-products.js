// import { productArray } from "./constants/productList.js";
// console.log(productArray);
// const productsContainer = document.querySelector(".products");
// const cart = document.querySelector(".cart");
// const cartList = document.querySelector(".cart-list");
// const totalContainer = document.querySelector(".total");
// let cartArray = [];

// productArray.forEach(function (product) {
//   productsContainer.innerHTML += `
//   <div class="product">
//        <div style="background-image: url(${product.image})" class="product-image")></div>
//        <h2>${product.name}</h2>
//        <div class="product-price">${product.price}</div>
//        <button class="product-button" data-product="${product.id}">Add to cart</button>
//     </div>
//     `;
// });

// const buttons = document.querySelectorAll("button");
// buttons.forEach(function (button) {
//   button.onclick = function (event) {
//     const itemToAdd = productArray.find((item) => item.id === event.target.dataset.product);
//     cartArray.push(itemToAdd);
//     showCart(cartArray);
//     localStorage.setItem("cartList", JSON.stringify(cartArray));
//   };
// });

// function showCart(cartItems) {
//   cart.style.display = "flex";
//   cartList.innerHTML = " ";
//   let total = 0;
//   cartItems.forEach(function (cartElement) {
//     total += cartElement.price;
//     cartList.innerHTML += `<div class="cart-item">
//          <h4>${cartElement.name}</h4>
//          <div style="background-image: url(${cartElement.image})" class="cart-image")></div>
//          </div>
//         `;
//   });
//   totalContainer.innerHTML = `Total: ${total}`;
// }
