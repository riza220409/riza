
const help = (prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensi, teks)=> {
	return`╭⋆⸙ *🇮🇩 INDONESIA TIME*
${ucapannya2}
*🔖Jam :* ${timuu}
*🔖Hari :* ${thisDay}
*🔖Tanggal :* ${ini_tanggal}
*🔖WIB :* ${timuu}
*🔖WITA :* ${wita}
*🔖WIT :* ${wit}
╰❉▰▰▱▱▣▣▱▱▰▰❉

╭⋆⸙ *🤖 DEVICE*
*🐇Whatsapp :* ${wa_version}
*🐇Merk HP :* ${device_manufacturer}
*🐇Versi HP :* ${device_model}
*🐇Versi OS :* ${os_version}
*🐇RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*🐇MCC :* ${mcc}
*🐇MNC :* ${mnc}
╰❉▰▰▱▱▣▣▱▱▰▰❉

╭⋆⸙「 *🤖 BOT INFO* 」
*Mode :* ${status}
*Prefix :* ${prefix}
*Total Hit :* ${hit_today.length}
*Personal Chat :* ${totalchat.length - ini_gcchat.lenght}
*Total All Chat :* ${totalchat.length}
*Group Chat :* ${ini_gcchat}
╰❉▰▰▱▱▣▣▱▱▰▰❉

╭⋆⸙ *LIST MENU* ⸙⋆
│
🍃⋆Allmenu 
🍃⋆Xmenu 
🍃⋆Convertmenu
🍃⋆Asupanmenu
🍃⋆Downloadmenu
🍃⋆Funmenu
🍃⋆Makermenu
🍃⋆Othermenu
🍃⋆Ownermenu
🍃⋆Storagemenu
🍃⋆Tagmenu
🍃⋆Upmenu
🍃⋆Set_sticker_cmd
🍃⋆Gacha_cecan
🍃⋆Telegram_sticker
╰⋆⸙ Image_effect

╭⋆⸙ *ABOUT* ⸙⋆
│
🌻⋆Source
🌻⋆ThanksTo
🌻⋆Group_support
╰⋆⸙ Ownerbot

⋆⸙ _Creator Miku © 2K21_ ⸙⋆
`
}
const convert = (prefix) => {
	return`╭⋆⸙ *CONVERT MENU* ⸙⋆
│
✗⃝🕊 ️${prefix}toimg
✗⃝🕊 ️${prefix}tomp3
✗⃝🕊 ️${prefix}tomp4
✗⃝🕊 ️${prefix}slow
✗⃝🕊 ️${prefix}tupai
✗⃝🕊 ️${prefix}fast
✗⃝🕊 ️${prefix}reverse
╰⋆⸙ ${prefix}tourl
`
}
const download = (prefix) => {
	return`╭⋆⸙ *DOWNLOAD MENU* ⸙⋆
│
✗⃝🕊 ️${prefix}ytsearch _query_
✗⃝🕊 ️${prefix}igstalk _username_
✗⃝🕊 ️${prefix}ghstalk _username_
✗⃝🕊 ️${prefix}play _query_
✗⃝🕊 ️${prefix}playmp4 _query_
✗⃝🕊 ️${prefix}video _query_
✗⃝🕊 ️${prefix}ytmp3 _link_
✗⃝🕊 ️${prefix}ytmp4 _link_
✗⃝🕊 ️${prefix}ig _link_
✗⃝🕊 ️${prefix}igphoto _link_
✗⃝🕊 ️${prefix}igvideo _link_
✗⃝🕊 ️${prefix}igtv _link_
✗⃝🕊 ️${prefix}igreels _link_
✗⃝🕊 ️${prefix}twitter _link_
✗⃝🕊 ️${prefix}tiktokwm _link_
✗⃝🕊 ️${prefix}tiktoknowm _link_
✗⃝🕊 ️${prefix}tiktokaudio _link_
✗⃝🕊 ️${prefix}fb _link_
✗⃝🕊 ️${prefix}brainly _query_
✗⃝🕊 ️${prefix}image _query_
✗⃝🕊 ️${prefix}pinterest _query_
✗⃝🕊 ️${prefix}pinterest2 _query_
✗⃝🕊 ️${prefix}playstore _query_
✗⃝🕊 ️${prefix}gcwa _query_
✗⃝🕊 ️${prefix}lirik _query_
✗⃝🕊 ️${prefix}komiku _query_
✗⃝🕊 ️${prefix}otaku _query_
╰⋆⸙ ${prefix}anime _random_

`
}

const allmenu = (prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensi, teks)  => {
	return `╭⋆⸙ *🇮🇩 INDONESIA TIME*
${ucapannya2}
*🔖Jam :* ${timuu}
*🔖Hari :* ${thisDay}
*🔖Tanggal :* ${ini_tanggal}
*🔖WIB :* ${timuu}
*🔖WITA :* ${wita}
*🔖WIT :* ${wit}
╰❉▰▰▱▱▣▣▱▱▰▰❉

╭⋆⸙ *🤖 DEVICE INFO*
*🐇Whatsapp :* ${wa_version}
*🐇Merk HP :* ${device_manufacturer}
*🐇Versi HP :* ${device_model}
*🐇Versi OS :* ${os_version}
*🐇RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*🐇MCC :* ${mcc}
*🐇MNC :* ${mnc}
╰❉▰▰▱▱▣▣▱▱▰▰❉

╭⋆⸙「 *🤖 BOT INFO* 」
*Mode :* ${status}
*Prefix :* ${prefix}
*Total Hit :* ${hit_today.length}
*Personal Chat :* ${totalchat.length - ini_gcchat.lenght}
*Total All Chat :* ${totalchat.length}
*Group Chat :* ${ini_gcchat}
╰❉▰▰▱▱▣▣▱▱▰▰❉

</𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨/>
✗⃝🕊 ️${prefix}self
✗⃝🕊 ️${prefix}public
✗⃝🕊 ️${prefix}readall
✗⃝🕊 ️${prefix}unreadall
✗⃝🕊 ️${prefix}archive
✗⃝🕊 ️${prefix}unarchiveall  
✗⃝🕊 ️${prefix}return 
✗⃝🕊 ️${prefix}join
✗⃝🕊 ️${prefix}repeat
✗⃝🕊 ️${prefix}exif
✗⃝🕊 ️${prefix}culik
✗⃝🕊 ️${prefix}pin   
✗⃝🕊 ️${prefix}unpin
✗⃝🕊 ️${prefix}bc
✗⃝🕊 ️${prefix}tobc
✗⃝🕊 ️${prefix}bcaudio
✗⃝🕊 ️$
✗⃝🕊 >

</𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨/>
✗⃝🕊 ${prefix}antilink
✗⃝🕊 ️${prefix}welcome
✗⃝🕊 ${prefix}group
✗⃝🕊 ${prefix}linkgrup
✗⃝🕊 ️${prefix}promote
✗⃝🕊 ️${prefix}demote
✗⃝🕊 ${prefix}add
✗⃝🕊 ${prefix}kick
✗⃝🕊 ️${prefix}setpp
✗⃝🕊 ️${prefix}setdesc
✗⃝🕊 ${prefix}setname
✗⃝🕊 ️${prefix}hidetag
✗⃝🕊 ️${prefix}infogc

</𝗚𝗔𝗠𝗘 𝗠𝗘𝗡𝗨/>
✗⃝🕊 ️${prefix}suit     
✗⃝🕊 ️${prefix}slot
✗⃝🕊 ️${prefix}gelud
✗⃝🕊 ️${prefix}tictactoe
✗⃝🕊 ️${prefix}resetgame
✗⃝🕊 ️${prefix}delsesigelud
✗⃝🕊 ️${prefix}caklontong
✗⃝🕊 ️${prefix}tebakgambar
✗⃝🕊 ️${prefix}family100

</𝗚𝗔𝗕𝗨𝗧 𝗠𝗘𝗡𝗨/>        
✗⃝🕊 ${prefix}apakah
✗⃝🕊 ${prefix}cekganteng
✗⃝🕊 ${prefix}cekcantik
✗⃝🕊 ${prefix}hobby
✗⃝🕊 ${prefix}bisakah
✗⃝🕊 ${prefix}kapankah
✗⃝🕊 ${prefix}citacita
   ️
</𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨/>  
✗⃝🕊 ${prefix}tourl            
✗⃝🕊 ${prefix}sticker
✗⃝🕊 ${prefix}attp
✗⃝🕊 ${prefix}toimg
✗⃝🕊 ${prefix}tomp3
✗⃝🕊 ${prefix}tovideo
✗⃝🕊 ${prefix}emoji
✗⃝🕊 ${prefix}audiotourl
✗⃝🕊 ${prefix}videotourl
✗⃝🕊 ${prefix}stickertourl

</𝗦𝗘𝗔𝗥𝗖𝗛𝗜𝗡𝗚/>
✗⃝🕊 ️${prefix}image   
✗⃝🕊 ️${prefix}video   
✗⃝🕊 ️${prefix}pinterest
✗⃝🕊 ️${prefix}ytsearch
✗⃝🕊 ️${prefix}brainly
✗⃝🕊 ️${prefix}anime
✗⃝🕊 ️${prefix}searchfilm
✗⃝🕊 ️${prefix}searchanime   
✗⃝🕊 ️${prefix}happymod
✗⃝🕊 ️${prefix}lirik
✗⃝🕊 ️${prefix}lirik2
✗⃝🕊 ️${prefix}chara  
✗⃝🕊 ️${prefix}playstore   
✗⃝🕊 ️${prefix}otaku
✗⃝🕊 ️${prefix}herodetail
✗⃝🕊 ️${prefix}herolist
✗⃝🕊 ️${prefix}komiku
✗⃝🕊 ️${prefix}google
✗⃝🕊 ️${prefix}wiki

</𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗/>
✗⃝🕊 ️${prefix}ig    
✗⃝🕊 ️${prefix}mediafire    
✗⃝🕊 ️${prefix}pinterest  
✗⃝🕊 ️${prefix}youtube
✗⃝🕊 ️${prefix}tiktoknowm
✗⃝🕊 ️${prefix}play
✗⃝🕊 ️${prefix}twmp4
✗⃝🕊 ️${prefix}twmp3
✗⃝🕊 ️${prefix}tiktok
✗⃝🕊 ️${prefix}fbmp4
✗⃝🕊 ️${prefix}fbmp3
✗⃝🕊 ️${prefix}tinyurl

</𝗣𝗛𝗢𝗧𝗢𝗢𝗫𝗬/>
✗⃝🕊 ️${prefix}burnpaper
✗⃝🕊 ️${prefix}smoke
✗⃝🕊 ️${prefix}shadow
✗⃝🕊 ️${prefix}romantic
✗⃝🕊 ️${prefix}naruto
✗⃝🕊 ️${prefix}coffecup
✗⃝🕊 ️${prefix}doubleheart
✗⃝🕊 ️${prefix}lovemsg
✗⃝🕊 ️${prefix}grass
✗⃝🕊 ️${prefix}butterfly
✗⃝🕊 ️${prefix}lovetext

</𝗪𝗜𝗕𝗨 𝗠𝗘𝗡𝗨/>
✗⃝🕊 ️${prefix}bj
✗⃝🕊 ️${prefix}loli
✗⃝🕊 ️${prefix}yuri
✗⃝🕊 ️${prefix}kiryu   
✗⃝🕊 ️${prefix}animeplanet
✗⃝🕊 ️${prefix}klikmanga
✗⃝🕊 ️${prefix}cosplay
✗⃝🕊 ️${prefix}waifu
✗⃝🕊 ️${prefix}randomloli
✗⃝🕊 ️${prefix}husbu
✗⃝🕊 ️${prefix}wallml
✗⃝🕊 ️${prefix}milf
✗⃝🕊 ️${prefix}trapnime
✗⃝🕊 ️${prefix}neko
✗⃝🕊 ️${prefix}megumin
✗⃝🕊 ️${prefix}blowjob
✗⃝🕊 ️${prefix}hentai
✗⃝🕊 ️${prefix}awoo
✗⃝🕊 ️${prefix}eroneko
✗⃝🕊 ️${prefix}lesbian
✗⃝🕊 ️${prefix}anal
✗⃝🕊 ️${prefix}baka
✗⃝🕊 ️${prefix}neko2
✗⃝🕊 ️${prefix}wallpaper
✗⃝🕊 ️${prefix}pussy
✗⃝🕊 ️${prefix}kitsune
✗⃝🕊 ️${prefix}keta
✗⃝🕊 ️${prefix}neko2
✗⃝🕊 ️${prefix}poke
✗⃝🕊 ️${prefix}slap

</𝗠𝗨𝗟𝗧𝗜 𝗦𝗘𝗦𝗦𝗜𝗢𝗡/>
✗⃝🕊 ️${prefix}jadibot
✗⃝🕊 ️${prefix}stopjadibot
✗⃝🕊 ️${prefix}listjadibot
`
}

