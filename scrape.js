const puppeteer = require('puppeteer');
const fs = require('fs');

async function frettabladid(type) {
	// launch pupeteer
	const browser = await puppeteer.launch();

	// load new page
	const page = await browser.newPage();

	const url = 'https://www.frettabladid.is/' + type + '/';
	await page.goto(url);

	await page.waitForSelector('.article');

	const results = await page.$$eval('.article', (articles) => {
		return articles.map((article) => {
			const properties = {};
			const titleElement = article.querySelector('.article-block-headline');
			const tag = article.querySelector('div[class="article-block-kicker"] > a')
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

	let data = JSON.stringify(results);
	let jsonFile = 'api/frettabladid-' + type + '.json';
	fs.writeFileSync(jsonFile, data);

	console.log('Mission accomplished');

	browser.close();
}

async function visir() {
	// launch pupeteer
	const browser = await puppeteer.launch();

	// load new page
	const page = await browser.newPage();

	const url = 'https://www.visir.is';
	await page.goto(url);

	await page.waitForSelector('article');

	const texts = await page.evaluate(() =>
		Array.from(document.querySelectorAll('div.media h4')).map((text) =>
			text.innerText.trim()
		)
	);

	const articles = await page.evaluate(() => {
		Array.from(document.querySelectorAll('articles[class="dre-item"]')).map(
			(properties) => ({
				title: properties
					.querySelector('div.dre-item__alt-title--sm')
					.innerText.trim(),
				img: properties.querySelector('img.dre-item__image').src,
				url: properties.querySelector('a.dre-item__asset').href,
			})
		);
	});

	console.log(articles);
	await browser.close();
}

async function run() {
	try {
		frettabladid('frettir');
		frettabladid('sport');
		visir();
	} catch (e) {
		console.error(e);
	} finally {
		console.log('something');
	}
}

run();
