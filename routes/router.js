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



router.get("/create", (req, res)=>{
    res.render("create")
});

const userController = require("../controllers/userController");
router.post("/save" , userController.save);

router.post("/update" , userController.update);


router.get("/edit/:id", (req, res)=>{
    const id = req.params.id;
    conection.query("SELECT * FROM users WHERE id= ? ", [id], (error, results)=>{

        if (error){
            throw "error: " + error;
        } else {
            //res.send(results);
            res.render("edit", { user: results[0] } );
        }

    })
    //res.render("edit");
});

router.get("/delete/:id", (req, res) => {
    const id = req.params.id;
    conection.query("DELETE FROM users WHERE id= ?" , [id], (error, results)=>{

        if (error){
            throw "error: " + error;
        } else {
            //res.send(results);
            res.redirect("/" );
        }

    });
});

module.exports = router;