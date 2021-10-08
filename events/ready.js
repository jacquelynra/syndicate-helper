const db = require('../database/database.js');
const users = require('../models/users');
const schedule = require('node-schedule');

module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
        client.user.setActivity('New World', { type: 'PLAYING' });
		console.log(`¡Bot listo! Loggeado como ${client.user.tag}`);
		//const scheduledCheck = schedule.scheduleJob('*/5 * * * *', function(){
		//	console.log('Checking Status of site');
		//	client.websiteCheck();
		//});
		db.authenticate()
        .then(() => {
            console.log('¡MySQL listo!');
			users.init(db); // initiates the table config
            users.sync(); //creates the table, if it doesn't already exist
			client.database = users;
        })
        .catch(err => console.log(err));
	},
};