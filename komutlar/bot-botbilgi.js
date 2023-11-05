


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.setThumbnail(``)
.addField("__**Bot Verileri**__", `<:senior:1170436452228800584> **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <:senior:1170436452228800584> **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <:senior:1170436452228800584> **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `<:senior:1170436452228800584> **Bot Sahibi**  \n <a:tac1:1170436500748509345> <@847797279507218443>\n  <a:tac1:1170436500748509345> <@778974052982849567> \n \n\n \ **Bot Geliştiricisi** \n<a:tac1:1170436500748509345> <@847797279507218443>\n <a:tac1:1170436500748509345> <@778974052982849567>  \n  \n\n \n`)
.addField("__**Sürümler**__", `<:senior:1170436452228800584> **Discord.js Sürümü** **|**  **v${Discord.version}** \n<:senior:1170436452228800584> **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<:senior:1170436452228800584> **${client.ws.ping}** ms`,true)
    .setImage(``)
.setColor("#ffd100")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi",
aliases: []
}