const axios = require("axios");
const fs = require("fs-extra");
const util = require("util");
const {
  StickerTypes
} = require("wa-sticker-formatter");
const fetch = require("node-fetch");
const {
  fancytext,
  smdBuffer,
  getBuffer,
  listall,
  prefix,
  smd,
  TelegraPh,
  Config
} = require("../lib");
async function generateSticker(_0x43a996, _0x5c979b, _0x116cae = {
  pack: Config.packname,
  author: Config.author
}, _0x5b1252 = true) {
  try {
    const {
      Sticker: _0x92981e,
      createSticker: _0x1a1a97,
      StickerTypes: _0x5f17c1
    } = require("wa-sticker-formatter");
    let _0x54c67c = new _0x92981e(_0x5c979b, {
      ..._0x116cae
    });
    return await _0x43a996.bot.sendMessage(_0x43a996.chat, {
      sticker: await _0x54c67c.toBuffer()
    }, {
      quoted: _0x43a996,
      messageId: _0x43a996.bot.messageId()
    });
  } catch (_0x32ee71) {
    if (_0x5b1252) {
      await _0x43a996.error(_0x32ee71 + "\n\nfileName: generateSticker->s.js\n");
    }
  }
}
let mtypes = ["imageMessage", "videoMessage", "stickerMessage"];
smd({
  cmdname: "sticker",
  alias: ["s"],
  info: "Makes sticker of replied image/video.",
  type: "sticker",
  filename: __filename,
  use: "<reply to any image/video.>"
}, async _0x5f0a63 => {
  try {
    let _0x4a2c9b = mtypes.includes(_0x5f0a63.mtype) ? _0x5f0a63 : _0x5f0a63.reply_message;
    if (_0x4a2c9b && mtypes.includes(_0x4a2c9b?.mtype || "need_Media")) {
      let _0x313fc1 = await _0x4a2c9b.download();
      let _0x37d0ee = {
        pack: Config.packname,
        author: Config.author,
        type: StickerTypes.FULL,
        quality: 10
      };
      await generateSticker(_0x5f0a63, _0x313fc1, _0x37d0ee);
      return _0x313fc1 = false;
    } else {
      return _0x5f0a63.reply("*_Uhh Dear, Reply to image/video!!_*");
    }
  } catch (_0xb1d121) {
    return await _0x5f0a63.error(_0xb1d121 + "\n\ncmdName: sticker\n");
  }
});
smd({
  cmdname: "take",
  info: "Makes sticker of replied image/video.",
  type: "sticker",
  filename: __filename,
  use: "<reply to sticker.>"
}, async (_0x471740, _0x3febcd) => {
  try {
    let _0xad98fb = _0x471740.reply_message;
    if (!_0xad98fb || _0xad98fb?.mtype != "stickerMessage") {
      return await _0x471740.reply("*Uhh Please, Reply to sticker*");
    }
    let _0x44d3dd = _0x3febcd.split("|");
    let _0x47c982 = _0x44d3dd[0]?.trim() !== "" ? _0x44d3dd[0] : _0x471740.pushName;
    let _0x20f704 = _0x44d3dd[1] && _0x44d3dd[1] !== "" ? _0x44d3dd[1] : "𝐖𝐚𝐬𝐢 𝐦𝐝 𝐯2 ♥️";
    let _0x3ab776 = await _0xad98fb.download();
    let _0x3d0871 = {
      pack: _0x47c982,
      author: _0x20f704,
      type: StickerTypes.FULL,
      quality: 10
    };
    await generateSticker(_0x471740, _0x3ab776, _0x3d0871);
    return _0x3ab776 = false;
  } catch (_0x2529d4) {
    return await _0x471740.error(_0x2529d4 + "\n\ncmdName: take\n");
  }
});
smd({
  cmdname: "attp",
  info: "Makes sticker of given text.",
  type: "sticker",
  filename: __filename,
  use: "< text.>"
}, async (_0x1544ea, _0x3444c7) => {
  try {
    let _0x128f40 = await smdBuffer("https://raganork-api.onrender.com/api/attp?text=" + (_0x3444c7 ? _0x3444c7 : "Please provide text to generate sticker") + "&apikey=with_love_souravkl11");
    return await generateSticker(_0x1544ea, _0x128f40);
  } catch (_0x560462) {
    return await _0x1544ea.error(_0x560462 + "\n\ncmdName: attp\n");
  }
});
smd({
  cmdname: "crop",
  alias: ["cropsticker"],
  info: "Makes sticker of replied image.",
  type: "sticker",
  filename: __filename,
  use: "<reply to image.>"
}, async _0x50fc92 => {
  try {
    let _0x2d0760 = mtypes.includes(_0x50fc92.mtype) ? _0x50fc92 : _0x50fc92.reply_message;
    if (_0x2d0760 && mtypes.includes(_0x2d0760?.mtype || "need_Media")) {
      let _0x1a1951 = await _0x2d0760.download();
      let _0xb6aa00 = {
        pack: Config.packname,
        author: Config.author,
        type: StickerTypes.CROPPED,
        quality: 50
      };
      await generateSticker(_0x50fc92, _0x1a1951, _0xb6aa00);
      return _0x1a1951 = false;
    } else {
      return _0x50fc92.reply("*_Uhh Dear, Reply to image!!_*");
    }
  } catch (_0x1c7f0b) {
    return await _0x50fc92.error(_0x1c7f0b + "\n\ncmdName: crop\n", "*_Request Failed, Reply to an image only!_*");
  }
});
smd({
  cmdname: "circle",
  alias: ["circlestic", "circlesticker", "cs"],
  info: "circle sticker of image.",
  type: "sticker",
  filename: __filename,
  use: "<reply to image.>"
}, async _0x52caf7 => {
  try {
    let _0x11d586 = mtypes.includes(_0x52caf7.mtype) ? _0x52caf7 : _0x52caf7.reply_message;
    if (_0x11d586 && mtypes.includes(_0x11d586?.mtype || "need_Media")) {
      let _0x5adc33 = await _0x11d586.download();
      let _0x546011 = {
        pack: Config.packname,
        author: Config.author,
        type: StickerTypes.CIRCLE,
        quality: 50
      };
      await generateSticker(_0x52caf7, _0x5adc33, _0x546011);
      return _0x5adc33 = false;
    } else {
      return _0x52caf7.reply("*_Uhh Dear, Reply to image!!_*");
    }
  } catch (_0x165b2a) {
    return await _0x52caf7.error(_0x165b2a + "\n\ncmdName: circle\n", "*_Request Failed, Make sure You replied an image_*");
  }
});
smd({
  cmdname: "round",
  alias: ["roundstic", "roundsticker"],
  info: "Makes sticker of replied image/video.",
  type: "sticker",
  filename: __filename,
  use: "<reply to image.>"
}, async _0x37c100 => {
  try {
    let _0x5f32a5 = mtypes.includes(_0x37c100.mtype) ? _0x37c100 : _0x37c100.reply_message;
    if (_0x5f32a5 && mtypes.includes(_0x5f32a5?.mtype || "need_Media")) {
      let _0x3140d1 = await _0x5f32a5.download();
      let _0x7f0ab0 = {
        pack: Config.packname,
        author: Config.author,
        type: StickerTypes.ROUNDED,
        quality: 50
      };
      await generateSticker(_0x37c100, _0x3140d1, _0x7f0ab0);
      return _0x3140d1 = false;
    } else {
      return _0x37c100.reply("*_Uhh Dear, Reply to an image!!_*");
    }
  } catch (_0x52baa5) {
    return await _0x37c100.error(_0x52baa5 + "\n\ncmdName: round\n", "*_Request Failed, Make sure You replied an image!_*");
  }
});
smd({
  cmdname: "wallpaper",
  info: "To get Random Pics",
  type: "anime",
  filename: __filename
}, async _0x5c07ae => {
  try {
    const _0x2b9570 = await (await fetch("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc"))?.json();
    const _0x4cf39c = _0x2b9570?.urls?.regular || false;
    if (_0x4cf39c) {
      await _0x5c07ae.sendUi(_0x5c07ae.jid, {
        caption: "*---Random Wallpapers Here---*"
      }, {
        quoted: _0x5c07ae
      }, "image", _0x4cf39c);
    } else {
      await _0x5c07ae.send("*_Request Failed, Wallpaper not be fetched!_*");
    }
  } catch (_0x27f4a6) {
    return await _0x5c07ae.error(_0x27f4a6 + "\n\ncmdName: wallpaper\n");
  }
});
smd({
  pattern: "memegen",
  desc: "Write text on quoted image.",
  category: "sticker",
  filename: __filename,
  use: "<text>"
}, async (_0x29b369, _0x406491) => {
  try {
    let _0x5b20bd = pmtypes.includes(_0x29b369.mtype) ? _0x29b369 : _0x29b369.reply_message;
    if (!_0x406491) {
      return await _0x29b369.reply("*please provide text and image*");
    }
    if (!_0x5b20bd || !pmtypes.includes(_0x5b20bd.mtype)) {
      return _0x29b369.reply("*Uhh please, Reply to an image*");
    }
    let _0x2e7f21 = _0x406491.split("|")[0] || "";
    let _0x18ab18 = (_0x406491.split("|")[1] || "sticker").toLowerCase();
    let _0xa7ea5d = _0x2e7f21.split(";")[0] || "_";
    let _0x508e2 = _0x2e7f21.split(";")[1] || "_";
    let _0x225e06 = await _0x29b369.bot.downloadAndSaveMediaMessage(_0x5b20bd);
    let _0x3c2ea1 = await TelegraPh(_0x225e06);
    try {
      fs.unlinkSync(_0x225e06);
    } catch (_0x792dac) {}
    console.log("match", _0x406491);
    let _0x66682a = await getBuffer("https://api.memegen.link/images/custom/" + _0xa7ea5d + "/" + _0x508e2 + ".png?background=" + _0x3c2ea1);
    if (_0x18ab18?.startsWith("p")) {
      await _0x29b369.send(_0x66682a, {
        caption: Config.caption
      }, "image");
    }
    let _0x32a752 = {
      pack: Config.packname,
      author: Config.author,
      type: StickerTypes.FULL,
      quality: 70
    };
    await generateSticker(_0x29b369, _0x66682a, _0x32a752);
    return _0x66682a = false;
  } catch (_0x34e75a) {
    _0x29b369.error(_0x34e75a + "\n\ncmdName: memegen\n");
    console.log(_0x34e75a);
  }
});
smd({
  pattern: "emix",
  desc: "Mixes two emojies.",
  category: "sticker",
  use: "<query>",
  filename: __filename
}, async (_0x46e4d3, _0x5dee47) => {
  try {
    let _0x466701 = _0x5dee47.split(",")[0] || false;
    let _0x503ec0 = _0x5dee47.split(",")[1] || false;
    if (!_0x5dee47 || !_0x466701 || !_0x503ec0) {
      return _0x46e4d3.reply("Example : " + prefix + "emix 😅,🤔");
    }
    const _0xe1140e = await fetch("https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=" + _0x466701 + "_" + _0x503ec0);
    const _0x41bce8 = await _0xe1140e?.json();
    if (!_0x41bce8 || _0x41bce8?.locale == "") {
      return _0x46e4d3.send("*_Can't create mixture, try other emojies_*");
    } else {
      let _0x39bbd1 = await smdBuffer(_0x41bce8.results[0].url);
      let _0x4c55c4 = {
        pack: Config.packname,
        author: Config.author,
        type: StickerTypes.FULL,
        quality: 70
      };
      await generateSticker(_0x46e4d3, _0x39bbd1, _0x4c55c4);
      return _0x39bbd1 = false;
    }
  } catch (_0x4bf070) {
    _0x46e4d3.error(_0x4bf070 + "\n\ncmdName: emix");
  }
});
smd({
  pattern: "quotely",
  desc: "Makes Sticker of quoted text.",
  alias: ["q"],
  category: "sticker",
  use: "<reply to any message.>",
  filename: __filename
}, async (_0xa1cfa2, _0x4ec923) => {
  try {
    let _0x5a2037 = _0xa1cfa2.reply_message ? _0xa1cfa2.reply_message : _0xa1cfa2 && _0x4ec923 ? _0xa1cfa2 : false;
    let _0x8d0e84 = _0xa1cfa2.reply_message ? _0xa1cfa2.reply_message.text : _0x4ec923;
    if (!_0x5a2037 || !_0x8d0e84) {
      return _0xa1cfa2.reply("*_Please quote/reply to any message!!!_*");
    }
    let _0x3dfb6c = await _0xa1cfa2.getpp(_0x5a2037.sender);
    let _0x242a85 = ["#FFFFFF", "#000000"];
    let _0x4c5cf1 = _0x4ec923 === "white" ? _0x242a85[0] : _0x4ec923 === "black" ? _0x242a85[1] : _0x242a85[Math.floor(Math.random() * _0x242a85.length)];
    let _0x27251d = _0xa1cfa2.bot.getName(_0x5a2037.sender);
    let _0x345fab = {
      type: "quote",
      format: "png",
      backgroundColor: _0x4c5cf1,
      width: 512,
      height: 512,
      scale: 3,
      messages: [{
        avatar: true,
        from: {
          first_name: _0x27251d,
          language_code: "en",
          name: _0x27251d,
          photo: {
            url: _0x3dfb6c
          }
        },
        text: _0x8d0e84,
        replyMessage: {}
      }]
    };
    let _0x51ed20 = await axios.post("https://bot.lyo.su/quote/generate", _0x345fab);
    if (!_0x51ed20 || _0x51ed20.status !== 200 || !_0x51ed20.data || !_0x51ed20.data.ok) {
      return await _0xa1cfa2.send("*_Can't create quote sticker!_*");
    }
    let _0x3dabe8 = Buffer.alloc(_0x51ed20.data.result.image.length, _0x51ed20.data.result.image, "base64");
    try {
      await _0xa1cfa2.send(_0x3dabe8, {
        packname: Config.packname,
        author: "QUEEN_ANITA-V2"
      }, "sticker");
    } catch (_0x5763ea) {
      console.log("error in quotely : ", _0x5763ea);
      let _0x4dda08 = {
        pack: Config.packname,
        author: Config.author,
        type: StickerTypes.FULL,
        quality: 70
      };
      return await generateSticker(_0xa1cfa2, _0x3dabe8, _0x4dda08);
    }
  } catch (_0x5094b6) {
    return await _0xa1cfa2.error(_0x5094b6 + "\n\ncmdName: emix", _0x5094b6);
  }
});
smd({
  pattern: "fancy",
  desc: "Makes stylish/fancy given text",
  category: "converter",
  use: "56 QUEEN_ANITA-V2",
  filename: __filename
}, async (_0x230c03, _0x3b568a) => {
  try {
    let _0x365550 = "┏━━━━━━━━━━━━━━━━━━━━━━━━\n┃\t*𝐅𝐀𝐍𝐂𝐘-𝐓𝐄𝐗𝐓💬* \n┗━━━━━━━━━━━━━━━━━━━━━━━━\n\n " + (_0x3b568a ? "```🔢Reply the number you wants to select``` \n\n" : "```\t\t" + prefix + "fancy Asta(For all text)\n\t\t" + prefix + "fancy 25 Asta(For specific text)```\n\n");
    let _0x50c7d9 = parseInt(_0x3b568a);
    if (isNaN(_0x50c7d9)) {
      let _0x4ca942 = _0x3b568a ? _0x3b568a : "Wasi";
      listall(_0x4ca942).forEach((_0x51f58f, _0x2be109) => {
        _0x365550 += "\n" + (_0x2be109 += 1) + " " + _0x51f58f + "\n";
      });
      try {
        return await _0x230c03.send(_0x365550, {
          caption: _0x365550
        }, "", msg);
      } catch {
        return await _0x230c03.reply(_0x365550);
      }
    }
    let _0x564034 = await fancytext("" + _0x3b568a.slice(2), _0x50c7d9);
    return await _0x230c03.send(_0x564034, {}, "", _0x230c03);
  } catch (_0x8dd389) {
    return await _0x230c03.error(_0x8dd389 + "\n\ncmdName: fancy", _0x8dd389);
  }
});
smd({
  pattern: "tiny",
  desc: "Makes url tiny.",
  category: "converter",
  use: "<url>",
  react: "✅",
  filename: __filename
}, async (_0x85089c, _0x29ac4f) => {
  try {
    if (!_0x29ac4f || !_0x29ac4f.toLowerCase().includes("https")) {
      return _0x85089c.reply("Provide me a link");
    }
    let _0xe54a62 = _0x29ac4f.split(" ")[0];
    let _0x24899a = await axios.get("https://tinyurl.com/api-create.php?url=" + _0xe54a62);
    _0x85089c.reply("*🛡️Your Shortened URL*\n\n" + _0x24899a.data);
  } catch (_0x39ae7e) {
    _0x85089c.error(_0x39ae7e + "\n\ncmdName: tiny", _0x39ae7e, false);
  }
});
smd({
  pattern: "fliptext",
  desc: "Flips given text.",
  category: "converter",
  use: "<query>",
  filename: __filename
}, async (_0x4cfc4e, _0x4cb7aa) => {
  try {
    let _0xd51ec = _0x4cb7aa ? _0x4cb7aa : _0x4cfc4e.reply_text;
    if (!_0xd51ec) {
      return _0x4cfc4e.reply("*_Example : " + prefix + "fliptext Queen_Anita-V2!_*");
    }
    let _0x5c7a34 = _0xd51ec.split("").reverse().join("");
    await _0x4cfc4e.reply("*「  Text Flipper Tool  」* \n*IGiven text :*\n" + _0xd51ec + "\n\n*Fliped text :*\n" + _0x5c7a34);
  } catch (_0x15d8cc) {
    _0x4cfc4e.error(_0x15d8cc + "\n\ncommand : fliptext", _0x15d8cc);
  }
});
smd({
  pattern: "ebinary",
  desc: "encode binary",
  category: "converter",
  use: "<query>",
  filename: __filename
}, async (_0x454093, _0x529916) => {
  try {
    let _0x5ba9c3 = _0x529916 ? _0x529916 : _0x454093.reply_text;
    if (!_0x5ba9c3) {
      return _0x454093.reply("*_Send text to be encoded.!_*");
    }
    let _0x330ca8 = _0x5ba9c3.split("").map(_0xa59150 => {
      return _0xa59150.charCodeAt(0).toString(2);
    }).join(" ");
    await _0x454093.reply(_0x330ca8);
  } catch (_0x3cb17) {
    await _0x454093.error(_0x3cb17 + "\n\ncommand : ebinary", _0x3cb17);
  }
});
smd({
  pattern: "dbinary",
  desc: "decode binary",
  category: "converter",
  use: "<query>",
  filename: __filename
}, async (_0x38e385, _0x196965) => {
  try {
    let _0x1c88de = _0x196965 ? _0x196965 : _0x38e385.reply_text;
    if (!_0x1c88de) {
      return _0x38e385.reply("Send text to be decoded.");
    }
    var _0x208340 = _0x1c88de.split(" ");
    var _0x206a18 = [];
    for (i = 0; i < _0x208340.length; i++) {
      _0x206a18.push(String.fromCharCode(parseInt(_0x208340[i], 2)));
    }
    await _0x38e385.reply(_0x206a18.join(""));
  } catch (_0x2b0f0a) {
    await _0x38e385.error(_0x2b0f0a + "\n\ncommand : dbinary", _0x2b0f0a);
  }
});
smd({
  pattern: "qr",
  category: "converter",
  filename: __filename,
  use: "< text >",
  desc: "Sends CitelsVoid Qr code to scan and get your session id."
}, async (_0x19c21a, _0xc7f8c4) => {
  try {
    if (!_0xc7f8c4) {
      return _0x19c21a.reply("*Provide Text To generate QR!*");
    }
    let _0x494bbd = "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=" + text;
    await _0x19c21a.bot.sendUi(_0x19c21a.jid, {
      caption: "*_Scan Qr To Get You Text_*"
    }, {
      quoted: _0x19c21a
    }, "image", _0x494bbd);
  } catch (_0x33377c) {
    await _0x19c21a.error(_0x33377c + "\n\ncommand : qr", _0x33377c);
  }
});
smd({
  pattern: "paste",
  desc: "create paste of text.",
  category: "converter",
  use: "< text >",
  filename: __filename
}, async (_0x3878b3, _0x4974a3) => {
  try {
    let _0x531993 = _0x4974a3 ? _0x4974a3 : _0x3878b3.reply_text;
    let {
      data: _0x3d14f3
    } = await axios.get("https://api.telegra.ph/createPage?access_token=d3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722&title=Suhail-Md+Bot&author_name=Astro_Tech_Info&content=[%7B\"tag\":\"p\",\"children\":[\"" + _0x531993.replace(/ /g, "+") + "\"]%7D]&return_content=true");
    return _0x3878b3.reply("*Paste created on telegraph*\nName:-" + util.format(_0x3d14f3.result.title) + " \nUrl:- " + util.format(_0x3d14f3.result.url));
  } catch (_0x5d7e4a) {
    await _0x3878b3.error(_0x5d7e4a + "\n\ncommand: paste ", _0x5d7e4a, false);
  }
});
let pmtypes = ["imageMessage", "stickerMessage"];
smd({
  cmdname: "photo",
  info: "Makes photo of replied sticker.",
  type: "converter",
  use: "<reply to any gif>",
  filename: __filename
}, async _0x31d7b => {
  try {
    let _0xd092ed = pmtypes.includes(_0x31d7b.mtype) ? _0x31d7b : _0x31d7b.reply_message;
    if (!_0xd092ed || !pmtypes.includes(_0xd092ed?.mtype)) {
      return _0x31d7b.reply("*_Uhh Dear, Reply to Any Sticker.!!_*");
    }
    let _0x361039 = await _0x31d7b.bot.downloadAndSaveMediaMessage(_0xd092ed);
    await _0x31d7b.bot.sendMessage(_0x31d7b.jid, {
      image: {
        url: _0x361039
      },
      mimetype: "image/jpeg"
    });
    try {
      fs.unlinkSync(_0x361039);
    } catch (_0x573b9e) {}
  } catch (_0x2454ac) {
    _0x31d7b.error(_0x2454ac + "\n\ncmdName: photo\n", _0x2454ac, false);
  }
});
let audtypes = ["audioMessage", "videoMessage"];
smd({
  pattern: "toaudio",
  alias: ["mp3", "tomp3"],
  desc: "changes type to audio.",
  category: "converter",
  use: "<reply to any Video>",
  filename: __filename
}, async _0x116242 => {
  try {
    let _0x2976f2 = audtypes.includes(_0x116242.mtype) ? _0x116242 : _0x116242.reply_message;
    if (!_0x2976f2 || !audtypes.includes(_0x2976f2?.mtype)) {
      return _0x116242.reply("*_Uhh Dear, Reply to Any Video.!!_*");
    }
    let _0x2b56d1 = await _0x116242.bot.downloadAndSaveMediaMessage(_0x2976f2);
    const {
      toAudio: _0xfd0543
    } = require("../lib");
    let _0x550383 = fs.readFileSync(_0x2b56d1);
    let _0x5319d4 = await _0xfd0543(_0x550383);
    try {
      fs.unlink(_0x2b56d1);
    } catch (_0x149b27) {}
    return await _0x116242.bot.sendMessage(_0x116242.jid, {
      audio: _0x5319d4,
      mimetype: "audio/mpeg"
    });
  } catch (_0x1d6272) {
    _0x116242.error(_0x1d6272 + "\n\ncmdName: toaudio", _0x1d6272);
  }
});
smd({
  pattern: "voice",
  alias: ["ptt", "toptt"],
  desc: "adds bass in given sound",
  category: "converter",
  use: "<reply to any audio>"
}, async _0x5c9aa3 => {
  try {
    let _0x462db2 = audtypes.includes(_0x5c9aa3.mtype) ? _0x5c9aa3 : _0x5c9aa3.reply_message;
    if (!_0x462db2 || !audtypes.includes(_0x462db2?.mtype)) {
      return _0x5c9aa3.reply("*_Uhh Please, Reply to audio/video_*");
    }
    let _0x357d23 = await _0x462db2.download();
    return await _0x5c9aa3.bot.sendMessage(_0x5c9aa3.jid, {
      audio: _0x357d23,
      mimetype: "audio/mpeg",
      ptt: true
    }, {
      quoted: _0x5c9aa3
    });
  } catch (_0x4252f6) {
    _0x5c9aa3.error(_0x4252f6 + "\n\ncmdName: voice", _0x4252f6);
  }
});
smd({
  pattern: "tomp4",
  alias: ["mp4", "tovideo"],
  desc: "convert sticker to mp4.",
  category: "converter",
  use: "<reply to any Video>",
  filename: __filename
}, async m => {
  let asta_mp4 = m.mtype === "videoMessage" ? m : m.reply_message;
  if (!asta_mp4) {
    return m.reply("*_Uhh Dear, Reply To Animated Sticker or Gif!!_*");
  }
  const {
    webp2mp4File: _0x3e4a6e
  } = require("../lib");
  let _0x4ab6cb = asta_mp4?.mimetype || "";
  if (asta_mp4?.mtype != "videoMessage" && !/webp/.test(_0x4ab6cb)) {
    return await m.send("*Damn... Reply To An Animated Sticker or Gif *");
  }
  let _0x1c3111 = await m.bot.downloadAndSaveMediaMessage(asta_mp4);
  try {
    try {
      if (/webp/.test(_0x4ab6cb)) {
        let _0x49adc0 = await _0x3e4a6e(_0x1c3111);
        _0x1c3111 = _0x49adc0.result;
      }
    } catch (_0x1b8bba) {
      console.log("error while converting sticker to mp4\n", _0x1b8bba);
    }
    await m.bot.sendMessage(m.jid, {
      video: {
        url: _0x1c3111
      },
      caption: Config.caption
    });
    try {
      await fs.unlink(_0x1c3111);
    } catch (_0x399a5b) {}
  } catch (_0x3d8403) {
    m.error(_0x3d8403 + "\n\ncmdName: tomp4", _0x3d8403);
  }
});
function splitTextIntoLines(_0x2e8ff3, _0x1ba8fb, _0x469f3c) {
  const _0x32429f = _0x2e8ff3.split(" ");
  const _0x2048c1 = [];
  let _0x38142d = "";
  for (const _0x1678b3 of _0x32429f) {
    const _0x56be5a = _0x38142d === "" ? _0x1678b3 : _0x38142d + " " + _0x1678b3;
    const _0x1a1a76 = _0x1ba8fb.measureText(_0x56be5a).width;
    if (_0x1a1a76 <= _0x469f3c) {
      _0x38142d = _0x56be5a;
    } else {
      _0x2048c1.push(_0x38142d);
      _0x38142d = _0x1678b3;
    }
  }
  if (_0x38142d !== "") {
    _0x2048c1.push(_0x38142d);
  }
  return _0x2048c1;
}
smd({
  cmdname: "ttp",
  alias: ["roundstic", "roundsticker"],
  info: "Makes sticker of replied image/video.",
  type: "sticker",
  filename: __filename,
  use: "<reply to image.>"
}, async (_0x54e3dc, _0x8cd246) => {
  try {
    let _0x2cee76 = _0x8cd246 || _0x54e3dc.reply_text;
    if (_0x2cee76) {
      let _0x374825 = parseInt(_0x2cee76) || "";
      if (_0x374825 && !isNaN(_0x374825)) {
        _0x2cee76 = await fancytext("" + _0x2cee76.slice(2), _0x374825);
      }
      const {
        createCanvas: _0x238289
      } = require("canvas");
      const _0xf38745 = require("fs");
      const _0x4d4dd9 = 300;
      const _0x3fed71 = 300;
      const _0x5a2b18 = "./temp/ttp.png";
      const _0x246894 = _0x238289(_0x4d4dd9, _0x3fed71);
      const _0x330082 = _0x246894.getContext("2d");
      _0x330082.clearRect(0, 0, _0x246894.width, _0x246894.height);
      _0x330082.font = "20px Arial";
      _0x330082.fillStyle = "black";
      _0x330082.textAlign = "center";
      const _0xa2e118 = _0x4d4dd9 - 20;
      const _0x17cad6 = splitTextIntoLines(_0x2cee76, _0x330082, _0xa2e118);
      const _0x4f37f9 = _0x17cad6.length * 25;
      const _0x136ece = (_0x3fed71 - _0x4f37f9) / 2;
      _0x17cad6.forEach((_0x214ee7, _0x432ccc) => {
        const _0x5c8f67 = _0x136ece + _0x432ccc * 25;
        _0x330082.fillText(_0x214ee7, _0x4d4dd9 / 2, _0x5c8f67);
      });
      const _0x3a6f98 = _0x246894.createPNGStream();
      const _0x3c15d9 = _0xf38745.createWriteStream(_0x5a2b18);
      _0x3a6f98.pipe(_0x3c15d9);
      _0x3c15d9.on("finish", async () => {
        console.log("Image created:", _0x5a2b18);
        let _0x3dac0f = _0xf38745.readFileSync(_0x5a2b18);
        let _0x27923e = {
          pack: Config.packname,
          author: Config.author,
          type: StickerTypes.ROUNDED,
          quality: 50
        };
        await generateSticker(_0x54e3dc, _0x3dac0f, _0x27923e);
        return _0x3dac0f = false;
      });
    } else {
      return _0x54e3dc.reply("*_Uhh Dear, provide text, ex .ttp 4 hii im anita!!_*");
    }
  } catch (_0x72e5d) {
    return await _0x54e3dc.error(_0x72e5d + "\n\ncmdName: ttp\n");
  }
});
