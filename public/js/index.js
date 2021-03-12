//Get Countries From Json File
const searchcountry = async (searchBox) => {
	const res = await fetch('json/countries.json');
	const countries = await res.json();

	//Get Entered Data
	let fits = countries.filter((country) => {
		const regex = new RegExp(`^${searchBox}`, 'gi');
		return country.name.match(regex) || country.abbr.match(regex);
	});

	if (searchBox.length === 0) {
		fits = [];
		inputList.innerHTML = '';
	}

	outputHtml(fits);
};

// show results in HTML
const outputHtml = (fits) => {
	if (fits.length > 0) {
		const html = fits
			.map(
				(fit) => `
                <div class="card-content white-text">
                    <h4 class="card-title m1">${fit.name}</h4>
                </div>`
			)
			.join('');

		document.getElementById('inputList').innerHTML = html;
	}
};

document
	.getElementById('search')
	.addEventListener('input', () => searchcountry(search.value));

// calculate time since articles were posted.
// let articleTime = document.querySelector('p.time').innerHTML;

// const date = new Date();
// date.getDay();

// articleTime = articleTime.toString();
// articleTime = articleTime.toLowerCase();

// console.log(articleTime);

const bookmark = document.querySelectorAll('.material-icons');

// bookmark.addEventListener('click', () => {});

// const article = document.querySelector('article');
// article.addEventListener('click', () => {
// 	const data = { field: 2 };
// 	console.log('article was clicked');

// 	fetch('/views', {
// 		method: 'POST',
// 		url: '/views',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify(data),
// 	})
// 		.then((response) => {
// 			response.json();
// 			console.log('Success:', response);
// 			window.location.replace('/');
// 		})
// 		.catch((error) => {
// 			console.error('Error:', error);
// 		});
// });

// const articles = document.querySelectorAll('.article');
// articles.forEach((item) => {
// 	item.addEventListener('click', (event) => {
// 		const data = {
// 			filter: 4,
// 			object: 'data.Innlent.fb',
// 		};
// 		console.log('article was clicked');

// 		fetch('/views', {
// 			method: 'POST',
// 			url: '/views',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify(data),
// 		})
// 			.then((response) => {
// 				response.json();
// 				console.log('Success:', response);
// 			})
// 			.catch((error) => {
// 				console.error('Error:', error);
// 			});
// 	});
// });

function views(filter, object) {
	console.log('running hihihih');
	const data = {
		filter: parseInt(filter, 10),
		object: object,
	};
	console.log('article was clicked');

	fetch('/views', {
		method: 'POST',
		url: '/views',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((response) => {
			response.json();
			console.log('Success:', response);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}
