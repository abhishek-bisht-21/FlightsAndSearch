const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index'); 

const setupAndStartServer = async () => {

	// Create the express object
	const app = express();

	// Middlewares
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended:true}));

	app.use('/api', ApiRoutes);

	app.listen(PORT, () => {
		console.log(`Server is up and Running on port ${PORT}`);
	});
}

setupAndStartServer();