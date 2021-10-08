const { SlashCommandBuilder } = require('@discordjs/builders'); // Para los slashs
const Discord = require("discord.js");
const Canvas = require("canvas"); // Para editar la imagen, TODO: pasarlo todo esto a un modulo

module.exports = {

// Descripción del modulo

    data: new SlashCommandBuilder()
    .setName('permisos')
    .setDescription('Modifica los permisos del bot.')
	.addSubcommand(subcommand =>
		subcommand
			.setName('blacklist')
			.setDescription('Bannea a un usuario de usar los comandos slash.')
            .addUserOption(option => option.setName('usuario').setDescription('Selecciona un usuario').setRequired(true)))
	.addSubcommand(subcommand =>
		subcommand
			.setName('guerra')
			.setDescription('Setea el rango para usar los comando de guerra')
            .addRoleOption(option => option.setName('rol').setDescription('Selecciona un rol').setRequired(true)))
	.addSubcommand(subcommand =>
		subcommand
			.setName('moderador')
			.setDescription('Setea el rango para los moderadores')
            .addRoleOption(option => option.setName('rol').setDescription('Selecciona un rol').setRequired(true)))
	.addSubcommand(subcommand =>
		subcommand
			.setName('compania')
			.setDescription('Setea el rango para los lideres de compañias')
            .addRoleOption(option => option.setName('rol').setDescription('Selecciona un rol').setRequired(true))),
    
    async execute(interaction) {

	    console.log(`${interaction.user.tag} en el canal de #${interaction.channel.name} triggereó la interación de remover de la guerra. (${interaction.options.getUser('usuario').tag}`);

		await interaction.reply('Pong!');

        }
}
