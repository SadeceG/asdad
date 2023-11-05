const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix;
  let eklenti = new Discord.MessageEmbed()
    .setColor('#ffd100')
    .setAuthor(`BT-A Oto Cevap Komutları`, client.user.avatarURL())
    .setDescription(`
    <:diamond63:1170467558319734795> \`${prefix}otocevap-ekle\` Sunucunuza Özel Komut Eklemenize Yarar.
    <:diamond63:1170467558319734795> \`${prefix}otocevap-liste\` Sunucunuzdaki Özel Komutların Listesini Gösterir.
    <:diamond63:1170467558319734795> \`${prefix}otocevap-sil\` Sunucunuzdaki Özel Komutu Siler.
    `)
    .setImage('')
    .setThumbnail(client.user.avatarURL);
  
  message.channel.send(eklenti);
};

exports.config = {
  name: "otocevap",
  aliases: []
};
