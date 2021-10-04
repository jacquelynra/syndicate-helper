const config = require("./config");
const Canvas = require("canvas");
const Discord = require("discord.js");

const { registerFont, createCanvas } = require('canvas')
registerFont('./ShareTechMono-Regular.ttf', { family: 'Share Tech Mono' })
registerFont('./LibreBarcode39Text-Regular.ttf', { family: 'Libre Barcode 39 Text' })
var moment = require('moment'); // require

module.exports = function (client) {

    const description = {
        name: "WelcomeImages",
        filename: "welcome.js",
        version: "4.8"
    }
    //log that the module is loaded
    console.log(` :: ⬜️ Module: ${description.name} | Loaded version ${description.version} from ("${description.filename}")`)
    //fires every time when someone joins the server
        client.on("guildMemberAdd", async member => {
        //create a new Canvas
        const canvas = Canvas.createCanvas(464, 715);
        //make it "2D"
        const ctx = canvas.getContext('2d');
        //set the Background to the welcome.png
        const background = await Canvas.loadImage(`./profile-blank.png`);
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


        //get it as a discord attachment
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

            message.channel.send(attachment);
        }
    });


}
