module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep) {

        msg.react(`✅`)

        var ulog = new Discord.RichEmbed()
            .setTitle(`EagleBot Update Logs`)
            .setDescription(`v4.3.3 (11/21/18)`)
            .addField(`Overall Notes:`, `EagleBot v4.3.3: End of Support`)
            .addField(`Basic Commands Updates:`, `Removed support for report, suggest, and other webhook related things`)
            .addField(`Music Commands Updates:`, `Will be open sourced soon: see https://github.com/TheMegaEagle/EagleBot-Music`)
            .addField(`Fun Commands Updates:`, `Spam ping is fixed`)
            .addField(`Moderation Commands Updates:`, `Nothing much`)
            .addField(`User Commands Updates:`, `No changes`)
            .addField(`Other Changes:`, `Support has officially been ended!`)
            .setFooter(names)
            .setThumbnail(bot.user.avatarURL)
            .setColor(`#703000`)
            .setImage(`https://cdn.discordapp.com/attachments/312680914096488448/514867458008416277/EB431.png`)

        msg.author.send(ulog)

    }
  
  
  }
  