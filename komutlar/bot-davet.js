const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("#ffd100")
.setAuthor(`BT-A Discord'u Davet Et`, client.user.avatarURL())
.setDescription('<a:mod:1170424563239243918> **• [BT-A`yı Ekleyin.](https://discord.com/oauth2/authorize?client_id=1170393308326006804&scope=bot&permissions=27648852030)**\n')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };