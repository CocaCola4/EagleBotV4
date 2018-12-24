module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep) {

      if (msg.channel.type === "dm") {
        msg.react(`❌`)
        msg.channel.send(dmError).then(function(m) {
            sleep(2000)
            m.delete()
        })
        return;
      }

      if (msg.channel.type === "text") {
          msg.react(`✅`)
      }

      msg.channel.send(`Checking Ping. Please Wait.`).then(function(m) {

        m.delete()

        let pingEmbed = new Discord.RichEmbed()
          .setTitle(`EagleBot Ping`)  
          .addField(`Bot Connection:`, `${m.createdTimestamp - msg.createdTimestamp}ms`)
          .addField(`Discord Connection:`, `${bot.ping}ms`)
          .setFooter(names)
          .setColor(msg.member.highestRole.hexColor)
          .setThumbnail(bot.user.avatarURL)

        msg.channel.send(pingEmbed)

      })

      
  
    }
  }
  