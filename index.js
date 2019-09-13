#!/usr/bin/env node --harmony
const program = require('commander');
const inquirer = require('inquirer');
const moment = require('moment');

program
	.option('-u, --unix <unix>', 'A unix timestamp')
	.parse(process.argv);


const askForUnix = () => {
	if (program.unix) return Promise.resolve({unix: program.unix});

	return inquirer.prompt({
		type: 'text',
		name: 'unix',
		message: 'Unix Timestamp? ',
	});
};

askForUnix().then(({unix}) => {
	const time = moment.unix(unix);

	console.log(time.format('llll'));	
});
