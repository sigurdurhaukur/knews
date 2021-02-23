const email = document.querySelector('a.email').innerText;
const fb = document.querySelector('.fb');
const mbl = document.querySelector('.mbl');
const visir = document.querySelector('.visir');

fb.addEventListener('click', function () {
	post('/settings/fb');
});
mbl.addEventListener('click', function () {
	post('/settings/mbl');
});
visir.addEventListener('click', function () {
	post('/settings/visir');
});

function post(route) {
	const data = { email: email };
	console.log('button was clicked');

	fetch(route, {
		method: 'POST',
		url: route,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((response) => {
			response.json();
			console.log('Success:', response);
			window.location.replace('/menu');
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}
