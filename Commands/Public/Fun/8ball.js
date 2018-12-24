module.exports = {

  run: function(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep) {

    if (suffix) {
      msg.react(`✅`)
    } 
    
    if (!suffix) {
        msg.react(`❌`)
        msg.channel.send(sfError).then(function(m) {
          sleep(2000)
          m.delete()
      })
        return;
    }


    var fortunes = [
      "For sure!",
      "I'd say yes",
      "Hopefully",
      ":thumbsup:",
      "I'm not sure...",
      "I think not",
      "Sadly, no",
      ":thumbsdown:"
    
    ];


      
    let ballEmbed = new Discord.RichEmbed()
        .setTitle(`EagleBot 8ball`)
        .setDescription(`The prediction of your future!`)
        .addField(`User:`, `${msg.author.tag}`)
        .addField(`Your Statement:`, `${suffix}`)
        .addField(`Our Response:`, `:8ball:`   + fortunes[Math.floor(Math.random() * fortunes.length)] +    `:8ball:`)
        .setFooter(names)
        .setColor(`#0fe1ff`)
        .setThumbnail(bot.user.avatarURL)

    msg.channel.send(ballEmbed)
      
   




  }

}
