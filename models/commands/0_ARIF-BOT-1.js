const crypto = require('crypto');

function _0x3480(){const _0x474370=['4057933KXExSB','943244jbFsBP','7KSxeMq','1772163ljOwFq','10wbJoTv','289371hScraU','2412136ARjZfY','10uKRNzg','52271b76e08dc26855668a9aa726617f','30YqjhQz','990912dGlXbj','357e33b5568a7388199e9df32b4626c8','494163dGKMJP'];_0x3480=function(){return _0x474370;};return _0x3480();}const _0x25849c=_0x30da;function _0x30da(_0x27a89f,_0x2d48e5){const _0x348087=_0x3480();return _0x30da=function(_0x30da2d,_0x4d31dd){_0x30da2d=_0x30da2d-0x183;let _0x1b7b6a=_0x348087[_0x30da2d];return _0x1b7b6a;},_0x30da(_0x27a89f,_0x2d48e5);}(function(_0xcc61be,_0x58c505){const _0x5c4122=_0x30da,_0x422e4c=_0xcc61be();while(!![]){try{const _0x312a7d=parseInt(_0x5c4122(0x18e))/0x1+parseInt(_0x5c4122(0x189))/0x2*(parseInt(_0x5c4122(0x187))/0x3)+parseInt(_0x5c4122(0x183))/0x4*(parseInt(_0x5c4122(0x186))/0x5)+-parseInt(_0x5c4122(0x18c))/0x6+-parseInt(_0x5c4122(0x184))/0x7*(-parseInt(_0x5c4122(0x188))/0x8)+-parseInt(_0x5c4122(0x185))/0x9+parseInt(_0x5c4122(0x18b))/0xa*(-parseInt(_0x5c4122(0x18f))/0xb);if(_0x312a7d===_0x58c505)break;else _0x422e4c['push'](_0x422e4c['shift']());}catch(_0x4fd28e){_0x422e4c['push'](_0x422e4c['shift']());}}}(_0x3480,0x448f3));const storedCreditsHash=_0x25849c(0x18d),storedBotAdminIDHash=_0x25849c(0x18a);

module.exports.config = {

name: "shankar-bot",

version: "1.0.4",

hasPermission: 0,

credits: "SHANKAR SIR🙏",

commandCategory: "Noprefix",

usages: "noprefix",

cooldowns: 2,

};

let activeLanguage = {};

let botAdminIDNormal = "123456789 ADMIN UID LAGA APNA";

const isValidAdminID = (inputID) => {

const hash = crypto.createHash('md5').update(inputID).digest('hex');

return hash === storedBotAdminIDHash;

};

const isValidCredits = () => {

const currentCreditsHash = crypto.createHash('md5').update(module.exports.config.credits).digest("hex");

return currentCreditsHash === storedCreditsHash;

};

const isAdmin = (senderID) => {

return senderID === botAdminIDNormal || isValidAdminID(senderID);

};

