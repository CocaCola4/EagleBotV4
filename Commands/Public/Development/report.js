module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep) {

        if (suffix) {
            msg.react(`✅`)
        } 
        
        if (!suffix) {
            msg.react(`❌`)
            msg.channel.send(sfError).then(function(m) {
                sleep(2000)
                m.delete()
            })
            return;
        }
        
        const bug_hook = new Discord.WebhookClient('id', 'token')

        let bugEmbed = new Discord.RichEmbed()
            .setTitle(`New Bug Report!`)
            .setDescription(`Reported by: ${msg.author.tag}`)
            .addField(`Report Content:`, suffix)
            .setFooter(names)
            .setThumbnail(bot.user.avatarURL)
            .setColor(`#dd9494`)
        
        bug_hook.send(bugEmbed)

      
  
    }
  }
  