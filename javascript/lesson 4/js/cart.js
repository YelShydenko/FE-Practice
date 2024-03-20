let products = [];

{
  /* <div class="item">
    <img src="https://m.media-amazon.com/images/I/71p5V8+OnfL._AC_UL320_.jpg" alt="">

    <div class="item__info">
        <h2>GoPro HERO12 Black</h2>
        <p><span class="item__price">$ 349</span></p>

        <div class="item__action">
            <button class="btn">-</button>
            <input type="text" class="form__input">
            <button class="btn">+</button>
        </div>
    </div>

    <button class="btn">X</button>
</div> */
}


function createProductItems() {
  document.querySelector(".cart .content").innerHTML = "";

  products.forEach((item) => {
    let element = document.createElement("div");
    element.classList.add("item");

    let elementImage = document.createElement("img");
    elementImage.src = item.image;

    let elementInfo = document.createElement("div");
    elementInfo.classList.add("item__info");

    let elementTitle = document.createElement("h2");
    elementTitle.innerText = item.title;

    let elementCost = document.createElement("p");

    let elementPrice = document.createElement("span");
    elementPrice.classList.add("item__price");
    elementPrice.innerText = `$${item.price}`;

    elementCost.append(elementPrice);

    let elementAction = document.createElement("div");
    elementAction.classList.add("item__action");

    let elementButtonRemove = document.createElement("button");
    elementButtonRemove.classList.add("btn");
    elementButtonRemove.innerText = "-";
    elementButtonRemove.onclick = () => decrementCartProduct(item.id);

    let elementInput = document.createElement("input");
    elementInput.classList.add("form__input");
    elementInput.value = item.count;

    let elementButtonAdd = document.createElement("button");
    elementButtonAdd.classList.add("btn");
    elementButtonAdd.innerText = "+";
    elementButtonAdd.onclick = () => incrementCartProduct(item.id);

    let elementButtonClose = document.createElement("button");
    elementButtonClose.classList.add("btn");
    elementButtonClose.innerText = "X";

    elementButtonClose.onclick = () => removeFromCart(item.id);

    elementAction.append(elementButtonRemove, elementInput, elementButtonAdd);

    elementInfo.append(elementTitle, elementCost, elementAction);

    element.append(elementImage, elementInfo, elementButtonClose);

    document.querySelector(".cart .content").append(element);
  });

  getWholeSum();
}

function getWholeSum() {
  const confirmPrice = document.querySelector(".confirm__price");

  const sum = products.reduce((acc, curr) => acc + curr.price * curr.count, 0);

  confirmPrice.textContent = `Price: ${sum}$`;
}

function removeFromCart(productId) {
  products = products.filter((item) => item.id !== productId);

  localStorage.setItem("data", JSON.stringify(products));

  createProductItems();
}

function incrementCartProduct(productId) {
  products = products.map((item) => {
    if (item.id === productId) {
      item.count = item.count + 1;
    }

    return item;
  });

  localStorage.setItem("data", JSON.stringify(products));

  createProductItems();
}

function decrementCartProduct(productId) {
  products = products
    .map((item) => {
      if (item.id === productId) {
        item.count = item.count - 1;

        if (item.count <= 0) {
          return null;
        }
      }

      return item;
    })
    .filter((item) => item);

  localStorage.setItem("data", JSON.stringify(products));

  createProductItems();
}

function render() {
  products = JSON.parse(localStorage.getItem("data"));

  createProductItems();
}

render();
