const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix;
  let eklenti = new Discord.MessageEmbed()
    .setColor('#ffd100')
    .setAuthor(`Pirate Eklenti Komutları`, client.user.avatarURL())
    .setDescription(`Pirate botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
    .addField("Kanal Ayarla", `<:nokta1:1170425958499631214> \`${prefix}kayıt-kanal-ayarla\` - Kayıt Ol Komutunun Kullanılacağı Kanalı Belirler`, true)
    .addField("Kayıt Log", `<:nokta1:1170425958499631214> \`${prefix}kayıt-log-kanal-ayarla\` - Kayıt Ol Komutunun Denetim Kaydı Kanalını Belirler`, true)
    .addField("Kayıt Ol", `<:nokta1:1170425958499631214> \`${prefix}kayıt-ol\` - Kayıt Kanalında Kayıt Olmanızı Sağlar`, true)
    .addField("Verilecek Rol", `<:nokta1:1170425958499631214> \`${prefix}kayıt-verilecek-rol-ayarla\` - Kayıt Ol Komutunu Kullandıktan Sonra Verilecek Rolü Belirler`, true)
    .addField("Alınacak Rol", `<:nokta1:1170425958499631214> \`${prefix}kayıt-alınacak-rol-ayarla\` - Kayıt Ol Komutunu Kullandıktan Sonra Alınacak Rolü Belirler`, true)
    .addField("Giriş Sistemi", `<:nokta1:1170425958499631214> \`${prefix}giriş-sistemi\` - Kayıt Kanalına Atılacak Mesajı Ayarlar`, true)
    .addField("İsim Sistem", `<:nokta1:1170425958499631214> \`${prefix}isim-sistem\` - Kayıt Ol Komutunu Kullandıktan Sonra Verilecek İsmi Belirler`, true)
    .addField("Kayıt Sistemi Kapat", `<:nokta1:1170425958499631214> \`${prefix}kayıt-sistemi-kapat\` - Kayıt Sistemini Tamamen Kapatır`, true)
    .setImage("")
    .setThumbnail(client.user.avatarURL);
  message.channel.send(eklenti);
};

exports.config = {
  name: "kayıtsistemi",
  aliases: []
};
