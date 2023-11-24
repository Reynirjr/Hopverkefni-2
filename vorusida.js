const adalVoruBox = document.querySelector('#adal-Vara');
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

           
            return fetch(`https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products?limit=3&category=${product.category_id}`)
                .then(response => response.json())
                .then(data => {
                    return { similarProducts: data.items, categoryTitle: product.category_title };
                });
        })
        .then(({ similarProducts, categoryTitle }) => {
            displayProducts(similarProducts, 'likar-vorur', categoryTitle); 
        })
        .catch(error => console.log(error));
        
}

function displayProductDetails(product) {
    const productMarkup = `
    <h2>${product.title}</h2>
    <img src="${product.image}" alt="${product.title}">
    <a href="./flokkasida.html?id=${product.category_id}">
    <p>Flokkur: ${product.category_title}</p>
    </a>
    <p>Verð: ${product.price}</p>
    <p>${product.description}</p>
    `;
    adalVoruBox.innerHTML = productMarkup;
}


function displayProducts(products, containerId, categoryTitle) {
    const titleElement = document.createElement('h3');
    titleElement.textContent = `Meira úr: ${categoryTitle}`;

    const container = document.getElementById(containerId);

    container.innerHTML = '';
    container.before(titleElement);
    let productsMarkup ='';

    products.forEach(product => {
        productsMarkup += `
        <div class="box">
        <a href="./vorusida.html?id=${product.id}">
            <img src="${product.image}" alt="${product.title}" style="max-width: 100px;"> 
            <h3>${product.title}</h3>
        </a>
        <p>
            <a href="./flokkasida.html?id=${product.category_id}">${product.category_title}</a>
        </p>
        <p>
            <a href="./vorusida.html?id=${product.id}">${product.price} kr.-</a>
        </p>
    </div>
            `;
    });

    container.innerHTML = productsMarkup;
}