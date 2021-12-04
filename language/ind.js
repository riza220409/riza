exports.wait = () => {
	return `🔎 Proses kak...`
	}
exports.success = () => {
	return `☑️ Selesai...`
	}
exports.successBc = () => {
	return `☑️ Sukses broadcast`
	}
exports.wrongFormat = () => {
	return `❌ Format salah, coba liat lagi di menu`
	}
exports.erorStik = () => {
	return `❌ Itu bukan stiker`
	}
exports.tagStik = () => {
	return `❌ Reply/tag stiker nya`
	}
exports.erorLink = () => {
	return `❌ Linknya error`
	}
exports.onlygc = () => {
	return `❌ Khusus group`
	}
exports.onlyOwner = () => {
	return `❌ Khusus owner bot`
	}
exports.benned = () => {
	return `❌ Maaf, nomor kamu telah di blokir`
	}
exports.onlygcAdmin = () => {
	return `❌ Khusus admin grup`
	}
exports.cariCecan = () => {
	return `🔎 Mencari cecan`
	}
exports.cariCogan = () => {
	return `🔎 Mencari cogan`
	}
exports.pesanBot = () => {
	return `❌ Reply pesan botnya`
	}
exports.replyFoto = () => {
	return `❌ Reply fotonya`
	}
exports.tagUser = () => {
	return `❌ Tag @user`
	}
exports.noReply = () => {
	return `❌ Pesan yang kamu reply tidak mengandung reply`
	}
exports.changeNmGc = () => {
	return `☑️ Sukses mengubah nama grup`
	}
exports.changeDeskGc = () => {
	return `☑️ Sukses mengubah desk grup`
	}
exports.spam = (prefix, command) => {
	return `❌ Example ${prefix + command} teks|jumlah`
	}
exports.tahta = (prefix, command) => {
	return `❌ Example ${prefix + command} text|text2`
	}
exports.noteks = (prefix, command) => {
	return `❌ Example ${prefix + command} text`
	}
exports.botNotAdm = () => {
	return `Jadikan bot sebagai admin u/ menggunakan perintah ini`
	}
exports.tryAgain = () => {
	return `❌ Yah gagal, coba ulangi ^_^`
	}
exports.anlinOn = () => {
	return `☑️ Antilink di aktifkan`
	}
exports.anlinOff = () => {
	return `☑️ Antilink di nonaktifkan`
	}
exports.notregis = (prefix, sender) => {
	return `Hai @${sender.split("@")[0]} kamu belum terdaftar di database, silahkan ketik ${prefix}verify`
	}
exports.udahregis = (pushname) => {
	return `Hai ${pushname} kamu sudah terdaftar di database`
	}
exports.enNum = () => {
 return `❌ Masukan angka dengan benar`
 }
exports.adminGc = () => {
 return `Karena lu adalah admin jadi bot gk bakal kick lu`
 }
 exports.izinDt = () => {
 return `Izin diterima`
 }
 exports.anjawaOn = (command) => {
	return `☑️ ${command} di aktifkan`
	}
exports.anjawaOff = (command) => {
	return `☑️ ${command} di nonaktifkan`
	}
exports.anjawaUdhOn = (command) => {
	return `☑️ ${command} sudah aktif`
	}
exports.anjawaUdhOon = (command) => {
	return `Pilih on untuk mengaktifkan, off untuk menonaktifkan`
	}
exports.onORoff = (command) => {
	return `Pilih on untuk mengaktifkan, off untuk menonaktifkan`
	}
exports.gcOpen = (command) => {
	return `☑️ ${command} Berhasil membuka grup`
	}
exports.gcClose = (command) => {
	return `☑️ ${command} Berhasil Menutup grup`
	}
exports.nsfwmo= () => {
	return `Fitur nsfw belum di aktifkan, hubungi owner bot u/ mengaktifkan`
	}
exports.erorCode = () => {
 return `Kode yang anda masukkan salah silahkan cek kembali\nhttps://api-alphabot.herokuapp.com/api/verification`
 }
 exports.callOwner = () => {
 return `Hubungi owner untuk menggunakan fitur ini`
 }
 //vote
exports.noSesiVote = () => {
 	return`Tidak ada sesi voting`
 }
exports.suksesDelVot = () => {
	return`Sukses Menghapus sesi Voting Di Grup Ini`
	}
exports.adaVoting = () => {
	return`Sesi Voting Sedang Berlangsung Di Grup Ini`
	}
exports.caraVoting = (prefix, command) => {
 return`Voting\n\n${prefix + command} @tag target | reason | 1 (1 = 1 Menit)`
 }
exports.caraVot = () => {
 	return`Masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit`
 }
//ttt
exports.noSesiTtt = () =>{
	return`Tidak ada sesi tictactoe di grup ini`
	}
exports.suksesDelTtt = () =>{
	return`Berhasil menghapus sesi tictactoe di grup ini`
	}
//on & off
exports.ownerOff = () =>{
	return`Owner saya telah off`
	}
exports.ownerOn = () =>{
	return`Owner saya kembali on`
	}