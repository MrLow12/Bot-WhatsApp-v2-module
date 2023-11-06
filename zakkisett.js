// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/KnNfBZwProy9ve5ZocVK8w'
global.ig = '@zkki_r12' // ubah aja
global.email = 'zakkixploit@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'zakkiXD-Dev' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.domain = 'https://linkServerLu' // Isi Domain Lu
global.apikey2 = '' // Isi Apikey Plta Lu
global.capikey2 = '' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
//=================================================//
global.owner = ['6282137435046'] // ubah aja pake nomor lu
//==========================BY zakkiXD-Dev=======================//
global.keyopenai = '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'
//====================BY zakkiXD-Dev =============================//
global.botname = 'zakkiXDbotz' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '©zakkiXD' // ubah aja ini nama sticker
global.author = 'zakkigans' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'zakkisession' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})