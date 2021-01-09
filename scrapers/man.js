const scraperObject = {
	url: 'https://www.man.is/',
	async scraper(browser, category) {
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);

		await page.goto(this.url);

		let selectedCategory = await page.$$eval(
			'.tags-menu > ul > li > a',
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

		await page.waitForSelector('.td-category-pos-image');
		const results = await page.$$eval('.td-category-pos-image', (articles) => {
			return articles.map((article) => {
				const properties = {};
				const titleElement = article.querySelector(
					'.td-module-meta-info .entry-title a'
				);
				const tag = article.querySelector(
					'.td-module-meta-info .kaktus-frontblock-container .kaktus-frontblock-item .tag'
				);
				// const anchorElement = article.querySelector('a');
				// const imageElement = article.querySelector('span');

				properties.title = titleElement.innerText;
				properties.tag = tag ? tag.innerText : 'Fréttir';
				// properties.url = anchorElement.getAttribute('href');
				// properties.imageUrl = imageElement ? imageElement.src : '';

				return properties;
			});
		});

		// const articles = await page.evaluate(() => {
		// 	Array.from(document.querySelectorAll('td-module-container')).map(
		// 		(properties) => ({
		// 			title: properties
		// 				.querySelector('.td-module-meta-info .td-module-title a')
		// 				.innerText.trim(),
		// 			tag: properties.querySelector(
		// 				'.td-module-meta-info .kaktus-frontblock-container .kaktus-frontblock-item .tag'
		// 			).innerText,
		// 			img: properties.querySelector('span').src,
		// 			url: properties.querySelector('a').href,
		// 		})
		// 	);
		// });

		return results;
	},
};

module.exports = scraperObject;
