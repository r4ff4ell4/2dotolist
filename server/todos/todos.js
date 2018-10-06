//risorsa
//in questo file ci sono solo le rotte i metodi(function()) sono in controller.js
var express = require('express');

//
var controller = require('./controller.js');

 //1 creo router todos
var todos =express.Router();
 
//visualizzo l'intera lista
todos.get('/', controller.getAll);

//visualizzo dettaglio
todos.get('/:id', controller.getOne);

//aggiungo un todo
todos.post('/', controller.create);

//modifico un todo
todos.put('/:id', controller.update);

//cancello un todo
todos.delete('/:id', controller.deleteOne);


//2 esporto il router con le sue rotte (continua su router.js)
module.exports = todos;