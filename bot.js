const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});


const fs = require("fs");
const config = JSON.parse(fs.readFileSync("./Configuration/config.json", "utf8"));


var status = `v4.3.3: End of Support | Use ;help`

bot.login(config.token)

bot.on("ready", function() {
  console.log(`Ready As: ${bot.user.tag}`)

  bot.user.setStatus('Online')
  bot.user.setActivity(status)

})

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

let blError = new Discord.RichEmbed()
    .setTitle(`Error!`)
    .setDescription(`You are blacklisted from using any commands with this bot.`)
    .setColor(`#ef0e0e`)

let gbError = new Discord.RichEmbed()
    .setTitle(`Error!`)
    .setDescription(`This server is blacklisted from using any commands with this bot. It is now going to leave the server.`)
    .setColor(`#ef0e0e`)

let dmError = new Discord.RichEmbed()
    .setTitle(`Error!`)
    .setDescription(`This command must be used in a server.`)
    .setColor(`#ef0e0e`)

let owError = new Discord.RichEmbed()
    .setTitle(`Error!`)
    .setDescription(`You must be the owner of this bot to run this command.`)
    .setColor(`#ef0e0e`)

let sfError = new Discord.RichEmbed()
    .setTitle(`Error!`)
    .setDescription(`You must define input after that command in order for it to work.`)
    .setColor(`#ef0e0e`)

let prError = new Discord.RichEmbed()
    .setTitle(`Error!`)
    .setDescription(`Either you or the bot does not have valid permissions to run this command.`)
    .setColor(`#ef0e0e`)

let otError = new Discord.RichEmbed()
    .setTitle(`Error!`)
    .setDescription(`Unknown Error`)
    .setColor(`#ef0e0e`)

let chError = new Discord.RichEmbed()
    .setTitle(`Error!`)
    .setDescription(`You must use a specific channel in order to use this command.`)
    .setColor(`#ef0e0e`)

let mbError = new Discord.RichEmbed()
    .setTitle(`Error!`)
    .setDescription(`You must mention someone in order to use that command.`)
    .setColor(`#ef0e0e`)

bot.on('message', async msg => {

  var command = msg.content.split(" ")[0].slice(config.prefix.length).toLowerCase()
  var args = msg.content.split(" ").slice(1);
  let suffix = args.join(" ")

  if(msg.author.bot || !msg.content.startsWith(config.prefix)) {
    return;
  }

  var names = "EagleBot Created by TheMegaEagle#9909, Icons/Thumbnails by TatraTram#3098"

  // const member = msg.mentions.members.first();

  // const logsChannel = msg.guild.channels.find('name', 'logs');

  if(command === "test") {
    require(`./Commands/Public/Basic/test.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep)
  }

  if(command === "invite") {
    require(`./Commands/Public/Basic/invite.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep)
  }

  if(command === "help") {
    require(`./Commands/Public/Basic/help.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep)
  }

  /**
   
  if(command === "info") {
    require(`./Commands/Public/Basic/info.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep)
  }

  if(command === "ping") {
    require(`./Commands/Public/Basic/ping.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, mbError, chError, names, sleep)
  }

  //

  if(command === "updates") {
    require(`./Commands/Public/Development/updates.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep)
  }

  if(command === "report") {
    require(`./Commands/Public/Development/report.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep)
  }

  if(command === "suggest") {
    require(`./Commands/Public/Development/suggest.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep)
  }

  //

  if(command === "embed") {
    require(`./Commands/Public/Fun/embed.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep)
  }

  if(command === "mimic") {
    require(`./Commands/Public/Fun/mimic.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep)
  }

  if(command === "8ball") {
    require(`./Commands/Public/Fun/8ball.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep)
  }

  if(command === "rate") {
      require(`./Commands/Public/Fun/rate.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep)
  }

  if(command === "spamping") {
    require(`./Commands/Public/Fun/spamping.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep)
  }

  //

  if(command === "agree") {
    require(`./Commands/Public/User/agree.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, otError, prError, otError, chError, mbError, names, sleep)
  }

  if(command === "opt-in") {
    require(`./Commands/Public/User/opt-in.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, otError, prError, otError, chError, mbError, names, sleep)
  }

  if(command === "opt-out") {
    require(`./Commands/Public/User/opt-out.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, otError, prError, otError, chError, mbError, names, sleep)
  }

  if(command === "avatar") {
    require(`./Commands/Public/Mod/avatar.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep)
  }

  if(command === "icon") {
    require(`./Commands/Public/Mod/icon.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep)
  }

  if(command === "user") {
    require(`./Commands/Public/Mod/user.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep)
  }

  if(command === "server") {
    require(`./Commands/Public/Mod/server.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep)
  }

  if(command === "kick") {
    require(`./Commands/Public/Mod/kick.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, sleep, names, sleep)
  }

  if(command === "ban") {
    require(`./Commands/Public/Mod/ban.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep)
  }

  if(command === "purge") {
    require(`./Commands/Public/Mod/purge.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep)
  }

  if(command === "trust") {
    require(`./Commands/Public/Mod/trust.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep)
  }

  if(command === "untrust") {
    require(`./Commands/Public/Mod/untrust.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep)
  }

  //

  if(command === "eval") {
    require(`./Commands/Owner/eval.js`).run(bot, config, msg, args, suffix, Discord, blError, gbError, dmError, owError, sfError, prError, otError, chError, mbError, names, sleep)
  }

  */
  

})

/*

bot.on('guildMemberAdd', function(member) {
    require(`./Functions/welcomeMember.js`).run(bot, config, member, Discord)
})

bot.on('guildMemberRemove', function(member) {
    require(`./Functions/goodbyeMember.js`).run(bot, config, member, Discord)
})

bot.on('guildCreate', function(guild) {
    require(`./Functions/addGuildLog.js`).run(bot, config, guild, Discord)
})

bot.on('guildDelete', function(guild) {
    require(`./Functions/removeGuildLog.js`).run(bot, config, guild, Discord)
})

bot.on('messageDelete', function(msg) {
    require(`./Functions/deleteLog.js`).run(bot, config, msg, Discord)
})

bot.on('messageReactionAdd', function(reaction) {
    require(`./Functions/handleStarboard.js`).run(bot, config, reaction, Discord)
})

*/