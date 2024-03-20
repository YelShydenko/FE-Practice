let product = null;
function getProductById(id) {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      product = data;

      console.log(product);
    });
}

function render() {
  let url = new URL(document.location.href);

  let id = url.searchParams.get("id");

  getProductById(id);
}

render();
