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

        if (msg.channel.type === "text") {
            let makeEmbed = new Discord.RichEmbed()
                .setAuthor(msg.author.tag, msg.author.avatarURL, null)
                .setDescription(suffix)
                .setColor(msg.member.highestRole.hexColor)

            msg.channel.send(makeEmbed)
            msg.delete()
            return;
        }

        if (msg.channel.type === "dm") {
            let makeEmbed2 = new Discord.RichEmbed()
                .setAuthor(msg.author.tag, msg.author.avatarURL, null)
                .setDescription(suffix)
                msg.delete()
                .setColor(`#ffffff`)

            msg.channel.send(makeEmbed2)
            return;
        }

    }
  
  
  }
  