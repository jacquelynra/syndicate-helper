const { MessageAttachment, MessageEmbed } = require('discord.js');
const Canvas = require("canvas"); // Para editar la imagen, TODO: pasarlo todo esto a un modulo

module.exports = {
	name: 'guildMemberAdd',
	async execute(member) {
        if(!member.guild) return;
        const canalId = "879525793028534326"
        const canvas = Canvas.createCanvas(1000, 500);
        const ctx = canvas.getContext('2d');
    
        const bg = await Canvas.loadImage(`./images/welcome.png`);
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    
        ctx.fillStyle = "#ffffff"
        ctx.shadowColor="black";
        ctx.shadowBlur=7;
        ctx.textAlign = 'center';
        
        ctx.font = "60px Alata"
        ctx.fillText(`Bienvenid@`, 500, 230)
        ctx.font = "105px Alata"
        ctx.fillText(`${member.user.username}`, 500, 290)
    
        ctx.beginPath()
        ctx.arc(500, 400, 64, 0, Math.PI * 2, false)
        ctx.closePath()
        ctx.clip()
    
        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));

        //draw the avatar
        ctx.drawImage(avatar, 435, 336, 128, 128);
        
        const file = new MessageAttachment(canvas.toBuffer(), 'bienvenida.png');
    
        const embed = new MessageEmbed()
        .setColor('#7053bf')
        .setAuthor(`Mensaje de bienvenida`, member.user.displayAvatarURL({ format: 'jpg' }))
        .setTitle(`Estás en el Discord de la facción Sindicato (Tuma)`)
        .setDescription('Pero antes de poder ver todos los canales, debes VERIFICARTE.\n- Para ello, ve a <#893481701135757332> y crea un ticket.\n- Deberás publicar una screenshot de la selección de personaje o de tu biografía, así sabemos que estás en la facción de Sindicato.\n- Deberás esperar unos minutos a que un moderador lo vea. Según la hora, puede que tarde un poco el proceso de verificación.\n\n¡Esperamos que la pases bien!')
        .setImage('attachment://bienvenida.png');

        //const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'perfil.png');
        const channel = member.guild.channels.cache.find(ch => ch.id === "879525793028534326");
        channel.send({ embeds: [embed], files: [file] });

}
}