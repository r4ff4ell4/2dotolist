var express = require('express');
var utenti = express.Router();
var controller = require('./controller.js');

utenti.get('/', controller.getAllUsers);




module.exports = utenti;