const xallmenu = (prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensi, teks)  => {
	return `╭⋆⸙ *🇮🇩 INDONESIA TIME*
${ucapannya2}
*🔖Jam :* ${timuu}
*🔖Hari :* ${thisDay}
*🔖Tanggal :* ${ini_tanggal}
*🔖WIB :* ${timuu}
*🔖WITA :* ${wita}
*🔖WIT :* ${wit}
╰❉▰▰▱▱▣▣▱▱▰▰❉

╭⋆⸙ *🤖 DEVICE*
*🐇Whatsapp :* ${wa_version}
*🐇Merk HP :* ${device_manufacturer}
*🐇Versi HP :* ${device_model}
*🐇Versi OS :* ${os_version}
*🐇RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*🐇MCC :* ${mcc}
*🐇MNC :* ${mnc}
╰❉▰▰▱▱▣▣▱▱▰▰❉

╭⋆⸙「 *🤖 BOT INFO* 」
*Mode :* ${status}
*Prefix :* ${prefix}
*Total Hit :* ${hit_today.length}
*Personal Chat :* ${totalchat.length - ini_gcchat.lenght}
*Total All Chat :* ${totalchat.length}
*Group Chat :* ${ini_gcchat}
╰❉▰▰▱▱▣▣▱▱▰▰❉

╭⋆⸙「 *CONVERT MENU* 」
│
✗⃝🕊 ️${prefix}toimg
✗⃝🕊 ️${prefix}tomp3
✗⃝🕊 ️${prefix}tomp4
✗⃝🕊 ️${prefix}slow
✗⃝🕊 ️${prefix}tupai
✗⃝🕊 ️${prefix}fast
✗⃝🕊 ️${prefix}reverse
✗⃝🕊 ️${prefix}tourl
│
⸙⃝⋆ 「 *DOWNLOAD MENU* 」
│
✗⃝🕊 ️${prefix}ytsearch _query_
✗⃝🕊 ️${prefix}igstalk _username_
✗⃝🕊 ️${prefix}ghstalk _username_
✗⃝🕊 ️${prefix}play _query_
✗⃝🕊 ️${prefix}playmp4 _query_
✗⃝🕊 ️${prefix}video _query_
✗⃝🕊 ️${prefix}ytmp3 _link_
✗⃝🕊 ️${prefix}ytmp4 _link_
✗⃝🕊 ️${prefix}ig _link_
✗⃝🕊 ️${prefix}igphoto _link_
✗⃝🕊 ️${prefix}igvideo _link_
✗⃝?? ️${prefix}igtv _link_
✗⃝🕊 ️${prefix}igreels _link_
✗⃝🕊 ️${prefix}twitter _link_
✗⃝🕊 ️${prefix}tiktokwm _link_
✗⃝🕊 ️${prefix}tiktoknowm _link_
✗⃝🕊 ️${prefix}tiktokaudio _link_
✗⃝🕊 ️${prefix}fb _link_
✗⃝🕊 ️${prefix}brainly _query_
✗⃝🕊 ️${prefix}image _query_
✗⃝🕊 ️${prefix}pinterest _query_
✗⃝🕊 ️${prefix}pinterest2 _query_
✗⃝🕊 ️${prefix}playstore _query_
✗⃝🕊 ️${prefix}gcwa _query_
✗⃝🕊 ️${prefix}lirik _query_
✗⃝🕊 ️${prefix}komiku _query_
✗⃝🕊 ️${prefix}anime _random_
✗⃝🕊 ️${prefix}bucin2
✗⃝🕊 ️${prefix}cehor
✗⃝🕊 ️${prefix}darkjoke2
✗⃝🕊 ️${prefix}fakta
✗⃝🕊 ️${prefix}husbu2
✗⃝🕊 ️${prefix}katabijak
✗⃝🕊 ️${prefix}kemono
✗⃝🕊 ️${prefix}loli2
✗⃝🕊 ️${prefix}motivasi
✗⃝🕊 ️${prefix}neko2
✗⃝🕊 ️${prefix}pantun
✗⃝🕊 ️${prefix}shota
✗⃝🕊 ️${prefix}waifu2
✗⃝🕊 ️${prefix}wallanime
│
⸙⃝⋆ 「 *FUN MENU* 」
│
✗⃝🕊 ️${prefix}jelajah
✗⃝🕊 ️${prefix}adventure
✗⃝🕊 ️${prefix}nambang
✗⃝🕊 ️${prefix}nebang
✗⃝🕊 ️${prefix}mancing
✗⃝🕊 ️${prefix}lebur
✗⃝🕊 ️${prefix}jualikan
✗⃝🕊 ️${prefix}jualcoal
✗⃝🕊 ️${prefix}jualstone
✗⃝🕊 ️${prefix}jualingot
✗⃝🕊 ️${prefix}jualkayu
✗⃝🕊 ️${prefix}slot
✗⃝🕊 ️${prefix}inventory
✗⃝🕊 ️${prefix}dompet
✗⃝🕊 ️${prefix}suit
✗⃝🕊 ️${prefix}judi
✗⃝🕊 ️${prefix}fitnah
✗⃝🕊 ️${prefix}absen
✗⃝🕊 ️${prefix}absensi
✗⃝🕊 ️${prefix}tebakgambar
✗⃝🕊 ️${prefix}caklontong
✗⃝🕊 ️${prefix}family100
✗⃝🕊 ️${prefix}tebakanime
✗⃝🕊 ️${prefix}suit
✗⃝🕊 ️${prefix}fitnahpc text|balasan
✗⃝🕊 ️${prefix}kontak 62xxx|text
✗⃝🕊 ️${prefix}tictactoe @user
✗⃝🕊 ️${prefix}delttt
✗⃝🕊 ️${prefix}voting @user|reason|time
✗⃝🕊 ️${prefix}delvote
✗⃝🕊 ️${prefix}jadibot
✗⃝🕊 ️${prefix}stopjadibot
✗⃝🕊 ️${prefix}listbot
│
⸙⃝⋆ 「 *MAKER MENU* 」
│
✗⃝🕊 ️${prefix}sticker
✗⃝🕊 ️${prefix}smeme atas|bawah
✗⃝🕊 ️${prefix}ktpmaker
✗⃝🕊 ️${prefix}attp
✗⃝🕊 ️${prefix}ttp
✗⃝🕊 ️${prefix}ttp1
✗⃝🕊 ️${prefix}ttp2
✗⃝🕊 ️${prefix}ttp3
✗⃝🕊 ️${prefix}ttp4
✗⃝🕊 ️${prefix}swm author|packname
✗⃝🕊 ️${prefix}take author|packname
✗⃝🕊 ️${prefix}fdeface
✗⃝🕊 ️${prefix}amongus 
✗⃝🕊 ️${prefix}tweettrump text
✗⃝🕊 ️${prefix}cmm text
✗⃝🕊 ️${prefix}kanna text
✗⃝🕊 ️${prefix}tahta text
✗⃝🕊 ️${prefix}neon2 text
✗⃝🕊 ️${prefix}wall text
✗⃝🕊 ️${prefix}wolf text
✗⃝🕊 ️${prefix}tfire text
✗⃝🕊 ️${prefix}ytgold text
✗⃝🕊 ️${prefix}ytsilver text
✗⃝🕊 ️${prefix}t3d text
✗⃝🕊 ️${prefix}logoa text|text
✗⃝🕊 ️${prefix}pornhub text|text
✗⃝🕊 ️${prefix}marvel text|text
✗⃝🕊 ️${prefix}leavest text
✗⃝🕊 ️${prefix}phcoment text|text
✗⃝🕊 ️${prefix}nulis text
✗⃝🕊 ️${prefix}nulis2
✗⃝🕊 ️${prefix}emoji 👼
✗⃝🕊 ️${prefix}naruto text
✗⃝🕊 ️${prefix}blueneon text
✗⃝🕊 ️${prefix}matrix text
✗⃝🕊 ️${prefix}greenneon text
✗⃝🕊 ️${prefix}dropwater text|text
✗⃝🕊 ️${prefix}wolflogo text
✗⃝🕊 ️${prefix}flowertext text
✗⃝🕊 ️${prefix}crosslogo text
✗⃝🕊 ️${prefix}silktext text
✗⃝🕊 ️${prefix}flametext text
✗⃝🕊 ️${prefix}glowtext text
✗⃝🕊 ️${prefix}smoketext text
✗⃝🕊 ️${prefix}pubglogo text|text
✗⃝🕊 ️${prefix}skytext text
✗⃝🕊 ️${prefix}cslogo text
│
⸙⃝⋆ 「 *IMAGE EFFECT* 」
│
✗⃝🕊 ️${prefix}trigger
✗⃝🕊 ️${prefix}gay
✗⃝🕊 ️${prefix}glass
✗⃝🕊 ️${prefix}passed
✗⃝🕊 ️${prefix}jail
✗⃝🕊 ️${prefix}comrade
✗⃝🕊 ️${prefix}hijau
✗⃝🕊 ️${prefix}biru
✗⃝🕊 ️${prefix}greyscale
✗⃝🕊 ️${prefix}invert
✗⃝🕊 ️${prefix}invert_greyscale
✗⃝🕊 ️${prefix}red
✗⃝🕊 ️${prefix}blurple
✗⃝🕊 ️${prefix}blurple2
✗⃝🕊 ️${prefix}wasted
✗⃝🕊 ️${prefix}pelangi
✗⃝🕊 ️${prefix}sepia
✗⃝🕊 ️${prefix}wanted
✗⃝🕊 ️${prefix}utatoo
✗⃝🕊 ️${prefix}unsharpen
✗⃝🕊 ️${prefix}thanos
✗⃝🕊 ️${prefix}sniper
✗⃝🕊 ️${prefix}sharpen
✗⃝🕊 ️${prefix}scary
✗⃝🕊 ️${prefix}rip
✗⃝🕊 ️${prefix}rejected
✗⃝🕊 ️${prefix}redple
✗⃝🕊 ️${prefix}posterize
✗⃝🕊 ️${prefix}ps4
✗⃝🕊 ️${prefix}pixelize
✗⃝🕊 ️${prefix}missionpassed
✗⃝🕊 ️${prefix}moustache
✗⃝🕊 ️${prefix}lookwhatkarenhave
✗⃝🕊 ️${prefix}instagram
✗⃝🕊 ️${prefix}glitch
✗⃝🕊 ️${prefix}frame
✗⃝🕊 ️${prefix}fire
✗⃝🕊 ️${prefix}distort
✗⃝🕊 ️${prefix}dictator
✗⃝🕊 ️${prefix}deepfry
✗⃝🕊 ️${prefix}ddungeon
✗⃝🕊 ️${prefix}circle
✗⃝🕊 ️${prefix}challenger
✗⃝🕊 ️${prefix}burn
✗⃝🕊 ️${prefix}brazzers
✗⃝🕊 ️${prefix}beautiful
│
⸙⃝⋆ 「 *GROUP MENU* 」
│
✗⃝🕊 ️${prefix}add 62+
✗⃝🕊 ️${prefix}kick _@user_
✗⃝🕊 ️${prefix}radd _reply pesan @user_
✗⃝🕊 ️${prefix}rkick _reply pesan @user_
✗⃝🕊 ️${prefix}ping
✗⃝🕊 ️${prefix}nsfw _on / off_
✗⃝🕊 ️${prefix}antilink _on / off_
✗⃝🕊 ️${prefix}get _link_
✗⃝🕊 ️${prefix}getpp _@user_
✗⃝🕊 ️${prefix}getname _reply_
✗⃝🕊 ️${prefix}size _reply media_
✗⃝🕊 ️${prefix}colongsw _reply sw_
✗⃝🕊 ️${prefix}getbio _@user_
✗⃝🕊 ️${prefix}tagall
✗⃝🕊 ️${prefix}listonline
✗⃝🕊 ️${prefix}caripesan query
✗⃝🕊 ️${prefix}caripesan2 _query_
✗⃝🕊 ️${prefix}searchmsg _query|total_
✗⃝🕊 ️${prefix}sider _reply pesan bot_
✗⃝🕊 ️${prefix}del _reply pesan bot_
✗⃝🕊 ️${prefix}q _reply pesan_
✗⃝🕊 ️${prefix}afk _reason_
✗⃝🕊 ️${prefix}getsider _reply pesan bot_
✗⃝🕊 ️${prefix}promoteall
✗⃝🕊 ️${prefix}ppcouple
✗⃝🕊 ️${prefix}setname
✗⃝🕊 ️${prefix}revoke
✗⃝🕊 ️${prefix}setdesk
✗⃝🕊 ️${prefix}spam text|jumlah
✗⃝🕊 ️${prefix}demoteall
✗⃝🕊 ️${prefix}admin
✗⃝🕊 ️${prefix}listpc
✗⃝🕊 ️${prefix}listgroup
✗⃝🕊 ️${prefix}hentai
✗⃝🕊 ️${prefix}jadian
✗⃝🕊 ️${prefix}trapnime
✗⃝🕊 ️${prefix}sewa add/del waktu
✗⃝🕊 ️${prefix}listsewa
✗⃝🕊 ️${prefix}ceksewa
✗⃝🕊 ️${prefix}premium add 62xxx waktu
✗⃝🕊 ️${prefix}cekpremium
✗⃝🕊 ️${prefix}listprem
✗⃝🕊 ️${prefix}belipremium
✗⃝🕊 ️${prefix}sewabot
✗⃝🕊 ️${prefix}verify
✗⃝🕊 ️${prefix}limit
✗⃝🕊 ️${prefix}profile
✗⃝🕊 ️${prefix}buylimit
✗⃝🕊 ️${prefix}buyglimit
✗⃝🕊 ️${prefix}awoo
✗⃝🕊 ️${prefix}megumin
│
⸙⃝⋆ 「 *OWNER MENU* 」
│
✗⃝🕊 ️${prefix}off
✗⃝🕊 ️${prefix}on
✗⃝🕊 ️${prefix}buggc
✗⃝🕊 ️${prefix}bc
✗⃝🕊 ️${prefix}bcimage
✗⃝🕊 ️${prefix}bcgif
✗⃝🕊 ️${prefix}bcvideo
✗⃝🕊 ️${prefix}bcaudio
✗⃝🕊 ️${prefix}bcsticker
✗⃝🕊 ️${prefix}virus1
✗⃝🕊 ️${prefix}virus2
✗⃝🕊 ️${prefix}virus3
✗⃝🕊 ️${prefix}virus4
✗⃝🕊 ️${prefix}ban
✗⃝🕊 ️${prefix}unban
✗⃝🕊 ️${prefix}block
✗⃝🕊 ️${prefix}unblock
✗⃝🕊 ️${prefix}status
✗⃝🕊 ️${prefix}clearall
✗⃝🕊 ️${prefix}self
✗⃝🕊 ️${prefix}public
✗⃝🕊 ️${prefix}join
✗⃝🕊 ️${prefix}leave
✗⃝🕊 ️${prefix}clearall
✗⃝🕊 ️${prefix}readall
✗⃝🕊 ️${prefix}unreadall
✗⃝🕊 ️${prefix}archive
✗⃝🕊 ️${prefix}unarchive
✗⃝🕊 ️${prefix}pin
✗⃝🕊 ️${prefix}delthischat
✗⃝🕊 ️${prefix}unpin
✗⃝🕊 ️${prefix}autoread <query> on / off
✗⃝🕊 ️${prefix}antibug on / off
✗⃝🕊 ️${prefix}antidelete on / off
✗⃝🕊 ️${prefix}anticall on / off
✗⃝🕊 ️${prefix}autoketik on / off
✗⃝🕊 ️${prefix}autovn on / off
✗⃝🕊 ️${prefix}antihidetag on / off
✗⃝🕊 ️${prefix}autobio on / off
✗⃝🕊 ️${prefix}register on / off
✗⃝🕊 ️${prefix}autorespon on / off
✗⃝🕊 ️${prefix}setthumb
✗⃝🕊 ️${prefix}settarget
✗⃝🕊 ️${prefix}setfakeimg
✗⃝🕊 ️${prefix}setreply
✗⃝🕊 ️${prefix}term _code_
✗⃝🕊 ️x or > _code_
✗⃝🕊 ️$  _termux code_
✗⃝🕊 ️=>  _eval async_
│
⸙⃝⋆ 「 *SET STC CMD* 」
│
✗⃝🕊 ️${prefix}set_stc_menu _<query>_
✗⃝🕊 ️${prefix}set_stc_ping _<query>_
✗⃝🕊 ️${prefix}set_stc_gclose _<query>_
✗⃝🕊 ️${prefix}set_stc_gopen _<query>_
✗⃝🕊 ️${prefix}set_stc_itos _<query>_
✗⃝🕊 ️${prefix}set_stc_toimg _<query>_
✗⃝🕊 ️${prefix}set_stc_self _<query>_
✗⃝🕊 ️${prefix}set_stc_public _<query>_
│
⸙⃝⋆ 「 *STORAGE  MENU* 」
│
✗⃝🕊 ️${prefix}addstik 
✗⃝🕊 ️${prefix}addimg 
✗⃝🕊 ️${prefix}addvid 
✗⃝🕊 ️${prefix}addvn   
✗⃝🕊 ️${prefix}liststick
✗⃝🕊 ️${prefix}listimg
✗⃝🕊 ️${prefix}listvid
✗⃝🕊 ️${prefix}listvn
✗⃝🕊 ️${prefix}addrespon
✗⃝🕊 ️${prefix}delrespon
✗⃝🕊 ️${prefix}listrespon
│
⸙⃝⋆ 「 *TAG  MENU* 」
│
✗⃝🕊 ️${prefix}hidetag
✗⃝🕊 ️${prefix}kontag
✗⃝🕊 ️${prefix}sticktag
✗⃝🕊 ️${prefix}totag
│
⸙⃝⋆ 「 *UP ESWE* 」
│
✗⃝🕊 ️${prefix}upswteks
✗⃝🕊 ️${prefix}upswimage
✗⃝🕊 ️${prefix}upswvideo
│
⸙⃝⋆ 「 *NSFW & SFW* 」
│
✗⃝🕊 ️${prefix}8ball
✗⃝🕊 ️${prefix}ahegao
✗⃝🕊 ️${prefix}anal
✗⃝🕊 ️${prefix}ass
✗⃝🕊 ️${prefix}avatar
✗⃝🕊 ️${prefix}baka
✗⃝🕊 ️${prefix}bdsm
✗⃝🕊 ️${prefix}bj
✗⃝🕊 ️${prefix}blowjob
✗⃝🕊 ️${prefix}blowjob2
✗⃝🕊 ️${prefix}boobs
✗⃝🕊 ️${prefix}classic
✗⃝🕊 ️${prefix}cry
✗⃝🕊 ️${prefix}cuckold
✗⃝🕊 ️${prefix}cuddle
✗⃝🕊 ️${prefix}cum
✗⃝🕊 ️${prefix}cum_jpg
✗⃝🕊 ️${prefix}doujin
✗⃝🕊 ️${prefix}ero
✗⃝🕊 ️${prefix}erofeet
✗⃝🕊 ️${prefix}erok
✗⃝🕊 ️${prefix}erokemo
✗⃝🕊 ️${prefix}eron
✗⃝🕊 ️${prefix}eroyuri
✗⃝🕊 ️${prefix}feed
✗⃝🕊 ️${prefix}feet
✗⃝🕊 ️${prefix}feetg
✗⃝🕊 ️${prefix}femdom
✗⃝🕊 ️${prefix}fendom
✗⃝🕊 ️${prefix}foot
✗⃝🕊 ️${prefix}foxgirl
✗⃝🕊 ️${prefix}fox_girl
✗⃝🕊 ️${prefix}futanari
✗⃝🕊 ️${prefix}gangbang
✗⃝🕊 ️${prefix}gasm
✗⃝🕊 ️${prefix}gecg
✗⃝🕊 ️${prefix}glasses
✗⃝🕊 ️${prefix}goose
✗⃝🕊 ️${prefix}hentai
✗⃝🕊 ️${prefix}hentai_gif
✗⃝🕊 ️${prefix}holo
✗⃝🕊 ️${prefix}holoero
✗⃝🕊 ️${prefix}hololewd
✗⃝🕊 ️${prefix}holoyero
✗⃝🕊 ️${prefix}hug
✗⃝🕊 ️${prefix}jahy
✗⃝🕊 ️${prefix}kemonomimi
✗⃝🕊 ️${prefix}keta
✗⃝🕊 ️${prefix}kiss
✗⃝🕊 ️${prefix}kitsune
✗⃝🕊 ️${prefix}kuni
✗⃝🕊 ️${prefix}les
✗⃝🕊 ️${prefix}lewd
✗⃝🕊 ️${prefix}lewdk
✗⃝🕊 ️${prefix}lewdkemo
✗⃝🕊 ️${prefix}lizard
✗⃝🕊 ️${prefix}maid
✗⃝🕊 ️${prefix}manga
✗⃝🕊 ️${prefix}masturbation
✗⃝🕊 ️${prefix}meow
✗⃝🕊 ️${prefix}neko
✗⃝🕊 ️${prefix}nekogif
✗⃝🕊 ️${prefix}netorare
✗⃝🕊 ️${prefix}ngif
✗⃝🕊 ️${prefix}nsfw_avatar
✗⃝🕊 ️${prefix}nsfw_neko_gif
✗⃝🕊 ️${prefix}orgy
✗⃝🕊 ️${prefix}panties
✗⃝🕊 ️${prefix}pat
✗⃝🕊 ️${prefix}poke
✗⃝🕊 ️${prefix}pussy
✗⃝🕊 ️${prefix}pussy_jpg
✗⃝🕊 ️${prefix}pwankg
✗⃝🕊 ️${prefix}school
✗⃝🕊 ️${prefix}slap
✗⃝🕊 ️${prefix}smug
✗⃝🕊 ️${prefix}solo
✗⃝🕊 ️${prefix}solog
✗⃝🕊 ️${prefix}spank
✗⃝🕊 ️${prefix}tentacles
✗⃝🕊 ️${prefix}thighs
✗⃝🕊 ️${prefix}tickle
✗⃝🕊 ️${prefix}tits
✗⃝🕊 ️${prefix}trap
✗⃝🕊 ️${prefix}uglybastard
✗⃝🕊 ️${prefix}Uniform
✗⃝🕊 ️${prefix}waifu
✗⃝🕊 ️${prefix}wallpaper
✗⃝🕊 ️${prefix}woof
✗⃝🕊 ️${prefix}yuri
✗⃝🕊 ️${prefix}zettai
✗⃝🕊 ️${prefix}zettai-ryouiki
│
⸙⃝⋆ 「 *STC  MENU* 」
│
✗⃝🕊 ️${prefix}awoawo
✗⃝🕊 ️${prefix}benedict
✗⃝🕊 ️${prefix}chat
✗⃝🕊 ️${prefix}dbfly
✗⃝🕊 ️${prefix}dino_kuning
✗⃝🕊 ️${prefix}doge
✗⃝🕊 ️${prefix}gojosatoru
✗⃝🕊 ️${prefix}hope_boy
✗⃝🕊 ️${prefix}jisoo
✗⃝🕊 ️${prefix}kr_robot
✗⃝🕊 ️${prefix}kucing
✗⃝🕊 ️${prefix}lonte
✗⃝🕊 ️${prefix}manusia_lidi
✗⃝🕊 ️${prefix}menjamet
✗⃝🕊 ️${prefix}meow
✗⃝🕊 ️${prefix}nicholas
✗⃝🕊 ️${prefix}patrick
✗⃝🕊 ️${prefix}popoci
✗⃝🕊 ️${prefix}sponsbob
✗⃝🕊 ️${prefix}kawan_sponsbob
✗⃝🕊 ️${prefix}tyni
│
⸙⃝⋆ 「 *CECAN  MENU* 」 
│
✗⃝🕊 ️${prefix}china
✗⃝🕊 ️${prefix}indonesia
✗⃝🕊 ️${prefix}malaysia
✗⃝🕊 ️${prefix}thailand
✗⃝🕊 ️${prefix}korea
✗⃝🕊 ️${prefix}japan
✗⃝🕊 ️${prefix}vietnam
✗⃝🕊 ️${prefix}jenni
✗⃝🕊 ️${prefix}jiso
✗⃝🕊 ️${prefix}lisa
✗⃝🕊 ️${prefix}rose
│
⸙⃝⋆ 「 *QUOTES  MENU* 」 
│
✗⃝🕊 ️${prefix}katailham  
✗⃝🕊 ️${prefix}dare   
✗⃝🕊 ️${prefix}truth  
✗⃝🕊 ️${prefix}katabijak_lucu   
✗⃝🕊 ️${prefix}katacaklontong  
✗⃝🕊 ️${prefix}katadilan  
│
⸙⃝⋆ 「 *COGAN  MENU* 」 
│
✗⃝🕊 ️${prefix}baekhyung  
✗⃝🕊 ️${prefix}dohkyungsoo  
✗⃝🕊 ️${prefix}huangzitao  
✗⃝🕊 ️${prefix}jhope  
✗⃝🕊 ️${prefix}jimin 
✗⃝🕊 ️${prefix}jungkook 
✗⃝🕊 ️${prefix}kimjondae  
✗⃝🕊 ️${prefix}kimjong  
✗⃝🕊 ️${prefix}kimjunmyeon  
✗⃝🕊 ️${prefix}kimminseok 
✗⃝🕊 ️${prefix}kimnanjoon  
✗⃝🕊 ️${prefix}kimseok  
✗⃝🕊 ️${prefix}kimtaehyung  
✗⃝🕊 ️${prefix}luhan  
✗⃝🕊 ️${prefix}ohsehun 
✗⃝🕊 ️${prefix}parkchanyeol 
✗⃝🕊 ️${prefix}suga  
✗⃝🕊 ️${prefix}wuyifan
│
⸙⃝⋆ 「 *ASUPAN  MENU* 」
│
✗⃝🕊 ️${prefix}rikagusriani 
✗⃝🕊 ️${prefix}ukhty 
✗⃝🕊 ️${prefix}santuy 
✗⃝🕊 ️${prefix}geayubi   
✗⃝🕊 ️${prefix}bocil
✗⃝🕊 ️${prefix}asupan
✗⃝🕊 ️${prefix}chika 
✗⃝🕊 ️${prefix}delvira 
✗⃝🕊 ️${prefix}ayu   
✗⃝🕊 ️${prefix}bunga
✗⃝🕊 ️${prefix}aura
✗⃝🕊 ️${prefix}nisa 
✗⃝🕊 ️${prefix}ziva 
✗⃝🕊 ️${prefix}yana   
✗⃝🕊 ️${prefix}viona
✗⃝🕊 ️${prefix}syania
✗⃝🕊 ️${prefix}riri   
✗⃝🕊 ️${prefix}syifa
✗⃝🕊 ️${prefix}mama_gina
✗⃝🕊 ️${prefix}alcakenya 
✗⃝🕊 ️${prefix}mangayutri
│
⸙⃝⋆ 「 *ANIME  MENU* 」
│
✗⃝🕊 ️${prefix}akame
✗⃝🕊 ️${prefix}anna
✗⃝🕊 ️${prefix}asuna_yuki
✗⃝🕊 ️${prefix}ayuzawa
✗⃝🕊 ️${prefix}bunny
✗⃝🕊 ️${prefix}cat
✗⃝🕊 ️${prefix}chitoge
✗⃝🕊 ️${prefix}darkjoke
✗⃝🕊 ️${prefix}dog
✗⃝🕊 ️${prefix}duck
✗⃝🕊 ️${prefix}emilia
✗⃝🕊 ️${prefix}erza
✗⃝🕊 ️${prefix}fox
✗⃝🕊 ️${prefix}hinata
✗⃝🕊 ️${prefix}inori
✗⃝🕊 ️${prefix}kaga_kouko
✗⃝🕊 ️${prefix}kaori_miyazono
✗⃝🕊 ️${prefix}kotori_minami
✗⃝🕊 ️${prefix}lizard
✗⃝🕊 ️${prefix}memeindo
✗⃝🕊 ️${prefix}mikasa
✗⃝🕊 ️${prefix}mikosiba
✗⃝🕊 ️${prefix}mio_akiyama
✗⃝🕊 ️${prefix}mizore_sirayuki
✗⃝🕊 ️${prefix}nakiri_alice
✗⃝🕊 ️${prefix}naruto
✗⃝🕊 ️${prefix}panda
✗⃝🕊 ️${prefix}randomcowok
✗⃝🕊 ️${prefix}riyas_gremori
✗⃝🕊 ️${prefix}sakura
✗⃝🕊 ️${prefix}sasuke
✗⃝🕊 ️${prefix}sento_isuzu
✗⃝🕊 ️${prefix}shana
✗⃝🕊 ️${prefix}shiba
✗⃝🕊 ️${prefix}shiina
✗⃝🕊 ️${prefix}shinka
✗⃝🕊 ️${prefix}winry
✗⃝🕊 ️${prefix}yukino
✗⃝🕊 ️${prefix}yuzuki
│
└─⃝⋆⸙「 MENU BOT 」
`
}

