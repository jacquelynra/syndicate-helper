const { SlashCommandBuilder } = require('@discordjs/builders'); // Para los slashs
const Discord = require("discord.js"); // Para mandar el mensaje? Idk
const Profile  = require("../functions/profile-generator.js");
const Canvas = require("canvas"); // Para editar la imagen, TODO: pasarlo todo esto a un modulo

module.exports = {

// Descripción del modulo

    data: new SlashCommandBuilder()
    .setName('perfil')
    .setDescription('¡Mira tu perfil o el de alguien más!'),

// Esto es para agregar subcomandos en un futuro.
//
//    .addSubcommand(subcommand =>
//		subcommand
//			.setName('usuario')
//			.setDescription('Información sobre un usuario')
//			.addUserOption(option => option.setName('target').setDescription('Usuario'))),
    
    async execute(interaction) {
	    console.log(`${interaction.user.tag} en el canal de #${interaction.channel.name} triggereó la interación de perfil.`);

        // En vez de tirar la respuesta de una, primero le decimos al Discord de que existimos. [Si no responde en los primeros 3 seg, Discord lo da por perdido.]
        await interaction.deferReply({ephemeral: true });

        //insertar funcion? maybe?
        const profileCanvas = await Profile();

        // Editar el "pensando" a la imagen que corresponde. Esto es por si el bot se demora o tiene lag.
        const attachment = new Discord.MessageAttachment(profileCanvas, 'perfil.png');
		await interaction.editReply({ files: [attachment] , ephemeral: true });
        
        }
}