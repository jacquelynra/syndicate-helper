const { SlashCommandBuilder } = require('@discordjs/builders'); // Para los slashs
const Canvas = require("canvas"); // Para editar la imagen, TODO: pasarlo todo esto a un modulo
const Discord = require("discord.js"); // Para mandar el mensaje? Idk
const { registerFont, createCanvas } = require('canvas') //Para registrar la font más adelante
// registerFont('./ShareTechMono-Regular.ttf', { family: 'Share Tech Mono' })
const wait = require('util').promisify(setTimeout);

var moment = require('moment'); // require

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

        //create a new Canvas
        const canvas = Canvas.createCanvas(464, 715);
        //make it "2D"
        const ctx = canvas.getContext('2d');
        //Set the Background
        const background = await Canvas.loadImage(`./images/profile-blank.png`);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        // Username
        ctx.font = '30px Alata';
        ctx.fillStyle = '#ffffff';
        textfill1 = 'MeChorreaElBife';
        ctx.fillText(textfill1, 33, 77);
        ctx.shadowColor="black";
        ctx.shadowBlur=7;

        // Ultima Actualización
        ctx.font = '16px Alata';
        textfill1 = '04/10/2021';
        ctx.fillText(textfill1, 200, 98);
        
        // Guild
        ctx.font = '17px Alata';
        ctx.fillText('Esclavos de la Luna', 66, 120);
        
        // Nivel
        ctx.font = '30px Alata';
        ctx.shadowBlur=0;
        ctx.textAlign = 'center';
        ctx.fillText('60', 361, 110);
        
        // Oficios
        ctx.font = '14px Alata';
        ctx.textAlign = 'right';
        var txt = '10\n10\n10\n10\n10\n10\n10\n10\n10\n10\n10\n10\n10\n10\n10\n10\n10';
        var x = 430;
        var y = 335;
        var lineheight = 19;
        var lines = txt.split('\n');
        for (var i = 0; i<lines.length; i++)
        ctx.fillText(lines[i], x, y + (i*lineheight) );
        
        // Armas
        ctx.textAlign = 'left';
        var distances = ["203","247","288","330","378","420","465","510","550","595","638"]; // Valor exacto de los pixeles
        for (var i = 0; i<distances.length; i++)
        ctx.fillText(10, 68, distances[i]);
        
        // Atributos
        ctx.fillText('10', 288, 203); // Fuerza
        ctx.fillText('10', 381, 203); // Inteligencia
        ctx.fillText('10', 288, 245); // Destreza
        ctx.fillText('10', 381, 245); // Concentración
        ctx.fillText('10', 288, 281); // Constitución

        // Setear todo lo que hicimos en una imagen

        // Editar el "pensando" a la imagen que corresponde. Esto es por si el bot se demora o tiene lag.
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'perfil.png');
		await interaction.editReply({ files: [attachment] , ephemeral: true });
        
        }
}