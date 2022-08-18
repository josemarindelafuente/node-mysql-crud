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
            res.render("users", { results: results} );
        }
    });

});



router.get("/createUser", (req, res)=>{
    res.render("createUser")
});

const userController = require("../controllers/userController");
router.post("/saveUser" , userController.saveUser);


router.post("/updateUser" , userController.updateUser);


router.get("/editUser/:id", (req, res)=>{
    const id = req.params.id;
    conection.query("SELECT * FROM users WHERE id= ? ", [id], (error, results)=>{

        if (error){
            throw "error: " + error;
        } else {
            //res.send(results);
            res.render("editUser", { user: results[0] } );
        }

    })
    //res.render("edit");
});

router.get("/deleteUser/:id", (req, res) => {
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