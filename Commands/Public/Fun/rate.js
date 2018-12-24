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


    var rates = [
      "1/10",
      "2/10",
      "3/10",
      "4/10",
      "5/10",
      "6/10",
      "7/10",
      "8/10",
      "9/10",
      "10/10",
      "0/10"
    
    ];


      
    let rateEmbed = new Discord.RichEmbed()
        .setTitle(`EagleBot Rating`)
        .setDescription(`What do I think about what you have to say?`)
        .addField(`User:`, `${msg.author.tag}`)
        .addField(`Item:`, `${suffix}`)
        .addField(`Rating:`, `${rates[Math.floor(Math.random() * rates.length)]}`)
        .setFooter(names)
        .setColor(`#324899`)
        .setThumbnail(bot.user.avatarURL)

    msg.channel.send(rateEmbed)
      
    




  }

}
