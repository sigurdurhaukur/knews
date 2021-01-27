const scraperObject = {
	url: 'https://www.vb.is/',
	async scraper(browser, category) {
		let page = await browser.newPage();

		await page.goto(this.url);

		let selectedCategory = await page.$$eval(
			'.clearfix > ul > li > a',
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
		console.log(`Navigating to ${selectedCategory}...`);

		await page.waitForSelector('.newsitem');
		const results = await page.$$eval('.newsitem', (articles) => {
			return articles.map((article) => {
				const properties = {};
				const titleElement = article.querySelector('a .title');
				const tag = article.querySelector('.newsheader > .category');
				const anchorElement = article.querySelector('a');
				const imageElement = article.querySelector('img');

				properties.title = titleElement.innerText;
				properties.tag = tag ? tag.innerText : '';
				properties.url = anchorElement.getAttribute('href');
				properties.imageUrl = imageElement ? imageElement.src : '';

				const date = new Date();
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
