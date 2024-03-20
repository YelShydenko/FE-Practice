let products = [];

function getProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      products = data;

      createProductItems();
    });
}

getProducts();

function createProductItems(data = products) {
  document.querySelector(".products").innerHTML = "";

  data.forEach((item) => {
    let element = document.createElement("div");
    element.classList.add("item");

    let elementImage = document.createElement("img");
    elementImage.src = item.image;

    let elementTitle = document.createElement("a");
    elementTitle.href = `single.html?id=${item.id}`;
    elementTitle.innerText = item.title;

    let elementCost = document.createElement("p"); // <p></p>

    let elementPrice = document.createElement("span"); // <span></span>
    elementPrice.classList.add("item__price"); // <span class="item__price"> </span>
    elementPrice.innerText = `$${item.price}`; // <span class="item__price">490</span>

    elementCost.append(elementPrice); // // <p><span class="item__price">490</span></p>

    let elementButton = document.createElement("button");
    elementButton.classList.add("btn");

    let checkLocal = JSON.parse(localStorage.getItem("data"));

    let foundProduct =
      checkLocal && checkLocal.find((elm) => elm.id === item.id);

    elementButton.innerText = `ADD TO CART ${foundProduct?.count || ""}`;

    elementButton.onclick = () => addToCart(item.id, elementButton);

    element.append(elementImage, elementTitle, elementCost, elementButton);

    document.querySelector(".products").append(element);
  });
}

function addToCart(productId, elementButton) {
  let productItems = localStorage.getItem("data");

  let currentProduct = products.find((item) => item.id === productId);

  if (productItems) {
    productItems = JSON.parse(productItems);

    let checkProduct = productItems.find((item) => item.id === productId);

    if (checkProduct) {
      productItems = productItems.map((item) => {
        if (item.id === productId) {
          item.count = item.count + 1;

          elementButton.innerText = `ADD TO CART ${item.count || ""}`;
        }

        return item;
      });

      localStorage.setItem("data", JSON.stringify(productItems));
    } else {
      currentProduct.count = 1;

      productItems.push(currentProduct);
      elementButton.innerText = `ADD TO CART ${currentProduct.count || ""}`;
      localStorage.setItem("data", JSON.stringify(productItems));
    }
  } else {
    currentProduct.count = 1;
    elementButton.innerText = `ADD TO CART ${currentProduct.count || ""}`;
    localStorage.setItem("data", JSON.stringify([currentProduct]));
  }
}

function handlerChange(e) {
  let filteredData = products.filter(
    (item) =>
      item.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
  );

  createProductItems(filteredData);
}

document.querySelector(".search__input").onkeyup = handlerChange;
