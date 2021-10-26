const { SlashCommandBuilder } = require('@discordjs/builders'); // Para los slashs
const Discord = require("discord.js");
const Canvas = require("canvas"); // Para editar la imagen, TODO: pasarlo todo esto a un modulo

module.exports = {

// Descripción del modulo

    data: new SlashCommandBuilder()
    .setName('invitar')
    .setDescription('¡Dale el role a los usuarios que sean de tu misma compañía!')
	.addUserOption(option => option.setName('usuario').setDescription('Selecciona un usuario').setRequired(true)),
    
    async execute(interaction) {

	    console.log(`${interaction.user.tag} en el canal de #${interaction.channel.name} triggereó la interación de perfil (${interaction.options.getUser('usuario').tag}). `);

		await interaction.reply('Pong!');

        }
}
