var path = require('path');
var bodyparse = require('body-parser');
module.exports = function (express, app){
	//usa body-parser
	app.use(bodyparse.json());

	//3 recupero il roter totos
	var todos = require('../todos/todos.js');

	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
	});

	//4 utilizzo il router todos per tutte le rotte a partire da '/todos'
	app.use('/todos', todos);


}