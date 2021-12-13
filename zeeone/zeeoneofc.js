
const help = (prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensi, teks)=> {
	return`「 *WUDY BOT INFO*   」
	
*🌱 Mode :* ${status}
*☂️ Prefix :* ${prefix}
*👒 Total Hit :* ${hit_today.length}
*🎓 Personal Chat :* ${totalchat.length - ini_gcchat.lenght}
*🎩 Total All Chat :* ${totalchat.length}
*👔 Group Chat :* ${ini_gcchat}

╭⌯ *</LIST MENU/>*
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
╰⌯ Image_effect

╭⌯ *</ABOUT/>*
🌻⋆Source
🌻⋆ThanksTo
🌻⋆Group_support
╰⌯ Ownerbot

⋆⸙ _Creator Wudy © 2K21_ ⸙⋆
`
}
const convert = (prefix) => {
	return`*</CONVERT MENU/>*

╭⌯ ${prefix}toimg
│⌯ ${prefix}tomp3
│⌯ ${prefix}tomp4
│⌯ ${prefix}slow
│⌯ ${prefix}tupai
│⌯ ${prefix}fast
│⌯ ${prefix}reverse
│⌯ ${prefix}tourl
╰─⊸ *Wudy ⌕*`
}
const download = (prefix) => {
	return`*</DOWNLOAD MENU/>*

╭⌯ ${prefix}ytsearch _query_
│⌯ ${prefix}igstalk _username_
│⌯ ${prefix}ghstalk _username_
│⌯ ${prefix}play _query_
│⌯ ${prefix}playmp4 _query_
│⌯ ${prefix}video _query_
│⌯ ${prefix}ytmp3 _link_
│⌯ ${prefix}ytmp4 _link_
│⌯ ${prefix}ig _link_
│⌯ ${prefix}igphoto _link_
│⌯ ${prefix}igvideo _link_
│⌯ ${prefix}igtv _link_
│⌯ ${prefix}igreels _link_
│⌯ ${prefix}twitter _link_
│⌯ ${prefix}tiktokwm _link_
│⌯ ${prefix}tiktoknowm _link_
│⌯ ${prefix}tiktokaudio _link_
│⌯ ${prefix}fb _link_
│⌯ ${prefix}brainly _query_
│⌯ ${prefix}image _query_
│⌯ ${prefix}pinterest _query_
│⌯ ${prefix}pinterest2 _query_
│⌯ ${prefix}playstore _query_
│⌯ ${prefix}gcwa _query_
│⌯ ${prefix}lirik _query_
│⌯ ${prefix}komiku _query_
│⌯ ${prefix}otaku _query_
│⌯ ${prefix}anime _random_
╰─⊸ *Wudy ⌕*`
}

const allmenu = (prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensi, teks)  => {
	return `「 *WUDY BOT INFO*   」
	
*🌱 Mode :* ${status}
*☂️ Prefix :* ${prefix}
*👒 Total Hit :* ${hit_today.length}
*🎓 Personal Chat :* ${totalchat.length - ini_gcchat.lenght}
*🎩 Total All Chat :* ${totalchat.length}
*👔 Group Chat :* ${ini_gcchat}

</𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨/>
╭⸙ ${prefix}self
│⌯ ${prefix}public
│⌯ ${prefix}readall
│⌯ ${prefix}unreadall
│⌯ ${prefix}archive
│⌯ ${prefix}unarchiveall  
│⌯ ${prefix}return 
│⌯ ${prefix}join
│⌯ ${prefix}repeat
│⌯ ${prefix}exif
│⌯ ${prefix}culik
│⌯ ${prefix}pin   
│⌯ ${prefix}unpin
│⌯ ${prefix}bc
│⌯ ${prefix}tobc
│⌯ ${prefix}bcaudio
│• $
│• >
│• x
│• =>
╰─⊸ *Wudy ⌕*

</𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨/>
╭⸙ ${prefix}antilink
│⌯ ${prefix}welcome
│⌯ ${prefix}group
│⌯ ${prefix}linkgrup
│⌯ ${prefix}promote
│⌯ ${prefix}demote
│⌯ ${prefix}add
│⌯ ${prefix}kick
│⌯ ${prefix}setpp
│⌯ ${prefix}setdesc
│⌯ ${prefix}setname
│⌯ ${prefix}hidetag
│⌯ ${prefix}infogc
╰─⊸ *Wudy ⌕*

</𝗚𝗔𝗠𝗘 𝗠𝗘𝗡𝗨/>
╭⸙ ${prefix}suit     
│⌯ ${prefix}slot
│⌯ ${prefix}gelud
│⌯ ${prefix}tictactoe
│⌯ ${prefix}resetgame
│⌯ ${prefix}delsesigelud
│⌯ ${prefix}caklontong
│⌯ ${prefix}tebakgambar
│⌯ ${prefix}family100
╰─⊸ *Wudy ⌕*

</𝗚𝗔𝗕𝗨𝗧 𝗠𝗘𝗡𝗨/>
╭⸙ ${prefix}apakah
│⌯ ${prefix}cekganteng
│⌯ ${prefix}cekcantik
│⌯ ${prefix}hobby
│⌯ ${prefix}bisakah
│⌯ ${prefix}kapankah
│⌯ ${prefix}citacita
╰─⊸ *Wudy ⌕*

</𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨/>
╭⸙ ${prefix}tourl            
│⌯ ${prefix}sticker
│⌯ ${prefix}attp
│⌯ ${prefix}toimg
│⌯ ${prefix}tomp3
│⌯ ${prefix}tovideo
│⌯ ${prefix}emoji
│⌯ ${prefix}audiotourl
│⌯ ${prefix}videotourl
│⌯ ${prefix}stickertourl
╰─⊸ *Wudy ⌕*

</𝗦𝗘𝗔𝗥𝗖𝗛𝗜𝗡𝗚/>
╭⸙ ${prefix}image   
│⌯ ${prefix}video   
│⌯ ${prefix}pinterest
│⌯ ${prefix}ytsearch
│⌯ ${prefix}brainly
│⌯ ${prefix}anime
│⌯ ${prefix}searchfilm
│⌯ ${prefix}searchanime   
│⌯ ${prefix}happymod
│⌯ ${prefix}lirik
│⌯ ${prefix}lirik2
│⌯ ${prefix}chara  
│⌯ ${prefix}playstore   
│⌯ ${prefix}otaku
│⌯ ${prefix}herodetail
│⌯ ${prefix}herolist
│⌯ ${prefix}komiku
│⌯ ${prefix}google
│⌯ ${prefix}wiki
╰─⊸ *Wudy ⌕*

</𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗/>
╭⸙ ${prefix}ig    
│⌯ ${prefix}mediafire    
│⌯ ${prefix}pinterest  
│⌯ ${prefix}youtube
│⌯ ${prefix}tiktoknowm
│⌯ ${prefix}play
│⌯ ${prefix}twmp4
│⌯ ${prefix}twmp3
│⌯ ${prefix}tiktok
│⌯ ${prefix}fbmp4
│⌯ ${prefix}fbmp3
│⌯ ${prefix}tinyurl
╰─⊸ *Wudy ⌕*

</𝗣𝗛𝗢𝗧𝗢𝗢𝗫𝗬/>
╭⸙ ${prefix}burnpaper
│⌯ ${prefix}smoke
│⌯ ${prefix}shadow
│⌯ ${prefix}romantic
│⌯ ${prefix}naruto
│⌯ ${prefix}coffecup
│⌯ ${prefix}doubleheart
│⌯ ${prefix}lovemsg
│⌯ ${prefix}grass
│⌯ ${prefix}butterfly
│⌯ ${prefix}lovetext
╰─⊸ *Wudy ⌕*

</𝗪𝗜𝗕𝗨 𝗠𝗘𝗡𝗨/>
╭⸙ ${prefix}bj
│⌯ ${prefix}loli
│⌯ ${prefix}yuri
│⌯ ${prefix}kiryu   
│⌯ ${prefix}animeplanet
│⌯ ${prefix}klikmanga
│⌯ ${prefix}cosplay
│⌯ ${prefix}waifu
│⌯ ${prefix}randomloli
│⌯ ${prefix}husbu
│⌯ ${prefix}wallml
│⌯ ${prefix}milf
│⌯ ${prefix}trapnime
│⌯ ${prefix}neko
│⌯ ${prefix}megumin
│⌯ ${prefix}blowjob
│⌯ ${prefix}hentai
│⌯ ${prefix}awoo
│⌯ ${prefix}eroneko
│⌯ ${prefix}lesbian
│⌯ ${prefix}anal
│⌯ ${prefix}baka
│⌯ ${prefix}neko2
│⌯ ${prefix}wallpaper
│⌯ ${prefix}pussy
│⌯ ${prefix}kitsune
│⌯ ${prefix}keta
│⌯ ${prefix}neko2
│⌯ ${prefix}poke
│⌯ ${prefix}slap
╰─⊸ *Wudy ⌕*

</𝗠𝗨𝗟𝗧𝗜 𝗦𝗘𝗦𝗦𝗜𝗢𝗡/>
╭⸙ ${prefix}jadibot
│⌯ ${prefix}stopjadibot
│⌯ ${prefix}listjadibot
╰─⊸ *Wudy ⌕*

*Mgak work jgn spam:)*
`
}

