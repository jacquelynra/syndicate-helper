const { SlashCommandBuilder } = require('@discordjs/builders'); // Para los slashs
const tesseract = require("node-tesseract-ocr");
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const Canvas = require("canvas"); // Para editar la imagen, TODO: pasarlo todo esto a un modulo

module.exports = {

// Descripción del modulo

    data: new SlashCommandBuilder()
    .setName('test2')
    .setDescription('test'),
    
    async execute(interaction) {

        await interaction.deferReply();
        var start = performance.now();
        var roundedStart = Math.round(start);

	    console.log(`${interaction.user.tag} en el canal de #${interaction.channel.name} triggereó la interación de test. `);
        const config = {
            lang: "eng",
            oem: 2,
            psm: 6,
            presets: ["digits"],
          }

        const weaponWidth = 23
        const weaponHeight = 23
         
        const weaponTopOne = 415
        const weaponTopTwo = 551
        const weaponTopThree = 687

        const weaponleftOne = 213
        const weaponleftTwo = 633
        const weaponleftThree = 1056
        const weaponleftFour = 1477

        const rectangles = [
        {
            left: weaponleftOne,
            top: weaponTopOne,
            weapon: "espada"
        },
        {
            left: weaponleftOne,
            top: weaponTopTwo,
            weapon: "ropera"
        },
        {
            left: weaponleftOne,
            top: weaponTopThree,
            weapon: "hachuela"
        },
        {
            left: weaponleftTwo,
            top: weaponTopOne,
            weapon: "lanza"
        },
        {
            left: weaponleftTwo,
            top: weaponTopTwo,
            weapon: "gran_hacha"
        },
        {
            left: weaponleftTwo,
            top: weaponTopThree,
            weapon: "martillo"
        },
        {
            left: weaponleftThree,
            top: weaponTopOne,
            weapon: "arco"
        },
        {
            left: weaponleftThree,
            top: weaponTopTwo,
            weapon: "mosquete"
        },
        {
            left: weaponleftFour,
            top: weaponTopOne,
            weapon: "bastonigneo"
        },
        {
            left: weaponleftFour,
            top: weaponTopTwo,
            weapon: "bastonvital"
        },
        {
            left: weaponleftFour,
            top: weaponTopThree,
            weapon: "manopla"
        }];

        var result = [];

        //Set the Background once
        let background = await Canvas.loadImage('./images/unknown.png');

        for (var i = 0, len = 10; i <= len; i++) {

            const canvas = Canvas.createCanvas(weaponWidth, weaponHeight);
            //make it "2D"
            const ctx = canvas.getContext('2d');
            //ctx.filter= 'brightness(2.5) contrast(0.7)';
            ctx.drawImage(background, rectangles[i].left, rectangles[i].top, weaponWidth, weaponHeight, 0, 0, weaponWidth, weaponHeight);

            const buffer = canvas.toBuffer(); // Buffer a lo que venimos haciendo

            const text = await tesseract.recognize(buffer, config)
            result.push(`${text.replace(/\D/g,'')}`);
            }

            var end = performance.now();
            var roundedEnd = Math.round(end);

            const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Atributos que pude conseguir')
            // .setDescription('Grupos formados automaticamente para la guerra en {lugar} el día {día} a la hora {20:00}.')
            .addFields(
                { name: 'Armas de una mano', value: `<:Espada:896118541697290330> Espada: ${result[0]}\n<:EspadaRopera:896118541026226198> Espada ropera: ${result[1]}\n<:Hachuela:896118541659553832> Hachuela: ${result[2]}`, inline: true },
                { name: 'Armas de dos manos', value: `<:Lanza:896118541718286396> Lanza: ${result[3]}\n<:GranHacha:896118541458239498> Gran Hacha: ${result[4]}\n<:GranMartillo:896118541131055154> Martillo de Guerra: ${result[5]}`, inline: true },
                { name: 'Armas de ataque a distancia', value: `<:Arco:896118541332402236> Arco y Flecha: ${result[6]}\n<:Mosquete:896118541546295327> Mosquete: ${result[7]}`, inline: true },
                { name: 'Mágicos', value: `<:BastonVital:896118541571481672> **Bastón Vital**: ${result[8]}\n<:BastonIgneo:896132664568995920> **Bastón Ígneo**: ${result[9]}\n<:Manopla:896118541256884276> **Manopla**: ${result[10]}`, inline: true },
            )
            .setFooter(`Tarea terminada en ${roundedEnd - roundedStart} ms`);

        // ``
            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('okay')
                        .setLabel('Está bien')
                        .setStyle('PRIMARY')
                        .setEmoji('✅'),
                )
                .addComponents(
                    new MessageButton()
                        .setCustomId('delete')
                        .setLabel('Eliminar')
                        .setStyle('DANGER')
                        .setEmoji('🚫'),
                );

            interaction.editReply({ embeds: [embed], components: [row] });


        }
}
