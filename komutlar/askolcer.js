const Discord = require('discord.js');
exports.run = async (client, msg, args) => {
    let ask=[
      "Aşkölçer %1 Gösteriyor.",
      "Aşkölçer %2 Gösteriyor.",
      "Aşkölçer %3 Gösteriyor.",
      "Aşkölçer %4 Gösteriyor.",
      "Aşkölçer %5 Gösteriyor.",
      "Aşkölçer %6 Gösteriyor.",
      "Aşkölçer %7 Gösteriyor.",
      "Aşkölçer %8 Gösteriyor.",
      "Aşkölçer %9 Gösteriyor.",
      "Aşkölçer %10 Gösteriyor.",
      "Aşkölçer %11 Gösteriyor.",
      "Aşkölçer %12 Gösteriyor.",
      "Aşkölçer %13 Gösteriyor.",
      "Aşkölçer %14 Gösteriyor.",
      "Aşkölçer %15 Gösteriyor.",
      "Aşkölçer %16 Gösteriyor.",
      "Aşkölçer %17 Gösteriyor.",
      "Aşkölçer %18 Gösteriyor.",
      "Aşkölçer %19 Gösteriyor.",
      "Aşkölçer %20 Gösteriyor.",
      "Aşkölçer %21 Gösteriyor.",
      "Aşkölçer %22 Gösteriyor.",
      "Aşkölçer %23 Gösteriyor.",
      "Aşkölçer %24 Gösteriyor.",
      "Aşkölçer %25 Gösteriyor.",
      "Aşkölçer %26 Gösteriyor.",
      "Aşkölçer %27 Gösteriyor.",
      "Aşkölçer %28 Gösteriyor.",
      "Aşkölçer %29 Gösteriyor.",
      "Aşkölçer %30 Gösteriyor.",
      "Aşkölçer %31 Gösteriyor.",
      "Aşkölçer %32 Gösteriyor.",
      "Aşkölçer %33 Gösteriyor.",
      "Aşkölçer %34 Gösteriyor.",
      "Aşkölçer %35 Gösteriyor.",
      "Aşkölçer %36 Gösteriyor.",
      "Aşkölçer %37 Gösteriyor.",
      "Aşkölçer %38 Gösteriyor.",
      "Aşkölçer %39 Gösteriyor.",
      "Aşkölçer %40 Gösteriyor.",
      "Aşkölçer %41 Gösteriyor.",
      "Aşkölçer %42 Gösteriyor.",
      "Aşkölçer %43 Gösteriyor.",
      "Aşkölçer %44 Gösteriyor.",
      "Aşkölçer %45 Gösteriyor.",
      "Aşkölçer %46 Gösteriyor.",
      "Aşkölçer %47 Gösteriyor.",
      "Aşkölçer %48 Gösteriyor.",
      "Aşkölçer %49 Gösteriyor.",
      "Aşkölçer %50 Gösteriyor.",
      "Aşkölçer %51 Gösteriyor.",
      "Aşkölçer %52 Gösteriyor.",
      "Aşkölçer %53 Gösteriyor.",
      "Aşkölçer %54 Gösteriyor.",
      "Aşkölçer %55 Gösteriyor.",
      "Aşkölçer %56 Gösteriyor.",
      "Aşkölçer %57 Gösteriyor.",
      "Aşkölçer %58 Gösteriyor.",
      "Aşkölçer %59 Gösteriyor.",
      "Aşkölçer %60 Gösteriyor.",
      "Aşkölçer %61 Gösteriyor.",
      "Aşkölçer %62 Gösteriyor.",
      "Aşkölçer %63 Gösteriyor.",
      "Aşkölçer %64 Gösteriyor.",
      "Aşkölçer %65 Gösteriyor.",
      "Aşkölçer %66 Gösteriyor.",
      "Aşkölçer %67 Gösteriyor.",
      "Aşkölçer %68 Gösteriyor.",
      "Aşkölçer %69 Gösteriyor.",
      "Aşkölçer %70 Gösteriyor.",
      "Aşkölçer %71 Gösteriyor.",
      "Aşkölçer %72 Gösteriyor.",
      "Aşkölçer %73 Gösteriyor.",
      "Aşkölçer %74 Gösteriyor.",
      "Aşkölçer %75 Gösteriyor.",
      "Aşkölçer %76 Gösteriyor.",
      "Aşkölçer %77 Gösteriyor.",
      "Aşkölçer %78 Gösteriyor.",
      "Aşkölçer %79 Gösteriyor.",
      "Aşkölçer %80 Gösteriyor.",
      "Aşkölçer %81 Gösteriyor.",
      "Aşkölçer %82 Gösteriyor.",
      "Aşkölçer %83 Gösteriyor.",
      "Aşkölçer %84 Gösteriyor.",
      "Aşkölçer %85 Gösteriyor.",
      "Aşkölçer %86 Gösteriyor.",
      "Aşkölçer %87 Gösteriyor.",
      "Aşkölçer %88 Gösteriyor.",
      "Aşkölçer %89 Gösteriyor.",
      "Aşkölçer %90 Gösteriyor.",
      "Aşkölçer %91 Gösteriyor.",
      "Aşkölçer %92 Gösteriyor.",
      "Aşkölçer %93 Gösteriyor.",
      "Aşkölçer %94 Gösteriyor.",
      "Aşkölçer %95 Gösteriyor.",
      "Aşkölçer %96 Gösteriyor.",
      "Aşkölçer %97 Gösteriyor.",
      "Aşkölçer %98 Gösteriyor.",
      "Aşkölçer %99 Gösteriyor.",
      "Aşkölçer %100 Gösteriyor.",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: ('🚫 Kimi Seviyorsun Yaz Buraya?')
  }});



    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${ask[Math.floor(Math.random() * 30)]}.`)
    }})
    }


  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };

  exports.help = {
    name: 'aşkölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }
