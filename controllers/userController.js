const conection = require("../database/db");

exports.save = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const rol = req.body.roles;

    // usando destructuring
    //const {name, email, rol} = req.body; 

    console.log("El registro se guardó correctamente " + name + " " + email + " " + rol) ;
    
    conection.query("INSERT INTO users SET ? ", {name: name, email:email, rol: rol}, (error, results) =>{
        if (error) {
            console.error("no se puedo agregar el registro a la base de datos: " + error);
        } else {
            res.redirect("/")
        }
    } );
}

exports.update =  ( req, res ) => {
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const rol = req.body.roles;

    conection.query("UPDATE users SET ? where id= ? ", [ {name:name , email:email, rol:rol} , id ] , (error, results)=>{

        if (error) {
            console.error("no se puedo agregar el registro a la base de datos: " + error);
        } else {
            res.redirect("/");
        }

    });

};