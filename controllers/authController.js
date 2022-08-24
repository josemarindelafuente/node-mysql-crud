const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const conexion = require('../database/db');
const { promisify } = require('util');
const nodemailer = require('nodemailer');


exports.register = async (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const pass = req.body.pass;
        let passHash = await bcryptjs.hash(pass, 10);

        console.log(name + " - " + email + " - " + passHash);

        conexion.query('INSERT INTO users SET ?', {name: name, email: email, pass: passHash}, (error, results) => {
            if(error) {

                //console.error(error);
                res.render('register', {
                    alert: true,
                    alertMessage: 'Este correo ya existe en nuestra base de datos'
                });

            } else {
                //res.render("/login");




                //create email body
                contentHTML = `
                    <h1>User Information</h1>
                    <ul>
                        <li>Username: ${name} </li>
                        <li>User Email: ${email} </li>
                    </ul>
                `;
                //set email configuration, sender and server
                const transporter = nodemailer.createTransport({
                    host: 'mail.gustabin.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: 'demo@gustabin.com',
                        pass: 'password'
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                });

                //send email                
                /*const info =  transporter.sendMail({
                    from: "'Gustabin Server' <demo@gustabin.com>",
                    to: email,
                    subject: 'Website contact form',
                    html: contentHTML
                });*/


                res.redirect('/login');



            }
        });


    } catch (error) {
        console.error(error);
    }
}


//procedure to login
exports.login = async (req, res)=>{
    try {
        const email = req.body.email
        const pass = req.body.pass        
        if(!email || !pass ){
            res.render('login',{
                alert:true,
                alertTitle: "Warning",
                alertMessage: "Debe ingresar su correo y contrasña",
                alertIcon:'info',
                showConfirmButton: true,
                timer: false,
                ruta: 'login'
            })
        }else{
            conexion.query('SELECT * FROM users WHERE email = ?', [email], async (error, results)=>{
                if( results.length == 0 || ! (await bcryptjs.compare(pass, results[0].pass)) ){
                    res.render('login', {
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "Alguno de los datos ingresados no son correctos",
                        alertIcon:'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'    
                    });
                }else{
                    //login OK
                    const id = results[0].id
                    const token = jwt.sign({id:id}, process.env.JWT_SECRETO, {
                        expiresIn: process.env.JWT_EXPIRATION_TIME
                    });

                    const cookiesOptions = {
                        expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                        httpOnly: true
                    }
                    res.cookie('jwt', token, cookiesOptions);

                    res.render('login', {
                            alert: true,
                            alertTitle: "Successful connection",
                            alertMessage: "¡CORRECT LOGIN!",
                            alertIcon:'success',
                            showConfirmButton: false,
                            timer: 800,
                            ruta: ''
                    });
                }
            })
        }
    } catch (error) {
        console.log(error)
    }
}

exports.logout = (req, res) => {
    console.log("salir");
    res.redirect("/");
};