const fun = (prefix) => {
	return`╭⋆⸙ *FUN & GAME MENU* ⸙⋆
│
✗⃝🕊 ️${prefix}jelajah
✗⃝🕊 ️${prefix}adventure
✗⃝🕊 ️${prefix}nambang
✗⃝🕊 ️${prefix}nebang
✗⃝🕊 ️${prefix}mancing
✗⃝🕊 ️${prefix}lebur
✗⃝🕊 ️${prefix}jualikan
✗⃝🕊 ️${prefix}jualcoal
✗⃝🕊 ️${prefix}jualstone
✗⃝🕊 ️${prefix}jualingot
✗⃝🕊 ️${prefix}jualkayu
✗⃝🕊 ️${prefix}slot
✗⃝🕊 ️${prefix}inventory
✗⃝🕊 ️${prefix}dompet
✗⃝🕊 ️${prefix}suit
✗⃝🕊 ️${prefix}judi
✗⃝🕊 ️${prefix}fitnah
✗⃝🕊 ️${prefix}absen
✗⃝🕊 ️${prefix}absensi
✗⃝🕊 ️${prefix}tebakgambar
✗⃝🕊 ️${prefix}caklontong
✗⃝🕊 ️${prefix}family100
✗⃝🕊 ️${prefix}tebakanime
✗⃝🕊 ️${prefix}fitnahpc text|balasan
✗⃝🕊 ️${prefix}kontak 62xxx|text
✗⃝🕊 ️${prefix}tictactoe @user
✗⃝🕊 ️${prefix}delttt
✗⃝🕊 ️${prefix}voting
✗⃝🕊 ️${prefix}delvote
✗⃝🕊 ️${prefix}jadibot
✗⃝🕊 ️${prefix}stopjadibot
╰⋆⸙ ${prefix}listbot
`
}

