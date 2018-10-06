module.exports = (function(){

	var getAllUsers = function(req, res){
	res.send('tutti gli utenti');
	};

	var crea = function(req, res){
		res.json(req.body);
	};



	return{
		getAllUsers,
		crea

	}



})();