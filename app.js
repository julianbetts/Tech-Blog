const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();

// Set up Handlebars as the templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set up the views directory
app.set("views", path.join(__dirname, "views"));

// Example route
app.get("/", (req, res) => {
    res.render("home", {
        title: "Welcome to my blog",
        message: "Hello, world!"
    });
});

// Start the server
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});