const xallmenu = (prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensi, teks)  => {
	return `「 *WUDY BOT INFO*   」
*🌱 Mode :* ${status}
*☂️ Prefix :* ${prefix}
*👒 Total Hit :* ${hit_today.length}
*🎓 Personal Chat :* ${totalchat.length - ini_gcchat.lenght}
*🎩 Total All Chat :* ${totalchat.length}
*👔 Group Chat :* ${ini_gcchat}

╭⋆⸙「 *CONVERT MENU*   」
│⌯ ${prefix}toimg
│⌯ ${prefix}tomp3
│⌯ ${prefix}tomp4
│⌯ ${prefix}slow
│⌯ ${prefix}tupai
│⌯ ${prefix}fast
│⌯ ${prefix}reverse
│⌯ ${prefix}tourl
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *DOWNLOAD MENU*   」
│⌯ ${prefix}ytsearch _query_
│⌯ ${prefix}igstalk _username_
│⌯ ${prefix}ghstalk _username_
│⌯ ${prefix}play _query_
│⌯ ${prefix}playmp4 _query_
│⌯ ${prefix}video _query_
│⌯ ${prefix}ytmp3 _link_
│⌯ ${prefix}ytmp4 _link_
│⌯ ${prefix}ig _link_
│⌯ ${prefix}igphoto _link_
│⌯ ${prefix}igvideo _link_
│⌯ ${prefix}igtv _link_
│⌯ ${prefix}igreels _link_
│⌯ ${prefix}twitter _link_
│⌯ ${prefix}tiktokwm _link_
│⌯ ${prefix}tiktoknowm _link_
│⌯ ${prefix}tiktokaudio _link_
│⌯ ${prefix}fb _link_
│⌯ ${prefix}brainly _query_
│⌯ ${prefix}image _query_
│⌯ ${prefix}pinterest _query_
│⌯ ${prefix}pinterest2 _query_
│⌯ ${prefix}playstore _query_
│⌯ ${prefix}gcwa _query_
│⌯ ${prefix}lirik _query_
│⌯ ${prefix}komiku _query_
│⌯ ${prefix}anime _random_
│⌯ ${prefix}bucin2
│⌯ ${prefix}cehor
│⌯ ${prefix}darkjoke2
│⌯ ${prefix}fakta
│⌯ ${prefix}husbu2
│⌯ ${prefix}katabijak
│⌯ ${prefix}kemono
│⌯ ${prefix}loli2
│⌯ ${prefix}motivasi
│⌯ ${prefix}neko2
│⌯ ${prefix}pantun
│⌯ ${prefix}shota
│⌯ ${prefix}waifu2
│⌯ ${prefix}wallanime
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *FUN MENU*   」
│⌯ ${prefix}jelajah
│⌯ ${prefix}adventure
│⌯ ${prefix}nambang
│⌯ ${prefix}nebang
│⌯ ${prefix}mancing
│⌯ ${prefix}lebur
│⌯ ${prefix}jualikan
│⌯ ${prefix}jualcoal
│⌯ ${prefix}jualstone
│⌯ ${prefix}jualingot
│⌯ ${prefix}jualkayu
│⌯ ${prefix}slot
│⌯ ${prefix}inventory
│⌯ ${prefix}dompet
│⌯ ${prefix}suit
│⌯ ${prefix}judi
│⌯ ${prefix}fitnah
│⌯ ${prefix}absen
│⌯ ${prefix}absensi
│⌯ ${prefix}tebakgambar
│⌯ ${prefix}caklontong
│⌯ ${prefix}family100
│⌯ ${prefix}tebakanime
│⌯ ${prefix}suit
│⌯ ${prefix}fitnahpc text|balasan
│⌯ ${prefix}kontak 62xxx|text
│⌯ ${prefix}tictactoe @user
│⌯ ${prefix}delttt
│⌯ ${prefix}voting @user|reason|time
│⌯ ${prefix}delvote
│⌯ ${prefix}jadibot
│⌯ ${prefix}stopjadibot
│⌯ ${prefix}listbot
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *MAKER MENU*   」
│⌯ ${prefix}sticker
│⌯ ${prefix}smeme atas|bawah
│⌯ ${prefix}ktpmaker
│⌯ ${prefix}attp
│⌯ ${prefix}ttp
│⌯ ${prefix}ttp1
│⌯ ${prefix}ttp2
│⌯ ${prefix}ttp3
│⌯ ${prefix}ttp4
│⌯ ${prefix}swm author|packname
│⌯ ${prefix}take author|packname
│⌯ ${prefix}fdeface
│⌯ ${prefix}amongus 
│⌯ ${prefix}tweettrump text
│⌯ ${prefix}cmm text
│⌯ ${prefix}kanna text
│⌯ ${prefix}tahta text
│⌯ ${prefix}neon2 text
│⌯ ${prefix}wall text
│⌯ ${prefix}wolf text
│⌯ ${prefix}tfire text
│⌯ ${prefix}ytgold text
│⌯ ${prefix}ytsilver text
│⌯ ${prefix}t3d text
│⌯ ${prefix}logoa text|text
│⌯ ${prefix}pornhub text|text
│⌯ ${prefix}marvel text|text
│⌯ ${prefix}leavest text
│⌯ ${prefix}phcoment text|text
│⌯ ${prefix}nulis text
│⌯ ${prefix}nulis2
│⌯ ${prefix}emoji 👼
│⌯ ${prefix}naruto text
│⌯ ${prefix}blueneon text
│⌯ ${prefix}matrix text
│⌯ ${prefix}greenneon text
│⌯ ${prefix}dropwater text|text
│⌯ ${prefix}wolflogo text
│⌯ ${prefix}flowertext text
│⌯ ${prefix}crosslogo text
│⌯ ${prefix}silktext text
│⌯ ${prefix}flametext text
│⌯ ${prefix}glowtext text
│⌯ ${prefix}smoketext text
│⌯ ${prefix}pubglogo text|text
│⌯ ${prefix}skytext text
│⌯ ${prefix}cslogo text
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *IMAGE EFFECT*   」
│⌯ ${prefix}trigger
│⌯ ${prefix}gay
│⌯ ${prefix}glass
│⌯ ${prefix}passed
│⌯ ${prefix}jail
│⌯ ${prefix}comrade
│⌯ ${prefix}hijau
│⌯ ${prefix}biru
│⌯ ${prefix}greyscale
│⌯ ${prefix}invert
│⌯ ${prefix}invert_greyscale
│⌯ ${prefix}red
│⌯ ${prefix}blurple
│⌯ ${prefix}blurple2
│⌯ ${prefix}wasted
│⌯ ${prefix}pelangi
│⌯ ${prefix}sepia
│⌯ ${prefix}wanted
│⌯ ${prefix}utatoo
│⌯ ${prefix}unsharpen
│⌯ ${prefix}thanos
│⌯ ${prefix}sniper
│⌯ ${prefix}sharpen
│⌯ ${prefix}scary
│⌯ ${prefix}rip
│⌯ ${prefix}rejected
│⌯ ${prefix}redple
│⌯ ${prefix}posterize
│⌯ ${prefix}ps4
│⌯ ${prefix}pixelize
│⌯ ${prefix}missionpassed
│⌯ ${prefix}moustache
│⌯ ${prefix}lookwhatkarenhave
│⌯ ${prefix}instagram
│⌯ ${prefix}glitch
│⌯ ${prefix}frame
│⌯ ${prefix}fire
│⌯ ${prefix}distort
│⌯ ${prefix}dictator
│⌯ ${prefix}deepfry
│⌯ ${prefix}ddungeon
│⌯ ${prefix}circle
│⌯ ${prefix}challenger
│⌯ ${prefix}burn
│⌯ ${prefix}brazzers
│⌯ ${prefix}beautiful
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *GROUP MENU*   」
│⌯ ${prefix}add 62+
│⌯ ${prefix}kick _@user_
│⌯ ${prefix}radd _reply pesan @user_
│⌯ ${prefix}rkick _reply pesan @user_
│⌯ ${prefix}ping
│⌯ ${prefix}nsfw _on / off_
│⌯ ${prefix}antilink _on / off_
│⌯ ${prefix}get _link_
│⌯ ${prefix}getpp _@user_
│⌯ ${prefix}getname _reply_
│⌯ ${prefix}size _reply media_
│⌯ ${prefix}colongsw _reply sw_
│⌯ ${prefix}getbio _@user_
│⌯ ${prefix}tagall
│⌯ ${prefix}listonline
│⌯ ${prefix}caripesan query
│⌯ ${prefix}caripesan2 _query_
│⌯ ${prefix}searchmsg _query|total_
│⌯ ${prefix}sider _reply pesan bot_
│⌯ ${prefix}del _reply pesan bot_
│⌯ ${prefix}q _reply pesan_
│⌯ ${prefix}afk _reason_
│⌯ ${prefix}getsider _reply pesan bot_
│⌯ ${prefix}promoteall
│⌯ ${prefix}ppcouple
│⌯ ${prefix}setname
│⌯ ${prefix}revoke
│⌯ ${prefix}setdesk
│⌯ ${prefix}spam text|jumlah
│⌯ ${prefix}demoteall
│⌯ ${prefix}admin
│⌯ ${prefix}listpc
│⌯ ${prefix}listgroup
│⌯ ${prefix}hentai
│⌯ ${prefix}jadian
│⌯ ${prefix}trapnime
│⌯ ${prefix}sewa add/del waktu
│⌯ ${prefix}listsewa
│⌯ ${prefix}ceksewa
│⌯ ${prefix}premium add 62xxx waktu
│⌯ ${prefix}cekpremium
│⌯ ${prefix}listprem
│⌯ ${prefix}belipremium
│⌯ ${prefix}sewabot
│⌯ ${prefix}verify
│⌯ ${prefix}limit
│⌯ ${prefix}profile
│⌯ ${prefix}buylimit
│⌯ ${prefix}buyglimit
│⌯ ${prefix}awoo
│⌯ ${prefix}megumin
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *OWNER MENU*   」
│⌯ ${prefix}off
│⌯ ${prefix}on
│⌯ ${prefix}buggc
│⌯ ${prefix}bc
│⌯ ${prefix}bcimage
│⌯ ${prefix}bcgif
│⌯ ${prefix}bcvideo
│⌯ ${prefix}bcaudio
│⌯ ${prefix}bcsticker
│⌯ ${prefix}virus1
│⌯ ${prefix}virus2
│⌯ ${prefix}virus3
│⌯ ${prefix}virus4
│⌯ ${prefix}ban
│⌯ ${prefix}unban
│⌯ ${prefix}block
│⌯ ${prefix}unblock
│⌯ ${prefix}status
│⌯ ${prefix}clearall
│⌯ ${prefix}self
│⌯ ${prefix}public
│⌯ ${prefix}join
│⌯ ${prefix}leave
│⌯ ${prefix}clearall
│⌯ ${prefix}readall
│⌯ ${prefix}unreadall
│⌯ ${prefix}archive
│⌯ ${prefix}unarchive
│⌯ ${prefix}pin
│⌯ ${prefix}delthischat
│⌯ ${prefix}unpin
│⌯ ${prefix}autoread <query> on / off
│⌯ ${prefix}antibug on / off
│⌯ ${prefix}antidelete on / off
│⌯ ${prefix}anticall on / off
│⌯ ${prefix}autoketik on / off
│⌯ ${prefix}autovn on / off
│⌯ ${prefix}antihidetag on / off
│⌯ ${prefix}autobio on / off
│⌯ ${prefix}register on / off
│⌯ ${prefix}autorespon on / off
│⌯ ${prefix}setthumb
│⌯ ${prefix}settarget
│⌯ ${prefix}setfakeimg
│⌯ ${prefix}setreply
│⌯ ${prefix}term _code_
• x or > _code_
• $  _termux code_
• =>  _eval async_
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *SET STC CMD*   」
│⌯ ${prefix}set_stc_menu _<query>_
│⌯ ${prefix}set_stc_ping _<query>_
│⌯ ${prefix}set_stc_gclose _<query>_
│⌯ ${prefix}set_stc_gopen _<query>_
│⌯ ${prefix}set_stc_itos _<query>_
│⌯ ${prefix}set_stc_toimg _<query>_
│⌯ ${prefix}set_stc_self _<query>_
│⌯ ${prefix}set_stc_public _<query>_
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *STORAGE  MENU*   」
│⌯ ${prefix}addstik 
│⌯ ${prefix}addimg 
│⌯ ${prefix}addvid 
│⌯ ${prefix}addvn   
│⌯ ${prefix}liststick
│⌯ ${prefix}listimg
│⌯ ${prefix}listvid
│⌯ ${prefix}listvn
│⌯ ${prefix}addrespon
│⌯ ${prefix}delrespon
│⌯ ${prefix}listrespon
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *TAG  MENU*   」
│⌯ ${prefix}hidetag
│⌯ ${prefix}kontag
│⌯ ${prefix}sticktag
│⌯ ${prefix}totag
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *UP ESWE*   」
│⌯ ${prefix}upswteks
│⌯ ${prefix}upswimage
│⌯ ${prefix}upswvideo
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *NSFW & SFW*   」
│⌯ ${prefix}8ball
│⌯ ${prefix}ahegao
│⌯ ${prefix}anal
│⌯ ${prefix}ass
│⌯ ${prefix}avatar
│⌯ ${prefix}baka
│⌯ ${prefix}bdsm
│⌯ ${prefix}bj
│⌯ ${prefix}blowjob
│⌯ ${prefix}blowjob2
│⌯ ${prefix}boobs
│⌯ ${prefix}classic
│⌯ ${prefix}cry
│⌯ ${prefix}cuckold
│⌯ ${prefix}cuddle
│⌯ ${prefix}cum
│⌯ ${prefix}cum_jpg
│⌯ ${prefix}doujin
│⌯ ${prefix}ero
│⌯ ${prefix}erofeet
│⌯ ${prefix}erok
│⌯ ${prefix}erokemo
│⌯ ${prefix}eron
│⌯ ${prefix}eroyuri
│⌯ ${prefix}feed
│⌯ ${prefix}feet
│⌯ ${prefix}feetg
│⌯ ${prefix}femdom
│⌯ ${prefix}fendom
│⌯ ${prefix}foot
│⌯ ${prefix}foxgirl
│⌯ ${prefix}fox_girl
│⌯ ${prefix}futanari
│⌯ ${prefix}gangbang
│⌯ ${prefix}gasm
│⌯ ${prefix}gecg
│⌯ ${prefix}glasses
│⌯ ${prefix}goose
│⌯ ${prefix}hentai
│⌯ ${prefix}hentai_gif
│⌯ ${prefix}holo
│⌯ ${prefix}holoero
│⌯ ${prefix}hololewd
│⌯ ${prefix}holoyero
│⌯ ${prefix}hug
│⌯ ${prefix}jahy
│⌯ ${prefix}kemonomimi
│⌯ ${prefix}keta
│⌯ ${prefix}kiss
│⌯ ${prefix}kitsune
│⌯ ${prefix}kuni
│⌯ ${prefix}les
│⌯ ${prefix}lewd
│⌯ ${prefix}lewdk
│⌯ ${prefix}lewdkemo
│⌯ ${prefix}lizard
│⌯ ${prefix}maid
│⌯ ${prefix}manga
│⌯ ${prefix}masturbation
│⌯ ${prefix}meow
│⌯ ${prefix}neko
│⌯ ${prefix}nekogif
│⌯ ${prefix}netorare
│⌯ ${prefix}ngif
│⌯ ${prefix}nsfw_avatar
│⌯ ${prefix}nsfw_neko_gif
│⌯ ${prefix}orgy
│⌯ ${prefix}panties
│⌯ ${prefix}pat
│⌯ ${prefix}poke
│⌯ ${prefix}pussy
│⌯ ${prefix}pussy_jpg
│⌯ ${prefix}pwankg
│⌯ ${prefix}school
│⌯ ${prefix}slap
│⌯ ${prefix}smug
│⌯ ${prefix}solo
│⌯ ${prefix}solog
│⌯ ${prefix}spank
│⌯ ${prefix}tentacles
│⌯ ${prefix}thighs
│⌯ ${prefix}tickle
│⌯ ${prefix}tits
│⌯ ${prefix}trap
│⌯ ${prefix}uglybastard
│⌯ ${prefix}Uniform
│⌯ ${prefix}waifu
│⌯ ${prefix}wallpaper
│⌯ ${prefix}woof
│⌯ ${prefix}yuri
│⌯ ${prefix}zettai
│⌯ ${prefix}zettai-ryouiki
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *STC  MENU*   」
│⌯ ${prefix}awoawo
│⌯ ${prefix}benedict
│⌯ ${prefix}chat
│⌯ ${prefix}dbfly
│⌯ ${prefix}dino_kuning
│⌯ ${prefix}doge
│⌯ ${prefix}gojosatoru
│⌯ ${prefix}hope_boy
│⌯ ${prefix}jisoo
│⌯ ${prefix}kr_robot
│⌯ ${prefix}kucing
│⌯ ${prefix}lonte
│⌯ ${prefix}manusia_lidi
│⌯ ${prefix}menjamet
│⌯ ${prefix}meow
│⌯ ${prefix}nicholas
│⌯ ${prefix}patrick
│⌯ ${prefix}popoci
│⌯ ${prefix}sponsbob
│⌯ ${prefix}kawan_sponsbob
│⌯ ${prefix}tyni
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *CECAN  MENU*   」
│⌯ ${prefix}china
│⌯ ${prefix}indonesia
│⌯ ${prefix}malaysia
│⌯ ${prefix}thailand
│⌯ ${prefix}korea
│⌯ ${prefix}japan
│⌯ ${prefix}vietnam
│⌯ ${prefix}jenni
│⌯ ${prefix}jiso
│⌯ ${prefix}lisa
│⌯ ${prefix}rose
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *QUOTES  MENU*   」
│⌯ ${prefix}katailham  
│⌯ ${prefix}dare   
│⌯ ${prefix}truth  
│⌯ ${prefix}katabijak_lucu   
│⌯ ${prefix}katacaklontong  
│⌯ ${prefix}katadilan  
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *COGAN  MENU*   」
│⌯ ${prefix}baekhyung  
│⌯ ${prefix}dohkyungsoo  
│⌯ ${prefix}huangzitao  
│⌯ ${prefix}jhope  
│⌯ ${prefix}jimin 
│⌯ ${prefix}jungkook 
│⌯ ${prefix}kimjondae  
│⌯ ${prefix}kimjong  
│⌯ ${prefix}kimjunmyeon  
│⌯ ${prefix}kimminseok 
│⌯ ${prefix}kimnanjoon  
│⌯ ${prefix}kimseok  
│⌯ ${prefix}kimtaehyung  
│⌯ ${prefix}luhan  
│⌯ ${prefix}ohsehun 
│⌯ ${prefix}parkchanyeol 
│⌯ ${prefix}suga  
│⌯ ${prefix}wuyifan
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *ASUPAN  MENU*   」
│⌯ ${prefix}rikagusriani 
│⌯ ${prefix}ukhty 
│⌯ ${prefix}santuy 
│⌯ ${prefix}geayubi   
│⌯ ${prefix}bocil
│⌯ ${prefix}asupan
│⌯ ${prefix}chika 
│⌯ ${prefix}delvira 
│⌯ ${prefix}ayu   
│⌯ ${prefix}bunga
│⌯ ${prefix}aura
│⌯ ${prefix}nisa 
│⌯ ${prefix}ziva 
│⌯ ${prefix}yana   
│⌯ ${prefix}viona
│⌯ ${prefix}syania
│⌯ ${prefix}riri   
│⌯ ${prefix}syifa
│⌯ ${prefix}mama_gina
│⌯ ${prefix}alcakenya 
│⌯ ${prefix}mangayutri
╰─⊸ *Wudy ⌕*

╭⋆⸙「 *ANIME  MENU*   」
│⌯ ${prefix}akame
│⌯ ${prefix}anna
│⌯ ${prefix}asuna_yuki
│⌯ ${prefix}ayuzawa
│⌯ ${prefix}bunny
│⌯ ${prefix}cat
│⌯ ${prefix}chitoge
│⌯ ${prefix}darkjoke
│⌯ ${prefix}dog
│⌯ ${prefix}duck
│⌯ ${prefix}emilia
│⌯ ${prefix}erza
│⌯ ${prefix}fox
│⌯ ${prefix}hinata
│⌯ ${prefix}inori
│⌯ ${prefix}kaga_kouko
│⌯ ${prefix}kaori_miyazono
│⌯ ${prefix}kotori_minami
│⌯ ${prefix}lizard
│⌯ ${prefix}memeindo
│⌯ ${prefix}mikasa
│⌯ ${prefix}mikosiba
│⌯ ${prefix}mio_akiyama
│⌯ ${prefix}mizore_sirayuki
│⌯ ${prefix}nakiri_alice
│⌯ ${prefix}naruto
│⌯ ${prefix}panda
│⌯ ${prefix}randomcowok
│⌯ ${prefix}riyas_gremori
│⌯ ${prefix}sakura
│⌯ ${prefix}sasuke
│⌯ ${prefix}sento_isuzu
│⌯ ${prefix}shana
│⌯ ${prefix}shiba
│⌯ ${prefix}shiina
│⌯ ${prefix}shinka
│⌯ ${prefix}winry
│⌯ ${prefix}yukino
│⌯ ${prefix}yuzuki
╰─⊸ *Wudy ⌕*

「 MENU BOT   」
`
}

