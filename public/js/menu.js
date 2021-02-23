const email = document.querySelector('a.email').innerText;
const fb = document.querySelector('.fb');
const mbl = document.querySelector('.mbl');
const visir = document.querySelector('.visir');
const man = document.querySelector('.man');
const fotbolti = document.querySelector('.fotbolti');

const dv = document.querySelector('.dv');
const klippa = document.querySelector('.klippa');
const kjarninn = document.querySelector('.kjarninn');
const ruv = document.querySelector('.ruv');
const stundin = document.querySelector('.stundin');
const kaktus = document.querySelector('.kaktus');
const ron = document.querySelector('.ron');

fb.addEventListener('click', function () {
	post('/settings/fb');
});
mbl.addEventListener('click', function () {
	post('/settings/mbl');
});
visir.addEventListener('click', function () {
	post('/settings/visir');
});
man.addEventListener('click', function () {
	post('/settings/man');
});
fotbolti.addEventListener('click', function () {
	post('/settings/fotbolti');
});
dv.addEventListener('click', function () {
	post('/settings/dv');
});
klippa.addEventListener('click', function () {
	post('/settings/klippa');
});
kjarninn.addEventListener('click', function () {
	post('/settings/kjarninn');
});
ruv.addEventListener('click', function () {
	post('/settings/ruv');
});
stundin.addEventListener('click', function () {
	post('/settings/stundin');
});
kaktus.addEventListener('click', function () {
	post('/settings/kaktus');
});
ron.addEventListener('click', function () {
	post('/settings/ron');
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
