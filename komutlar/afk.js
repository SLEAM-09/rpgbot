exports.run = async (client, msg, args) => {
    if (!args[0]) return msg.channel.send({embed: {
        color: Math.floor(Math.random() * (0xFFFFFF + 1)),
        description: (`🚫AFK nedenini gir.`)
  }});
   let name = msg.author.username
   if(msg.author.username.startsWith("[AFK]")){
     msg.reply("Zaten AFK'sın.")
   }
   else {
     msg.reply("**Artık AFK'sın.**")
      msg.member.setNickname(`[AFK]${msg.author.username}`);
   }
 }

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: 'afk',
   description: 'AFK  Kalırsınız',
   usage: 'afk'
 };
