const quotes = require("./quotes.json");

const randomIndex = Math.floor(Math.random() * quotes.length);

console.log(quotes[randomIndex]);