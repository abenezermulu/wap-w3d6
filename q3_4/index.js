const express = require('express'); 
const path = require('path');
const app = express(); 

app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, "../view")); 


app.get("/", (req, res) => {
    res.redirect(303, '/products');
});

app.post('addToCart', (req, res) => {
    
});

app.listen(3000); 
