// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
require('dotenv').config(); //initialize dotenv


// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Generar imagenes con el comando
const welcome = require("./welcome");

// When the client is ready, run this code (only once)
client.once('ready', () => {
    client.user.setActivity('New World', { type: 'PLAYING' }); // Presence
	console.log('Ready!');
});

client.login(process.env.CLIENT_TOKEN); //login bot using token
