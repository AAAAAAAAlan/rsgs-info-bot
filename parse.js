var needle = require("needle");
var cheerio = require("cheerio");
const Discord = require("discord.js");

var url = "https://www.battlemetrics.com/servers/squad/5245079";


needle.get(url,function(err,res){
    if(err) throw(err);

    var $ = cheerio.load(res.body);

    var parsedinfo = $(".css-1i1egz4").text();
    console.log(parsedinfo);

    playerinfo = parsedinfo.split('count')[1].split('Address')[0]
    console.log(playerinfo);

    map = parsedinfo.split("Map")[1].split(" ")[0];
    console.log(map);

    gamemode= parsedinfo.split("Map")[1].split(" ")[1].split("Game")[0];
    console.log(gamemode);

    status = parsedinfo.split("Status")[1].split("Distance")[0];
    console.log(status);
});

setInterval(() => {
    needle.get(url,function(err,res){
        if(err) throw(err);
  
        var $ = cheerio.load(res.body);
  
        var parsedinfo = $(".css-1i1egz4").text();
        console.log(parsedinfo);
  
        playerinfo = parsedinfo.split('count')[1].split('Address')[0]
        console.log(playerinfo);

        map = parsedinfo.split("Map")[1].split(" ")[0];
        console.log(map);

        gamemode= parsedinfo.split("Map")[1].split(" ")[1].split("Game")[0];
        console.log(gamemode);

        status = parsedinfo.split("Status")[1].split("Distance")[0];
        console.log(status);
    })
  }, 60000);


const bot = new Discord.Client();
const token = "ТОКЕН СЮДА";
bot.login(token);

bot.on('ready', () => {
    console.log('Ready!');
});

bot.on('message', msg=>{
    if(msg.content === "!plus"){

        const embed = new Discord.RichEmbed()
        .setTitle("|RSGS+| Russian Squad Game Server")
        .addField("Игроки: ", playerinfo, true)
        .addField("Карта: ", map, true)
        .addField("Режим: ", gamemode, true)
        .addField("Статус: ", status, true)
        // .setFooter("Обновление каждые 5 минут");
        msg.channel.send(embed);
    }
})

  


