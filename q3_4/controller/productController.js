const express = require('express'); 
const path = require('path');
const Product = require('../model/product');
const app = express(); 

app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, "../view")); 

let products = new Product();

app.get("/", (req, res) => {
    res.render("products", {
        products: products.getAll(), 
        // path: '/products'
    });
});

app.get("/product", (req, res) => {
    res.render("shoppingCart", {
        products: products.get(id), 
        // path: '/products'
    });
});

app.post('addToCart', (req, res) => {
    let filteredProducts = [];
    let product = res.redirect(303, '/product');
    filteredProducts.push(product); 
});

app.listen(3000); 
