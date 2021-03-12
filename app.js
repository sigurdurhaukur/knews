const { json } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const dotenv = require('dotenv');
dotenv.config();

const data = require('./api/data.json');
// const data = JSON.parse(_data);
const indexRoutes = require('./routes/indexRoutes');
const authRoutes = require('./routes/authRoutes');
const settingsRoutes = require('./routes/settingsRoutes');
const viewsRoutes = require('./routes/viewsRoutes');
// const dataFrettir = require('./api/frettabladid-frettir.json');
// const dataLifid = require('./api/frettabladid-lifid.json');
// const dataSport = require('./api/frettabladid-sport.json');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(cookieParser());

const dbURI = process.env.API_URI;
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

app.get('/article/:id', (req, res) => {
	// let news = req.params;
	let id = req.params;

	// let filter = id;

	// iterate over each element in the array
	// for (i = 0; i < data.length; i++) {
	// 	// look for the entry with a matching `code` value
	// 	if (data[i]._id == filter) {
	// 		const article = data[i];
	// 		// obj[i].name is the matched result
	// 	}
	// }
	// filter the articles to return one article with the desired id
	// let article = data.find((el) => el._id === id);

	res.render('pages/article', {
		style: 'home',
		title: 'hihihi',
		data: data,
		id: id,
	});
	// console.log(news);
});
app.get('/sport', (req, res) => {
	res.render('pages/sport', {
		// data: dataSport,
	});
});

// authentication is needed for these routes
app.get('/smoothies', requireAuth, (req, res) => res.send('smoothies'));
app.get('/menu', requireAuth);

app.use(authRoutes);
// app.use(indexRoutes);
app.use(settingsRoutes);
app.use(viewsRoutes);
