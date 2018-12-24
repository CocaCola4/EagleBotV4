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

            if (bot.member)
            role = msg.guild.createRole({
                name: "Ping Me",
                color: "#000000",
                permissions: []
            })

            msg.member.addRole(role);
        }

        if (msg.member.roles.has(role.id)) {
            msg.react(`❌`)
            msg.channel.send(`You are already opted in!`)
            return;
        }
        
        if (role) {

            let optinembed = new Discord.RichEmbed()
                .setTitle(`Spam Ping Opt-In`)
                .setDescription(`You are now opted in to be spam pinged. Anyone in ${msg.guild.name} can spam ping you with the spamping command now! To opt out, please do ;opt-out.`)
                .setColor(msg.member.highestRole.hexColor)
            msg.react(`✅`)
            msg.channel.send(optinembed)
            msg.member.addRole(role);
        }

    }
  
  }
  