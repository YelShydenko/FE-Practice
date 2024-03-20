let products = [
    {
        id: 1,
        title: "GoPro HERO12 Black",
        image: "https://m.media-amazon.com/images/I/71p5V8+OnfL._AC_UL320_.jpg",
        price: 349,
        discount: 20,
    },
    {
        id: 2,
        title: "TP-Link Tapo 1080P",
        image: "https://m.media-amazon.com/images/I/61gJcez9unL._AC_UL320_.jpg",
        price: 17,
        discount: 0,
    },
    {
        id: 3,
        title: "KODAK PIXPRO WPZ2",
        image: "https://m.media-amazon.com/images/I/5186bjryKaL._AC_UL320_.jpg",
        price: 149,
        discount: 10,
    },
    {
        id: 4,
        title: "WYZE 2K HDR Wireless",
        image: "https://m.media-amazon.com/images/I/61ixGPWFxlL._AC_UL320_.jpg",
        price: 76,
        discount: 25,
    },
    {
        id: 5,
        title: "Arlo Essential Spotlight",
        image: "https://m.media-amazon.com/images/I/61vjkXGNuQL._AC_UL320_.jpg",
        price: 176,
        discount: 0,
    },
    {
        id: 6,
        title: "WYZE 2K HDR Wireless",
        image: "https://m.media-amazon.com/images/I/5186bjryKaL._AC_UL320_.jpg",
        price: 500,
        discount: 0,
    }
];


{/* <div class="item">
    <img src="https://m.media-amazon.com/images/I/71p5V8+OnfL._AC_UL320_.jpg" alt="">
    <h2>GoPro HERO12 Black</h2>
    <p><span class="after">$349</span><span class="before">$245</span></p>

    <button class="btn">ADD TO CART</button>
</div> */}

function createProductItems(){
    products.forEach(item => {
        let element = document.createElement("div");
        element.classList.add("item");

        let elementImage = document.createElement("img");
        elementImage.src = item.image;

        let elementTitle = document.createElement("h2");
        elementTitle.innerText = item.title;

        let elementCost = document.createElement("p"); // <p></p>

        let elementPrice = document.createElement("span");// <span></span>
        elementPrice.classList.add("item__price") // <span class="item__price"> </span>
        elementPrice.innerText = `$${item.price}`; // <span class="item__price">490</span>

        elementCost.append(elementPrice);// // <p><span class="item__price">490</span></p>

        let elementButton = document.createElement("button");
        elementButton.classList.add("btn")
        elementButton.innerText = "ADD TO CART";

        elementButton.onclick = () => addToCart(item.id)

        element.append(elementImage, elementTitle, elementCost, elementButton);

        document.querySelector(".products").append(element)
        // console.log(element, elementImage, elementTitle, elementPrice);
    })
}

function addToCart(productId){
    console.log(productId);
}

createProductItems();