const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig'); 

const setupAndStartServer = async () => {

	// Create the express object
	const app = express();

	// Middlewares
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended:true}));

	app.listen(PORT, () => {
		console.log(`Server is up and Running on port ${PORT}`);
	});
}

setupAndStartServer();