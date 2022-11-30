const fetch = require('node-fetch')
let teks = 'gckoko'
let handler = async (m, { conn }) => conn.send2ButtonImg(m.chat, await (await fetch('https://telegra.ph/file/480d83b0ef52cd62d5c71.jpg' + teks)).buffer(), `
*𝐇𝐚𝐥𝐨 𝐁𝐚𝐧𝐡 𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐉𝐨𝐢𝐧 && 𝐁𝐚𝐜𝐚 𝐑𝐮𝐥𝐞𝐬❗*
╔═══════════════════
║ _*Group All*_ RyannBOTZ
╠═══════════════════
║➸ _Group Yann-MD:_
║ https://chat.whatsapp.com/KHorlMi7ZwRHOZNlvxBC2M
╚════════════════════
╔════════════════════
║ *RULES GROUP BOT*
╠════════════════════
║𝐍𝐨 𝐒𝐡𝐚𝐫𝐞 18+
║𝐍𝐨 𝐬𝐡𝐚𝐫𝐞 𝐋𝐢𝐧𝐤
║𝐍𝐨 𝐒𝐡𝐚𝐫𝐞 𝐕𝐢𝐫𝐮𝐬 
║𝐍𝐨 𝐒𝐩𝐚𝐦 𝐂𝐨𝐦𝐦𝐚𝐧𝐝
║𝐃𝐢𝐥𝐚𝐫𝐚𝐧𝐠 𝐓𝐞𝐥𝐟𝐨𝐧 𝐁𝐨𝐭
║𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐁𝐞𝐫 𝐄𝐭𝐢𝐤𝐚
║𝐃𝐢𝐥𝐚𝐫𝐚𝐧𝐠 𝐇𝐢𝐧𝐚 𝐁𝐨𝐭
║𝐌𝐚𝐮 𝐒𝐞𝐰𝐚? 𝐊𝐞𝐭𝐢𝐤 .owner
╚════════════════════
`.trim(), wm, 'Yann-MD', '.owner', 'MENU✔️', '.menu')
handler.help = ['gcryann']
handler.tags = ['info']
handler.command = /^gc(koko|groupkoko)$/i

module.exports = handler
