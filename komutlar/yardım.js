const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix;
  let eklenti = new Discord.MessageEmbed()
    .setAuthor(`BT-A Bot Yardım Menüsü`, client.user.avatarURL())
    .setColor('#ffd100')
    .setDescription(`<:5508discordstagechannel:1170421387819749457> BT-A botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
    .addField(`__Genel Komutlar__`, `<:3149blurplerules:1170421373965967432> \`${prefix}genel\``, true)
    .addField(`__Mod Komutları__`, `<a:haydaa:1170424404287701033> \`${prefix}moderasyon\``, true)
    .addField(`__Prefix Değiştir__`, `<a:cubugk:1170424561116905552> \`${prefix}prefix\``, true)
    .addField(`__Kayıt Sistemi__`, `<:BelgePng:1170424767271149568> \`${prefix}kayıtsistemi\``, true)
    .addField(`__Oto Cevap Sistemi__`, `<:9098blurpleannouncements:1170421437446766602> \`${prefix}otocevap\``, true)
    .addField(`__Bilgilendirme__`, `<:6055blurpleinvite:1170421400369102909> \`${prefix}davet\` | BTA-yı Sunucunuza Davet Edersiniz\n<:7235bot:1170421434644967575> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir\n<:1520blurplesettings:1170421432002555914> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
    .setImage(``)
    .setThumbnail(client.user.avatarURL);

  message.channel.send(eklenti);
};

exports.config = {
  name: "yardım",
  aliases: []
}