const fun = (prefix) => {
	return`*</FUN & GAME MENU/>*

╭⌯ ${prefix}jelajah
│⌯ ${prefix}adventure
│⌯ ${prefix}nambang
│⌯ ${prefix}nebang
│⌯ ${prefix}mancing
│⌯ ${prefix}lebur
│⌯ ${prefix}jualikan
│⌯ ${prefix}jualcoal
│⌯ ${prefix}jualstone
│⌯ ${prefix}jualingot
│⌯ ${prefix}jualkayu
│⌯ ${prefix}slot
│⌯ ${prefix}inventory
│⌯ ${prefix}dompet
│⌯ ${prefix}suit
│⌯ ${prefix}judi
│⌯ ${prefix}fitnah
│⌯ ${prefix}absen
│⌯ ${prefix}absensi
│⌯ ${prefix}tebakgambar
│⌯ ${prefix}caklontong
│⌯ ${prefix}family100
│⌯ ${prefix}tebakanime
│⌯ ${prefix}fitnahpc text|balasan
│⌯ ${prefix}kontak 62xxx|text
│⌯ ${prefix}tictactoe @user
│⌯ ${prefix}delttt
│⌯ ${prefix}voting
│⌯ ${prefix}delvote
│⌯ ${prefix}jadibot
│⌯ ${prefix}stopjadibot
│⌯ ${prefix}listbot
╰─⊸ *Wudy ⌕*`
}

