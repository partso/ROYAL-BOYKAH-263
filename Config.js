//Bot by jermainetech//


require("./all/module")
global.owner = "18764793813" 
global.namaCreator = "jermainetech"
global.autoJoin = false 
global.antilink = false 
global.versisc = '6.𝟏' 
global.codeInvite = "https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e"
global.isLink = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e'
global.sessionName = 'session'
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "ROYAL-BOYKAH-263"
global.author = "jermainetech" 
global.jumlah = "5" 
global.namabot = "ROYAL-BOYKAH-263" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
