const { SlashCommandBuilder } = require('@discordjs/builders'); // Para los slashs
const Discord = require('discord.js');

module.exports = {

// Descripción del modulo
    
    permissions: [{id:"682688495629893675", type:1, permission:true}],
    data: new SlashCommandBuilder()
    .setName('test3')
    .setDefaultPermission(false)
    .setDescription('¡Marcate para participar en la guerra! Si eres elegido, te llegará una notificación.'),
    
    async execute(interaction) {
        let embed = new Discord.MessageEmbed()
        .setDescription("Simulando Entrada al Servidor " + interaction.user.tag)
        .setColor("RANDOM")
        interaction.reply({ embeds: [embed] });
    
        interaction.client.emit(
            "guildMemberAdd",
            interaction.member || (await interaction.guild.fetchMember(message.author))
        );
        }
}
