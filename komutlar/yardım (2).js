const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '**Bot Hakkında Kısa Bilgı**\n\n\n  **`g!`yardım = yazarak komutları göre bilirsiniz** \n  **`g!`davet = yazarak sunucunuza davet edebılırsınız** \n  **`g!`ailemiz = Yazarak Botun Hangı Sunucuda Bulundugunu Ogrene bılırsınız** \n **`g!`tavsiye = Bota Tavsıye Edersınız**',
              '**Kullanıcı Ve Eğlence**\n\n\n  **`g!`8ball = Sorularınızı Yanıtlar** \n **`g!`aşkölçer = Aşkınızı Ölçer.** \n **`g!`çekiç = Çekiç Atarsınız.** \n  **`g!`çayiç = Çay İçersiniz **\n **`g!`döviz = Dövizlere Bakarsınız** \n **`g!`wwegif = Rast Gele Gif Gonderır** \n **`g!`çekiliş = Sunucunuzda Çekiliş Yaparsınız** \n **`g!`mcödül = Ödül Kazanarsınız ** \n **`g!`dcnitro = Avatarınıza Nıtro Ekler** \n **`g!`stresçarkı = Stres Atarsınız ** \n **`g!`invert = Avatarınızın Rengini Ters Renk Yapar** \n **`g!`wasted = Avatarınıza Wasted Effekti Yapar** \n **`g!`top10 = Botun 10 Sunucuda Ne Yaptıgını Gosterır** \n **`g!`yaz = Bota Bir Sey Yazarsınız** \n **`g!`sor = Bota Bır Seyler Sorarsınız** \n **`g!`kullanıcıbilgim = Kendınız Hakkında Ogrene Bılırısınız** \n **`g!`emojiyazı = Emojı Seklınde Yazarsınız**',
              '**Yetkili Komutlar**\n\n\n **mod-log Kanalı Olmadan Çalısmaz** \n\n**`g!`uyar = Istedıgınız Kısıyı Uyarırsınız** \n **`g!`sustur = Istedıgınız Kısıyı Susturursunuz** \n **`g!`ban = Istedıgınız Kısıyı Ban Yaparsınız** \n **`g!`unban = Istedıgınız Kısının Banını Kaldırrısınız** \n **`g!`mute = Istedıgınız Kısını Surelı Susturursunuz** \n **`g!`temizle = Istedıgınız Kadar Mesal Sılersınız** \n **`g!`kick = Sunucudan Kıckler** \n **`g!`kilit = Bulunduğunuz Kanalı Kilitler** \n **`g!`çekiliş = Çekiliş Yaparsınız** \n **`g!`yavaşmod = Bulundugunuz Kanalda Yavasmod Acılır** \n **`g!`rol-ver = Istedıgınız Kısıye Rol Verırsınız** \n **`g!`sunucubilgi = Sunucu Hakkında Ogrene Bılırsınız** \n **`g!`mesajat = Bırıne Mesaj Atarsınız**',
              '**Bot Bilgi**\n\n\n **`g!`davet = Bot İle İlgili Bağlantıları Görürsünüz.** \n **`g!`ping = Botun Pingini Gösterir.** \n **`g!`istatistik = Botun İstatistiklerini Gösterir.**',
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};