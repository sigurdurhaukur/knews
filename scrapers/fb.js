const scraperObject = {
	url: 'https://www.frettabladid.is/',
	async scraper(browser, category) {
		let page = await browser.newPage();

		await page.goto(this.url);

		let selectedCategory = await page.$$eval(
			'.megamenu-wrapper > ul > li > ul > li > a',
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

		await page.waitForSelector('.article');
		const results = await page.$$eval('.article', (articles) => {
			return articles.map((article) => {
				const properties = {};
				const titleElement = article.querySelector('.article-block-headline');
				const tag = article.querySelector(
					'div[class="article-block-kicker"] > a'
				).innerText;
				const anchorElement = article.querySelector('a');
				const imageElement = article.querySelector('img');

				properties.title = titleElement.innerText;
				properties.tag = tag;
				properties.url = anchorElement.getAttribute('href');
				properties.imageUrl = imageElement ? imageElement.src : '';
				properties.icon =
					'//frettabladid.overcastcdn.com/img/favicon-32x32.9cd52e1aea4a.png';
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
