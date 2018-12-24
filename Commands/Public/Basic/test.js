module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep) {

        let testEmbed = new Discord.RichEmbed()
            .setTitle(`EagleBot Connection Test`)
            .setDescription(`The bot is still alive and going 👌`)
            .setFooter(names)
            .setThumbnail(bot.user.avatarURL)
            .setColor(`#4286f4`)

        msg.channel.send(testEmbed)

    }
  
  }
  