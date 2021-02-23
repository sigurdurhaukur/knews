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
		{ $set: { 'settings.mbl': { $eq: [false, '$settings.mbl'] } } },
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
		{ $set: { 'settings.fb': { $eq: [false, '$settings.fb'] } } },
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
		{ $set: { 'settings.visir': { $eq: [false, '$settings.visir'] } } },
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
		{ $set: { 'settings.man': { $eq: [false, '$settings.man'] } } },
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
		{ $set: { 'settings.fotbolti': { $eq: [false, '$settings.fotbolti'] } } },
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
		{ $set: { 'settings.dv': { $eq: [false, '$settings.dv'] } } },
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
		{ $set: { 'settings.klippa': { $eq: [false, '$settings.klippa'] } } },
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
		{ $set: { 'settings.kjarninn': { $eq: [false, '$settings.kjarninn'] } } },
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
		{ $set: { 'settings.ruv': { $eq: [false, '$settings.ruv'] } } },
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
		{ $set: { 'settings.stundin': { $eq: [false, '$settings.stundin'] } } },
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
		{ $set: { 'settings.kaktus': { $eq: [false, '$settings.kaktus'] } } },
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
		{ $set: { 'settings.ron': { $eq: [false, '$settings.ron'] } } },
	])
		.then((dbModel) => {
			res.json(dbModel);
			res.redirect('menu');
		})
		.catch((err) => res.status(422).json(err));
};
