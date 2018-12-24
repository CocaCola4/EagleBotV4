module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep) {

        if (!msg.member.permissions.has('MANAGE_MESSAGES')) {
            msg.channel.send(prError).then(function(m) {
                sleep(2000)
                m.delete()
              })
            msg.react(`❌`)
            return;
          } else if (!suffix) {
            msg.react(`❌`)
            msg.channel.send(sfError).then(function(m) {
                sleep(2000)
                m.delete()
              })
            return;
          } else if (msg.member.permissions.has('MANAGE_MESSAGES')) {
            msg.react(`✅`)
            if (isNaN(suffix)) {
                msg.channel.send(otError).then(function(m) {
                    sleep(2000)
                    m.delete()
                  })
                msg.react(`❌`)
            }
    
            async function purge() {
                msg.delete()
    
                const fetched = await msg.channel.fetchMessages({limit: suffix});
    
                msg.channel.bulkDelete(fetched)
                    .catch(error => msg.author.send(otError))
                msg.channel.send(`Deleted ${fetched.size} messages!`).then(function(m) {
                  sleep(2000);
                  m.delete();
                })
            }
    
            purge();
  
     
  
    }
  
}
}
  