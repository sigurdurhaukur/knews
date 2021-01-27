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
		countryList.innerHTML = '';
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

		document.getElementById('countryList').innerHTML = html;
	}
};

document
	.getElementById('search')
	.addEventListener('input', () => searchcountry(search.value));
