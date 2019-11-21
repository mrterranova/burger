//import appropriate files
var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

//call express using a variable
var app = express();

//PORT is on 7050
var PORT = process.env.PORT || 7050;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

//use handlebars to show front-end
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//listen to the port and return the port located on
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
