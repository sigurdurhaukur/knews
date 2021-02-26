const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, 'Please enter an email'],
		unique: true,
		lowercase: true,
		validate: [isEmail, 'Please enter a valid email'],
	},
	password: {
		type: String,
		required: [true, 'Please enter a password'],
		minlength: [8, 'Minimim password lenght is 6 characters'],
	},
	settings: {
		service: {
			fb: { type: Boolean, default: true },
			mbl: { type: Boolean, default: true },
			man: { type: Boolean, default: false },
			vb: { type: Boolean, default: false },
			visir: { type: Boolean, default: false },
			dv: { type: Boolean, default: false },
			fotbolti: { type: Boolean, default: false },

			klippa: { type: Boolean, default: false },
			kjarninn: { type: Boolean, default: false },
			ruv: { type: Boolean, default: false },
			stundin: { type: Boolean, default: false },
			kaktus: { type: Boolean, default: false },
			ron: { type: Boolean, default: false },
		},
		keywords: {
			news: { type: Boolean, default: true },
			buisness: { type: Boolean, default: true },
			entertainement: { type: Boolean, default: true },
			tech: { type: Boolean, default: false },
			sports: { type: Boolean, default: false },
			profession: { type: Boolean, default: false },
			football: { type: Boolean, default: false },
			onlineShopping: { type: Boolean, default: false },
			travel: { type: Boolean, default: false },
			life: { type: Boolean, default: false },
			realEstate: { type: Boolean, default: false },
		},
	},
});

// fire a function before a doc saved to db
userSchema.pre('save', async function (next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

// static method to login user
userSchema.statics.login = async function (email, password) {
	const user = await this.findOne({ email });
	if (user) {
		const auth = await bcrypt.compare(password, user.password);
		if (auth) {
			return user;
		}
		throw Error('incorrect password');
	}
	throw Error('incorrect email');
};

const User = mongoose.model('user', userSchema);

module.exports = User;
