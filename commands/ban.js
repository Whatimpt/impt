const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You must have Administrator permission!");
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be banned because  he is an Administrator!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "mod-log");
    if(!incidentchannel) return message.channel.send("Can't find mod-log channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);

    message.delete().catch(O_o=>{});
}

module.exports.help = {
  name:"ban"
}
