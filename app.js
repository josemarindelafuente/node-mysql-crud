const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({extended:false}));

// import from router
app.use("/", require("./routes/router")),


app.listen(5000, ()=>{
    console.log("server corriendo en el puerto 5000");
});