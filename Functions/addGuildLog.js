module.exports = {

    run: function(bot, config, guild, Discord) {
  
        const guild_hook = new Discord.WebhookClient('000000000_id', 'abc-xyz_token')
        let serverLogEmbed = new Discord.RichEmbed()
            .setTitle(`New Server!`)
            .setDescription(`EagleBot was just added to ${guild.name}!`)
            .addField(`Users in Server:`, guild.members.size)
            .addField(`Total Server Count:`, bot.guilds.size)
            .addField(`Total User Count:`, bot.users.size)
            .addField(`Server Owner:`, guild.owner)
            .setFooter(names)
            .setThumbnail(bot.user.avatarURL)
            .setColor(`#d68b00`)
        guild_hook.send(serverLogEmbed)
  
    }
  
  }