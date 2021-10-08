const { SlashCommandBuilder } = require('@discordjs/builders'); // Para los slashs
const Discord = require("discord.js");
const Canvas = require("canvas"); // Para editar la imagen, TODO: pasarlo todo esto a un modulo

module.exports = {

// Descripción del modulo

    data: new SlashCommandBuilder()
    .setName('compania')
    .setDescription('Modifica los permisos del bot.')
	.addSubcommand(subcommand =>
		subcommand
			.setName('nueva')
			.setDescription('Crea una nueva compañía.')
            .addStringOption(option => option.setName('nombre').setDescription('Pon el nombre de la compañía.').setRequired(true))
            .addUserOption(option => option.setName('usuario').setDescription('Selecciona un usuario que será lider de la compañía').setRequired(true)))
	.addSubcommand(subcommand =>
		subcommand
			.setName('nombre')
			.setDescription('Cambia el nombre de una compañía')
            .addIntegerOption(option => option.setName('id').setDescription('Selecciona el ID de la compañía.').setRequired(true))
            .addStringOption(option => option.setName('nombre').setDescription('Pon el nombre de la compañía.').setRequired(true)))
	.addSubcommand(subcommand =>
		subcommand
			.setName('agregarmiembro')
			.setDescription('Agrega un miembro a una compañía')
            .addUserOption(option => option.setName('rol').setDescription('Selecciona un rol').setRequired(true)))
	.addSubcommand(subcommand =>
		subcommand
			.setName('eliminar')
			.setDescription('Elimina una compañía')
            .addIntegerOption(option => option.setName('id').setDescription('Selecciona el ID de la compañía.').setRequired(true)))
	.addSubcommand(subcommand =>
		subcommand
			.setName('lista')
			.setDescription('Mira la lista de todas las compañías')),
    
    async execute(interaction) {

	    console.log(`${interaction.user.tag} en el canal de #${interaction.channel.name} triggereó la interación de remover de la guerra. (${interaction.options.getUser('usuario').tag}`);

		await interaction.reply('Pong!');

        }
}
