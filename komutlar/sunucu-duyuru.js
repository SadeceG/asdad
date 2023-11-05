const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypesquad1:763723597863714857>  **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);

  let question = args.join(' ');

  if (!question) return message.channel.send("Yazı Yazman Gerek").then(m => m.delete(5000));

  // @everyone etiketini ekleyerek mesajı oluştur
  const embed = new Discord.MessageEmbed()
    .setColor("#ffd100")
    .setThumbnail(client.user.avatarURL)
    .setTimestamp()
    .setFooter(message.guild.name, client.user.avatarURL)

    // Duyuru metnini alt satırdan başlat
    .setDescription(`\n${message.guild.name} | DUYURU\n\n**${question}**`);

  message.channel.send(embed).then((msg) => {
    // Mesajı gizlemek için reaksiyon ekleyin
    msg.react('');
  });
};

exports.config = {
  name: 'duyuru',
  aliases: ['duyuru-yap']
};