const maker = (prefix) => {
	return`*</MAKER MENU/>*

╭⌯ ${prefix}sticker
│⌯ ${prefix}smeme
│⌯ ${prefix}ktpmaker
│⌯ ${prefix}attp
│⌯ ${prefix}ttp
│⌯ ${prefix}ttp1
│⌯ ${prefix}ttp2
│⌯ ${prefix}ttp3
│⌯ ${prefix}ttp4
│⌯ ${prefix}swm author|packname
│⌯ ${prefix}take author|packname
│⌯ ${prefix}fdeface
│⌯ ${prefix}amongus 
│⌯ ${prefix}tweettrump text
│⌯ ${prefix}1917 _teks_
│⌯ ${prefix}angelwing _teks_
│⌯ ${prefix}bannerepep _teks_
│⌯ ${prefix}blood _teks_
│⌯ ${prefix}bluelight _teks_
│⌯ ${prefix}blueneon _teks_
│⌯ ${prefix}break-wall _teks_
│⌯ ${prefix}christmas _teks_
│⌯ ${prefix}cmm _teks_
│⌯ ${prefix}crosslogo _teks_
│⌯ ${prefix}cslogo _teks_
│⌯ ${prefix}deluxe-gold _teks_
│⌯ ${prefix}deluxe-silver _teks_
│⌯ ${prefix}dropwater _teks_|text_
│⌯ ${prefix}firedragon _teks_
│⌯ ${prefix}firewing _teks_
│⌯ ${prefix}firework _teks_
│⌯ ${prefix}flametext _teks_
│⌯ ${prefix}flowertext _teks_
│⌯ ${prefix}flower _teks_
│⌯ ${prefix}galaxyangel _teks_
│⌯ ${prefix}galaxyedge _teks_
│⌯ ${prefix}galaxysprout _teks_
│⌯ ${prefix}glossy-blue _teks_
│⌯ ${prefix}glossy-carbon _teks_
│⌯ ${prefix}glowtext _teks_
│⌯ ${prefix}glow _teks_
│⌯ ${prefix}glue _teks_
│⌯ ${prefix}googleimage _teks_
│⌯ ${prefix}gradient _teks_
│⌯ ${prefix}greenneon _teks_
│⌯ ${prefix}halloween _teks_
│⌯ ${prefix}horror _teks_
│⌯ ${prefix}joker _teks_
│⌯ ${prefix}kanna _teks_
│⌯ ${prefix}lava _teks_
│⌯ ${prefix}leavest _teks_
│⌯ ${prefix}lightgerm _teks_
│⌯ ${prefix}logoa _teks_|text_
│⌯ ${prefix}loveshadow _teks_
│⌯ ${prefix}luxury _teks_
│⌯ ${prefix}marvel _teks_|text_
│⌯ ${prefix}matrix _teks_
│⌯ ${prefix}metal-dark _teks_
│⌯ ${prefix}metal-purple _teks_
│⌯ ${prefix}minion _teks_
│⌯ ${prefix}moon _teks_
│⌯ ${prefix}naruto _teks_
│⌯ ${prefix}neon-light _teks_
│⌯ ${prefix}neon2 _teks_
│⌯ ${prefix}neondevil _teks_
│⌯ ${prefix}neon _teks_
│⌯ ${prefix}nulis2
│⌯ ${prefix}nulis _teks_
│⌯ ${prefix}papercut _teks_
│⌯ ${prefix}phcoment _teks_|text_
│⌯ ${prefix}pornhub _teks_|text_
│⌯ ${prefix}pubglogo _teks_|text_
│⌯ ${prefix}sand-engrave _teks_
│⌯ ${prefix}sand-summery _teks_
│⌯ ${prefix}sand-writing _teks_
│⌯ ${prefix}sand2 _teks_
│⌯ ${prefix}sand _teks_
│⌯ ${prefix}seasidesand _teks_
│⌯ ${prefix}silktext _teks_
│⌯ ${prefix}skeleton _teks_
│⌯ ${prefix}skytext _teks_
│⌯ ${prefix}sky _teks_
│⌯ ${prefix}smoketext _teks_
│⌯ ${prefix}starmetalic _teks_
│⌯ ${prefix}summer _teks_
│⌯ ${prefix}t3d _teks_
│⌯ ${prefix}tahta _teks_
│⌯ ${prefix}tfire _teks_
│⌯ ${prefix}thunder _teks_
│⌯ ${prefix}toxic _teks_
│⌯ ${prefix}underwater _teks_
│⌯ ${prefix}viettel _teks_
│⌯ ${prefix}wall _teks_
│⌯ ${prefix}water3d _teks_
│⌯ ${prefix}wicker _teks_
│⌯ ${prefix}winter _teks_
│⌯ ${prefix}wolflogo _teks_
│⌯ ${prefix}wolf _teks_
│⌯ ${prefix}writegalaxy _teks_
│⌯ ${prefix}xmas _teks_
│⌯ ${prefix}yasuo _teks_
│⌯ ${prefix}ytgold _teks_
│⌯ ${prefix}ytsilver _teks_
│⌯ ${prefix}emoji 👼
╰─⊸ *Wudy ⌕*`
}

