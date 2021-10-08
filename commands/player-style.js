const { SlashCommandBuilder } = require('@discordjs/builders'); // Para los slashs

module.exports = {

// Descripción del modulo

    data: new SlashCommandBuilder()
    .setName('estilo')
    .setDescription('¡Dinos cual es tu estilo de juego!')
	.addStringOption(option =>
		option.setName('estilo')
			.setDescription('Estilo de juego')
			.setRequired(true)
			.addChoice('healer', 'style_healer')
			.addChoice('mago', 'style_mago')
			.addChoice('rango', 'style_rango')
			.addChoice('dps', 'style_dps')
			.addChoice('tanque', 'style_tanque')),
    
    async execute(interaction) {

	    console.log(`${interaction.user.tag} en el canal de #${interaction.channel.name} triggereó la interación de estilo (${interaction.options.getString('estilo')}). `);

        // En vez de tirar la respuesta de una, primero le decimos al Discord de que existimos. [Si no responde en los primeros 3 seg, Discord lo da por perdido.]
		await interaction.reply('Pong!');

        }
}
