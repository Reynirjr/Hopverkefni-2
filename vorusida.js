const mainProductContainer = document.querySelector('#main-product-container');
const similarProductsContainer = document.createElement('div');
similarProductsContainer.id = 'similar-products-container';
document.querySelector('main').appendChild(similarProductsContainer);

const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

if (productId) {
    fetch(`https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            displayProductDetails(product);

           
            return fetch(`https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products?limit=3&category=${product.category_id}&exclude=${product.id}`);
        })
        .then(response => response.json())
        .then(data => {
            displaySimilarProducts(data.items); 
        })
        .catch(error => console.log(error));
}

function displayProductDetails(product) {
    const productMarkup = `
    <h2>${product.title}</h2>
    <img src="${product.image}" alt="${product.title}">
    <p>Price: ${product.price}</p>
    <p>Category: ${product.category_title}</p>
    <p>${product.description}</p>
    `;
    mainProductContainer.innerHTML = productMarkup;
}

function displaySimilarProducts(similarProducts) {
    let similarProductsMarkup = '<h3>Sjá líka:</h3>';

    similarProducts.forEach(product => {
        similarProductsMarkup += `
        <div> 
            <img src="${product.image}" alt="${product.title}"> 
            <p>${product.title}</p>
            <p>Price: ${product.price}</p>
        </div>`;
    });

    similarProductsContainer.innerHTML = similarProductsMarkup;
}