const other = (prefix) => {
	return`*</GROUP MENU/>*

╭⌯ ${prefix}add 62xxx
│⌯ ${prefix}kick 62xxx
│⌯ ${prefix}ping
│⌯ ${prefix}antilink _on / off_
│⌯ ${prefix}get _link_
│⌯ ${prefix}getpp _@user_
│⌯ ${prefix}getbio _@user_
│⌯ ${prefix}getname _reply_
│⌯ ${prefix}size _reply media_
│⌯ ${prefix}colongsw _reply sw_
│⌯ ${prefix}tagall
│⌯ ${prefix}listonline
│⌯ ${prefix}caripesan query
│⌯ ${prefix}caripesan2 _query_
│⌯ ${prefix}searchmsg _query|total_
│⌯ ${prefix}sider _reply pesan bot_
│⌯ ${prefix}del _reply pesan bot_
│⌯ ${prefix}q _reply pesan_
│⌯ ${prefix}afk _reason_
│⌯ ${prefix}getsider _reply pesan bot_
│⌯ ${prefix}tagall
│⌯ ${prefix}revoke
│⌯ ${prefix}setname
│⌯ ${prefix}ppcouple
│⌯ ${prefix}promoteall
│⌯ ${prefix}demoteall
│⌯ ${prefix}admin
│⌯ ${prefix}hentai
│⌯ ${prefix}jadian
│⌯ ${prefix}trapnime
│⌯ ${prefix}sewa add/del waktu
│⌯ ${prefix}listsewa
│⌯ ${prefix}ceksewa
│⌯ ${prefix}premium add @user waktu
│⌯ ${prefix}cekpremium
│⌯ ${prefix}listprem
│⌯ ${prefix}belipremium
│⌯ ${prefix}sewabot
│⌯ ${prefix}verify
│⌯ ${prefix}limit
│⌯ ${prefix}profile
│⌯ ${prefix}buylimit
│⌯ ${prefix}buyglimit
│⌯ ${prefix}blowjob
│⌯ ${prefix}awoo
│⌯ ${prefix}youwatch _teks_
│⌯ ${prefix}thelazy _teks_
│⌯ ${prefix}samehadaku _teks_
│⌯ ${prefix}ipgeo _ip_
│⌯ ${prefix}amazon _teks_
│⌯ ${prefix}md5enc _kata_
│⌯ ${prefix}moddroid _teks_
│⌯ ${prefix}ssfile _teks_
│⌯ ${prefix}ssticker _teks_
│⌯ ${prefix}pinterst _teks_
│⌯ ${prefix}gsearch _teks_
│⌯ ${prefix}gimage _teks_
│⌯ ${prefix}quran _1|2_
│⌯ ${prefix}translate _kata_
│⌯ ${prefix}tts _id kata_
│⌯ ${prefix}detikvn _12345_
│⌯ ${prefix}megumin
╰─⊸ *Wudy ⌕*`
}