const maker = (prefix) => {
	return`╭⋆⸙ *MAKER MENU* ⸙⋆
│
✗⃝🕊 ️${prefix}sticker
✗⃝🕊 ️${prefix}smeme
✗⃝🕊 ️${prefix}ktpmaker
✗⃝🕊 ️${prefix}attp
✗⃝🕊 ️${prefix}ttp
✗⃝🕊 ️${prefix}ttp1
✗⃝🕊 ️${prefix}ttp2
✗⃝🕊 ️${prefix}ttp3
✗⃝🕊 ️${prefix}ttp4
✗⃝🕊 ️${prefix}swm author|packname
✗⃝🕊 ️${prefix}take author|packname
✗⃝🕊 ️${prefix}fdeface
✗⃝🕊 ️${prefix}amongus 
✗⃝🕊 ️${prefix}tweettrump text
✗⃝🕊 ️${prefix}1917 _text_
✗⃝🕊 ️${prefix}angelwing _text_
✗⃝🕊 ️${prefix}bannerepep _text_
✗⃝🕊 ️${prefix}blood _text_
✗⃝🕊 ️${prefix}bluelight _text_
✗⃝🕊 ️${prefix}blueneon _text_
✗⃝🕊 ️${prefix}break-wall _text_
✗⃝🕊 ️${prefix}christmas _text_
✗⃝🕊 ️${prefix}cmm _text_
✗⃝🕊 ️${prefix}crosslogo _text_
✗⃝🕊 ️${prefix}cslogo _text_
✗⃝🕊 ️${prefix}deluxe-gold _text_
✗⃝🕊 ️${prefix}deluxe-silver _text_
✗⃝🕊 ️${prefix}dropwater _text_|text_
✗⃝🕊 ️${prefix}firedragon _text_
✗⃝🕊 ️${prefix}firewing _text_
✗⃝🕊 ️${prefix}firework _text_
✗⃝🕊 ️${prefix}flametext _text_
✗⃝🕊 ️${prefix}flowertext _text_
✗⃝🕊 ️${prefix}flower _text_
✗⃝🕊 ️${prefix}galaxyangel _text_
✗⃝🕊 ️${prefix}galaxyedge _text_
✗⃝🕊 ️${prefix}galaxysprout _text_
✗⃝🕊 ️${prefix}glossy-blue _text_
✗⃝🕊 ️${prefix}glossy-carbon _text_
✗⃝🕊 ️${prefix}glowtext _text_
✗⃝🕊 ️${prefix}glow _text_
✗⃝🕊 ️${prefix}glue _text_
✗⃝🕊 ️${prefix}googleimage _text_
✗⃝🕊 ️${prefix}gradient _text_
✗⃝🕊 ️${prefix}greenneon _text_
✗⃝🕊 ️${prefix}halloween _text_
✗⃝🕊 ️${prefix}horror _text_
✗⃝🕊 ️${prefix}joker _text_
✗⃝🕊 ️${prefix}kanna _text_
✗⃝🕊 ️${prefix}lava _text_
✗⃝🕊 ️${prefix}leavest _text_
✗⃝🕊 ️${prefix}lightgerm _text_
✗⃝🕊 ️${prefix}logoa _text_|text_
✗⃝🕊 ️${prefix}loveshadow _text_
✗⃝🕊 ️${prefix}luxury _text_
✗⃝🕊 ️${prefix}marvel _text_|text_
✗⃝🕊 ️${prefix}matrix _text_
✗⃝🕊 ️${prefix}metal-dark _text_
✗⃝🕊 ️${prefix}metal-purple _text_
✗⃝🕊 ️${prefix}minion _text_
✗⃝🕊 ️${prefix}moon _text_
✗⃝🕊 ️${prefix}naruto _text_
✗⃝🕊 ️${prefix}neon-light _text_
✗⃝🕊 ️${prefix}neon2 _text_
✗⃝🕊 ️${prefix}neondevil _text_
✗⃝🕊 ️${prefix}neon _text_
✗⃝🕊 ️${prefix}nulis2
✗⃝🕊 ️${prefix}nulis _text_
✗⃝🕊 ️${prefix}papercut _text_
✗⃝🕊 ️${prefix}phcoment _text_|text_
✗⃝🕊 ️${prefix}pornhub _text_|text_
✗⃝🕊 ️${prefix}pubglogo _text_|text_
✗⃝🕊 ️${prefix}sand-engrave _text_
✗⃝🕊 ️${prefix}sand-summery _text_
✗⃝🕊 ️${prefix}sand-writing _text_
✗⃝🕊 ️${prefix}sand2 _text_
✗⃝🕊 ️${prefix}sand _text_
✗⃝🕊 ️${prefix}seasidesand _text_
✗⃝🕊 ️${prefix}silktext _text_
✗⃝🕊 ️${prefix}skeleton _text_
✗⃝🕊 ️${prefix}skytext _text_
✗⃝🕊 ️${prefix}sky _text_
✗⃝🕊 ️${prefix}smoketext _text_
✗⃝🕊 ️${prefix}starmetalic _text_
✗⃝🕊 ️${prefix}summer _text_
✗⃝🕊 ️${prefix}t3d _text_
✗⃝🕊 ️${prefix}tahta _text_
✗⃝🕊 ️${prefix}tfire _text_
✗⃝🕊 ️${prefix}thunder _text_
✗⃝🕊 ️${prefix}toxic _text_
✗⃝🕊 ️${prefix}underwater _text_
✗⃝🕊 ️${prefix}viettel _text_
✗⃝🕊 ️${prefix}wall _text_
✗⃝🕊 ️${prefix}water3d _text_
✗⃝🕊 ️${prefix}wicker _text_
✗⃝🕊 ️${prefix}winter _text_
✗⃝🕊 ️${prefix}wolflogo _text_
✗⃝🕊 ️${prefix}wolf _text_
✗⃝🕊 ️${prefix}writegalaxy _text_
✗⃝🕊 ️${prefix}xmas _text_
✗⃝🕊 ️${prefix}yasuo _text_
✗⃝🕊 ️${prefix}ytgold _text_
✗⃝🕊 ️${prefix}ytsilver _text_
╰⋆⸙ ${prefix}emoji 👼
`
}

