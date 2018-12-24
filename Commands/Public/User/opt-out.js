module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep) {

        if (msg.channel.type === "dm") {
            msg.react(`❌`)
            msg.channel.send(dmError).then(function(m) {
              sleep(2000)
              m.delete()
            })
            return;
          }

        var role = msg.guild.roles.find(r => r.name === "Ping Me")

        if (!role) {
            msg.channel.send(otError).then(function(m) {
                sleep(2000)
                m.delete()
            })
        }

        if (!msg.member.roles.has(role.id)) {
            msg.react(`❌`)
            msg.channel.send(`You aren't opted in!`)
            return;
        }
        
        if (role) {
            let optoutembed = new Discord.RichEmbed()
                .setTitle(`Spam Ping Opt-Out`)
                .setDescription(`You are now opted out of being spam pinged. You can no longer be pinged from ;spamping in ${msg.guild.name}! To opt back in, please type ;opt-in`)
                .setColor(msg.member.highestRole.hexColor)
            msg.react(`✅`)
            msg.channel.send(optoutembed)
            msg.member.removeRole(role);
        }

    }
  
  }
  