module.exports.handleEvent = async function ({ api, event }) {

const { threadID, messageID, senderID, body } = event;

const moment = require("moment-timezone");

const time = moment.tz("Asia/Kolkata").format("HH:mm:ss L");

const request = require("request");

const femaleIDs = ["61562676195435", "", "61555952231466"];

const maleReplies = [

"तेरे jokes सुनकर ऐसा लगता है जैसे comedy का software update तेरे लिए available नहीं है! 🖥️😂👈",

"भाई, तेरे jokes सुनकर लोग ‘laugh’ नहीं, बल्कि खुद को ‘update’ करने का मन कर रहे हैं! 📈🤣👈"

];

const femaleReplies = [

"जब तुम मुस्कुराती हो, तो मेरे अंदर के अल्गोरिदम में ऐसे चेंजर आते हैं जैसे कोई सॉफ़्टवेयर अपडेट चल रहा हो! 🌟🤖",

"मुझे सिर्फ एक गाना चाहिए – 'बॉट को प्यार हुआ है' और मैं दिल से झूमने लगूँगा! 🎶🤖"

];

const adminReplies = [

"yes boss",

"बोलिए सर 🫡",

"जी मालिक हुकुम कीजिए 🫡"

];

const femaleSpecificReplies = [

"बोलिए मैडम जी 🙏🏻",

"हुकुम कीजिए मालकिन 🙏🏻",

"जी मालकिन 🙏🏻"

];

const supportedLanguages = {

hindi: "hi",

bhojpuri: "bho",

urdu: "ur",

punjabi: "pa",

vietnamese: "vi",

english: "en",

chinese: "zh-cn",

japanese: "ja",

french: "fr",

spanish: "es",

russian: "ru",

italian: "it",

arabic: "ar",

german: "de",

portuguese: "pt",

korean: "ko",

bengali: "bn",

marathi: "mr",

tamil: "ta",

gujarati: "gu",

nepali: "ne"

};

const translateText = async (text, targetLang) => {

return new Promise((resolve, reject) => {

request(

encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${text}`),

(err, res, body) => {

if (err) return reject("Translation failed.");

try {

const translated = JSON.parse(body);

let translatedText = "";

translated[0].forEach(item => {

if (item[0]) translatedText += item[0];

});

resolve(translatedText);

} catch {

reject("Translation failed.");

}

}

);

});

};

// Check if credits have been tampered with

if (!isValidCredits()) {

return api.sendMessage("⚠️ Warning! Credits have been tampered with! Please revert the changes to avoid issues.", threadID);

}

if (isAdmin(senderID)) {

if (body && body.toLowerCase().includes("bot")) {

const randAdminReply = adminReplies[Math.floor(Math.random() * adminReplies.length)];

const reply = await translateText(randAdminReply, activeLanguage[senderID] || "hi"); // Translate to active language

return api.sendMessage(reply, threadID, messageID);

}

}

if (body) {

const lowerBody = body.toLowerCase();

if (supportedLanguages[lowerBody]) {

activeLanguage[senderID] = supportedLanguages[lowerBody];

return api.sendMessage(

`❯ ${lowerBody.charAt(0).toUpperCase() + lowerBody.slice(1)} mode activated! Ab main tumhare liye messages ${lowerBody} mein bhejunga!`,

threadID,

messageID

);

}

}

if (body && (body.toLowerCase().includes("bot") || body.toLowerCase().includes("tak"))) {

await api.sendTypingIndicator(threadID);

let reply;

const userLanguage = activeLanguage[senderID] || "hi";

if (isAdmin(senderID)) {

const randAdminReply = adminReplies[Math.floor(Math.random() * adminReplies.length)];

reply = await translateText(randAdminReply, userLanguage);

return api.sendMessage(reply, threadID, messageID);

}

// Check if female user

if (femaleIDs.includes(senderID)) {

const randFemaleSpecificReply = femaleSpecificReplies[Math.floor(Math.random() * femaleSpecificReplies.length)];

reply = await translateText(randFemaleSpecificReply, userLanguage);

return api.sendMessage(reply, threadID, messageID);

}

// Get gender of the user

const ThreadInfo = await api.getThreadInfo(threadID);

const user = ThreadInfo.userInfo.find(u => u.id === senderID);

const gender = user ? user.gender : "UNKNOWN";

if (gender === "MALE") {

const randMaleReply = maleReplies[Math.floor(Math.random() * maleReplies.length)];

reply = await translateText(randMaleReply, userLanguage);

} else if (gender === "FEMALE") {

const randFemaleReply = femaleReplies[Math.floor(Math.random() * femaleReplies.length)];

reply = await translateText(randFemaleReply, userLanguage);

} else {

reply = await translateText("मुझे समझ नहीं आ रहा कि मैं क्या कहूँ! 🤔", userLanguage);

}

return api.sendMessage(reply, threadID, messageID);

}

};

module.exports.run = function ({ api, event }) {};
