module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep) {

        if (suffix) {
            msg.react(`✅`)
        } 
        
        if (!suffix) {
            msg.react(`❌`)
            msg.author.send(sfError).then(function(m) {
                sleep(2000)
                m.delete()
            })
            return;
        }
        
        msg.delete()
        msg.channel.send(suffix)

    }
  
  
  }
  