fetch('https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products?limit=6')
    .then(Response => {
        return Response.json();
})
.then(data => {
    const productContainer = document.querySelector('#nyjar-vorur');
    productContainer.innerHTML = '';

    data.items.forEach(product => {
        const markup = `
        <div class="boxy">
            <li>
                <a href="./sidur/vorusida.html?id=${product.id}">
                <img src="${product.image}" alt="${product.title}">
                
                    <h3>${product.title}</h3>
                </a>
                <a href="./sidur/flokkasida.html?id=${product.category_id}">
                    <p>${product.category_title}</p>
                </a>
                    <p>Verð: $${product.price}</p>
               
                
            </li>
            </div>`;
        
        productContainer.insertAdjacentHTML('beforeend', markup);
    });
})
.catch(error => console.log(error));
fetch('https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/categories')
    .then(Response => {
        return Response.json();
})
    .then(data => {
        const categoryContainer = document.querySelector('#voru-flokkar');
        categoryContainer.innerHTML = ''; 

        data.items.forEach(category => {
            const markup = `
            <a href="./sidur/flokkasida.html?id=${category.id}">
            <li>
                ${category.title}
            </li>`;

            categoryContainer.insertAdjacentHTML('beforeend', markup);
        });
    })
    .catch(error => console.log(error));



    
