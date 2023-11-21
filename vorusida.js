const mainProductContainer = document.querySelector('#main-product-container');

const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

if (productId){
    fetch(`https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products/${productId}`)
        .then(Response => Response.json())
        .then(product =>{
            displayProductDetails(product);
        })
        .catch(error => console.log(error));

    function displayProductDetails(product) {
        const productMArkup = `
        <h2>${product.title}</h2>
        <img src="${product.image}" alt="${product.title}">
        <p>${product.price}</p>
        <p>${product.category_title}</p>
        <p>${product.description}</p>
        `;
        mainProductContainer.insertAdjacentHTML('beforeend', productMArkup);
    }
}