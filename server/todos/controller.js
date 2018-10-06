//scrivo la parte logica dei metodi di todos.js
module.exports = (function(){

	var getAll =  function(req, res){
		res.send('tutti i todos');
	};

	var getOne =  function(req, res){
	res.send('un todo con id'+ req.params.id);

	};

	var create = function(req, res){
	res.json(req.body);

	};

	var update = function(req, res){
	res.json([req.params.id, req.body]);

	};

	var deleteOne = function(req, res){
	res.json(req.params.id);

	};

	return{

		getAll,
		getOne,
		create,
		update,
		deleteOne


	}
// () parantesi per eseguire la funzione. 
//Si può fare qui dopo la function di module.exports = (function(){...})();
//oppure nel file todos.js sulla variabile var controller = require('./controller.js')(); aggiungendole alla fine 
//oppure in una riga successiva richiamando l'esecuzione della funzione con  controller();
// in qualsiasi caso funziona è una scelta stilistica	
})();