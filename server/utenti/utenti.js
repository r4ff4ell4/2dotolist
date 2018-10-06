var express = require('express');
var utenti = express.Router();

utenti.get('/', function(req, res){
	res.send('tutti gli utenti');
});




module.exports = utenti;