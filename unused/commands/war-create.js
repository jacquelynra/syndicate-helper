const { SlashCommandBuilder } = require('@discordjs/builders'); // Para los slashs
const Discord = require("discord.js");
const Canvas = require("canvas"); // Para editar la imagen, TODO: pasarlo todo esto a un modulo
var moment = require('moment'); // require

module.exports = {

// Descripción del modulo

    data: new SlashCommandBuilder()
    .setName('crearguerra')
    .setDescription('Crea una guerra.')
	.addStringOption(option =>
		option.setName('lugar')
			.setDescription('Selecciona un lugar')
			.setRequired(true)
            .addChoice('Monarchs Bluff','monarch')
            .addChoice('Llaves de Alfanje','llaves')
            .addChoice('Primera Luz','luz')
            .addChoice('Windsward','wind')
            .addChoice('Reekwater','reek')
            .addChoice('Everfall','ever')
            .addChoice('Brightwood','bright')
            .addChoice('Pantano de Tejedor','pantano')
            .addChoice('Ebonscale Reach','ebonscale')
            .addChoice('Costa Agitada','costa')
            .addChoice('Mourning Dale','mourning')
            )
	.addStringOption(option => option.setName('fecha').setDescription('Pon la fecha y hora de la guerra, formato DD/MM HH:SS').setRequired(true))
	.addStringOption(option => option.setName('enemigo').setDescription('Cual es el enemigo de la guerra').setRequired(true)
        .addChoice('Saqueadores','amarillos')
        .addChoice('Pacto','verdes')
        )
	.addStringOption(option => option.setName('gremio').setDescription('Pon el nombre del gremio encargado.').setRequired(true)),
    
    async execute(interaction) {

	    console.log(`${interaction.user.tag} en el canal de #${interaction.channel.name} triggereó la interación de confirmar . `);
        const wardate = moment(`${interaction.options.getString('fecha')}`, "DD/MM HH:mm", true);

        if (!wardate.isValid()){
		    return interaction.reply(`No es una fecha válida`);
        }


        const newwar = await interaction.client.dbwars.create({
            date: wardate,
            zonename: interaction.options.getString('lugar'),
            enemy: interaction.options.getString('enemigo'),
            guild: interaction.options.getString('gremio'),
        });


		await interaction.reply(` ${wardate}`);

        }
}
