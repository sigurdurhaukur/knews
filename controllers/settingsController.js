const User = require('../models/User');

// controller actions
module.exports.menu_get = (req, res) => {
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
				'settings.mbl': {
					$switch: {
						branches: [
							{ case: { $eq: ['$settings.mbl', true] }, then: false },
							{ case: { $eq: ['$settings.mbl', false] }, then: true },
						],
						default: true,
					},
				},
			},
		},
	])
		.then((dbModel) => {
			res.json(dbModel);
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
			$set: {
				'settings.fb': {
					$switch: {
						branches: [
							{ case: { $eq: ['$settings.fb', true] }, then: false },
							{ case: { $eq: ['$settings.fb', false] }, then: true },
						],
						default: true,
					},
				},
			},
		},
	])
		.then((dbModel) => {
			res.json(dbModel);
		})
		.catch((err) => res.status(422).json(err));
};
