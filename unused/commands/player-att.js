const { SlashCommandBuilder } = require('@discordjs/builders'); // Para los slashs

module.exports = {

// Descripción del modulo

    data: new SlashCommandBuilder()
    .setName('atributo')
    .setDescription('Cambia un atributo de tu perfil.')
	.addStringOption(option =>
		option.setName('att')
			.setDescription('Atributo a cambiar')
			.setRequired(true)
			.addChoice('Nivel', 'charlevel')
			.addChoice('Fuerza', 'fuerza')
			.addChoice('Destreza', 'destreza')
			.addChoice('Inteligencia', 'destreza')
			.addChoice('Concentración', 'concentracion')
			.addChoice('Constitución', 'constitucion')
			.addChoice('Espada y Escudo', 'espada')
			.addChoice('Espada ropera', 'ropera')
			.addChoice('Hachuela', 'hachuela')
			.addChoice('Manopla', 'manopla')
			.addChoice('Bastón Ígneo', 'igneo')
			.addChoice('Bastón Vital', 'vital')
			.addChoice('Lanza', 'lanza')
			.addChoice('Martillo de Guerra', 'martillo')
			.addChoice('Hacha', 'hacha')
			.addChoice('Mosquete', 'mosquete')
			.addChoice('Arco', 'arco')
            )
    .addIntegerOption(option=>
        option.setName('cantidad')
            .setDescription('Cantidad a cambiar')
            .setRequired(true)
    ),
			//.addChoice('Armas', 'armas')
			//.addChoice('Armamento', 'armamento')
			//.addChoice('Ingeniería', 'ingenieria')
			//.addChoice('Joyería', 'joyeria')
			//.addChoice('Arcano', 'arcano')
			//.addChoice('Cocina', 'cocina')
			//.addChoice('Decoración', 'decoracion')
			//.addChoice('Fundición', 'fundicion')
			//.addChoice('Carpintería', 'carpineria')
			//.addChoice('Curtido', 'curtido')
			//.addChoice('Tejido', 'tejido')
			//.addChoice('Cantería', 'canteria')
			//.addChoice('Talado', 'talado')
			//.addChoice('Minería', 'mineria')
			//.addChoice('Pesca', 'pesca')
			//.addChoice('Desollamiento', 'desollamiento')

    async execute(interaction) {

	    console.log(`${interaction.user.tag} en el canal de #${interaction.channel.name} triggereó la interación de estilo (${interaction.options.getString('att')}). `);

        const UserData = await interaction.client.dbusers.findOne({ where: { discordid: interaction.user.id } });
        if (!UserData) {
            return interaction.editReply(`No se pudo encontrar el perfil. Crealo con /crearperfil`);
        }
        const attribute = interaction.options.getString('att');
        const integer = interaction.options.getInteger('cantidad');

        await interaction.client.dbusers.update({ [attribute]: integer }, {where: {discordid: interaction.user.id}});
                                                            
        // En vez de tirar la respuesta de una, primero le decimos al Discord de que existimos. [Si no responde en los primeros 3 seg, Discord lo da por perdido.]
		await interaction.reply(`¡Ahora tu ${interaction.options.getString('att')} en tu perfil es de ${interaction.options.getInteger('cantidad')}!`);

        }
}
