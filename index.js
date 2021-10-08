// Require the necessary discord.js classes
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
require('dotenv').config(); //initialize dotenv


// Create a new client instance
const client = new Client({intents: 32767,});

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

client.websiteCheck = async function(){
    // Get the channel that we want to edit from config.json
    const channel = client.channels.cache.get("896045918355324959");
    // If the channel is not found, then log an error and exit process
    if(!channel){
      console.error('Bot is not in the channel to send edit');
      process.exit(1);
    } else {
      // If the check comes back the website is down
          // Log it and update the channel title
          console.log('Website is down');
          channel.setName(" 🔴 Status");
      }
    }



client.login(process.env.CLIENT_TOKEN); //login bot using token