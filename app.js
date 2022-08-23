const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
//const cookieParser = require("cookie-parser");

dotenv.config({ path : './env/.env'});

app.set("view engine", "ejs");

app.use(express.urlencoded({extended:false})); //https://www.geeksforgeeks.org/express-js-express-urlencoded-function/

app.use("/", require("./routes/router")),

//app.use(cookieParser);

app.use(express.static(path.join(__dirname, '/public')));
console.error( "Path de la aplicación: " + path.join(__dirname));

app.listen(5000, ()=>{
    console.log("server corriendo en el puerto 5000");

});