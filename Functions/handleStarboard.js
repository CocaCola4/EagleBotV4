module.exports = {

    run: function(bot, config, reaction, Discord) {
  
        if (reaction.emoji.name === '⭐') {
            const guild = reaction.message.guild
            const rmsg = reaction.message.content
            const msg = reaction.message
        
            if (msg.channel.type === "dm") {
              msg.author.send(otError)
              msg.react(`❌`)
              return;
            }
        
        
            if (msg.reactions.count === 2) {
        
                var stchannel = guild.channels.find('name', 'starboard');
                if (!stchannel) return;
        
                var newStMsg = new Discord.RichEmbed()
                    .setTitle(`${msg.author.tag}`)
                    .setDescription(`New Starred Message!`)
                    .setFooter(`Channel: ${msg.channel.name}, Message ID: ${msg.id}`)
                    .addField(`Content:`, `${rmsg}`)
                    .setThumbnail(msg.author.avatarURL)
                    .setColor(`#ffd800`)
        
        
                stchannel.send(newStMsg)
        
            }
          }
        
    }
  
  }