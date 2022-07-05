let handler = async m => m.reply(`
▣──「𝐍𝐈𝐂𝐊 𝐏𝐋𝐀𝐘𝐄𝐑 🌲」──⬣
│ ○ Kiaa | 『🟥』
│ ○ Hafidz | 『🟥』
│ ○ Sora | 『🟩』
│ ○ Angga | 『🟩』
│ ○ Rasya |『🟩』
│ ○ Imam | 『🟩』
│ ○ Puji | 『🟥』
│ ○ Nabil | 『🟩』
│ ○ Dvlvt | 『🟥』
│ ○ -
│ ○ -
│ ○ -
│ ○ -
▣────────────⬣

𝐈𝐧𝐟𝐨 : 
🟩 (Registred)
🟥 (Unregistred)`.trim()) // Bakal Update Sendiri
handler.help = ['listreg']
handler.tags = ['info']
handler.command = /^listreg|lr$/i

module.exports = handler