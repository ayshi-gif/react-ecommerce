// Dummy Product Data for E-Commerce API
// In real e-commerce systems, this would come from a database.
//This format matches the React ProductCard component structure

const products = [
    {
        id: 1,

        // Product name displayed in the card title
        name: "Running Shoes",

        // Product image shown at the top
        image: "https://via.placeholder.com/300",

        // Current discounted price
        price: 1200,

        // Old price (will show as crossed out)
        oldPrice: 1500,

        // Rating out of 5 stars
        rating: 4,

        // Discount badge percentage (optional)
        discount: 20,

        // Product category
        category: "Clothing",
    },

    {
        id: 2,
        name: "Backpack",
        image: "https://via.placeholder.com/300",
        price: 900,
        oldPrice: 1100,
        rating: 5,
        discount: 15,
        category: "Accessories",
    },

    {
        id: 3,
        name: "Smart Watch",
        image: "https://via.placeholder.com/300",
        price: 2500,
        oldPrice: 3000,
        rating: 3,
        discount: 10,
        category: "Electronics",
    },

    {
        id: 4,
        name: "Wireless Headphones",
        image: "https://via.placeholder.com/300",
        price: 1800,
        oldPrice: 2200,
        rating: 4,
        discount: 18,
        category: "Electronics",
    },

    {
        id: 5,
        name: "Laptop Bag",
        image: "https://via.placeholder.com/300",
        price: 1400,
        oldPrice: 1700,
        rating: 5,
        discount: 12,
        category: "Accessories",
    },
];

module.exports = products;