const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send("Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın.");
  }

  const verilecekRol = message.mentions.roles.first();
  if (!verilecekRol) {
    return message.channel.send("Lütfen verilecek rolü belirtin: `!verilecek-rol @rol`");
  }

  db.set(`verilecekRol_${message.guild.id}`, verilecekRol.id);
  message.channel.send(`Verilecek rol başarıyla ayarlandı: ${verilecekRol}`);
};

exports.config = {
  name: "verilecek-rol",
  aliases: ["verilecekrol", "ver-rol"]
};
