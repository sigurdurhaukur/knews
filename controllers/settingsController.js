const User = require('../models/User');

// controller actions
module.exports.menu_get = (req, res) => {
	User.findOne({});
	res.render('pages/menu', {
		style: 'home',
		title: 'hihihi',
		// data: data,
	});
};

module.exports.settings_mbl = (req, res) => {
	const _email = req.body.email;
	const field = req.body.field;
	const email = _email.replace('Daginn, ', '');
	console.log(email);

	User.updateOne({ email: email }, [
		{
			$set: {
				'settings.service.mbl': { $eq: [false, '$settings.service.mbl'] },
			},
		},
	])
		.then((dbModel) => {
			res.json(dbModel);
			res.redirect('menu');
		})
		.catch((err) => res.status(422).json(err));
};

module.exports.settings_fb = (req, res) => {
	const _email = req.body.email;
	const field = req.body.field;
	const email = _email.replace('Daginn, ', '');
	console.log(email);

	User.updateOne({ email: email }, [
		{
			$set: { 'settings.service.fb': { $eq: [false, '$settings.service.fb'] } },
		},
	])
		.then((dbModel) => {
			res.json(dbModel);
			res.redirect('menu');
		})
		.catch((err) => res.status(422).json(err));
};

module.exports.settings_visir = (req, res) => {
	const _email = req.body.email;
	const field = req.body.field;
	const email = _email.replace('Daginn, ', '');
	console.log(email);

	User.updateOne({ email: email }, [
		{
			$set: {
				'settings.service.visir': { $eq: [false, '$settings.service.visir'] },
			},
		},
	])
		.then((dbModel) => {
			res.json(dbModel);
			res.redirect('menu');
		})
		.catch((err) => res.status(422).json(err));
};

module.exports.settings_man = (req, res) => {
	const _email = req.body.email;
	const field = req.body.field;
	const email = _email.replace('Daginn, ', '');
	console.log(email);

	User.updateOne({ email: email }, [
		{
			$set: {
				'settings.service.man': { $eq: [false, '$settings.service.man'] },
			},
		},
	])
		.then((dbModel) => {
			res.json(dbModel);
			res.redirect('menu');
		})
		.catch((err) => res.status(422).json(err));
};

module.exports.settings_fotbolti = (req, res) => {
	const _email = req.body.email;
	const field = req.body.field;
	const email = _email.replace('Daginn, ', '');
	console.log(email);

	User.updateOne({ email: email }, [
		{
			$set: {
				'settings.service.fotbolti': {
					$eq: [false, '$settings.service.fotbolti'],
				},
			},
		},
	])
		.then((dbModel) => {
			res.json(dbModel);
			res.redirect('menu');
		})
		.catch((err) => res.status(422).json(err));
};

module.exports.settings_dv = (req, res) => {
	const _email = req.body.email;
	const field = req.body.field;
	const email = _email.replace('Daginn, ', '');
	console.log(email);

	User.updateOne({ email: email }, [
		{
			$set: { 'settings.service.dv': { $eq: [false, '$settings.service.dv'] } },
		},
	])
		.then((dbModel) => {
			res.json(dbModel);
			res.redirect('menu');
		})
		.catch((err) => res.status(422).json(err));
};

module.exports.settings_klippa = (req, res) => {
	const _email = req.body.email;
	const field = req.body.field;
	const email = _email.replace('Daginn, ', '');
	console.log(email);

	User.updateOne({ email: email }, [
		{
			$set: {
				'settings.service.klippa': { $eq: [false, '$settings.service.klippa'] },
			},
		},
	])
		.then((dbModel) => {
			res.json(dbModel);
			res.redirect('menu');
		})
		.catch((err) => res.status(422).json(err));
};

module.exports.settings_kjarninn = (req, res) => {
	const _email = req.body.email;
	const field = req.body.field;
	const email = _email.replace('Daginn, ', '');
	console.log(email);

	User.updateOne({ email: email }, [
		{
			$set: {
				'settings.service.kjarninn': {
					$eq: [false, '$settings.service.kjarninn'],
				},
			},
		},
	])
		.then((dbModel) => {
			res.json(dbModel);
			res.redirect('menu');
		})
		.catch((err) => res.status(422).json(err));
};

module.exports.settings_ruv = (req, res) => {
	const _email = req.body.email;
	const field = req.body.field;
	const email = _email.replace('Daginn, ', '');
	console.log(email);

	User.updateOne({ email: email }, [
		{
			$set: {
				'settings.service.ruv': { $eq: [false, '$settings.service.ruv'] },
			},
		},
	])
		.then((dbModel) => {
			res.json(dbModel);
			res.redirect('menu');
		})
		.catch((err) => res.status(422).json(err));
};

module.exports.settings_stundin = (req, res) => {
	const _email = req.body.email;
	const field = req.body.field;
	const email = _email.replace('Daginn, ', '');
	console.log(email);

	User.updateOne({ email: email }, [
		{
			$set: {
				'settings.service.stundin': {
					$eq: [false, '$settings.service.stundin'],
				},
			},
		},
	])
		.then((dbModel) => {
			res.json(dbModel);
			res.redirect('menu');
		})
		.catch((err) => res.status(422).json(err));
};

module.exports.settings_kaktus = (req, res) => {
	const _email = req.body.email;
	const field = req.body.field;
	const email = _email.replace('Daginn, ', '');
	console.log(email);

	User.updateOne({ email: email }, [
		{
			$set: {
				'settings.service.kaktus': { $eq: [false, '$settings.service.kaktus'] },
			},
		},
	])
		.then((dbModel) => {
			res.json(dbModel);
			res.redirect('menu');
		})
		.catch((err) => res.status(422).json(err));
};

module.exports.settings_ron = (req, res) => {
	const _email = req.body.email;
	const field = req.body.field;
	const email = _email.replace('Daginn, ', '');
	console.log(email);

	User.updateOne({ email: email }, [
		{
			$set: {
				'settings.service.ron': { $eq: [false, '$settings.service.ron'] },
			},
		},
	])
		.then((dbModel) => {
			res.json(dbModel);
			res.redirect('menu');
		})
		.catch((err) => res.status(422).json(err));
};
