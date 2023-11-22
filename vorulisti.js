fetch('https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products')
    .then(Response => {
        return Response.json();
})
    .then(data => {
        const categoryContainer = document.querySelector('#vorur');
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