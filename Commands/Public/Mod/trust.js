module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep) {
  
  
        const member = msg.mentions.members.first();
        let role = msg.guild.roles.find(r => r.name === "Trusted")

        if (msg.channel.type === "dm") {
          msg.react(`❌`)
          msg.channel.send(dmError).then(function(m) {
            sleep(2000)
            m.delete()
          })
          return;
        }
      
        if (!msg.member.permissions.has('MANAGE_ROLES')) {
          msg.channel.send(prError).then(function(m) {
            sleep(2000)
            m.delete()
          })
          msg.react(`❌`)
          return;
        } else if (!member) {
          msg.channel.send(mbError).then(function(m) {
            sleep(2000)
            m.delete()
          })
          msg.react(`❌`)
          return;
        } else if (!role) {
          msg.channel.send(otError).then(function(m) {
            sleep(2000)
            m.delete()
          })
          msg.react(`❌`)
          return;
        } else if (member.roles.has(role.id)) {
          msg.channel.send(`That user is already trusted.`).then(function(m) {
            sleep(2000)
            m.delete()
          })
            msg.react(`❌`)
            return;
        } else if (msg.member.permissions.has('MANAGE_ROLES')) {
          msg.react(`✅`)
  
          let trustembed = new Discord.RichEmbed()
              .setTitle(`EagleBot Moderation`)
              .setDescription(`${member} has been trusted by ${msg.author.tag}.`)
              .setColor(msg.member.highestRole.hexColor)
  
          msg.channel.send(trustembed)
          member.addRole(role)
  
          
  
        }
  
     
  
    }
  
  }
  