module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep) {

        var channel = msg.guild.channels.find('name', 'agree');
        var role = msg.guild.roles.find(r => r.name === "Member")

        if (!role) {
            msg.channel.send(otError).then(function(m) {
                sleep(2000)
                m.delete()
              })
            msg.react(`❌`);
            return;
        }

        if (!channel) {
            msg.channel.send(chError).then(function(m) {
                sleep(2000)
                m.delete()
              })
            msg.react(`❌`);
            return;
        }

        if (msg.channel.id !== channel.id) {
            msg.channel.send(chError).then(function(m) {
                sleep(2000)
                m.delete()
              })
            msg.react(`❌`);
            return;
        }
        msg.member.addRole(role)
        msg.delete()

        let confirmEmbed = new Discord.RichEmbed()
            .setColor(`#83e85a`)
            .setTitle(`Verification Complete!`)
            .setDescription(`Thanks for confirming that you have read the rules. You are now a member of the server.`)
            .addField(`User:`, msg.author.tag)
            .addField(`Server:`, msg.guild.name)
        msg.author.send(confirmEmbed)
            
  
    }
  }
  