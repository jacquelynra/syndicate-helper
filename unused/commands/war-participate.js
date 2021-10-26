const { SlashCommandBuilder } = require('@discordjs/builders'); // Para los slashs

module.exports = {

// Descripción del modulo

    data: new SlashCommandBuilder()
    .setName('participar')
    .setDescription('¡Marcate para participar en la guerra! Si eres elegido, te llegará una notificación.'),
    
    async execute(interaction) {

	    console.log(`${interaction.user.tag} en el canal de #${interaction.channel.name} triggereó la interación de participar. `);

        // En vez de tirar la respuesta de una, primero le decimos al Discord de que existimos. [Si no responde en los primeros 3 seg, Discord lo da por perdido.]
		await interaction.reply('Pong!');

        }
}
