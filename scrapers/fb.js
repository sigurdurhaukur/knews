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

				return properties;
			});
		});

		// goes to the article and selects higher quality img and the actual text
		for (i = 0; i < results.length; i++) {
			await page.goto(results[i].url);
			console.log(`Diving in to ${results[i].url}...`);

			let img = await page.evaluate(
				() => document.querySelector('picture img').src
			);
			let date = await page.evaluate(
				() => document.querySelector('.article-pubdate').innerText
			);
			let time = await page.evaluate(
				() => document.querySelector('.article-pubtime').innerText
			);

			await page.waitForSelector('.article-body');
			let paragraph = await page.evaluate(() =>
				[...document.querySelectorAll('.paragraph-block')]
					.map((element) => element.innerText)
					.join('\n')
			);

			results[i]._id = i;
			results[i].imageUrl = img;
			results[i].date = date;
			results[i].time = time;
			results[i].paragraph = paragraph;
			results[i].views = 0;
		}

		return results;
	},
};

module.exports = scraperObject;
