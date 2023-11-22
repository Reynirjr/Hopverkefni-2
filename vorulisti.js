fetch('https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products')
    .then(Response => {
        return Response.json();
})
    .then(data => {
        const products = [/* your list of products */];
const itemsPerPage = 10;
const pages = Math.ceil(products.length / itemsPerPage);

for (let i = 0; i < pages; i++) {
  const start = i * itemsPerPage;
  const end = start + itemsPerPage;
  const page = products.slice(start, end);

  // Display the products on the current page
  console.log(`Page ${i + 1}:`, page);
}
        });
    
    .catch(error => console.log(error));