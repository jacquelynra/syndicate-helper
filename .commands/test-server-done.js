const { SlashCommandBuilder } = require('@discordjs/builders'); // Para los slashs
const fetch = require('node-fetch');


module.exports = {

// Descripción del modulo

    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('test'),
    
    async execute(interaction) {

        var start = performance.now();

	    console.log(`${interaction.user.tag} en el canal de #${interaction.channel.name} triggereó la interación de test. `);

        fetch('https://nwdb.info/server-status/servers.json')
        .then(res => res.json())
        .then(res => {

            const datavalue = res.data.servers
            var world = datavalue.filter(function (el) {
                return el[6] == "sa-east-1" && el[4] == "Tuma"; // Changed this so a home would match
              });


            var end = performance.now();
            interaction.reply(`Personas en el servidor de ${world[0][4]}: ${world[0][1]}/${world[0][0]} (Cola: ${world[0][2]})`);

            // Get the channel that we want to edit from config.json
            //const playingChannel = interaction.client.channels.cache.get("896045918355324959");
            //const queueChannel = interaction.client.channels.cache.get("896045960998834186");
            //// If the channel is not found, then log an error and exit process
//
            //    playingChannel.setName(`Jugando: ${datavalue.connectionCount}/${datavalue.connectionCountMax}`);
            //    queueChannel.setName(`Cola: ${datavalue.queueCount}`);

        });
        


        }
}