const other = (prefix) => {
	return`╭⋆⸙ *GROUP MENU* ⸙⋆
│
✗⃝🕊 ️${prefix}add 62xxx
✗⃝🕊 ️${prefix}kick 62xxx
✗⃝🕊 ️${prefix}ping
✗⃝🕊 ️${prefix}antilink _on / off_
✗⃝🕊 ️${prefix}get _link_
✗⃝🕊 ️${prefix}getpp _@user_
✗⃝🕊 ️${prefix}getbio _@user_
✗⃝🕊 ️${prefix}getname _reply_
✗⃝🕊 ️${prefix}size _reply media_
✗⃝🕊 ️${prefix}colongsw _reply sw_
✗⃝🕊 ️${prefix}tagall
✗⃝🕊 ️${prefix}listonline
✗⃝🕊 ️${prefix}caripesan query
✗⃝🕊 ️${prefix}caripesan2 _query_
✗⃝🕊 ️${prefix}searchmsg _query|total_
✗⃝🕊 ️${prefix}sider _reply pesan bot_
✗⃝🕊 ️${prefix}del _reply pesan bot_
✗⃝🕊 ️${prefix}q _reply pesan_
✗⃝🕊 ️${prefix}afk _reason_
✗⃝🕊 ️${prefix}getsider _reply pesan bot_
✗⃝🕊 ️${prefix}tagall
✗⃝🕊 ️${prefix}revoke
✗⃝🕊 ️${prefix}setname
✗⃝🕊 ️${prefix}ppcouple
✗⃝🕊 ️${prefix}promoteall
✗⃝🕊 ️${prefix}demoteall
✗⃝🕊 ️${prefix}admin
✗⃝🕊 ️${prefix}hentai
✗⃝🕊 ️${prefix}jadian
✗⃝🕊 ️${prefix}trapnime
✗⃝🕊 ️${prefix}sewa add/del waktu
✗⃝🕊 ️${prefix}listsewa
✗⃝🕊 ️${prefix}ceksewa
✗⃝🕊 ️${prefix}premium add @user waktu
✗⃝🕊 ️${prefix}cekpremium
✗⃝🕊 ️${prefix}listprem
✗⃝🕊 ️${prefix}belipremium
✗⃝🕊 ️${prefix}sewabot
✗⃝🕊 ️${prefix}verify
✗⃝🕊 ️${prefix}limit
✗⃝🕊 ️${prefix}profile
✗⃝🕊 ️${prefix}buylimit
✗⃝🕊 ️${prefix}buyglimit
✗⃝🕊 ️${prefix}blowjob
✗⃝🕊 ️${prefix}awoo
✗⃝🕊 ️${prefix}youwatch _text_
✗⃝🕊 ️${prefix}thelazy _text_
✗⃝🕊 ️${prefix}samehadaku _text_
✗⃝🕊 ️${prefix}ipgeo _ip_
✗⃝🕊 ️${prefix}amazon _text_
✗⃝🕊 ️${prefix}md5enc _kata_
✗⃝🕊 ️${prefix}moddroid _text_
✗⃝🕊 ️${prefix}ssfile _text_
✗⃝🕊 ️${prefix}ssticker _text_
✗⃝🕊 ️${prefix}pinterst _text_
✗⃝🕊 ️${prefix}gsearch _text_
✗⃝🕊 ️${prefix}gimage _text_
✗⃝🕊 ️${prefix}quran _1|2_
✗⃝🕊 ️${prefix}translate _kata_
✗⃝🕊 ️${prefix}tts _id kata_
✗⃝🕊 ️${prefix}detikvn _12345_
╰⋆⸙ ${prefix}megumin
`
}

