const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

// get all parcels
/**/

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Tune in to port: ${port} on Localhost or IP:127.0.0.1`);
});


module.exports = app;