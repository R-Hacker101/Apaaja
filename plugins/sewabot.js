let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/2e2eb7d093fec08fd00d4.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let arietube = '6281384200380@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/057b8dff2f6ba7d4553ae.jpg")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/057b8dff2f6ba7d4553ae.jpg")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *โข ๐๐ฒ๐๐ฎ ๐ฏ๐ผ๐ ๐ถ๐ป๐ถ & ๐๐ป๐ฑ๐ฎ๐ป๐ด ๐ธ๐ฒ ๐ด๐ฟ๐๐ฝ & ๐๐ฝ๐ด๐ฟ๐ฎ๐ฑ๐ฒ ๐ท๐ฎ๐ฑ๐ถ ๐บ๐ฒ๐บ๐ฏ๐ฒ๐ฟ ๐ฝ๐ฟ๐ฒ๐บ๐ถ๐๐บ โข*
Harga Pasaran [MURAH MERIAH] :
โ 7 Days / Seminggu : Rp 10.000
โ 17 Days / ยฝBulan : Rp 15.000
โ 29 Days / โBulan : Rp 20.000
โ 35 Days / 1 Bulan ยฝ : Rp 30.000
โ +3 Add Premium : Rp 5.000
โ +1 Owner : Rp 15.000
Nb : Jika Patungan, Kumpulkan hasil Screenshoot + Bukti Pembayaran
jika sudah bayar langsung konfirmasi ke owner dibawah (sertakan screenshot)
โ๐๐ค๐๐๐ โwa.me/${owner[0]}โต

*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik Add Contact Owner Jika Error',
  products:[{productId:'7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: `6281384200380@s.whatsapp.net`
  },
  footerText: 'SkyBot - MD V 2.0 By Dhyka',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
