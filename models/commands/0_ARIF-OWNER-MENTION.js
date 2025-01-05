module.exports.config = {
  name: "ADMIN",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SHAAN KHAN",
  description: "THIS BOT WAS MADE BY MR SHAAN",
  commandCategory: "ADMIN MENTION",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61559716922704") {
];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["ارے دوست مجھ سے بات کرو، باس کو کیوں بلا رہے ہو؟ 🙄", "कآپ میرے باس کو کیوں بلا رہے ہیں؟🤔", "میرا باس شاید بی جی ہے۔", "ارے دوست تم میرے باس کو کیوں تنگ کر رہے ہو؟", "میرا باس اس وقت سو رہا ہوگا۔", "لگتا ہے میرا باس سونے میں مصروف ہے۔", "بتاؤ کیا کام ہے میں باس کو بتا دوں گا۔", "میرا باس شاید ابھی آف لائن ہے۔" , "میرا باس اس وقت مصروف ہے۔😐✌️"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
