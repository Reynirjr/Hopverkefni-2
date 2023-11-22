const mainProductContainer = document.querySelector('#main-product-container');
const likarVorur = document.createElement('div');
likarVorur.id = 'likar-vorur';
document.querySelector('main').appendChild(likarVorur);

const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

if (productId) {
    fetch(`https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            displayProductDetails(product);

           
            return fetch(`https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products?limit=3&category=${product.category_id}`);
        })
        .then(response => response.json())
        .then(data => {
            displayLikarVorur(data.items); 
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

function displayLikarVorur(similarProducts) {
    let likarVorurMarkup = '<h3>Sjá líka:</h3>';

    similarProducts.forEach(product => {
        likarVorurMarkup += `
        <div> 
            <img src="${product.image}" alt="${product.title}"> 
            <p>${product.title}</p>
            <p>Price: ${product.price}</p>
        </div>`;
    });

    document.getElementById('likar-vorur').innerHTML = likarVorurMarkup;
}