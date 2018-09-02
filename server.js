/*
 * @Author: Anwar-ul-haq 
 * @Date: 2018-09-02 22:25:00 
 * @Last Modified by: Anwar
 * @Last Modified time: 2018-09-02 22:50:50
 */
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const http = require('http');
const container = require('./container');

container.resolve(function(users){
	const app = SetupExpress();

	function SetupExpress(){
		const app = express();
		const server = http.createServer(app);
		server.listen(3000 , function(){
			console.log('Server Started At 3000');
		});

		ConfigureExpress(app);

		// Setup Router
		const router = require('express-promise-router')();
		users.SetRouting(router);
		app.use(router);
	}
	
	function ConfigureExpress(app){
		app.use(express.static('public'));
		app.set('view engine' , 'ejs');
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({extended:true}));
	}
});