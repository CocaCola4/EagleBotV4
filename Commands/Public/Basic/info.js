module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep) {

        let infoEmbed = new Discord.RichEmbed()
            .setTitle(`EagleBot Statistics:`)
            .addField(`Support:`, `Server: https://discord.gg/Efg5dGp`)
            .addField(`Server Count:`, `${bot.guilds.size}`)
            .addField(`User Count:`, `${bot.users.size}`)
            .addField(`Last Updated:`, `${bot.readyAt}`)
            .addField(`Version Number:`, `v4.3.3 (11/21/18)`)
            .setFooter(names)
            .setThumbnail(bot.user.avatarURL)
            .setColor(`#4286f4`)

        msg.channel.send(infoEmbed)

    }
  
  }
  