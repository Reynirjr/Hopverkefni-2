fetch('https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products?limit=6')
    .then(Response => {
        return Response.json();
})
.then(data => {
    data.items.forEach(product => {
        const markup = `
            <li>
                <img src="${product.image}" alt="${product.title}" style="max-width: 100px; height: auto;">
                <div>
                    <h3>${product.title}</h3>
                    <p>${product.category_title}</p>
                    <p>Price: $${product.price}</p>
                </div>
            </li>`;

        document.querySelector('#voruflokkar').insertAdjacentHTML('beforeend', markup);
    });
})
.catch(error => console.log(error));
    