const ownermenu = (prefix) => {
	return`*</OWNER MENU/>*

╭⌯ ${prefix}off
│⌯ ${prefix}on
│⌯ ${prefix}buggc
│⌯ ${prefix}bc
│⌯ ${prefix}bcimage
│⌯ ${prefix}bcgif
│⌯ ${prefix}bcvideo
│⌯ ${prefix}bcaudio
│⌯ ${prefix}bcsticker
│⌯ ${prefix}virus1
│⌯ ${prefix}virus2
│⌯ ${prefix}virus3
│⌯ ${prefix}virus4
│⌯ ${prefix}ban
│⌯ ${prefix}unban
│⌯ ${prefix}block
│⌯ ${prefix}unblock
│⌯ ${prefix}status
│⌯ ${prefix}clearall
│⌯ ${prefix}self
│⌯ ${prefix}public
│⌯ ${prefix}join 
│⌯ ${prefix}leave
│⌯ ${prefix}readall
│⌯ ${prefix}unreadall
│⌯ ${prefix}archive
│⌯ ${prefix}unarchive
│⌯ ${prefix}pin
│⌯ ${prefix}delthischat
│⌯ ${prefix}unpin
│⌯ ${prefix}autoread <query> on / off
│⌯ ${prefix}antibug on / off
│⌯ ${prefix}antidelete on / off
│⌯ ${prefix}anticall on / off
│⌯ ${prefix}autoketik on / off
│⌯ ${prefix}autobio on / off
│⌯ ${prefix}antihidetag on / off
│⌯ ${prefix}autovn on / off
│⌯ ${prefix}register on / off
│⌯ ${prefix}autorespon on / off
│⌯ ${prefix}setthumb
│⌯ ${prefix}settarget
│⌯ ${prefix}setfakeimg
│⌯ ${prefix}setreply
│⌯ ${prefix}term _code_
│⌯  $  _termux code_
│⌯  =>  _eval async_
│⌯  x or > _code_
╰─⊸ *Wudy ⌕*`
}

