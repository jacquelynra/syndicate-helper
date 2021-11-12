const { MessageEmbed } = require('discord.js');
const links = require('./functions/links');

module.exports = {
  name: 'messageCreate',
  async execute(message) {
    
    // Delete message function
    function deleteMessage() {
    message.delete()
    if(message.member.permissions.has('ADMINISTRADOR')) return;
    message.guild.members.ban(message.member.id, { reason:"Scam Link" })
  }
    
    // Catch the Link
    if (links.some(word => message.content.toLowerCase().includes(word))) { // See if the message contains a link 
    deleteMessage() //// Delete message link
  }
    
  }
}
