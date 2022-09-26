const products = [
    {
        id: 1,
        name: "HP Laptop", 
        price: 400, 
        description: "HP laptop description"   
    },
    {
        id: 2,
        name: "Dell Laptop", 
        price: 500, 
        description: "Dell laptop description"   
    },
    {
        id: 3,
        name: "Macbook Pro", 
        price: 900, 
        description: "Macbook description"   
    },
    {
        id: 4,
        name: "Macbook Air", 
        price: 800, 
        description: "Macbook Air description"   
    },
]; 

module.exports = class Product {
    // constructor(name, price, description, id) {
    //     this.name = name; 
    //     this.price = price;
    //     this.description = description; 
    //     this.id = id; 
    // }

    getAll() {
        return products;
    }

    get(id) {
        return products.filter(p => p.id === id);
    }
}