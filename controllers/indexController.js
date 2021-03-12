const Article = require('../models/Article');

// controller actions
module.exports.index = async (req, res) => {
	try {
		const Innlent = Article.find({ name: 'Innlent' });
		const Erlent = Article.findOne({ name: 'Erlent' });

		const data = {};
		data.Innlent = Innlent;
		data.Innlent = Erlent;
		console.error(data);
		res.render('pages/index', {
			style: 'home',
			title: 'hihihi',
			data: data,
		});
	} catch (error) {
		console.error(error);
		res.status(500).send('Oops..');
	}
};
