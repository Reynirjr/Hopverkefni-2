fetch('https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products')
    .then(Response => {
        return Response.json();
})
    .then(data => {
            data.items.forEach(product => {
                const productMarkup = `
                <div class="boxy">
                <a href="./vorusida.html?id=${product.id}">
                <h2>${product.title}</h2>
                <img src="${product.image}" alt="${product.title}">
                </a>
                <a href="./flokkasida.html?id=${product.category_id}">
                <p>Flokkur: ${product.category_title}</p>
                </a>
                <p>Verð: ${product.price}</p>
                </div>
                `;
            document.querySelector('#vorurnar').insertAdjacentHTML("beforeend", productMarkup);
            })
        })
