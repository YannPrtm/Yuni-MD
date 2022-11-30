let handler = async (m, { conn }) => {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

m.reply(`
┌─〔 𝐏𝐞𝐦𝐢𝐥𝐢𝐤 𝐛𝐨𝐭 〕
├ Ryannn OFC
├ http://wa.me/6282252285143
├ Nomer BOT - Yann MD
├ http://wa.me/62823504965321
└────
┌─〔 R U N T I M E 〕
├ 𝐁𝐨𝐭 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐥𝐚𝐦𝐚
├ ${uptime}
└────
    `)
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
