module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep) {


        let userEmbed = new Discord.RichEmbed()
            .setTitle(`Invite EagleBot to your Server!`)
            .addField(`Stable Bot Invite:`, `https://discordapp.com/oauth2/authorize?client_id=456563804088565779&scope=bot&permissions=8`)
            .addField(`Development Bot Invite (Rarely will be online):`, `https://discordapp.com/api/oauth2/authorize?client_id=463383934516985866&permissions=8&scope=bot`)
            .setFooter(names)
            .setThumbnail(bot.user.avatarURL)
            .setColor(`#4286f4`)

        msg.author.send(userEmbed)

        msg.react(`✅`)

    }
  
  }
  