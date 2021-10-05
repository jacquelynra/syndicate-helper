// Require the necessary discord.js classes
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
require('dotenv').config(); //initialize dotenv
const { createConnection } = require('mysql');


// Prepare the mysql connection

let con = createConnection({
    host: process.env.mysql_host,
    user: process.env.mysql_user,
    password: process.env.mysql_password,
    database: process.env.mysql_database
  });

// Then we are going to connect to our MySQL database and we will test this on errors
con.connect(err => {
    // Console log if there is an error
    if (err) return console.log(err);

    // No error found?
    console.log(`¡La conexión con el servidor MySQL fue un éxito!`);
});


// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Command Handler
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

// Event Handler
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// Ready
//client.once('ready', () => {
//	console.log('¡Bot activado!');
//});
//
////Interaction
//client.on('interactionCreate', async interaction => {
//	if (!interaction.isCommand()) return;
//
//	const command = client.commands.get(interaction.commandName);
//
//	if (!command) return;
//
//	try {
//		await command.execute(interaction);
//	} catch (error) {
//		console.error(error);
//		return interaction.reply({ content: '¡Hubo un error inesperado!', ephemeral: true });
//	}
//});

client.login(process.env.CLIENT_TOKEN); //login bot using token