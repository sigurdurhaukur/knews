const fb = require('./scrapers/fb');
const mbl = require('./scrapers/mbl');
const man = require('./scrapers/man');
const vb = require('./scrapers/vb');
const visir = require('./scrapers/visir');
const fotbolti = require('./scrapers/fotbolti');
const dv = require('./scrapers/dv');
const fs = require('fs');

async function scrapeAll(browserInstance) {
	let browser;
	try {
		browser = await browserInstance;
		let scrapedData = {};
		// Call the scraper for different set of articles to be scraped

		console.log("Can't stop me now!");

		Object.assign(scrapedData, {
			Innlent: {
				fb: await fb.scraper(browser, 'Innlent'),
				mbl: await mbl.scraper(browser, 'Innlent'),
				man: await man.scraper(browser, 'Fréttir'),
			},
			Erlent: {
				fb: await fb.scraper(browser, 'Erlent'),
				mbl: await mbl.scraper(browser, 'Erlent'),
			},
		});
		// scrapedData['Innlent'] = await fb.scraper(browser, 'Innlent');
		// scrapedData['Innlent2'] = await mbl.scraper(browser, 'Innlent');
		// scrapedData['Erlent'] = await mbl.scraper(browser, 'Erlent');
		// scrapedData['Innlent3'] = await man.scraper(browser, 'Fréttir');
		// scrapedData['Neytendamál'] = await man.scraper(browser, 'Neytendamál');
		// scrapedData['Orðrómur'] = await man.scraper(browser, 'Orðrómur');
		// scrapedData['Raddir'] = await man.scraper(browser, 'Raddir');
		// scrapedData['Fólk'] = await vb.scraper(browser, 'Fólk');

		// scrapedData['Frettir'] = await man.scraper(browser, 'Fréttir');
		// scrapedData = await fotbolti.scraper(browser);
		// scrapedData['Fréttir'] = await dv.scraper(browser, 'FRÉTTIR');

		await browser.close();
		fs.writeFile(
			'api/data.json',
			JSON.stringify(scrapedData),
			'utf8',
			function (err) {
				if (err) {
					return console.log(err);
				}
				console.log(
					"The data has been scraped and saved successfully! View it at './api/data.json'"
				);
			}
		);
	} catch (err) {
		console.log('Could not resolve the browser instance => ', err);
	}
}

module.exports = (browserInstance) => scrapeAll(browserInstance);
