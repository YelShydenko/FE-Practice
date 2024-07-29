const express = require("express");
const app = express();
const port = 3000;

const products = [
  {
    id: "1",
    title: "Spiced Mint",
    price: 9.99,
    sale: 0,
    image: "./images/products/product-1.png",
  },
  {
    id: "2",
    title: "Sweet Straweberry",
    price: 9.99,
    sale: 0,
    image: "./images/products/product-2.png",
  },
  {
    id: "3",
    title: "Cool Blueberries",
    price: 9.99,
    sale: 0,
    image: "./images/products/product-3.png",
  },
  {
    id: "4",
    title: "Juicy Lemon",
    price: 9.99,
    sale: 0,
    image: "./images/products/product-4.png",
  },
  {
    id: "5",
    title: "Product name",
    price: 9.99,
    sale: 0,
    image: "./images/products/product-5.png",
  },
  {
    id: "6",
    title: "Fragrant Cinnamon",
    price: 9.99,
    sale: 0,
    image: "./images/products/product-6.png",
  },
  {
    id: "7",
    title: "Summer Cherries",
    price: 9.99,
    sale: 0,
    image: "./images/products/product-7.png",
  },
  {
    id: "8",
    title: "Clean Lavander",
    price: 9.99,
    sale: 0,
    image: "./images/products/product-8.png",
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const productId = req.params.id;

  const product = products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Product not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
