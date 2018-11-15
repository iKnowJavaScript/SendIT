import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Tune in to port: ${port} on Localhost or IP:127.0.0.1`);
});


export default app;