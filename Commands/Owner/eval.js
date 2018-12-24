module.exports = {

    run: function(bot, config, msg, args, suffix, Discord, names) {

        if (msg.author.id !== config.ownerID) return;

        const code = suffix;
        let evaled = eval(code);

        if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

        msg.channel.send(evaled)

    }
  
  
  }
  