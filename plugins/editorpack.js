const { smd ,prefix,Config,smdBuffer} = require("../lib")
let photo = ["imageMessage" ]

let gfxold = ["ad","uncover","clown","mnm","pet","drip","gun","colorify"] 
  
let gfxx = [
    'beautiful', 'blur', 'facepalm', 'invert',
    'rainbow', 'wanted', 'wasted', 'greyscale',
    'sepia',  'rip',  'trash',  'hitler',
    "jail", "shit", "affect",...gfxold 
];
async function createUrl(_0x128c16, _0x4f4112 = "1") {
  try {
    if (!_0x128c16) {
      return;
    }
    if (!_0x4f4112 || _0x4f4112 === "1" || _0x4f4112.toLowerCase() === "telegraph") {
      return await TelegraPh(_0x128c16);
    }
    if (_0x4f4112 === "2" || _0x4f4112.toLowerCase().includes("ugu")) {
      return await UploadFileUgu(_0x128c16);
    }
  } catch (_0x21a973) {
    console.log("ERROR IN SCRAPPING FOR CREATE URL()\n", _0x21a973);
  }
}
async function photoEditor(_0x17796b, _0x343213 = "ad", _0xf62b7f = "", _0xe1eb47 = true) {
  let _0xc6e0fc = ["imageMessage"];
  try {
    let _0x430f77 = _0xc6e0fc.includes(_0x17796b.mtype) ? _0x17796b : _0x17796b.reply_message;
    if (!_0x430f77 || !_0xc6e0fc.includes(_0x430f77?.mtype || "null")) {
      return await _0x17796b.send("*_Uhh Dear, Reply to an image_*");
    }
    let _0x2de3c4 = await _0x17796b.bot.downloadAndSaveMediaMessage(_0x430f77);
    let _0x9a4084 = await TelegraPh(_0x2de3c4);
    try {
      fs.unlinkSync(_0x2de3c4);
    } catch (_0x408f7d) {}
    return await _0x17796b.bot.sendMessage(_0x17796b.chat, {
      image: {
        url: "https://api.popcat.xyz/" + _0x343213 + "?image=" + _0x9a4084
      },
      caption: _0xf62b7f
    }, {
      quoted: _0x17796b,
      messageId: _0x17796b.bot.messageId()
    });
  } catch (_0x23ac28) {
    if (_0xe1eb47) {
      await _0x17796b.error(_0x23ac28 + "\n\ncommand: " + _0x343213 + "\nfileName: photoEditor->s.js", _0x23ac28);
    }
  }
}

const sendEditor = async (m,cmd, error = true,cap = Config.caption?.split("\n")[0] ||"") => {
    if(!gfxx.includes(cmd)) return 
    try{
        let mm =   m.image ? m : m.reply_message && m.reply_message.image ? m.reply_message : false; 
        if (!mm || !photo.includes(mm.mtype2)) return m.reply(`*_Uhh Dear,  Reply To An Image!_*`);
        let media = await m.bot.downloadAndSaveMediaMessage(mm);
        var anu = ""
        try{ anu = (await createUrl(media,"uguMashi")).url; if(!anu) throw new Error("invalid Media!") }
        catch(e){console.log(e); try{ anu = await createUrl(media);}catch(e){anu = false} }
        try{ fs.unlink(media); }catch(e){} 
        if(!anu) return m.reply("*_Failed To Create Url!_*")
        let base =await smdBuffer(`${api_smd}/api/maker/${cmd}?url=${anu}`)

        m.send(base,{caption : cap},"img",mm)
    }catch(e){ if(error) { console.log(e);await m.error(`${e}\n\ncommand ${cmd}`, e,false); }}
    
    
}




               

for (let i = 0; i < gfxx.length; i++) {
    smd(
      { cmdname: gfxx[i], infocmd: `Edit image with ${gfxx[i]} effect!`, type :"editor",use:"< image >",filename: __filename },
      async (m, text, {smd}) => { 
        try{ 
            if(gfxold.includes(smd)){ await photoEditor(m , smd); }else { sendEditor(m,smd) } 
        } catch (err) { await message.error(`${err}\n\ncommand: ${smd}`,err,"Request Denied!")}  }
    )
  }







smd({
  cmdname: "editor",
  infocmd: "create gfx logo for text",
  type :"editor",
  use:"< image >",
  filename: __filename
}, async (m, text, {smd }) => {
    try{
        let mm =   m.image ? m : m.reply_message && m.reply_message.image ? m.reply_message : false; 
        
  let too = `*Separate the text with _:_ sign!*\n*Example : ${prefix + smd} WASI _:_ Bot*`
  if(!mm) {
    let str = `┌───〈 *ᴇᴅɪᴛᴏʀ ᴍᴇɴᴜ*  〉───◆
│╭─────────────···▸
┴│▸
⬡│▸ ${gfxx.join(" \n⬡│▸ ")}
┬│▸
│╰────────────···▸▸
└───────────────···▸

\t *USE: _${prefix+smd}_ by replying image*
_To get All Results with single Cmd!_
`
return await m.sendUi(m.chat, { caption: str})
  }
  
  
  for (let i = 0; i < gfxx.length; i++) {
    try{ if(gfxold.includes(gfxx[i])){ await photoEditor(m , gfxx[i]); }else { sendEditor(m,gfxx[i],false) } }catch(e){}
}
}catch(e){ m.error(`${e}\n\nCommand: ${smd}`,e,false)}
 })

