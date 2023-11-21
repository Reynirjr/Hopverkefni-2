fetch('https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products?limit=6')
    .then(Response => {
        return Response.json();
})
.then(data => {
    const productContainer = document.querySelector('#vorurnar');
    productContainer.innerHTML = '';

    data.items.forEach(product => {
        const markup = `
            <li>
                <img src="${product.image}" alt="${product.title}" style="max-width: 250px; height: auto;">
                <div>
                    <h3>${product.title}</h3>
                    <p>${product.category_title}</p>
                    <p>Price: $${product.price}</p>
                </div>
            </li>`;

        productContainer.insertAdjacentHTML('beforeend', markup);
    });
})
.catch(error => console.log(error));
fetch('https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/categories')
    .then(Response => {
        return Response.json();
})
    .then(data => {
        const categoryContainer = document.querySelector('#voruflokkar');
        categoryContainer.innerHTML = ''; 

        data.items.forEach(category => {
            const markup = `
            <li>
                ${category.title}
            </li>`;

            categoryContainer.insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => console.log(error));



    
