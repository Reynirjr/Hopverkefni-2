fetch('https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products')
    .then(Response => {
        return Response.json();
})
    .then(data => {
            data.items.forEach(product => {
                const productMarkup = `
                <a href="./vorusida.html?id=${product.id}">
                <h2>${product.title}</h2>
                <img src="${product.image}" alt="${product.title}">
                <p>Flokkur: ${product.category_title}</p>
                <p>Verð: ${product.price}</p>
                `;
            document.querySelector('#vorurnar').insertAdjacentHTML("beforeend", productMarkup);
            })
        })
