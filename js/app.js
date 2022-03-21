'use strict';

// let numberOfNews = +prompt("Siz qancha yangilik Ko'rdingiz");

// const personalDB = {
// 	count: numberOfNews,
// 	news: {},
// 	actors: {},
// 	genres: [],
// 	privat: true,
// };

// const a = prompt("Ohirgi Ko'rgan yangiliklarizdan biri"),
// 	b = (numberOfNews = prompt('unga Qancha baho berar edingiz'));

// personalDB.news[a] = b;

// console.log(personalDB);

let Tolibjon = prompt('salom tolibjon qancha dars kording');

let answersDB = {
	news: { Tolibjon },
	cate: {},
};

const s = prompt('darslar sifati qanday '),
	f = +prompt('darslarga qany darajada baxo berasiz');

answersDB.cate[s] = f;

console.log(answersDB);
