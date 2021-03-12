const fs = require('fs');
const _data = require('../api/data.json');
const data = JSON.parse(JSON.stringify(_data));

module.exports.updateView = (req, res) => {
	const filter = req.body.filter;
	const object = req.body.object;
	// data.Innlent.fb
	// The eval() function evaluates JavaScript code represented as a string.
	// for more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
	filterData(filter, eval(object));
	// filterData(filter, object);
	res.send('sucess');

	function filterData(filter, obj) {
		for (let i = 0; i < obj.length; i++) {
			if (obj[i]._id == filter) {
				if (obj[i].views == null) {
					obj[i].views = 0;
				} else {
					obj[i].views += 1;
				}
				console.log('writing to file');
				fs.writeFile(
					'api/data.json',
					JSON.stringify(data),

					function (err) {
						if (err) throw err;
					}
				);
			} else {
				if (obj[i].views == null) {
					obj[i].views = 0;
				}
				fs.writeFile('api/data.json', JSON.stringify(data), function (err) {
					if (err) throw err;
				});
			}
		}
	}
};
