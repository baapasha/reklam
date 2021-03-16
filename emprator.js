//////تکایە دەسکاری پرۆجێکتەکەمەکە تا ریمێکس دەکەیت

const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("/", (request, response) => {
  console.log(Date.now() + "hostemprator");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [
    `Servers: ${client.guilds.size} | Users: ${client.users.size}`,
    `PARTNER BOT `,
    `BY : ریکلامە کە بۆمن بنێرە دڵی من`
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "PLAYING",
      url: "http://www.twitch.tv/faith"
    });
  }, 3000);
});

// ======== { • REPLAY • }======== //

client.on("message", PASHA => {
  if (SAEWAN.content.startsWith("reklam")) {
    PASHA.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    PASHA.reply("**ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

////////

client.on("message", PASHA => {
  if (SAEWAN.content.startsWith("ریکلام")) {
    PASHA.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");
    PASHA.reply("**ریـکلاماکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

// ======== { • REKLAM • }======== //

client.on("ready", () => {
  var join = client.channels.get("816739532674301993"); /// ئاید ڤۆیس
  if (join) join.join();
});

client.on("message", PASHA => {
  if (saewan.channel.type === "dm") {
    if (pasha.content.startsWith("https://discord.gg/")) {
      pasha.author.send(`> **تـۆش ریکلام بۆ ئـەم سێرڤـەرە بکە **  
`); /// لینکە سیرڤەرە خۆت

      client.channels.get("741776396518686720").send(////ئایدی ژوری تێکست
 
        `> Nerdra la layan <@${pasha.author.id}> 
${pasha.content}`
      );
    }
  }
});



client.on("message", message => {
if (message.content.startsWith("mov")) {
if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
return message.reply("ببورە  رۆڵەکەی  تۆ  ناتوانێ  ئەم  فرمانە  ئەنجام  بدات")


if (message.member.voiceChannel == null)
return message.channel.send("بڕۆ  فۆیسێک  دوبارە  فرمانەکە  بنوسە")




let ToOFaN
var author = message.member.voiceChannelID;
var m = message.guild.members.filter(m => m.voiceChannel);
message.guild.members
.filter(m => m.voiceChannel)
.forEach(m => {
m.setVoiceChannel(author);
}); message.channel.send("هەموو ئەو کەسانەی لە فۆیس بوون موڤ ۆرانە لای خۆت")

}
});














// ======== { • TOKENN • }======== //

client.login("ODIxNTAzNDUwMTM0MzQ3Nzk2.YFEqtQ.N-NXlNSeteTilRnokSApFCww0fs");
////////////////تکایە دەسکاری ئێرەمەکە تا ریمێکس دەیکت
