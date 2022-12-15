const express = require('express');

const { PORT } = require('./config/serverConfig'); 

const setupAndStartServer = async () => {

	// Create the express object
	const app = express();

	app.listen(PORT, () => {
		console.log(`Server is up and Running on port ${PORT}`);
	});
}

setupAndStartServer();