const setStcCmd = (prefix) => {
	return`*</SET STC CMD/>*

╭⌯ ${prefix}set_stc_menu
│⌯ ${prefix}set_stc_ping
│⌯ ${prefix}set_stc_gclose
│⌯ ${prefix}set_stc_gopen
│⌯ ${prefix}set_stc_itos
│⌯ ${prefix}set_stc_toimg
│⌯ ${prefix}set_stc_self
│⌯ ${prefix}set_stc_public
╰─⊸ *Wudy ⌕*

Cara penggunaan :
> ${prefix}set_stc_menu _fileLenght sticker_

Example :
> ${prefix}set_stc_menu 7446
`
}

const storage = (prefix) => {
	return`*</STORAGE MENU/>*

╭⌯ ${prefix}addstik 
│⌯ ${prefix}addimg 
│⌯ ${prefix}addvid 
│⌯ ${prefix}addvn   
│⌯ ${prefix}liststick
│⌯ ${prefix}listimg
│⌯ ${prefix}listvid
│⌯ ${prefix}listvn
│⌯ ${prefix}addrespon
│⌯ ${prefix}delrespon
│⌯ ${prefix}listrespon
╰─⊸ *Wudy ⌕*`
}
const cecanmenu = (prefix) => {
	return`*</GACHA CECAN/>*

╭⌯ ${prefix}china
│⌯ ${prefix}indonesia
│⌯ ${prefix}malaysia
│⌯ ${prefix}thailand
│⌯ ${prefix}korea
│⌯ ${prefix}japan
│⌯ ${prefix}vietnam
│⌯ ${prefix}jenni
│⌯ ${prefix}jiso
│⌯ ${prefix}lisa
│⌯ ${prefix}rose
╰─⊸ *Wudy ⌕*`
}

const tag = (prefix) => {
	return`*</TAG MENU/>*

╭⌯ ${prefix}hidetag
│⌯ ${prefix}kontag
│⌯ ${prefix}sticktag
│⌯ ${prefix}totag
│⌯ ${prefix}woii
╰─⊸ *Wudy ⌕*`
}

