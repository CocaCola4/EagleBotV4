module.exports = {

    run: function(bot, config, member, Discord) {
  
        var channel = member.guild.channels.find('name', 'general');
        if (!channel) return;
        channel.send(`Sorry to see you go, **${member.user.tag}**. I hope you had fun in ${member.guild.name}!`)
        
    }
  
  }