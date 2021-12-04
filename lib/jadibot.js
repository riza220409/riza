const { 
      WAConnection, 
      MessageType, 
      Mimetype

} = require('@adiwajshing/baileys')
const qrcode = require('qrcode')
const fs = require('fs')
listjadibot = [];

const jadibot = async(reply2,alpha,id) => {
	conn = new WAConnection()
    conn.logger.level = 'warn'
    conn.version = [2, 2140, 12]
    conn.browserDescription = ["Hayoloh Ngapain..", "SAFARI", "3.0"]
    conn.on('qr', async qr => {
  	let bot = await qrcode.toDataURL(qr, { scale: 8 })
    let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
   	bot = await alpha.sendMessage(id,buffer,MessageType.image,{caption:'*Scan QR ini untuk jadibot sementara ngab!*\n\n⚚. *Klik titik tiga di pojok kanan atas*\n⚚. *Ketuk Perangkat tertaut*\n⚚. *Scan QR ini*\n\n_Buruan QR Expired dalam 20 detik_'})
    setTimeout(() => {
   	alpha.deleteMessage(id, bot.key)},30000)
})
    conn.on('connecting', () => {
})
    conn.on('open', () => {
    	reply2(`*Berhasil Tersambung Dengan WhatsApp Kamu Ngab️*\n\n${JSON.stringify(conn.user,null,2)}`)
})
    await conn.connect({timeoutMs: 30 * 1000})
        listjadibot.push(conn.user)
    
    conn.on('chat-update', async (message) => {
        require('../index.js')(conn, message)
})
}

    const stopjadibot = (reply2) => {
    	conn = new WAConnection();
	    conn.close()
	    reply2('Sukses Stop jadibot')
}

module.exports = {
	jadibot,
	stopjadibot,
	listjadibot
}