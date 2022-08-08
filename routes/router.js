const express = require("express");
const router = express.Router();

const conection = require("../database/db");



router.get("/", (req, res)=>{
    //res.send("Hola mundo");
    conection.query("select * from users", (error, results)=>{
        if (error){
            throw "error: " + error;
        } else {
            //res.send(results);
            res.render("index", { results: results} );
        }
    });

});





module.exports = router;