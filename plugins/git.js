const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://images.wallpapersden.com/image/download/pokemon-detective-pikachu-4k_a2lrZmWUmZqaraWkpJRsZ2WtbGdl.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Pikachu bot created by Ameer Suhail*
*Creator number : wa.me/15098611924?text=Hi%20coco%20sir.%20*

*YOUTUBE CHANNEL : *https://youtube.com/channel/UCOxp3D41xx1aB-M0Hv0Xi3A*

*Githublink (Setup)  :    *https://github.com/cocosir007/COCOSIR*

*Audio commads :   https://github.com/ameer-kallumthodi/pikachu/tree/master/uploads*

*Sticker commads : https://github.com/ameer-kallumthodi/pikachu/tree/master/uploads*

*SUBSCRIBE : https://youtube.com/channel/UCOxp3D41xx1aB-M0Hv0Xi3A* 

*For More Updates Subscribe The Channel ☝*
`}) 

}));
