  
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`BT-A Bot Genel Komutlar`, client.user.avatarURL())
.addField(`__Komut Sayısı__`,`<:hypesquad1:1170421377833119764> \`${prefix}komutlar\` Botun Komut Sayısını Gösterir`,true)
.addField(`__Davet Et__`,`<:hypesquad1:1170421377833119764> \`${prefix}davet\` Botumuzu Davet Edersiniz`,true)
.addField(`__Bot Bilgi__`,`<:hypesquad1:1170421377833119764> \`${prefix}botbilgi\` Botumuzun İstatistikleri`,true)
.addField(`__Profil__`,`<:hypesquad1:1170421377833119764> \`${prefix}profil\` Kullanıcı Profilinizi Gösterir`,true)
.addField(`__Oylama__`,`<:hypesquad1:1170421377833119764> \`${prefix}oylama\` Sunucuda Oylama Başlatır`,true)
.addField(`__Duyuru__`,`<:hypesquad1:1170421377833119764> \`${prefix}duyuru\` Sunucuda Duyuru Yapar`,true)
.addField(`__Bilgilendirme__`,`<:hypesquad1:1170421377833119764> \`${prefix}davet\` | BT-A'yI Sunucunuza Davet Edersiniz\n<:hypesquad1:1170421377833119764> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n<:hypesquad1:1170421377833119764> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(``)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "genel",
  aliases: []
}