const ownermenu = (prefix) => {
	return`╭⋆⸙ *OWNER MENU* ⸙⋆
│
✗⃝🕊 ️${prefix}off
✗⃝🕊 ️${prefix}on
✗⃝🕊 ️${prefix}buggc
✗⃝🕊 ️${prefix}bc
✗⃝🕊 ️${prefix}bcimage
✗⃝🕊 ️${prefix}bcgif
✗⃝🕊 ️${prefix}bcvideo
✗⃝🕊 ️${prefix}bcaudio
✗⃝🕊 ️${prefix}bcsticker
✗⃝🕊 ️${prefix}virus1
✗⃝🕊 ️${prefix}virus2
✗⃝🕊 ️${prefix}virus3
✗⃝🕊 ️${prefix}virus4
✗⃝🕊 ️${prefix}ban
✗⃝🕊 ️${prefix}unban
✗⃝🕊 ️${prefix}block
✗⃝🕊 ️${prefix}unblock
✗⃝🕊 ️${prefix}status
✗⃝🕊 ️${prefix}clearall
✗⃝🕊 ️${prefix}self
✗⃝🕊 ️${prefix}public
✗⃝🕊 ️${prefix}join 
✗⃝🕊 ️${prefix}leave
✗⃝🕊 ️${prefix}readall
✗⃝🕊 ️${prefix}unreadall
✗⃝🕊 ️${prefix}archive
✗⃝🕊 ️${prefix}unarchive
✗⃝🕊 ️${prefix}pin
✗⃝🕊 ️${prefix}delthischat
✗⃝🕊 ️${prefix}unpin
✗⃝🕊 ️${prefix}autoread <query> on / off
✗⃝🕊 ️${prefix}antibug on / off
✗⃝🕊 ️${prefix}antidelete on / off
✗⃝🕊 ️${prefix}anticall on / off
✗⃝🕊 ️${prefix}autoketik on / off
✗⃝🕊 ️${prefix}autobio on / off
✗⃝🕊 ️${prefix}antihidetag on / off
✗⃝🕊 ️${prefix}autovn on / off
✗⃝🕊 ️${prefix}register on / off
✗⃝🕊 ️${prefix}autorespon on / off
✗⃝🕊 ️${prefix}setthumb
✗⃝🕊 ️${prefix}settarget
✗⃝🕊 ️${prefix}setfakeimg
✗⃝🕊 ️${prefix}setreply
✗⃝🕊 ️${prefix}term _code_
✗⃝🕊 ️$  _termux code_
✗⃝🕊 ️=>  _eval async_
╰⋆⸙ x or > _code_
`
}

