const scraperObject = {
	url: 'https://www.mbl.is/',
	async scraper(browser, category) {
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);

		await page.goto(this.url, { waitUntil: 'domcontentloaded' });

		let selectedCategory = await page.$$eval(
			'.navbar > .container > ul > li > a',
			(links, _category) => {
				// Search for the element that has the matching text
				links = links.map((a) =>
					a.textContent.replace(/(\r\n\t|\n|\r|\t|^\s|\s$|\B\s|\s\B)/gm, '') ===
					_category
						? a
						: null
				);
				let link = links.filter((tx) => tx !== null)[0];
				return link.href;
			},
			category
		);

		await page.goto(selectedCategory);

		await page.waitForSelector('.smt');

		const results = await page.$$eval('.smt', (articles) => {
			return articles.map((article) => {
				const properties = {};
				const titleElement = article.querySelector('.text-truncate-3');
				const tag = article.querySelector('.text-truncate').innerText;
				const anchorElement = article.querySelector('div > a');
				const imageElement = article.querySelector('a > img');

				properties.title = titleElement.innerText;
				properties.tag = tag;
				properties.url = anchorElement.getAttribute('href');
				properties.imageUrl = imageElement.src ? imageElement.src : '';
				properties.icon = 'https://www.mbl.is/favicon.ico';

				let date = new Date();
				properties.date = date.getDate();
				properties.hour = date.getHours();
				properties.minute = date.getMinutes();

				return properties;
			});
		});
		return results;
	},
};

module.exports = scraperObject;
