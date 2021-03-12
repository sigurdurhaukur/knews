const fb = require('./scrapers/fb');
const mbl = require('./scrapers/mbl');
const man = require('./scrapers/man');
const vb = require('./scrapers/vb');
const visir = require('./scrapers/visir');
const fotbolti = require('./scrapers/fotbolti');
const dv = require('./scrapers/dv');

const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();

async function scrapeAll(browserInstance) {
	let browser;
	try {
		browser = await browserInstance;
		let scrapedData = {};
		// Call the scraper for different set of articles to be scraped

		console.log("Can't stop me now!");

		Object.assign(scrapedData, {
			Innlent: {
				name: 'Innlent',
				fb: await fb.scraper(browser, 'Innlent'),
				mbl: await mbl.scraper(browser, 'Innlent'),
				man: await man.scraper(browser, 'Fréttir'),
			},

			Erlent: {
				name: 'Erlent',
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

		const client = new MongoClient(process.env.API_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		async function run() {
			try {
				await client.connect();

				const database = client.db('knews');
				const articles = database.collection('articles');

				// create an array of documents to insert
				const docs = [
					{ name: 'Red', town: 'Kanto' },
					{ name: 'Blue', town: 'Kanto' },
					{ name: 'Leon', town: 'Galar' },
				];

				// this option prevents additional documents from being inserted if one fails
				const options = { ordered: true };

				await articles.insertOne(scrapedData.Innlent, options);
				await articles.insertOne(scrapedData.Erlent, options);
				// console.log(`${result.insertedCount} documents were inserted`);
			} finally {
				await client.close();
			}
		}
		run().catch(console.dir);

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
