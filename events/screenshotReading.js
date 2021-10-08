const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	name: 'messageCreate',
	async execute(message) {
        if(message.guildId == "879525793028534323" && message.channelId == "895021117058740335" && !message.author.bot == true){ // && message.attachments.size > 0


            
            //const button1 = new MessageButton()
            //    .setCustomId("yes")
            //    .setLabel("Si")
            //    .setStyle('SUCCESS')
            //    .setEmoji("✅")
//
            //const button2 = new MessageButton()
            //    .setCustomId("no")
            //    .setLabel("No")
            //    .setStyle("DANGER")
            //    .setEmoji("❌")
//
            //const row = new MessageActionRow()
            //    .addComponents(button1, button2);
//
            //const numero = 10
//
            //const embed = new MessageEmbed()
            //    .setTitle("¿Son correctos estos datos?")
            //    .setDescription(`Espada y escudo ${numero}\nEspada rapero ${numero}\nHachuela ${numero}\nManopla ${numero}\nIgneo ${numero}\nVital ${numero}\nLanza ${numero}\nMartillo ${numero}\nHacha ${numero}\nMosquete ${numero}\nArco Flecha ${numero}`)
            //    .setColor("GREEN")
//
            //await message.channel.send({ embeds: [embed], components: [row] })
        }
	},
};