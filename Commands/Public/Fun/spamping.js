module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep) {

        const member = msg.mentions.members.first();

        if (!member) {
            msg.react(`❌`)
            msg.author.send(mbError).then(function(m) {
                sleep(2000)
                m.delete()
            })
            return;
        }
        
        var role = msg.guild.roles.find(r => r.name === "Ping Me")
        if (!role) return msg.channel.send(otError);

        if (!member.roles.has(role.id)) {
            msg.react(`❌`)
            msg.channel.send(`That user would not like to be spam pinged.`).then(function(m) {
                sleep(2000)
                m.delete()
            })
            msg.delete()
            return;
        }

        if (member) {
            msg.react(`✅`)
        }
        
        msg.delete()
        msg.channel.send(`<@${member.id}>`)
        msg.channel.send(`<@${member.id}>`)
        msg.channel.send(`<@${member.id}>`)
        msg.channel.send(`<@${member.id}>`)
        msg.channel.send(`<@${member.id}>`)
        msg.channel.send(`<@${member.id}>`)
        msg.channel.send(`<@${member.id}>`)
        msg.channel.send(`<@${member.id}>`)
        msg.channel.send(`<@${member.id}>`)
        

    }
  
  
  }
  