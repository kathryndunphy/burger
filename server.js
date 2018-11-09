var express = require("express");

var app = express();

//process.env.PORT allows Heroku to set port
var PORT = process.env.PORT || 8080;

//middleware for static content from the public directory for app
app.use(express.static("public"));

//setup for express to handle data parsing as JSON for app body
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

var exphbs = require("express-handlebars");

//set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes and give access to the server
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//start server to listen to client requests
app.listen(PORT, function(){
    //log server-side when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

// var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root"
//     password: "",
//     database: "burger_db" 
// });

// connection.connect(function(err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });

