let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
「 Suport Bot Dengan Cara donasi 」

⫹⫺ Via Pulsa Telkomsel : 082350496532
⫹⫺ Via Dana : 082350496532
⫹⫺ Via Saweria :
⫹⫺ https://saweria.co/jbyannstore

`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
