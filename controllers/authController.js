const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const conexion = require('../database/db');

exports.logout = (req, res) => {
    console.log("salir");
    res.redirect("/");
};

