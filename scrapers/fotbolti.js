const scraperObject = {
	url: 'https://fotbolti.net/articles.php?offset=0',
	async scraper(browser) {
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);

		await page.goto(this.url);
		let scrapedData = [];
		// Wait for the required DOM to be rendered
		async function scrapeCurrentPage() {
			await page.waitForSelector('.article');
			await page.$$eval('.article', (articles) => {
				return articles.map((article) => {
					const properties = {};
					const titleElement = article.querySelector('.title a');
					const anchorElement = article.querySelector('a');
					const imageElement = article.querySelector('a img');

					properties.title = titleElement.innerText;
					properties.url = anchorElement.getAttribute('href');
					properties.imageUrl = imageElement ? imageElement.src : '';

					return properties;
				});
			});

			// When all the data on this page is done, click the next button and start the scraping of the next page
			// You are going to check if this button exist first, so you know if there really is a next page.
			let nextButtonExist = false;
			try {
				const nextButton = await page.$eval(
					'#articles-content > div.nav.pager > a.page-number.gt',
					(a) => a.textContent
				);
				nextButtonExist = true;
			} catch (err) {
				nextButtonExist = false;
			}
			if (nextButtonExist) {
				await page.click(
					'#articles-content > div.nav.pager > a.page-number.gt'
				);
				return scrapeCurrentPage(); // Call this function recursively
			}
			await page.close();
		}
		let data = await scrapeCurrentPage();
		console.log(data);
		return data;
	},
};

module.exports = scraperObject;
