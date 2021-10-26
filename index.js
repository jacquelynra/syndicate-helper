// Require the necessary discord.js classes
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
require('dotenv').config(); //initialize dotenv
const fetch = require('node-fetch');


// Create a new client instance
const client = new Client({intents: 32767,});

// Command Handler
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  if (command.permissions) {
      commandPermissions = command.permissions
      commandData = command.data.toJSON()
      let guild = client.guilds.cache.get(process.env.guildId)
      guild.commands.fetch().then(commands => {
          let guildCommand = commands.find(command => command.name == commandData.name)
          console.log(commandPermissions)
          guildCommand.permissions.set({ permissions: commandPermissions })
      })
  }
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
    const channel1 = client.channels.cache.get("896049564283441173");
    const channel2 = client.channels.cache.get("896049754004389908");
    // If the channel is not found, then log an error and exit process
    if(!channel1 && !channel2){
      console.error('Bot is not in the channel to send edit');
      process.exit(1);
    } else {
      // If the check comes back the website is down
          // Log it and update the channel title
          
        fetch('https://nwdb.info/server-status/servers.json')
        .then(res => res.json())
        .then(res => {

            const datavalue = res.data.servers
            var world = datavalue.filter(function (el) {
                return el[6] == "sa-east-1" && el[4] == "Tuma"; // Changed this so a home would match
              });
            channel1.setName(`Jugando: ${world[0][1]}/${world[0][0]}`);
            channel2.setName(`Cola: ${world[0][2]}`);

        });
      }
    }



client.login(process.env.CLIENT_TOKEN); //login bot using token