const setStcCmd = (prefix) => {
	return`╭⋆⸙ *SET STC CMD* ⸙⋆
│
✗⃝🕊 ️${prefix}set_stc_menu
✗⃝🕊 ️${prefix}set_stc_ping
✗⃝🕊 ️${prefix}set_stc_gclose
✗⃝🕊 ️${prefix}set_stc_gopen
✗⃝🕊 ️${prefix}set_stc_itos
✗⃝🕊 ️${prefix}set_stc_toimg
✗⃝🕊 ️${prefix}set_stc_self
╰⋆⸙ ${prefix}set_stc_public

Cara penggunaan :
> ${prefix}set_stc_menu _fileLenght sticker_

Example :
> ${prefix}set_stc_menu 7446
`
}

const storage = (prefix) => {
	return`╭⋆⸙ *STORAGE MENU* ⸙⋆
│
✗⃝🕊 ️${prefix}addstik 
✗⃝🕊 ️${prefix}addimg 
✗⃝🕊 ️${prefix}addvid 
✗⃝🕊 ️${prefix}addvn   
✗⃝🕊 ️${prefix}liststick
✗⃝🕊 ️${prefix}listimg
✗⃝🕊 ️${prefix}listvid
✗⃝🕊 ️${prefix}listvn
✗⃝🕊 ️${prefix}addrespon
✗⃝🕊 ️${prefix}delrespon
╰⋆⸙ ${prefix}listrespon
`
}
const cecanmenu = (prefix) => {
	return`╭⋆⸙ *GACHA CECAN* ⸙⋆
│
✗⃝🕊 ️${prefix}china
✗⃝🕊 ️${prefix}indonesia
✗⃝🕊 ️${prefix}malaysia
✗⃝🕊 ️${prefix}thailand
✗⃝🕊 ️${prefix}korea
✗⃝🕊 ️${prefix}japan
✗⃝🕊 ️${prefix}vietnam
✗⃝🕊 ️${prefix}jenni
✗⃝🕊 ️${prefix}jiso
✗⃝🕊 ️${prefix}lisa
╰⋆⸙ ${prefix}rose
`
}

const tag = (prefix) => {
	return`╭⋆⸙ *TAG MENU* ⸙⋆
│
✗⃝🕊 ️${prefix}hidetag
✗⃝🕊 ️${prefix}kontag
✗⃝🕊 ️${prefix}sticktag
╰⋆⸙ ${prefix}totag
`
}

const upmenu = (prefix) => {
	return`╭⋆⸙ *UP ESWE* ⸙⋆
│
✗⃝🕊 ️${prefix}upswteks
✗⃝🕊 ️${prefix}upswimage
╰⋆⸙ ${prefix}upswvideo
`
}
const nsfw = (prefix) => {
	return`╭⋆⸙ *NSFW & SFW* ⸙⋆
│
✗⃝🕊 ️${prefix}8ball
✗⃝🕊 ️${prefix}ahegao
✗⃝🕊 ️${prefix}anal
✗⃝🕊 ️${prefix}ass
✗⃝🕊 ️${prefix}avatar
✗⃝🕊 ️${prefix}baka
✗⃝🕊 ️${prefix}bdsm
✗⃝🕊 ️${prefix}bj
✗⃝🕊 ️${prefix}blowjob
✗⃝🕊 ️${prefix}blowjob2
✗⃝🕊 ️${prefix}boobs
✗⃝🕊 ️${prefix}classic
✗⃝🕊 ️${prefix}cry
✗⃝🕊 ️${prefix}cuckold
✗⃝🕊 ️${prefix}cuddle
✗⃝🕊 ️${prefix}cum
✗⃝🕊 ️${prefix}cum_jpg
✗⃝🕊 ️${prefix}doujin
✗⃝🕊 ️${prefix}ero
✗⃝🕊 ️${prefix}erofeet
✗⃝🕊 ️${prefix}erok
✗⃝🕊 ️${prefix}erokemo
✗⃝🕊 ️${prefix}eron
✗⃝🕊 ️${prefix}eroyuri
✗⃝🕊 ️${prefix}feed
✗⃝🕊 ️${prefix}feet
✗⃝🕊 ️${prefix}feetg
✗⃝🕊 ️${prefix}femdom
✗⃝🕊 ️${prefix}fendom
✗⃝🕊 ️${prefix}foot
✗⃝🕊 ️${prefix}foxgirl
✗⃝🕊 ️${prefix}fox_girl
✗⃝🕊 ️${prefix}futanari
✗⃝🕊 ️${prefix}gangbang
✗⃝🕊 ️${prefix}gasm
✗⃝🕊 ️${prefix}gecg
✗⃝🕊 ️${prefix}glasses
✗⃝🕊 ️${prefix}goose
✗⃝🕊 ️${prefix}hentai
✗⃝🕊 ️${prefix}hentai_gif
✗⃝🕊 ️${prefix}holo
✗⃝🕊 ️${prefix}holoero
✗⃝🕊 ️${prefix}hololewd
✗⃝🕊 ️${prefix}holoyero
✗⃝🕊 ️${prefix}hug
✗⃝🕊 ️${prefix}jahy
✗⃝🕊 ️${prefix}kemonomimi
✗⃝🕊 ️${prefix}keta
✗⃝🕊 ️${prefix}kiss
✗⃝🕊 ️${prefix}kitsune
✗⃝🕊 ️${prefix}kuni
✗⃝🕊 ️${prefix}les
✗⃝🕊 ️${prefix}lewd
✗⃝🕊 ️${prefix}lewdk
✗⃝🕊 ️${prefix}lewdkemo
✗⃝🕊 ️${prefix}lizard
✗⃝🕊 ️${prefix}maid
✗⃝🕊 ️${prefix}manga
✗⃝🕊 ️${prefix}masturbation
✗⃝🕊 ️${prefix}meow
✗⃝🕊 ️${prefix}neko
✗⃝🕊 ️${prefix}nekogif
✗⃝🕊 ️${prefix}netorare
✗⃝🕊 ️${prefix}ngif
✗⃝🕊 ️${prefix}nsfw_avatar
✗⃝🕊 ️${prefix}nsfw_neko_gif
✗⃝🕊 ️${prefix}orgy
✗⃝🕊 ️${prefix}panties
✗⃝🕊 ️${prefix}pat
✗⃝🕊 ️${prefix}poke
✗⃝🕊 ️${prefix}pussy
✗⃝🕊 ️${prefix}pussy_jpg
✗⃝🕊 ️${prefix}pwankg
✗⃝🕊 ️${prefix}school
✗⃝🕊 ️${prefix}slap
✗⃝🕊 ️${prefix}smug
✗⃝🕊 ️${prefix}solo
✗⃝🕊 ️${prefix}solog
✗⃝🕊 ️${prefix}spank
✗⃝🕊 ️${prefix}tentacles
✗⃝🕊 ️${prefix}thighs
✗⃝🕊 ️${prefix}tickle
✗⃝🕊 ️${prefix}tits
✗⃝🕊 ️${prefix}trap
✗⃝🕊 ️${prefix}uglybastard
✗⃝🕊 ️${prefix}Uniform
✗⃝🕊 ️${prefix}waifu
✗⃝🕊 ️${prefix}wallpaper
✗⃝🕊 ️${prefix}woof
✗⃝🕊 ️${prefix}yuri
✗⃝🕊 ️${prefix}zettai-ryouiki

╰⋆⸙ ${prefix}zettai
`
}
const asupan = (prefix) => {
	return`╭⋆⸙ *ASUPAN MENU* ⸙⋆
│
✗⃝🕊 ️${prefix}rikagusriani 
✗⃝🕊 ️${prefix}ukhty 
✗⃝🕊 ️${prefix}santuy 
✗⃝🕊 ️${prefix}geayubi   
✗⃝🕊 ️${prefix}bocil
✗⃝🕊 ️${prefix}asupan
✗⃝🕊 ️${prefix}chika 
✗⃝🕊 ️${prefix}delvira 
✗⃝🕊 ️${prefix}ayu   
✗⃝🕊 ️${prefix}bunga
✗⃝🕊 ️${prefix}aura
✗⃝🕊 ️${prefix}nisa 
✗⃝🕊 ️${prefix}ziva 
✗⃝🕊 ️${prefix}yana   
✗⃝🕊 ️${prefix}viona
✗⃝🕊 ️${prefix}syania
✗⃝🕊 ️${prefix}riri   
✗⃝🕊 ️${prefix}syifa
✗⃝🕊 ️${prefix}mama_gina
✗⃝🕊 ️${prefix}alcakenya 
╰⋆⸙ ${prefix}mangayutri
`
}
const telestiker = (prefix) => {
	return`╭⋆⸙ *STICKERS MENU* ⸙⋆
│
✗⃝🕊 ️${prefix}awoawo
✗⃝🕊 ️${prefix}benedict
✗⃝🕊 ️${prefix}chat
✗⃝🕊 ️${prefix}dbfly
✗⃝🕊 ️${prefix}dino_kuning
✗⃝🕊 ️${prefix}doge
✗⃝🕊 ️${prefix}gojosatoru
✗⃝🕊 ️${prefix}hope_boy
✗⃝🕊 ️${prefix}jisoo
✗⃝🕊 ️${prefix}kr_robot
✗⃝🕊 ️${prefix}kucing
✗⃝🕊 ️${prefix}lonte
✗⃝🕊 ️${prefix}manusia_lidi
✗⃝🕊 ️${prefix}menjamet
✗⃝🕊 ️${prefix}meow
✗⃝🕊 ️${prefix}nicholas
✗⃝🕊 ️${prefix}patrick
✗⃝🕊 ️${prefix}popoci
✗⃝🕊 ️${prefix}sponsbob
✗⃝🕊 ️${prefix}kawan_sponsbob
╰⋆⸙ ${prefix}tyni
`
}
const image_effect_menu = (prefix) => {
	return`╭⋆⸙ *IMAGE EFFECT* ⸙⋆
│
✗⃝🕊 ️${prefix}trigger
✗⃝🕊 ️${prefix}gay
✗⃝🕊 ️${prefix}glass
✗⃝🕊 ️${prefix}passed
✗⃝🕊 ️${prefix}jail
✗⃝🕊 ️${prefix}comrade
✗⃝🕊 ️${prefix}hijau
✗⃝🕊 ️${prefix}biru
✗⃝🕊 ️${prefix}greyscale
✗⃝🕊 ️${prefix}invert
✗⃝🕊 ️${prefix}invert_greyscale
✗⃝🕊 ️${prefix}red
✗⃝🕊 ️${prefix}blurple
✗⃝🕊 ️${prefix}blurple2
✗⃝🕊 ️${prefix}wasted
✗⃝🕊 ️${prefix}pelangi
✗⃝🕊 ️${prefix}wanted
✗⃝🕊 ️${prefix}utatoo
✗⃝🕊 ️${prefix}unsharpen
✗⃝🕊 ️${prefix}thanos
✗⃝🕊 ️${prefix}sniper
✗⃝🕊 ️${prefix}sharpen
✗⃝🕊 ️${prefix}scary
✗⃝🕊 ️${prefix}rip
✗⃝🕊 ️${prefix}rejected
✗⃝🕊 ️${prefix}redple
✗⃝🕊 ️${prefix}posterize
✗⃝🕊 ️${prefix}ps4
✗⃝🕊 ️${prefix}pixelize
✗⃝🕊 ️${prefix}missionpassed
✗⃝🕊 ️${prefix}moustache
✗⃝🕊 ️${prefix}lookwhatkarenhave
✗⃝🕊 ️${prefix}instagram
✗⃝🕊 ️${prefix}glitch
✗⃝🕊 ️${prefix}frame
✗⃝🕊 ️${prefix}fire
✗⃝🕊 ️${prefix}distort
✗⃝🕊 ️${prefix}dictator
✗⃝🕊 ️${prefix}deepfry
✗⃝🕊 ️${prefix}ddungeon
✗⃝🕊 ️${prefix}circle
✗⃝🕊 ️${prefix}challenger
✗⃝🕊 ️${prefix}burn
✗⃝🕊 ️${prefix}brazzers
✗⃝🕊 ️${prefix}beautiful
╰⋆⸙ ${prefix}sepia
`
}
const coganmenu = (prefix) => {
	return`╭⋆⸙ *GACHA COGAN* ⸙⋆
│
✗⃝🕊 ️${prefix}baekhyung  
✗⃝🕊 ️${prefix}dohkyungsoo  
✗⃝🕊 ️${prefix}huangzitao  
✗⃝🕊 ️${prefix}jhope  
✗⃝🕊 ️${prefix}jimin 
✗⃝🕊 ️${prefix}jungkook 
✗⃝🕊 ️${prefix}kimjondae  
✗⃝🕊 ️${prefix}kimjong  
✗⃝🕊 ️${prefix}kimjunmyeon  
✗⃝🕊 ️${prefix}kimminseok 
✗⃝🕊 ️${prefix}kimnanjoon  
✗⃝🕊 ️${prefix}kimseok  
✗⃝🕊 ️${prefix}kimtaehyung  
✗⃝🕊 ️${prefix}luhan  
✗⃝🕊 ️${prefix}ohsehun 
✗⃝🕊 ️${prefix}parkchanyeol 
✗⃝🕊 ️${prefix}suga  
╰⋆⸙ ${prefix}wuyifan  
`
}

