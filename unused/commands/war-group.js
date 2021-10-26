const { SlashCommandBuilder } = require('@discordjs/builders'); // Para los slashs
const { MessageEmbed } = require('discord.js');

module.exports = {

// Descripción del modulo

    data: new SlashCommandBuilder()
    .setName('grupos')
    .setDescription('¡Marcate para participar en la guerra! Si eres elegido, te llegará una notificación.'),
    
    async execute(interaction) {

	    console.log(`${interaction.user.tag} en el canal de #${interaction.channel.name} triggereó la interación de grupos. `);

        const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Grupos formados')
        .setDescription('Grupos formados automaticamente para la guerra en {lugar} el día {día} a la hora {20:00}.')
        .addFields(
            { name: 'Grupo 1', value: 'Persona 1\nPersona 2\nPersona 3\nPersona 4\nPersona 5', inline: true },
            { name: 'Grupo 2', value: 'Persona 6\nPersona 7\nPersona 8\nPersona 9\nPersona 10', inline: true },
            { name: 'Grupo 3', value: 'Persona 11\nPersona 12\nPersona 13\nPersona 14\nPersona 15', inline: true },
            { name: 'Grupo 4', value: 'Persona 16\nPersona 17\nPersona 18\nPersona 19\nPersona 20', inline: true },
            { name: 'Grupo 5', value: 'Persona 21\nPersona 22\nPersona 23\nPersona 24\nPersona 25', inline: true },
            { name: 'Grupo 6', value: 'Persona 26\nPersona 27\nPersona 28\nPersona 29\nPersona 30', inline: true },
            { name: 'Grupo 7', value: 'Persona 31\nPersona 32\nPersona 33\nPersona 34\nPersona 35', inline: true },
            { name: 'Grupo 8', value: 'Persona 36\nPersona 37\nPersona 38\nPersona 39\nPersona 40', inline: true },
            { name: 'Grupo 9', value: 'Persona 41\nPersona 42\nPersona 43\nPersona 44\nPersona 45', inline: true },
            { name: '\u200B', value: '\u200B', inline: true },
            { name: 'Grupo 10', value: 'Persona 46\nPersona 47\nPersona 48\nPersona 49\nPersona 50', inline: true },
            { name: '\u200B', value: '\u200B', inline: true },
        );

        await interaction.reply({ embeds: [embed] })
        // En vez de tirar la respuesta de una, primero le decimos al Discord de que existimos. [Si no responde en los primeros 3 seg, Discord lo da por perdido.]

        }
}
