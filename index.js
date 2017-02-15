'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3678;

mongoose.connect('mongodb://192.168.2.10:27017/cursofavoritos', (err, res) => {
	if(err){
		throw err;
	}else{
		console.log('Conexión a MongoDB correcta');
		app.listen(port, function(){
		console.log(`API REST Favoritos funcionando en http://192.168.2.10:${port}`);
		});
	}
});