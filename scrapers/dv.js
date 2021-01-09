const scraperObject = {
	url: 'https://www.dv.is/',
	async scraper(browser, category) {
		let page = await browser.newPage();

		await page.goto(this.url);

		let selectedCategory = await page.$$eval(
			'.menu-item > a',
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

		await page.waitForSelector('.grein');
		await page.goto(selectedCategory);
		console.log(`Navigating to ${selectedCategory}...`);

		const results = await page.$$eval('.grein', (articles) => {
			return articles.map((article) => {
				const properties = {};
				const titleElement = article.querySelector('article h2 a');
				const tag = article.querySelector('figure > figcaption > span')
					.innerText;
				const anchorElement = article.querySelector('a');
				const imageElement = article.querySelector('img');

				properties.title = titleElement.innerText;
				properties.tag = tag;
				properties.url = anchorElement.getAttribute('href');
				properties.imageUrl = imageElement ? imageElement.src : '';

				return properties;
			});
		});
		return results;
	},
};

module.exports = scraperObject;
