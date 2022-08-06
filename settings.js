//═══════════════════════════════════════════════════════//
//
//                               Alex Bot
//بوت أليكس أتمنى أن يعجبك عزيزي المستخدم
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'basilsr', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['79586848937']
global.premium = ['79586848937']
global.ownernomer = '79586848937'
global.ownername = 'Alex'
global.botname = 'Alex Bot'
global.footer = 'Alex Bot'
global.ig = '🌝thekot noki irunal mathi'
global.region = 'India, South India, Kerala'
global.sc = '🌝thekot noki irunal mathi'
global.myweb = 'https://youtube.com/channel/UCrnPCbv7jIKqAXQTllDV6Ng'
global.packname = '⃞₄₄₇ᷩ₄ⷶ₄ᷤ₄ͥ₄ᷞ₅₃₆ᷤ₂ᷪ₀ᷢ⁩ '
global.author = '⃞₄₄₇ᷩ₄ⷶ₄ᷤ₄ͥ₄ᷞ₅₃₆ᷤ₂ᷪ₀ᷢ⁩ '
global.sessionName = 'session'
global.prefa = ['🥹','!'✨'😉'👑'💎'✋🏻'💗','🗿']
global.sp = '⭔'
global.mess = {
    success: 'تم✓',
    admin: 'هذا الأمر للمشرف فقط! ',
    botAdmin: 'يجب أن يكون البوت مشرف أولاً!',
    owner: 'هءه الميزة للمالك فقط! ',
    group: 'الميزة مستخدمة للمجموعات فقك',
    private: 'هذة الميزات للدردشات الخاصه فقط! ',
    bot: 'هذه الميزة مخصصة للبوت فقك',
    wait: 'أنتظر لحظه... ',
    error: 'خطأ! ربما انتهت صلاحية مفتاح Api!‏',
    endLimit: 'انتهت صلاحية الحد اليومي الخاص بك ، وسيتم إعادة تعيين الحد كل 12 ساعة',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
