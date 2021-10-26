const { SlashCommandBuilder } = require('@discordjs/builders'); // Para los slashs
const Discord = require("discord.js");
const Canvas = require("canvas"); // Para editar la imagen, TODO: pasarlo todo esto a un modulo
var moment = require('moment'); // require

module.exports = {

// Descripción del modulo

    data: new SlashCommandBuilder()
    .setName('perfil')
    .setDescription('¡Mira tu perfil o el de alguien más!')
	.addUserOption(option => option.setName('usuario').setDescription('Selecciona un usuario').setRequired(true)),
    
    async execute(interaction) {

	    console.log(`${interaction.user.tag} en el canal de #${interaction.channel.name} triggereó la interación de perfil (${interaction.options.getUser('usuario').tag}). `);

        // En vez de tirar la respuesta de una, primero le decimos al Discord de que existimos. [Si no responde en los primeros 3 seg, Discord lo da por perdido.]
        await interaction.deferReply({ephemeral: true });

        // Dejar lista la variable del usuario invocado
        const user = interaction.options.getUser('usuario');

        // Generar perfil
        // equivalent to: SELECT * FROM tags WHERE discordid = 'user.id' LIMIT 1;
        const UserData = await interaction.client.dbusers.findOne({ where: { discordid: user.id } });
        if (!UserData) {
            return interaction.editReply(`No se pudo encontrar el perfil.`);
        }

        moment.locale('es'); // 'en'
        // var everything
        var characterLevel = UserData.charlevel;
        var lastUpdated = moment(UserData.updatedAt).fromNow(true);
        var guildName = (UserData.has_guild === true) ? UserData.guildname:"No tiene" ;
        var characterName = UserData.charname;
        var armasEspada = UserData.espada;
        var armasRopera = UserData.ropera;
        var armasHachuela = UserData.hachuela;
        var armasManopla = UserData.manopla;
        var armasIgneo = UserData.igneo;
        var armasVital = UserData.vital;
        var armasLanza = UserData.lanza;
        var armasMartillo = UserData.martillo;
        var armasHacha = UserData.hacha;
        var armasMosquete = UserData.mosquete;
        var armasArco = UserData.arco;
        var attFuerza = UserData.fuerza;
        var attIntel = UserData.inteligencia;
        var attDestr = UserData.destreza;
        var attConc = UserData.concentracion;
        var attConst = UserData.constitucion;
        var workArmas = UserData.armas;
        var workArmadura = UserData.armamento;
        var workIngenieria = UserData.ingenieria;
        var workJoyeria = UserData.joyeria;
        var workArcano = UserData.arcano;
        var workCocina = UserData.cocina;
        var workDecoracion = UserData.decoracion;
        var workFundicion = UserData.fundicion;
        var workCarpinteria = UserData.carpinteria;
        var workCurtido = UserData.curtido;
        var workTejido = UserData.tejido;
        var workCanteria = UserData.canteria;
        var workTalado = UserData.talado;
        var workMineria = UserData.mineria;
        var workPesca = UserData.pesca;
        var workCosecha = UserData.cosecha;
        var workDesollamiento = UserData.desollamiento;

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
        textfill1 = characterName;
        ctx.fillText(textfill1, 33, 77);
        ctx.shadowColor="black";
        ctx.shadowBlur=7;
    
        // Ultima Actualización
        ctx.font = '16px Alata';
        textfill1 = lastUpdated;
        ctx.fillText(textfill1, 200, 98);
        
        // Guild
        ctx.font = '17px Alata';
        ctx.fillText(guildName, 66, 120); // CAMBIAR!!!!!!!!!!!!
        
        // Nivel
        ctx.font = '30px Alata';
        ctx.shadowBlur=0;
        ctx.textAlign = 'center';
        ctx.fillText(characterLevel, 361, 110);
        
        // Oficios
        ctx.font = '14px Alata';
        ctx.textAlign = 'right';
        var txt = `${workArmas}\n${workArmadura}\n${workIngenieria}\n${workJoyeria}\n${workArcano}\n${workCocina}\n${workDecoracion}\n${workFundicion}\n${workCarpinteria}\n${workCurtido}\n${workTejido}\n${workCanteria}\n${workTalado}\n${workMineria}\n${workPesca}\n${workCosecha}\n${workDesollamiento}`;
        var x = 430;
        var y = 335;
        var lineheight = 19;
        var lines = txt.split('\n');
        for (var i = 0; i<lines.length; i++)
        ctx.fillText(lines[i], x, y + (i*lineheight) );
        
        // Armas
        ctx.textAlign = 'left';
        var nameTags = [armasEspada,armasRopera,armasHachuela,armasManopla,armasIgneo,armasVital,armasLanza,armasMartillo,armasHacha,armasMosquete,armasArco];
        var distances = ["203","247","288","330","378","420","465","510","550","595","638"]; // Valor exacto de los pixeles
        for (var i = 0; i<distances.length; i++)
        ctx.fillText(nameTags[i], 68, distances[i]);
        
        // Atributos
        ctx.fillText(attFuerza, 288, 203); // Fuerza
        ctx.fillText(attIntel, 381, 203); // Inteligencia
        ctx.fillText(attDestr, 288, 245); // Destreza
        ctx.fillText(attConc, 381, 245); // Concentración
        ctx.fillText(attConst, 288, 281); // Constitución
    
        const buffer = canvas.toBuffer(); // Buffer a lo que venimos haciendo

        // Editar el "pensando" a la imagen que corresponde. Esto es por si el bot se demora o tiene lag.
        const attachment = new Discord.MessageAttachment(buffer, 'perfil.png');
		await interaction.editReply({ files: [attachment] , ephemeral: true });

        }
}
