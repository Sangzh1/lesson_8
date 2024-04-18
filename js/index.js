document.addEventListener('DOMContentLoaded', function() {
     const productForm = document.getElementById('productForm');
     const productList = document.getElementById('productList');
 
     productForm.addEventListener('submit', function(event) {
         event.preventDefault();

         const imgLink = document.getElementById('imgLink').value;
         const name = document.getElementById('name').value;
         const price = document.getElementById('price').value;
         const speed = document.getElementById('speed').value;
         const color = document.getElementById('color').value;
 
         const product = {
             imgLink: imgLink,
             name: name,
             price: price,
             speed: speed,
             color: color
         };
 
         let products = JSON.parse(localStorage.getItem('products')) || [];
         products.push(product);
         localStorage.setItem('products', JSON.stringify(products));
 
         displayProduct(product);
 
         productForm.reset();
     });
 
     let products = JSON.parse(localStorage.getItem('products')) || [];
     products.forEach(product => {
         displayProduct(product);
     });
 
     function displayProduct(product) {
         const li = document.createElement('li');
         li.innerHTML = `
         <img src="${product.imgLink}" alt="${product.name}" width="100"><br><br>
             <strong>Name:</strong> ${product.name}<br>
             <strong>Price:</strong> ${product.price}<br>
             <strong>Speed:</strong> ${product.speed}<br>
             <strong>Color:</strong> ${product.color}<br>
             <button onclick="deleteProduct('${product.name}')">Delete</button>
         `;
         productList.appendChild(li);
     }
 
     window.deleteProduct = function(name) {
         let products = JSON.parse(localStorage.getItem('products')) || [];
         products = products.filter(product => product.name !== name);
         localStorage.setItem('products', JSON.stringify(products));
         location.reload(); 
     };
 });
 