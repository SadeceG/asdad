const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('MANAGE_MESSAGES')) {
    return message.reply('Bu komutu kullanma izniniz yok.');
  }

  const miktar = parseInt(args[0]);

  if (isNaN(miktar) || miktar < 1 || miktar > 200) {
    return message.reply('Lütfen 1 ile 200 arasında silinecek mesaj miktarı belirtin.');
  }

  message.channel.bulkDelete(miktar)
    .then(messages => message.channel.send(`Başarıyla ${messages.size} adet mesajı sildim.`))
    .catch(error => {
      console.error(`Hata oluştu: ${error}`);
      message.channel.send('Mesajları silerken bir hata oluştu.');
    });
};

exports.config = {
  name: 'temizle',
  aliases: ['sil']
};
