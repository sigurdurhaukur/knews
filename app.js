const { json } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const _data = require('./api/data.json');
const data = JSON.stringify(_data);
const authRoutes = require('./routes/authRoutes');
// const dataFrettir = require('./api/frettabladid-frettir.json');
// const dataLifid = require('./api/frettabladid-lifid.json');
// const dataSport = require('./api/frettabladid-sport.json');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(cookieParser());

const dbURI =
	'mongodb+srv://admin:admin1234@cluster0.frtfl.mongodb.net/knews?retryWrites=true&w=majority';
mongoose
	.connect(dbURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then((result) => {
		app.listen(port);
		console.log(
			'connected to database \n' +
				'starting on link http://localhost:' +
				port +
				'\n'
		);
	})
	.catch((err) => console.log(err));

app.get('*', checkUser);
app.get('/', (req, res) => {
	res.render('pages/index', {
		style: 'home',
		title: 'hihihi',
		data: data,
	});
});

app.get('/sport', (req, res) => {
	res.render('pages/sport', {
		// data: dataSport,
	});
});

app.get('/smoothies', requireAuth, (req, res) => res.send('smoothies'));

// app.listen(port, () => {
// 	console.log(`Example app listening at http://localhost:${port}`);
// });

app.use(authRoutes);
