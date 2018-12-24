module.exports = {

    run: function(bot, config, guild, Discord) {
  
        const guild_hook2 = new Discord.WebhookClient('id', 'token')
        let serverLogEmbed2 = new Discord.RichEmbed()
            .setTitle(`Removed from Server`)
            .setDescription(`EagleBot was just removed from ${guild.name}.`)
            .addField(`Users in Server:`, guild.members.size)
            .addField(`Total Server Count:`, bot.guilds.size)
            .addField(`Total User Count:`, bot.users.size)
            .addField(`Server Owner:`, guild.owner)
            .setFooter(names)
            .setThumbnail(bot.user.avatarURL)
            .setColor(`#d68b00`)
        guild_hook2.send(serverLogEmbed2)
  
    }
  
  }