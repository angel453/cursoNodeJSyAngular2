'use strict'

function prueba(req, res){

	if(req.params.nombre){
		var nombre = req.params.nombre;
	}else{
		var nombre = 'sin nombre';	
	}
	
	res.status(200).send({
		data: [2,3,4],
		texto: "Hola mundo con NodeJS y Express - " +nombre
	});

}

function getFavorito(req, res){
	var favoritoId = req.params.id;

	res.status(200).send({data: favoritoId});
}

function getFavoritos(req, res){


}

function saveFavorito(req, res){
	var params = req.body;

	res.status(200).send({favorito: params});

}

function updateFavorito(req, res){
	var params = req.body;

	res.status(200).send({favorito: params});
}

function deleteFavorito(req, res){
	var favoritoId = req.params.id;

	res.status(200).send({data: favoritoId});
}

module.exports = {
	prueba,
	getFavorito,
	getFavoritos,
	saveFavorito,
	updateFavorito,
	deleteFavorito
}