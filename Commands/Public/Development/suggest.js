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


        const suggest_hook = new Discord.WebhookClient('466715985752227851', '98G8HB1RlSlQ2yoDrNgi-Ms3LI8Be7u5-0StuCIYjB50uTWI-7xJf8Du-T40w4TGvcyj')

        let suggestEmb = new Discord.RichEmbed()
            .setTitle(`New Suggestion!`)
            .setDescription(`Suggested by: ${msg.author.tag}`)
            .addField(`Suggestion:`, suffix)
            .setFooter(names)
            .setThumbnail(bot.user.avatarURL)
            .setColor(`#b8e5b7`)
        
        suggest_hook.send(suggestEmb)

        
      
  
    }
  }
  