const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Server ID", message.guild.id)
    .addField("Created On", `${moment.utc(message.guild.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
    .addField("You Joined", `${moment.utc(message.member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
    .addField("Total Members", message.guild.memberCount)
    
    .addField("Owner", message.guild.owner);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
