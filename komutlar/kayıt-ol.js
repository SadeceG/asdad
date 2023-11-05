const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  const isimSistemi = await db.fetch(`isimsistemi_${message.guild.id}`);
  const kayitAR = await db.fetch(`kayitAR_${message.guild.id}`);
  const kayitVR = await db.fetch(`kayitVR_${message.guild.id}`);
  const kayitLog = await db.fetch(`kayitLog_${message.guild.id}`);

  if (!isimSistemi || !kayitAR || !kayitVR || !kayitLog) {
    return message.channel.send("Kayıt sistemi kapalı.");
  }

  let logKanal = message.guild.channels.cache.get(kayitLog);

  if (!logKanal) {
    return message.channel.send("Kayıt log kanalı ayarlanmamış.");
  }

  if (!isimSistemi.includes("-uye-")) {
    let isim = args[0];
    if (!isim) return message.channel.send(`Kayıt olabilmek için bir isim girmelisin: \`!kayıt-ol Utku\``);

    message.reply(`Kaydınız başarıyla oluşturuldu.`);
    message.member.setNickname(isimSistemi.replace("-uye-", isim));
    message.member.roles.remove(kayitAR);
    message.member.roles.add(kayitVR);

    const tarih = new Date();
    logKanal.send(`:scroll: <@${message.author.id}> için kayıt işlemi başarıyla tamamlandı. :clipboard:\nTarih: ${tarih.toISOString()}`);
  } else {
    let isim = args[0];
    let yas = args[1];
    if (!isim || !yas) {
      return message.channel.send(`Kayıt olabilmek için bir isim ve yaş girmelisin: \`!kayıt-ol Utku 17\``);
    }

    message.reply(`Kaydınız başarıyla oluşturuldu.`);
    message.member.setNickname(isimSistemi.replace("-uye-", isim).replace("-yas-", yas));
    message.member.roles.remove(kayitAR);
    message.member.roles.add(kayitVR);

    const tarih = new Date();
    logKanal.send(`:scroll: <@${message.author.id}> için kayıt işlemi başarıyla tamamlandı. :clipboard:\nTarih: ${tarih.toISOString()}`);
  }
};

exports.config = {
  name: "kayıt-ol",
  aliases: ["kayıtol", "k", "kayit", "kaydol"]
};
