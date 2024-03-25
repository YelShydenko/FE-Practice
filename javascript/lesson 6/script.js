async function fetchApiRandomPeople() {
  const url = `https://randomuser.me/api/?results=10`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    const people = data.results;
    console.log(people);

    createContactCard(people);
  } catch (error) {
    console.error("Problem with fetch: ", error);
  }
}
fetchApiRandomPeople();

/* <div class="contact__card">
            <div class="img__container">
               <img src="" alt="">
            </div>
            <div class="contact__info">
               <p>User name: <span id="nameTitle"></span><span id="nameFirst"></span><span id="nameLast"></span></p>
               <p>User phonenumber: 1234567890</p>
            </div>
         </div> */

function createContactCard(people) {
  document.querySelector(".contacts").innerHTML = "";

  people.forEach((elem) => {
    // console.log(element);
    const contactCard = document.createElement("div");
    contactCard.classList.add("contact__card");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img__container");

    const contactImg = document.createElement("img");
    contactImg.setAttribute("src", elem.picture.large);
    contactImg.classList.add("img__container");

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact__info");

    const contactName = document.createElement("p");
    contactName.textContent = `Name: ${elem.name.first} ${elem.name.last}`;

    const contactPhone = document.createElement("p");
    contactPhone.textContent = `Phone: ${elem.phone}`;

    const contactEmail = document.createElement("p");
    contactEmail.textContent = `Email: ${elem.email}`;

    const contacts = document.querySelector(".contacts");

    imgContainer.append(contactImg);
    contactInfo.append(contactName, contactPhone, contactEmail);
    contactCard.append(imgContainer, contactInfo);
    contacts.append(contactCard);
  });
}
