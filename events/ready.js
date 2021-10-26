const db = require('../database/database.js');
const users = require('../models/users');
const wars = require('../models/wars');
const war_participants = require('../models/war_participants');
const companies = require('../models/companies');
const schedule = require('node-schedule');

module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
        client.user.setActivity('New World', { type: 'PLAYING' });
		console.log(`¡Bot listo! Loggeado como ${client.user.tag}`);
		const scheduledCheck = schedule.scheduleJob('*/5 * * * *', function(){
			console.log('Checking Status of site');
			client.websiteCheck();
		});
		db.authenticate()
        .then(() => {
            console.log('¡MySQL listo!');
			users.init(db); // initiates the table config
			wars.init(db); // initiates the table config
			companies.init(db); // initiates the table config
			war_participants.init(db); // initiates the table config

            users.sync(); //creates the table, if it doesn't already exist
            wars.sync(); //creates the table, if it doesn't already exist
            companies.sync(); //creates the table, if it doesn't already exist
            war_participants.sync(); //creates the table, if it doesn't already exist

			client.dbusers = users;
			client.dbwar_participants = war_participants;
			client.dbwars = wars;
			client.dbcompanies = companies;
        })
        .catch(err => console.log(err));
	},
};