const quotesmenu = (prefix) => {
	return `╭⋆⸙ *QUOTES MENU* ⸙⋆
│
✗⃝🕊 ️${prefix}katailham  
✗⃝🕊 ️${prefix}dare   
✗⃝🕊 ️${prefix}truth  
✗⃝🕊 ️${prefix}katabijak_lucu   
✗⃝🕊 ️${prefix}katacaklontong 
✗⃝🕊 ️${prefix}artinama _nama_
✗⃝🕊 ️${prefix}artimimpi _mimpi_
✗⃝🕊 ️${prefix}artikata _kata_
✗⃝🕊 ️${prefix}zodiak _text_
╰⋆⸙ ${prefix}katadilan  
`
}
const shopmenu = (prefix) => {
	return `╭⋆⸙ *SHOP MENU* ⸙⋆
│
✗⃝🕊 ️${prefix}shop  
✗⃝🕊 ️${prefix}price  
✗⃝🕊 ️${prefix}pubg   
✗⃝🕊 ️${prefix}ml   
✗⃝🕊 ️${prefix}ff   
✗⃝🕊 ️${prefix}aov   
✗⃝🕊 ️${prefix}cod  
✗⃝🕊 ️${prefix}sausage   
✗⃝🕊 ️${prefix}lol  
╰⋆⸙ ${prefix}valo  
`
}
const animemenu = (prefix) => {
	return`╭⋆⸙ *ANIME MENU* ⸙⋆
│
✗⃝🕊 ️${prefix}random
✗⃝🕊 ️${prefix}topmanga _text_
✗⃝🕊 ️${prefix}topanime _text_
✗⃝🕊 ️${prefix}anna
✗⃝🕊 ️${prefix}asuna_yuki 
✗⃝🕊 ️${prefix}ayuzawa 
✗⃝🕊 ️${prefix}chitoge 
✗⃝🕊 ️${prefix}emilia
✗⃝🕊 ️${prefix}erza 
✗⃝🕊 ️${prefix}hinata 
✗⃝🕊 ️${prefix}inori 
✗⃝🕊 ️${prefix}kaga_kouko 
✗⃝🕊 ️${prefix}kaori_miyazono 
✗⃝🕊 ️${prefix}kotori_minami
✗⃝🕊 ️${prefix}mikasa 
✗⃝🕊 ️${prefix}mio_akiyama 
✗⃝🕊 ️${prefix}mizore_sirayuki 
✗⃝🕊 ️${prefix}nakiri_alice 
✗⃝🕊 ️${prefix}naruto 
✗⃝🕊 ️${prefix}riyas_gremori
✗⃝🕊 ️${prefix}sakura 
✗⃝🕊 ️${prefix}sasuke 
✗⃝🕊 ️${prefix}sento_isuzu 
✗⃝🕊 ️${prefix}shana 
✗⃝🕊 ️${prefix}shiina 
✗⃝🕊 ️${prefix}shinka
✗⃝🕊 ️${prefix}winry
✗⃝🕊 ️${prefix}yukino 
✗⃝🕊 ️${prefix}yuzuki 
✗⃝🕊 ️${prefix}akame
✗⃝🕊 ️${prefix}wallanime _text_
╰⋆⸙ ${prefix}mikosiba
`
}

exports.helpmenu = help
exports.convertmenu = convert
exports.funmenu = fun
exports.downloadmenu = download
exports.makermenu = maker
exports.othermenu = other
exports.ownermenu = ownermenu
exports.storagemenu = storage
exports.tagmenu = tag
exports.telestiker = telestiker
exports.cecanmenu= cecanmenu
exports.set_stc_cmd =  setStcCmd
exports.upmenu = upmenu
exports.nsfwmenu = nsfw
exports.asupanmenu = asupan
exports.allmenu = allmenu
exports.coganmenu = coganmenu
exports.image_effect = image_effect_menu
exports.quotesmenu = quotesmenu
exports.animemenu = animemenu
exports.shopmenu = shopmenu
