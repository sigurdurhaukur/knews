const scraperObject = {
	url: 'https://www.visir.is/',
	async scraper(browser, category) {
		let page = await browser.newPage();

		await page.goto(this.url);

		let selectedCategory = await page.$$eval(
			'.main-menu > ul > li > a',
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

		await page.waitForSelector('article.article-item');
		const results = await page.$$eval('article.article-item', (articles) => {
			return articles.map((article) => {
				const properties = {};
				const titleElement = article.querySelector(
					'.article-item__content > .article-item__title > a'
				);
				const tag = article.querySelector(
					'.article-item__content .article-item__meta a.badge--tag'
				).innerText;
				const anchorElement = article.querySelector('.figure a');
				const imageElement = article.querySelector('.figure a img');

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
