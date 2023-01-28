function solve() {
   let cart = new Map();
   let sum = 0;
   let buttons = [...document.querySelectorAll('.add-product, .checkout')];
   let textArea = document.querySelector("textarea");

   buttons.forEach(button => button.addEventListener("click", addToCart));

   function addToCart(e) {
      if (e.target.classList.contains("add-product")) {
         let product = e.target.parentNode.parentNode;
         let name = product.querySelector(".product-title").textContent;
         let price = product.querySelector(".product-line-price").textContent;
         cart.set(name, price);
         sum += Number(price);
         textArea.textContent += `Added ${name} for ${Number(price).toFixed(2)} to the cart.\n`;
      } else {
         let uniqueProducts = [...new Set([...cart.keys()])];
         textArea.textContent += `You bought ${uniqueProducts.join(", ")} for ${sum.toFixed(2)}.`;
         buttons.forEach(button => button.disabled = true);
      }
   }
}