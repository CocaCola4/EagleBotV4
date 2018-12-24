module.exports = {

    run: function(bot, config, msg, Discord) {
  
        var args = msg.content.split(" ").slice(1);
        let content = args.join(" ")

        if(msg.author.bot) {
            return;
        }

        let logEmbed = new Discord.RichEmbed()
            .setTitle(`Message Deleted in #${msg.channel.name}`)
            .setDescription(`Sent by ${msg.author.tag}`)
            .addField(`Content:`, `"${msg.content}"`)
            .setFooter(`Message ID: ${msg.id}`)
            .setColor(`#ff0000`)

        var logchannel = msg.guild.channels.find('name', 'logs');
        if (!logchannel) return;
        logchannel.send(logEmbed)
  
    }
  
  }
