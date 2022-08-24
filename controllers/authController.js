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
                const info =  transporter.sendMail({
                    from: "'Gustabin Server' <demo@gustabin.com>",
                    to: email,
                    subject: 'Website contact form',
                    html: contentHTML
                });


                res.redirect('/');


                
            }
        });


    } catch (error) {
        console.error(error);
    }
}


exports.logout = (req, res) => {
    console.log("salir");
    res.redirect("/");
};

