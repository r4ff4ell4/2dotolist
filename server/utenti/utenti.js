var express = require('express');

var utenti = express.Router();

var controller = require('./controller.js');

//visualizza tutti gli utenti
utenti.get('/', controller.getAllUsers);
//crea un utente
utenti.post('/', controller.crea);

//visualizza un utente

//modifica un utente

//cancella un utente




module.exports = utenti;