const upmenu = (prefix) => {
	return`*</UP ESWE/>*

╭⌯ ${prefix}upswteks
│⌯ ${prefix}upswimage
│⌯ ${prefix}upswvideo
╰─⊸ *Wudy ⌕*`
}
const nsfw = (prefix) => {
	return`*</NSFW & SFW/>*

╭⌯ ${prefix}8ball
│⌯ ${prefix}ahegao
│⌯ ${prefix}anal
│⌯ ${prefix}ass
│⌯ ${prefix}avatar
│⌯ ${prefix}baka
│⌯ ${prefix}bdsm
│⌯ ${prefix}bj
│⌯ ${prefix}blowjob
│⌯ ${prefix}blowjob2
│⌯ ${prefix}boobs
│⌯ ${prefix}classic
│⌯ ${prefix}cry
│⌯ ${prefix}cuckold
│⌯ ${prefix}cuddle
│⌯ ${prefix}cum
│⌯ ${prefix}cum_jpg
│⌯ ${prefix}doujin
│⌯ ${prefix}ero
│⌯ ${prefix}erofeet
│⌯ ${prefix}erok
│⌯ ${prefix}erokemo
│⌯ ${prefix}eron
│⌯ ${prefix}eroyuri
│⌯ ${prefix}feed
│⌯ ${prefix}feet
│⌯ ${prefix}feetg
│⌯ ${prefix}femdom
│⌯ ${prefix}fendom
│⌯ ${prefix}foot
│⌯ ${prefix}foxgirl
│⌯ ${prefix}fox_girl
│⌯ ${prefix}futanari
│⌯ ${prefix}gangbang
│⌯ ${prefix}gasm
│⌯ ${prefix}gecg
│⌯ ${prefix}glasses
│⌯ ${prefix}goose
│⌯ ${prefix}hentai
│⌯ ${prefix}hentai_gif
│⌯ ${prefix}holo
│⌯ ${prefix}holoero
│⌯ ${prefix}hololewd
│⌯ ${prefix}holoyero
│⌯ ${prefix}hug
│⌯ ${prefix}jahy
│⌯ ${prefix}kemonomimi
│⌯ ${prefix}keta
│⌯ ${prefix}kiss
│⌯ ${prefix}kitsune
│⌯ ${prefix}kuni
│⌯ ${prefix}les
│⌯ ${prefix}lewd
│⌯ ${prefix}lewdk
│⌯ ${prefix}lewdkemo
│⌯ ${prefix}lizard
│⌯ ${prefix}maid
│⌯ ${prefix}manga
│⌯ ${prefix}masturbation
│⌯ ${prefix}meow
│⌯ ${prefix}neko
│⌯ ${prefix}nekogif
│⌯ ${prefix}netorare
│⌯ ${prefix}ngif
│⌯ ${prefix}nsfw_avatar
│⌯ ${prefix}nsfw_neko_gif
│⌯ ${prefix}orgy
│⌯ ${prefix}panties
│⌯ ${prefix}pat
│⌯ ${prefix}poke
│⌯ ${prefix}pussy
│⌯ ${prefix}pussy_jpg
│⌯ ${prefix}pwankg
│⌯ ${prefix}school
│⌯ ${prefix}slap
│⌯ ${prefix}smug
│⌯ ${prefix}solo
│⌯ ${prefix}solog
│⌯ ${prefix}spank
│⌯ ${prefix}tentacles
│⌯ ${prefix}thighs
│⌯ ${prefix}tickle
│⌯ ${prefix}tits
│⌯ ${prefix}trap
│⌯ ${prefix}uglybastard
│⌯ ${prefix}Uniform
│⌯ ${prefix}waifu
│⌯ ${prefix}wallpaper
│⌯ ${prefix}woof
│⌯ ${prefix}yuri
│⌯ ${prefix}zettai-ryouiki
│⌯ ${prefix}zettai
╰─⊸ *Wudy ⌕*`
}
const asupan = (prefix) => {
	return`*</ASUPAN MENU/>*

╭⌯ ${prefix}rikagusriani 
│⌯ ${prefix}ukhty 
│⌯ ${prefix}santuy 
│⌯ ${prefix}geayubi   
│⌯ ${prefix}bocil
│⌯ ${prefix}asupan
│⌯ ${prefix}chika 
│⌯ ${prefix}delvira 
│⌯ ${prefix}ayu   
│⌯ ${prefix}bunga
│⌯ ${prefix}aura
│⌯ ${prefix}nisa 
│⌯ ${prefix}ziva 
│⌯ ${prefix}yana   
│⌯ ${prefix}viona
│⌯ ${prefix}syania
│⌯ ${prefix}riri   
│⌯ ${prefix}syifa
│⌯ ${prefix}mama_gina
│⌯ ${prefix}alcakenya 
│⌯ ${prefix}mangayutri
╰─⊸ *Wudy ⌕*`
}
const telestiker = (prefix) => {
	return`*</STICKERS MENU/>*

╭⌯ ${prefix}awoawo
│⌯ ${prefix}benedict
│⌯ ${prefix}chat
│⌯ ${prefix}dbfly
│⌯ ${prefix}dino_kuning
│⌯ ${prefix}doge
│⌯ ${prefix}gojosatoru
│⌯ ${prefix}hope_boy
│⌯ ${prefix}jisoo
│⌯ ${prefix}kr_robot
│⌯ ${prefix}kucing
│⌯ ${prefix}lonte
│⌯ ${prefix}manusia_lidi
│⌯ ${prefix}menjamet
│⌯ ${prefix}meow
│⌯ ${prefix}nicholas
│⌯ ${prefix}patrick
│⌯ ${prefix}popoci
│⌯ ${prefix}sponsbob
│⌯ ${prefix}kawan_sponsbob
│⌯ ${prefix}tyni
╰─⊸ *Wudy ⌕*`
}
const image_effect_menu = (prefix) => {
	return`*</IMAGE EFFECT/>*

╭⌯ ${prefix}trigger
│⌯ ${prefix}gay
│⌯ ${prefix}glass
│⌯ ${prefix}passed
│⌯ ${prefix}jail
│⌯ ${prefix}comrade
│⌯ ${prefix}hijau
│⌯ ${prefix}biru
│⌯ ${prefix}greyscale
│⌯ ${prefix}invert
│⌯ ${prefix}invert_greyscale
│⌯ ${prefix}red
│⌯ ${prefix}blurple
│⌯ ${prefix}blurple2
│⌯ ${prefix}wasted
│⌯ ${prefix}pelangi
│⌯ ${prefix}wanted
│⌯ ${prefix}utatoo
│⌯ ${prefix}unsharpen
│⌯ ${prefix}thanos
│⌯ ${prefix}sniper
│⌯ ${prefix}sharpen
│⌯ ${prefix}scary
│⌯ ${prefix}rip
│⌯ ${prefix}rejected
│⌯ ${prefix}redple
│⌯ ${prefix}posterize
│⌯ ${prefix}ps4
│⌯ ${prefix}pixelize
│⌯ ${prefix}missionpassed
│⌯ ${prefix}moustache
│⌯ ${prefix}lookwhatkarenhave
│⌯ ${prefix}instagram
│⌯ ${prefix}glitch
│⌯ ${prefix}frame
│⌯ ${prefix}fire
│⌯ ${prefix}distort
│⌯ ${prefix}dictator
│⌯ ${prefix}deepfry
│⌯ ${prefix}ddungeon
│⌯ ${prefix}circle
│⌯ ${prefix}challenger
│⌯ ${prefix}burn
│⌯ ${prefix}brazzers
│⌯ ${prefix}beautiful
│⌯ ${prefix}sepia
╰─⊸ *Wudy ⌕*`
}
const coganmenu = (prefix) => {
	return`*</GACHA COGAN/>*

╭⌯ ${prefix}baekhyung  
│⌯ ${prefix}dohkyungsoo  
│⌯ ${prefix}huangzitao  
│⌯ ${prefix}jhope  
│⌯ ${prefix}jimin 
│⌯ ${prefix}jungkook 
│⌯ ${prefix}kimjondae  
│⌯ ${prefix}kimjong  
│⌯ ${prefix}kimjunmyeon  
│⌯ ${prefix}kimminseok 
│⌯ ${prefix}kimnanjoon  
│⌯ ${prefix}kimseok  
│⌯ ${prefix}kimtaehyung  
│⌯ ${prefix}luhan  
│⌯ ${prefix}ohsehun 
│⌯ ${prefix}parkchanyeol 
│⌯ ${prefix}suga  
│⌯ ${prefix}wuyifan  
╰─⊸ *Wudy ⌕*`
}

const quotesmenu = (prefix) => {
	return`*</QUOTES MENU/>*

╭⌯ ${prefix}katailham  
│⌯ ${prefix}dare   
│⌯ ${prefix}truth  
│⌯ ${prefix}katabijak_lucu   
│⌯ ${prefix}katacaklontong 
│⌯ ${prefix}artinama _nama_
│⌯ ${prefix}artimimpi _mimpi_
│⌯ ${prefix}artikata _kata_
│⌯ ${prefix}zodiak _teks_
│⌯ ${prefix}katadilan  
╰─⊸ *Wudy ⌕*`
}
const shopmenu = (prefix) => {
	return`*</SHOP MENU/>*

╭⌯ ${prefix}shop  
│⌯ ${prefix}price  
│⌯ ${prefix}pubg   
│⌯ ${prefix}ml   
│⌯ ${prefix}ff   
│⌯ ${prefix}aov   
│⌯ ${prefix}cod  
│⌯ ${prefix}sausage   
│⌯ ${prefix}lol  
│⌯ ${prefix}valo  
╰─⊸ *Wudy ⌕*`
}
const animemenu = (prefix) => {
	return`*</ANIME MENU/>*

╭⌯ ${prefix}random
│⌯ ${prefix}topmanga _teks_
│⌯ ${prefix}topanime _teks_
│⌯ ${prefix}anna
│⌯ ${prefix}asuna_yuki 
│⌯ ${prefix}ayuzawa 
│⌯ ${prefix}chitoge 
│⌯ ${prefix}emilia
│⌯ ${prefix}erza 
│⌯ ${prefix}hinata 
│⌯ ${prefix}inori 
│⌯ ${prefix}kaga_kouko 
│⌯ ${prefix}kaori_miyazono 
│⌯ ${prefix}kotori_minami
│⌯ ${prefix}mikasa 
│⌯ ${prefix}mio_akiyama 
│⌯ ${prefix}mizore_sirayuki 
│⌯ ${prefix}nakiri_alice 
│⌯ ${prefix}naruto 
│⌯ ${prefix}riyas_gremori
│⌯ ${prefix}sakura 
│⌯ ${prefix}sasuke 
│⌯ ${prefix}sento_isuzu 
│⌯ ${prefix}shana 
│⌯ ${prefix}shiina 
│⌯ ${prefix}shinka
│⌯ ${prefix}winry
│⌯ ${prefix}yukino 
│⌯ ${prefix}yuzuki 
│⌯ ${prefix}akame
│⌯ ${prefix}wallanime _teks_
│⌯ ${prefix}mikosiba
╰─⊸ *Wudy ⌕*`
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
