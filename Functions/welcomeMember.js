module.exports = {

    run: function(bot, config, member, Discord) {
  
        var channel = member.guild.channels.find('name', 'general');
        if (!channel) return;
        channel.send(`Welcome ${member} to ${member.guild.name}! Enjoy your time here! Creation Date: ${member.user.createdAt}`)
    
    }
  
  }