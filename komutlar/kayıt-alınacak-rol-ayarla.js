const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send("Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın.");
  }

  const alinacakRol = message.mentions.roles.first();
  if (!alinacakRol) {
    return message.channel.send("Lütfen alınacak rolü belirtin: `!alinacak-rol @rol`");
  }

  db.set(`alinacakRol_${message.guild.id}`, alinacakRol.id);
  message.channel.send(`Alınacak rol başarıyla ayarlandı: ${alinacakRol}`);
};

exports.config = {
  name: "alinacak-rol",
  aliases: ["alinacakrol", "al-rol"]
};
