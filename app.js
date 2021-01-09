const express = require('express');
const data = require('./api/data.json');
const dataFrettir = require('./api/frettabladid-frettir.json');
const dataLifid = require('./api/frettabladid-lifid.json');
const dataSport = require('./api/frettabladid-sport.json');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('pages/index', {
		style: 'home',
		title: 'hihihi',
		data: data,
	});
});

app.get('/sport', (req, res) => {
	res.render('pages/sport', {
		data: dataSport,
	});
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
