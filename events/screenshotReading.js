const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const sizeOf = require('image-size')
const fetch = require('node-fetch');
const {weaponocr, attocr} = require('../functions/profile-generator');


module.exports = {
	name: 'messageCreate',
	async execute(message) {
        if(message.guildId == "879525793028534323" && message.channelId == "895021117058740335" && message.attachments.size > 0 && !message.author.bot == true){ //

            var start = performance.now();
            var roundedStart = Math.round(start);

            var imageURL = message.attachments.first().url;
            
            const response = await fetch(imageURL);
            const buffer = await response.buffer();
            const dimensions = sizeOf(buffer)

            // Si no es 16/9, no nos sirve
            if(dimensions.width/dimensions.height !== 16/9) {
                console.log(imageURL)
                var end = performance.now();
                var roundedEnd = Math.round(end);

                const embed = new MessageEmbed()

                .setColor('#6F1A07')
                .setTitle('Error con la imagen')
                .setDescription('La imagen tiene que ser 16:9, y no debe estar recortada.')
                .setFooter(`Tarea terminada en ${roundedEnd - roundedStart} ms`);

                await message.channel.send({embeds: [embed]})    
            }
            
            else{
                console.log(imageURL)
                var end = performance.now();
                var roundedEnd = Math.round(end);
         
                const embed = new MessageEmbed()

                .setColor('#1565C0')
                .setTitle('Selecciona que tipo de imagen es')
                .setDescription('Tienes 60 segundos para contestar. Después de eso, ambos mensajes serán eliminados')
                .setFooter(`Tarea terminada en ${roundedEnd - roundedStart} ms`);

                const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('1')
                        .setLabel('Maestría')
                        .setStyle('PRIMARY')
                        .setEmoji('1️⃣'),
                );
                //.addComponents(
                //    new MessageButton()
                //        .setCustomId('2')
                //        .setLabel('Oficios')
                //        .setStyle('PRIMARY')
                //        .setEmoji('2️⃣'),
                //)
                //.addComponents(
                //    new MessageButton()
                //        .setCustomId('3')
                //        .setLabel('Atributos')
                //        .setStyle('PRIMARY')
                //        .setEmoji('3️⃣'),
                //)
                //.addComponents(
                //    new MessageButton()
                //        .setCustomId('4')
                //        .setLabel('Biografía')
                //        .setStyle('PRIMARY')
                //        .setEmoji('4️⃣'),
                //);

                const msg = await message.channel.send({embeds: [embed], components: [row]})
                
                const collector = msg.createMessageComponentCollector({ componentType: 'BUTTON', time: 60000 });

                collector.on('collect', i => {
                    if (i.user.id === message.author.id) {
                        collector.stop();
                        i.deferUpdate();
                        async function process(id) {
                            switch(id){
                                case "1":
                                    var end = performance.now();
                                    var roundedEnd = Math.round(end);
                                
                                    const embed = new MessageEmbed()

                                    .setColor('#1565C0')
                                    .setTitle('Procesando imagen')
                                    .setDescription('Puede tardar unos segundos...')
                                    .setFooter(`Tarea terminada en ${roundedEnd - roundedStart} ms`);
                                    
                                    msg.edit({embeds:[embed], components:[]});
                                    
                                    const result = await weaponocr(buffer);

                                    var end = performance.now();
                                    var roundedEnd = Math.round(end);
                        
                                    const attembed = new MessageEmbed()
                                    .setColor('#0099ff')
                                    .setTitle('Atributos que pude conseguir')
                                    .setDescription('Puede ser que alguno de los atributos sea incorrecto, el más destacado es el arco y flecha.\nEn el caso de que haya uno o dos datos incorrectos, puedes aprobar la edición y re-editar tus atributos con /atributo [arco] [nivel].')
                                    .addFields(
                                        { name: 'Armas de una mano', value: `<:Espada:896118541697290330> Espada: ${result[0]}\n<:EspadaRopera:896118541026226198> Espada ropera: ${result[1]}\n<:Hachuela:896118541659553832> Hachuela: ${result[2]}`, inline: true },
                                        { name: 'Armas de dos manos', value: `<:Lanza:896118541718286396> Lanza: ${result[3]}\n<:GranHacha:896118541458239498> Gran Hacha: ${result[4]}\n<:GranMartillo:896118541131055154> Martillo de Guerra: ${result[5]}`, inline: true },
                                        { name: 'Armas de ataque a distancia', value: `<:Arco:896118541332402236> Arco y Flecha: ${result[6]}\n<:Mosquete:896118541546295327> Mosquete: ${result[7]}`, inline: true },
                                        { name: 'Mágicos', value: `<:BastonVital:896118541571481672> **Bastón Vital**: ${result[8]}\n<:BastonIgneo:896132664568995920> **Bastón Ígneo**: ${result[9]}\n<:Manopla:896118541256884276> **Manopla**: ${result[10]}`, inline: true },
                                    )
                                    .setFooter(`Tarea terminada en ${roundedEnd - roundedStart} ms`);
                                
                                    const attbuttons = new MessageActionRow()
                                        .addComponents(
                                            new MessageButton()
                                                .setCustomId('1')
                                                .setLabel('Está bien')
                                                .setStyle('PRIMARY')
                                                .setEmoji('✅'),
                                        )
                                        .addComponents(
                                            new MessageButton()
                                                .setCustomId('2')
                                                .setLabel('Eliminar')
                                                .setStyle('DANGER')
                                                .setEmoji('🚫'),
                                        );
                        
                                        msg.edit({ embeds: [attembed], components: [attbuttons] });

                                        const collector2 = msg.createMessageComponentCollector({ componentType: 'BUTTON', time: 60000 });
                                        collector2.on('collect', i => {
                                            if (i.user.id === message.author.id) {
                                                collector2.stop();
                                                i.deferUpdate();
                                                async function saveone(id){
                                                    switch(id){
                                                        case "1":
                                                            await message.client.dbusers.update({ espada:result[0], ropera:result[1],hachuela:result[2],lanza:result[3],hacha:result[4],martillo:result[5],arco:result[6],mosquete:result[7],vital:result[8],igneo:result[9], manopla:result[10]}, {where: {discordid: message.author.id}});
                                                            
                                                            var end = performance.now();
                                                            var roundedEnd = Math.round(end);
                                                            const embed = new MessageEmbed()

                                                            .setColor('#1565C0')
                                                            .setTitle('Perfil actualizado')
                                                            //.setDescription('Puede tardar unos segundos...')
                                                            .setFooter(`Tarea terminada en ${roundedEnd - roundedStart} ms`);
                                                            
                                                            msg.edit({embeds:[embed], components:[]});
                                                            setTimeout(function(){
                                                                message.delete();
                                                                msg.delete();
                                                            }, 15000);
                                                        break;

                                                        default:
                                                            message.delete();
                                                            msg.delete();
                                                            
                                                        break;
                                                        
                                                    }
                                                }
                                                saveone(i.customId);
                                            }
                                            else {
                                                i.reply({ content: `¡Solo el autor original puede clickear los botones!`, ephemeral: true });
                                            }
                                        });
                                        collector2.on('end', collected2 => {
                                            if (!collected2.some(collected2 => collected2.user.id === message.author.id)){
                                                message.delete();
                                                msg.delete();
                                            }
                                        });


                                break;

                                
                                case "2":
                                    var end = performance.now();
                                    var roundedEnd = Math.round(end);
                                
                                    const embed2 = new MessageEmbed()

                                    .setColor('#1565C0')
                                    .setTitle('Procesando imagen')
                                    .setDescription('Puede tardar unos segundos...')
                                    .setFooter(`Tarea terminada en ${roundedEnd - roundedStart} ms`);
                                    
                                    msg.edit({embeds:[embed2], components:[]});
                                    
                                    const result2 = await attocr(buffer);

                                    var end = performance.now();
                                    var roundedEnd = Math.round(end);
                        
                                    const attembed2 = new MessageEmbed()
                                    .setColor('#0099ff')
                                    .setTitle('Atributos que pude conseguir')
                                    .setDescription('Puede ser que alguno de los atributos sea incorrecto, el más destacado es el arco y flecha.\nEn el caso de que haya uno o dos datos incorrectos, puedes aprobar la edición y re-editar tus atributos con /atributo [arco] [nivel].')
                                    .addFields(
                                        { name: 'Atributos', value: `Fuerza: ${result2[0]}\nDestreza: ${result2[1]}\nInteligencia: ${result2[2]}\nConcentración: ${result2[3]}\nConstitución: ${result2[4]}\nNivel: ${result2[5]}`, inline: true },
                                    )
                                    .setFooter(`Tarea terminada en ${roundedEnd - roundedStart} ms`);
                                
                                    const attbuttons2 = new MessageActionRow()
                                        .addComponents(
                                            new MessageButton()
                                                .setCustomId('1')
                                                .setLabel('Está bien')
                                                .setStyle('PRIMARY')
                                                .setEmoji('✅'),
                                        )
                                        .addComponents(
                                            new MessageButton()
                                                .setCustomId('2')
                                                .setLabel('Eliminar')
                                                .setStyle('DANGER')
                                                .setEmoji('🚫'),
                                        );
                        
                                        msg.edit({ embeds: [attembed2], components: [attbuttons2] });

                                        const collector3 = msg.createMessageComponentCollector({ componentType: 'BUTTON', time: 60000 });
                                        collector3.on('collect', i => {
                                            if (i.user.id === message.author.id) {
                                                collector3.stop();
                                                i.deferUpdate();
                                                async function saveone(id){
                                                    switch(id){
                                                        case "1":
                                                            await message.client.dbusers.update({ espada:result[0], ropera:result[1],hachuela:result[2],lanza:result[3],hacha:result[4],martillo:result[5],arco:result[6],mosquete:result[7],vital:result[8],igneo:result[9], manopla:result[10]}, {where: {discordid: message.author.id}});
                                                            
                                                            var end = performance.now();
                                                            var roundedEnd = Math.round(end);
                                                            const embed = new MessageEmbed()

                                                            .setColor('#1565C0')
                                                            .setTitle('Perfil actualizado')
                                                            //.setDescription('Puede tardar unos segundos...')
                                                            .setFooter(`Tarea terminada en ${roundedEnd - roundedStart} ms`);
                                                            
                                                            msg.edit({embeds:[embed], components:[]});
                                                            setTimeout(function(){
                                                                message.delete();
                                                                msg.delete();
                                                            }, 15000);
                                                        break;

                                                        default:
                                                            message.delete();
                                                            msg.delete();
                                                            
                                                        break;
                                                        
                                                    }
                                                }
                                                saveone(i.customId);
                                            }
                                            else {
                                                i.reply({ content: `¡Solo el autor original puede clickear los botones!`, ephemeral: true });
                                            }
                                        });
                                        collector3.on('end', collected2 => {
                                            if (!collected2.some(collected2 => collected2.user.id === message.author.id)){
                                                message.delete();
                                                msg.delete();
                                            }
                                        });


                                break;

                                default:
                                    var end = performance.now();
                                    var roundedEnd = Math.round(end);
                                
                                    const errorEmbed = new MessageEmbed()

                                    .setColor('#6F1A07')
                                    .setTitle('Sin implementar')
                                    .setFooter(`Tarea terminada en ${roundedEnd - roundedStart} ms`);
                                    
                                    msg.edit({embeds:[errorEmbed], components:[]});

                            }
                        }
                        process(i.customId);
                    } else {
                        
                        i.reply({ content: `¡Solo el autor original puede clickear los botones!`, ephemeral: true });

                    }
                });
                
                collector.on('end', collected => {
                    if (!collected.some(collected => collected.user.id === message.author.id)){
                        message.delete();
                        msg.delete();

                    }
                });
                
            }
            
        }
	},
};