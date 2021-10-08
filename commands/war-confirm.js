const { SlashCommandBuilder } = require('@discordjs/builders'); // Para los slashs
const Discord = require("discord.js");
const Canvas = require("canvas"); // Para editar la imagen, TODO: pasarlo todo esto a un modulo

module.exports = {

// Descripción del modulo

    data: new SlashCommandBuilder()
    .setName('confirmar')
    .setDescription('Confirma la participación de un usuario en un grupo especifico.')
	.addUserOption(option => option.setName('usuario').setDescription('Selecciona un usuario').setRequired(true))
	.addIntegerOption(option => option.setName('grupo').setDescription('Selecciona un grupo, del 1 al 10').setRequired(true)),
    
    async execute(interaction) {

	    console.log(`${interaction.user.tag} en el canal de #${interaction.channel.name} triggereó la interación de confirmar (${interaction.options.getUser('usuario').tag} en el grupo ${interaction.options.getInteger('grupo').tag}). `);

		await interaction.reply('Pong!');

        }
}
