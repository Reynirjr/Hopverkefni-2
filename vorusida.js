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
            displayLikarVorur(similarProducts , categoryTitle); 
        })
        .catch(error => console.log(error));
}

function displayProductDetails(product) {
    const productMarkup = `
    <h2>${product.title}</h2>
    <img src="${product.image}" alt="${product.title}">
    <p>Verð: ${product.price}</p>
    <p>Flokkur: ${product.category_title}</p>
    <p>${product.description}</p>
    `;
    adalVoruBox.innerHTML = productMarkup;
}

function displayLikarVorur(similarProducts, categoryTitle) {
    let likarVorurMarkup = `<h3>Meira úr: ${categoryTitle}</h3>`;

    similarProducts.forEach(product => {
        likarVorurMarkup += `
        <a href="./vorusida.html?id=${product.id}">
        <div> 
            <img src="${product.image}" alt="${product.title}"> 
            <p>${product.title}</p>
            <p>Verð: ${product.price}</p>
        </div>
        </a>`;
    });

    document.getElementById('likar-vorur').innerHTML = likarVorurMarkup;
}