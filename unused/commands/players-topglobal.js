const { SlashCommandBuilder } = require('@discordjs/builders'); // Para los slashs
const { MessageEmbed } = require('discord.js');

module.exports = {

// Descripción del modulo

    data: new SlashCommandBuilder()
    .setName('topglobal')
    .setDescription('Lista del top 25 de jugadores. Se muestra a nivel global.'),
    
    async execute(interaction) {

	    console.log(`${interaction.user.tag} en el canal de #${interaction.channel.name} triggereó la interación de top [global]. `);

        const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Grupos formados')
        .setDescription('Grupos formados automaticamente para la guerra en {lugar} el día {día} a la hora {20:00}.')
        .addFields(
            { name: 'Top 10 Nivel total', value: 'Persona 1\nPersona 2\nPersona 3\nPersona 4\nPersona 5\nPersona 6\nPersona 7\nPersona 8\nPersona 9\nPersona 10', inline: true },
            { name: 'Top 10 Healer', value: 'Persona 1\nPersona 2\nPersona 3\nPersona 4\nPersona 5\nPersona 6\nPersona 7\nPersona 8\nPersona 9\nPersona 10', inline: true },
            { name: 'Top 10 Mago', value: 'Persona 1\nPersona 2\nPersona 3\nPersona 4\nPersona 5\nPersona 6\nPersona 7\nPersona 8\nPersona 9\nPersona 10', inline: true },
            { name: 'Top 10 Rango', value: 'Persona 1\nPersona 2\nPersona 3\nPersona 4\nPersona 5\nPersona 6\nPersona 7\nPersona 8\nPersona 9\nPersona 10', inline: true },
            { name: 'Top 10 DPS', value: 'Persona 1\nPersona 2\nPersona 3\nPersona 4\nPersona 5\nPersona 6\nPersona 7\nPersona 8\nPersona 9\nPersona 10', inline: true },
            { name: 'Top 10 Tanque', value: 'Persona 1\nPersona 2\nPersona 3\nPersona 4\nPersona 5\nPersona 6\nPersona 7\nPersona 8\nPersona 9\nPersona 10', inline: true },
            { name: 'Top 10 Daño historico', value: 'Persona 1\nPersona 2\nPersona 3\nPersona 4\nPersona 5\nPersona 6\nPersona 7\nPersona 8\nPersona 9\nPersona 10', inline: true },
            { name: 'Top 10 Curación historica', value: 'Persona 1\nPersona 2\nPersona 3\nPersona 4\nPersona 5\nPersona 6\nPersona 7\nPersona 8\nPersona 9\nPersona 10', inline: true },
            { name: 'Top 10 Daño en el último mes', value: 'Persona 1\nPersona 2\nPersona 3\nPersona 4\nPersona 5\nPersona 6\nPersona 7\nPersona 8\nPersona 9\nPersona 10', inline: true },
            { name: 'Top 10 Curación en el último mes', value: 'Persona 1\nPersona 2\nPersona 3\nPersona 4\nPersona 5\nPersona 6\nPersona 7\nPersona 8\nPersona 9\nPersona 10', inline: true },
        );

        await interaction.reply({ embeds: [embed] })
        // En vez de tirar la respuesta de una, primero le decimos al Discord de que existimos. [Si no responde en los primeros 3 seg, Discord lo da por perdido.]

        }
}

