const express = require("express");
const app = express();
const path =require("path");

app.set("view engine", "ejs");

app.use(express.urlencoded({extended:false}));

// import from router
app.use("/", require("./routes/router")),

app.use(express.static(path.join(__dirname, '/public')));

app.listen(5000, ()=>{
    console.log("server corriendo en el puerto 5000");
});