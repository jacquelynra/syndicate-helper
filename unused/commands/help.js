const { SlashCommandBuilder } = require('@discordjs/builders'); // Para los slashs
const { MessageEmbed } = require('discord.js');

module.exports = {

// Descripción del modulo

    data: new SlashCommandBuilder()
    .setName('ayuda')
    .setDescription('Lista de los comandos disponibles del servidor.')
	.addSubcommand(subcommand =>
		subcommand
			.setName('usuario')
			.setDescription('Comandos relacionado a los usuarios.'))
	.addSubcommand(subcommand =>
		subcommand
			.setName('guerra')
			.setDescription('Comandos relacionados a la guerra.'))
	.addSubcommand(subcommand =>
		subcommand
			.setName('moderacion')
			.setDescription('Comandos relacionados a la moderación.')),
    
    async execute(interaction) {
        const staffemoji = "<:sindicato:896792670503063555>";
        console.log(`${interaction.user.tag} en el canal de #${interaction.channel.name} triggereó la interación de ayuda. `);

        switch (interaction.options.getSubcommand()) {
            case 'usuario':
                const playerembed = new MessageEmbed()
                .setColor('#0099ff')
                .setAuthor(`Lista de comandos relacionados a los usuarios`, `https://i.imgur.com/II6w3ZT.png`)
                .addFields(
                    {name: '/ayuda',                            value: 'Muestra este menú, que conveniente.'},
                    {name: '/crearperfil',                      value: 'Con este comando, crearas tu propio perfil. Necesitas usar este comando para acceder a algunas funciones.'},
                    {name: '/perfil *[usuario]*',               value: 'Mira tu propio perfil o el perfil de alguien más.'},
                    {name: '/atributo *[atributo]* *[valor]*',  value: 'Modifica un valor de tu perfil manualmente. Tenemos un canal donde bot que podría hacerlo por ti con capturas de pantalla.'},
                    {name: '/ranking',                          value: 'Mira el ranking de usuarios del servidor separado por niveles y por puntaje en la guerra.'},
                    {name: '/invitar *[usuario]*',              value: 'Los lideres de compañías pueden darle el rol de la compañía a sus miembros.'},
                );
                await interaction.reply({ embeds: [playerembed] })
                break;

            case 'guerra':
                const warembed = new MessageEmbed()
                .setColor('#0099ff')
                .setAuthor(`Lista de comandos relacionados a las guerras`, `https://i.imgur.com/II6w3ZT.png`)
                .addFields(
                    { name: '/listaguerras *[todas/activas]*',                                    value: 'Muestra una lista de guerras activas o guerras historicas.'},
                    { name: '/participar *[id]*',                                                 value: 'Participa en una guerra. Si hay más de una, debes poner la id como argumento'},
                    { name: '/grupos *[id]*',                                                     value: 'Muestra los grupos de una guerra activa. Si hay más de una, debes poner la id como argumento. Se pueden ver los grupos de guerras pasadas.'},
                    { name: `${staffemoji} /crearguerra *[lugar]* *[hora]*`,                      value: 'Crea una nueva guerra en la base de datos.'},
                    { name: `${staffemoji} /confirmar *[usuario]* *[grupo]*`,                     value: 'Confirma la participación de un usuario en la guerra.'},
                    { name: `${staffemoji} /retirar *[usuario]*`,                                 value: 'Retira a alguien de la guerra.'},
                    { name: `${staffemoji} /notificar *[todos/grupo/usuario]* *[grupo/usuario]*`, value: 'Notifica a los usuarios de la guerra, y de como inscribirse en el juego. Cooldown de media hora.'},
                    { name: '\u200b',                                                             value: `${staffemoji} *Solo lo puede usar el staff.*`},
                 );
                await interaction.reply({ embeds: [warembed] })
                break;

            case 'moderacion':
                    const modembed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setAuthor(`Lista de comandos relacionados a la moderación`, `https://i.imgur.com/II6w3ZT.png`)
                    .addFields(
                        { name: '/verificar *[usuario] [nombre in-game]*',          value: 'Verifica a un usuario, dandole el rol y cambiandole el apodo.'},
                        { name: '/globalperfil *[usuario]*',                        value: 'Devuelve el perfil de un jugador de manera global.'},
                        { name: '/compania nueva *[nombre] [lider]*',               value: 'Crea una nueva compañía, con sus respectivos roles.'},
                        { name: '/compania nombre *[id] [nombre nuevo]*',           value: 'Cambia el nombre de una compañía.'},
                        { name: '/compania agregarmiembro *[id] [usuario]*',        value: 'Agrega un miembro a una compañía existente.'},
                        { name: '/compania eliminar *[id]*',                        value: 'Elimina una compañía.'},
                        { name: '/compania lista',                                  value: 'Lista de todas las compañías existentes.'},
                    );
                await interaction.reply({ embeds: [modembed] })
                break;
        }

        }
}
