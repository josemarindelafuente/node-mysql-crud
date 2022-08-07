const express = require("express");
const router = express.Router();

const conection = require("../database/db");

router.get("/", (req, res)=>{
    //res.send("Hola mundo");
    res.render("index", {nombre: "esto es una variable"});

    conection.query("select * from users", (error, results)=>{
        if (error){
            throw "error: " + error;
        } else {
            res.send(results);
        }
    });

});

router.get("/contacto", (req, res)=>{
    res.send("contacto");
});



module.exports = router;