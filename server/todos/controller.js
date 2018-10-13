//scrivo la parte logica dei metodi di todos.js
var Todo = require('./TodosModel.js');
module.exports = (function(){

	var getAll =  function(req, res){
		//res.send('tutti i todos');
		Todo.find().then(function(data){
			res.json(data)
		})
		    .catch(function(err){
		    	res.json(err);
		    });
		};

	var getOne =  function(req, res){
	//res.send('un todo con id'+ req.params.id);
	Todo.findById(req.params.id)
		.then(function(data){
		    	res.json(data);
		    },function(data){
		    	res.json(data);
		    })
		.catch(function(err){
		    	res.json(err);
		    });

	};

	var create = function(req, res){
		var nuovo = req.body;
		var todo = new Todo(nuovo);
		todo.save()
		    .then(function(data){
		    	res.json(data);
		    },function(data){
		    	res.json(data);
		    })
		    .catch(function(err){
		    	res.json(err);
		    });
	//res.json(req.body);

	};

	var update = function(req, res){
	//res.json([req.params.id, req.body]);
	Todo.findByIdAndUpdate(req.params.id, req.body)
		.then(function(data){
		    	res.json(data);
		    },function(data){
		    	res.json(data);
		    })
		.catch(function(err){
		    	res.json(err);
		    });

	};

	var deleteOne = function(req, res){
	//res.json(req.params.id);
	Todo.findByIdAndRemove(req.params.id)
		.then(function(data){
		    	res.json(data);
		    },function(data){
		    	res.json(data);
		    })
		.catch(function(err){
		    	res.json(err);
		    });


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