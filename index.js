const Discord = require('discord.js');
const bot = new Discord.Client();
const YTDL = require(ytdl-core");

const token = 'NTc0OTUzODg2Nzg4MzU0MDQ4.XN9XyA.yBZp3ExCjR5hxFZFHPs4zaq0ALM';

var prefix = "+";

function play(connection, message) {
    var server = servers[message.guild.id];
	
    server.dispatcher = connection.playStream(YTDL(server.queue[0]. {filter: "audioonly"}))
	
    server.queue.shift()；
    
    server.dispatcher.on("end", message);
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

bot.on('ready', () =>{
    console.log('Bot已經Online了喲！')
})

bot.on('message', msg=>{
    if(msg.content ===  "Hypixel"){
		msg.reply('You are not allowed to ad server!');
	}
})

bot.on('message', msg=>{
    if(msg.content ===  "trash"){
		msg.reply('No u!');
	}
})

//Welcome
bot.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find('name', 'test');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`${member}歡迎來到YL伺服器":tada:`);
});

// Support Tickets
function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

bot.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.toLowerCase().startsWith(prefix + `help`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail: Ticket Help`)
    .setColor(0xCF40FA)
    .setDescription(`你好，我是YL伺服器BOT,我有這幾個指令:`)
    .addField(`Tickets`, `[${prefix}new]() > 開啓私人頻道來詢問客服人員\n[${prefix}close]() > 關閉Ticket`)
    .addField(`Other`, `[${prefix}help]() > 開啓幫助頁面\n[${prefix}ping]() > 延遲度\n[${prefix}about]() > 沒`)
    message.channel.send({ embed: embed });
  }

  if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
    message.channel.send(`等我一下!`).then(m => {
    m.edit(`**Pong!**` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(client.ping) + `ms.`);
    });
}

if (message.content.toLowerCase().startsWith(prefix + `new`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
    if (message.guild.channels.exists("name", "TicketHelp")) return message.channel.send(`你現在已經有一個Support ticket了.`);
    message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
        let role = message.guild.roles.find("name", "Support Team");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:white_check_mark: 以創建您的私人頻道, #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`你好 ${message.author.username}!`, `YL**客服人員**很快就會到來，請稍等!`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + `close`)) {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`請在Ticket裏面關閉Ticket.`);

    message.channel.send(`你肯定你在做什麽嗎?反不回頭的！如果肯定，請打 \`-confirm\`. 我們將會計時10秒`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '-confirm', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('時間過，不會刪除Ticket.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}

});

//Music
var server = ();
case "play":
    if <!args[1]>
	message.channel.sendMessage("請提供一個有效的Link");
        return;
    {
	    
    if (!message.member.voiceChannel) {
	message.channel.sendMessage("請進入Voice Channel");
        return;
    {
	    
    if(!servers[message.guild.id]) servers[message.guild.id] =  {
	queue: []    
    };

    var server = servers[message.guild.id]; 
	    
    if (!message.guild.voiceConnection) message.member.voiceChannel.join()。then(function(connection) {
	play(connection, message);    
    });
    break;
case "skip":
    var server = servers[message.guild.id]
    
    if (server.dispatcher) server.dispatcher.end()；
    break
	    
default:
    messasge.channel.sendMesssage("請用一個有效的指令")	    
bot.login(token);
