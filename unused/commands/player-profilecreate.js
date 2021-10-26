const { SlashCommandBuilder } = require('@discordjs/builders'); // Para los slashs
const Discord = require("discord.js");
const Canvas = require("canvas"); // Para editar la imagen, TODO: pasarlo todo esto a un modulo
var moment = require('moment'); // require

module.exports = {

// Descripción del modulo

    data: new SlashCommandBuilder()
    .setName('crearperfil')
    .setDescription('¡Crea tu propio perfil!'),
    
    async execute(interaction) {

	    console.log(`${interaction.user.tag} en el canal de #${interaction.channel.name} triggereó la interación de crear perfil. `);

        const UserData = await interaction.client.dbusers.findOne({ where: { discordid: interaction.user.id } });
        if (UserData) {
            return interaction.reply({ content: `Ya tienes un perfil.`, ephemeral: true} );
        }

        const newuserdata = await interaction.client.dbusers.create({ discordid: interaction.user.id });
        
        newuserdata.charlevel = 1;
        newuserdata.lastUpdated = Date.now();
        newuserdata.charname = interaction.user.username;
        
        newuserdata.save();
        return interaction.reply({ content: `Se ha creado tu perfil.`, ephemeral: true });

        }
}
