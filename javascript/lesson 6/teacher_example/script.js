let URL = "https://randomuser.me/api/?results=10";

let state = {
  data: [],
};

const fetchAll = async (url) => {
  try {
    let response = await fetch(url);
    let { results } = await response.json();

    return results;
  } catch (err) {
    console.log("Данные не загрузились!");
  }
};

const createElements = (data) => {
  let content = document.querySelector(".contact__content");

  content.innerHTML = "";

  data &&
    data.forEach((item) => {
      let itemElement = document.createElement("div");
      itemElement.classList.add("item");

      let imgElement = document.createElement("img");
      imgElement.src = item.picture.medium;

      let infoElement = document.createElement("div");

      let titleElement = document.createElement("h2");
      titleElement.innerText = `${item.name.first} ${item.name.last}`;

      let phoneElement = document.createElement("p");
      phoneElement.innerText = item.phone;

      infoElement.append(titleElement, phoneElement);

      itemElement.append(imgElement, infoElement);

      content.append(itemElement);
    });
};

const handlerInput = (e) => {
  let filteredData = state.data.filter(
    (item) =>
      item.name.first.toLowerCase().indexOf(e.target.value.toLowerCase()) !==
        -1 ||
      item.name.last.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
  );

  createElements(filteredData);
};

const render = async () => {
  state.data = await fetchAll(URL);
  document
    .querySelector(".contact__header input")
    .addEventListener("keyup", handlerInput);

  createElements(state.data);
};

render();
