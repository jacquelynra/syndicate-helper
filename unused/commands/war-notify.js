const { SlashCommandBuilder } = require('@discordjs/builders'); // Para los slashs
const Discord = require("discord.js");
const Canvas = require("canvas"); // Para editar la imagen, TODO: pasarlo todo esto a un modulo

module.exports = {

// Descripción del modulo

    data: new SlashCommandBuilder()
    .setName('notificar')
    .setDescription('Notifica a todos, a un grupo o a un usuario en especifico sobre la guerra.')
	.addSubcommand(subcommand =>
		subcommand
			.setName('todos')
			.setDescription('ALERTA: ¡Le estás enviando un mensaje privado a 50 personas!'))
	.addSubcommand(subcommand =>
		subcommand
			.setName('grupo')
			.setDescription('Le envia una notificación a un grupo especifico de la guerra')
            .addIntegerOption(option => option.setName('grupo').setDescription('Selecciona un grupo, del 1 al 10').setRequired(true)))
	.addSubcommand(subcommand =>
		subcommand
			.setName('usuario')
			.setDescription('Le envia una notificación a un usuario especifico que esté en la guerra')
            .addUserOption(option => option.setName('usuario').setDescription('Selecciona un usuario').setRequired(true))),
    
    async execute(interaction) {

	    console.log(`${interaction.user.tag} en el canal de #${interaction.channel.name} triggereó la interación de remover de la guerra. (${interaction.options.getUser('usuario').tag}`);

		await interaction.reply('Pong!');

        }
}
