const express = require("express");
const router = express.Router()

//to invoke the methods for the CRUD of users
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')
//const { Router } = require('express')


//path to send the data in json format
//const { json } = require('express');

//Invoke the database connection
const conection = require('../database/db')






router.get("/" , authController.isAuthenticated , (req, res) =>{
 res.render("index");
});

router.get("/users", (req, res)=>{
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
            res.redirect("/users" );
        }

    });
});

router.get("/login" , (req, res)=>{
    res.render("login" , {alert:false});
})

router.post("/login", authController.login);

router.get("/register" , (req, res) => {
    res.render("register" , { alert:false });
});

router.post("/register", authController.register);

router.get("/logout", authController.logout);




module.exports = router;