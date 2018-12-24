module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep) {

        let basicsEmbed = new Discord.RichEmbed()
            .setTitle(`Basic Commands:`)
            .addField(`${config.prefix}help`, `Sends a list of commands that you can run with EagleBot.`)
            .addField(`${config.prefix}invite`, `Sends both links you can invite EagleBot to your server with, Stable and Development.`)
            .addField(`${config.prefix}info`, `Sends some EagleBot statistics if you are interested in those.`)
            .addField(`${config.prefix}ping`, `Checks the connection to the server and the connection to discord.`)
            .addField(`${config.prefix}test`, `Tests to see if the bot is responding.`)
            .setFooter(names)
            .setThumbnail(bot.user.avatarURL)
            .setColor(`#4286f4`)

        msg.author.send(basicsEmbed)

        let devEmbed = new Discord.RichEmbed()
            .setTitle(`Development Commands:`)
            .addField(`${config.prefix}updates`, `Gives the latest EagleBot Update information.`)
            .addField(`${config.prefix}suggest`, `Allows you to suggest features for future EagleBot Development!`)
            .addField(`${config.prefix}report`, `Reports an EagleBot Bug to the developers! (ps: This can get you the EagleBot Tester role if you join our server)`)
            .setFooter(names)
            .setThumbnail(bot.user.avatarURL)
            .setColor(`#4286f4`)

        msg.author.send(devEmbed)

        let funEmbed = new Discord.RichEmbed()
            .setTitle(`Fun Commands:`)
            .addField(`${config.prefix}8ball`, `Gives you one of 8 answers to a statement.`)
            .addField(`${config.prefix}rate`, `Rates an item that you define.`)
            .addField(`${config.prefix}embed`, `Creates an embed using the text you provide.`)
            .addField(`${config.prefix}mimic`, `Repeats your message!`)
            .addField(`${config.prefix}spamping`, `Sends 10 pings to a user who opts into the ping me role with ${config.prefix}opt-in.`)
            .setFooter(names)
            .setThumbnail(bot.user.avatarURL)
            .setColor(`#4286f4`)

        msg.author.send(funEmbed)

        let modEmbed = new Discord.RichEmbed()
            .setTitle(`Moderation Commands:`)
            .addField(`${config.prefix}avatar`, `Gets the avatar of either yourself or somebody that you mention.`)
            .addField(`${config.prefix}icon`, `Gets the icon of the server you are currently in.`)
            .addField(`${config.prefix}user`, `Sends a bunch of information about either yourself or a user you mention.`)
            .addField(`${config.prefix}server`, `Gives information about the server you are currently in.`)
            .addField(`${config.prefix}kick`, `Removes a user that you mention from a server. They can join back with another invite.`)
            .addField(`${config.prefix}ban`, `Permanently removes a user that you mention from the server. They cannot join back unless the ban is revoked.`)
            .addField(`${config.prefix}purge`, `Removes the amount of messages you define, up to 100. They must be under 2 weeks old as well.`)
            .addField(`${config.prefix}trust`, `Gives a user the trusted role, if one exists.`)
            .addField(`${config.prefix}untrust`, `Removes a users trusted role, if one exists.`)
            .setFooter(names)
            .setThumbnail(bot.user.avatarURL)
            .setColor(`#4286f4`)

        msg.author.send(modEmbed)
        

        let userEmbed = new Discord.RichEmbed()
            .setTitle(`User Commands:`)
            .addField(`${config.prefix}agree`, `Agrees to the rules of the server you are in. (Only works in an #agree channel)`)
            .addField(`${config.prefix}opt-in`, `Adds you to the "Ping Me" role for ${config.prefix}spamping command. The bot must have Manage Roles permissions.`)
            .addField(`${config.prefix}agree`, `Removes you from the "Ping Me" role for ${config.prefix}spamping. The bot must have Manage Roles permissions.`)
            .setFooter(names)
            .setThumbnail(bot.user.avatarURL)
            .setColor(`#4286f4`)

        msg.author.send(userEmbed)

        msg.react(`✅`)
       

    }
  
  }
  
