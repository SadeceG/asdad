const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send("Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın.");
  }

  const logKanal = message.mentions.channels.first();
  if (!logKanal) {
    return message.channel.send("Log kanalını ayarlayabilmek için bir kanal etiketlemelisin: `!log-kanal-ayarla #logKanal`");
  }

  db.set(`kayitLog_${message.guild.id}`, logKanal.id);
  message.channel.send(`Log kanalı başarıyla ayarlandı: ${logKanal}`);

  // Kayıt işlemi
  // Burada kayıt işlemini yapabilirsiniz

  // Kayıt işlemi başarılı olduğunda log kanalına mesaj gönder
  const tarih = new Date();
  logKanal.send(`:scroll: <@${message.author.id}> için kayıt işlemi başarıyla tamamlandı. :clipboard:\nTarih: ${tarih.toISOString()}`);
};

exports.config = {
  name: "log-kanal-ayarla",
  aliases: ["logkanalayarla", "log-kanal", "logayarla"]
};
