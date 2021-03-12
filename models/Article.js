const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const articleSchema = new mongoose.Schema({
	Innlent: {
		fb: [
			{ title: { type: String } },
			{ tag: { type: String } },
			{ url: { type: String } },
			{ imageUrl: { type: String } },
			{ icon: { type: String } },
			{ date: { type: String } },
			{ time: { type: String } },
			{ paragraph: { type: String } },
			{ veiws: { type: Number } },
		],
		mbl: [
			{ title: { type: String } },
			{ tag: { type: String } },
			{ url: { type: String } },
			{ imageUrl: { type: String } },
			{ icon: { type: String } },
			{ date: { type: String } },
			{ time: { type: String } },
			{ paragraph: { type: String } },
			{ veiws: { type: Number } },
		],
		man: [
			{ title: { type: String } },
			{ tag: { type: String } },
			{ url: { type: String } },
			{ imageUrl: { type: String } },
			{ icon: { type: String } },
			{ date: { type: String } },
			{ time: { type: String } },
			{ paragraph: { type: String } },
			{ veiws: { type: Number } },
		],
	},
	Erlent: {
		fb: [
			{ title: { type: String } },
			{ tag: { type: String } },
			{ url: { type: String } },
			{ imageUrl: { type: String } },
			{ icon: { type: String } },
			{ date: { type: String } },
			{ time: { type: String } },
			{ paragraph: { type: String } },
			{ veiws: { type: Number } },
		],
		mbl: [
			{ title: { type: String } },
			{ tag: { type: String } },
			{ url: { type: String } },
			{ imageUrl: { type: String } },
			{ icon: { type: String } },
			{ date: { type: String } },
			{ time: { type: String } },
			{ paragraph: { type: String } },
			{ veiws: { type: Number } },
		],
		man: [
			{ title: { type: String } },
			{ tag: { type: String } },
			{ url: { type: String } },
			{ imageUrl: { type: String } },
			{ icon: { type: String } },
			{ date: { type: String } },
			{ time: { type: String } },
			{ paragraph: { type: String } },
			{ veiws: { type: Number } },
		],
	},
});

const Article = mongoose.model('article', articleSchema);

module.exports = Article;
