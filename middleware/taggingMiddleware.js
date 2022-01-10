// searches for certain words in a string then add's a relevant tag.

// searchString = 'hello world, roger. bar';
// searchTokens = ['foo', 'bar', 'roger'];

// searchRegex = new RegExp(searchTokens.join('|'), 'g');
// numOfMatches = searchString.match(searchRegex).length;
data = require('../api/data.json');
// console.log(numOfMatches);

let str = data.Innlent.fb[25].paragraph;
str = str.toLowerCase();

const buisness =
	'tekj' ||
	'verð' ||
	'kaup' ||
	'keypt' ||
	'selj' ||
	'gengi' ||
	'hagna' ||
	'eign' ||
	'eigjend' ||
	'skatt' ||
	'fyrirtæk' ||
	'samkeppni' ||
	'lán';

const entertainement = 'sund' || 'golf' || 'grasagarð' || 'havlir' || 'leik';
const tech = 'tæk' || 'tölv' || '...';
const sports =
	'sport' ||
	'íþrótt' ||
	'glíma' ||
	'golf' ||
	'sund' ||
	'fótbolti' ||
	'knattspyrna' ||
	'karfa' ||
	'körfu' ||
	'bolti' ||
	'frjálsar' ||
	'hlaup' ||
	'skíði' ||
	'water polo' ||
	'judo' ||
	'lyftingar' ||
	'skák' ||
	'rafíþróttir' ||
	'taekwondo' ||
	'bogfimi' ||
	'badminton' ||
	'hafnarbolt' ||
	'box' ||
	'hjól' ||
	'pílukast' ||
	'borðtennis' ||
	'dýfing' ||
	'leik' ||
	'ólemp' ||
	'formúl' ||
	'handbolt' ||
	'veðreiðar' ||
	'íshokkí' ||
	'mma' ||
	'mótorsport' ||
	'róð' ||
	'rúgbí' ||
	'sigling' ||
	'siglt' ||
	'skotfimi' ||
	'þríþraut' ||
	'blak' ||
	'kraftlyfting';
const profession =
	'starf' ||
	'störf' ||
	'læknir' ||
	'fræðing' ||
	'kennar' ||
	'bílstjóri' ||
	'lögm' ||
	'verkfr' ||
	'tónlistarm';
const football = 'boltinn';
const onlineShopping = 'elko' || 'bónus' || 'nettó' || 'krónan';
const travel =
	'Afganistan' ||
	'Albanía' ||
	'Andorra' ||
	'Angóla' ||
	'Antigua' ||
	'Argentína' ||
	'Armenía' ||
	'Ástralía' ||
	'Austurríki' ||
	'Aserbaídsjan' ||
	'Bahamaeyjar' ||
	'Hvíta-Rússland' ||
	'Belgía' ||
	'Bólivía' ||
	'Bosnía' ||
	'Hersegóvína' ||
	'Brasilía' ||
	'Búlgaría' ||
	'Fílabeinsströndin' ||
	'Kambódía' ||
	'Kanada' ||
	'afrík' ||
	'Chile' ||
	'Kína' ||
	'Kólumbía' ||
	'Kongó' ||
	'Kosta' ||
	'Króatía' ||
	'Kúba' ||
	'Kýpur' ||
	'Tékkland' ||
	'Danmörk' ||
	'Egyptaland' ||
	'Eistland' ||
	'Eþíópía' ||
	'Finnland' ||
	'Frakkland' ||
	'Georgía' ||
	'Þýskaland' ||
	'Grikkland' ||
	'Gvatemala' ||
	'Páfagarður' ||
	'Ungverjaland' ||
	'Indland' ||
	'Indónesía' ||
	'Íran' ||
	'Írak' ||
	'Írland' ||
	'Ísrael' ||
	'Ítalía' ||
	'Jamaíka' ||
	'Japan' ||
	'Kasakstan' ||
	'Kenía' ||
	'Lettland' ||
	'Líbanon' ||
	'Líbería' ||
	'Litháen' ||
	'Lúxemborg' ||
	'Madagaskar' ||
	'Malasía' ||
	'Mexíkó' ||
	'Mónakó' ||
	'Mongólía' ||
	'Svartfjallaland' ||
	'Marokkó' ||
	'Nepal' ||
	'Holland' ||
	'Nýja Sjáland' ||
	'Níger' ||
	'Nígería' ||
	'Norður Kóreu' ||
	'Kóre' ||
	'Makedónía' ||
	'Noregur' ||
	'Palestín' ||
	'Panama' ||
	'Perú' ||
	'Filippseyjar' ||
	'Grænland' ||
	'færeyjar';
const life = 'lífstíl' || 'ung';
const realEstate = 'ferrimetra' || 'fasteign';

if (str.includes(buisness)) {
	console.log('buissness');
}
if (str.includes(entertainement)) {
	console.log('entertainment');
}
if (str.includes(tech)) {
	console.log('tech');
}
if (str.includes(sports)) {
	console.log('sports');
}
if (str.includes(profession)) {
	console.log('profession');
}
if (str.includes(travel)) {
	console.log('travel');
}
if (str.includes(life)) {
	console.log('life');
}
if (str.includes(realEstate)) {
	console.log('realEstate');
}
if (str.includes(football)) {
	console.log('football');
}
if (str.includes(onlineShopping)) {
	console.log('onlineShopping');
}
// if none of the above criteria is met the article is a news article
if (
	str.includes(
		!buisness &
			!entertainement &
			!tech &
			!sports &
			!profession &
			!travel &
			!profession &
			!travel &
			!life &
			!realEstate &
			!football &
			!onlineShopping
	)
) {
	console.log('news');
} else {
	console.log('news');
}

// frett if no other criteria is met.
