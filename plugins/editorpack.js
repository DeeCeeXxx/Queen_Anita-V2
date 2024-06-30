let baseApi =
  process.env.API_SMD || global.api_smd || "https://api-smd-1.vercel.app";

const {
  smd,
  prefix,
  Config,
  createUrl,
  photoEditor,
  smdBuffer,
} = require("../lib");
let photo = ["imageMessage"];

let gfxold = [
  "ad",
  "uncover",
  "clown",
  "mnm",
  "pet",
  "drip",
  "gun",
  "colorify",
];

let gfxx = [
  "beautiful",
  "blur",
  "facepalm",
  "invert",
  "rainbow",
  "wanted",
  "wasted",
  "greyscale",
  "sepia",
  "rip",
  "trash",
  "hitler",
  "jail",
  "shit",
  "affect",
  ...gfxold,
];

const sendEditor = async (
  m,
  cmd,
  error = true,
  cap = Config.caption?.split("\n")[0] || ""
) => {
  if (!gfxx.includes(cmd)) return;
  try {
    let mm = m.image
      ? m
      : m.reply_message && m.reply_message.image
      ? m.reply_message
      : false;
    if (!mm || !photo.includes(mm.mtype2))
      return m.reply(`*_Uhh Dear,  Reply To An Image!_*`);
    let media = await m.bot.downloadAndSaveMediaMessage(mm);
    var anu = "";
    try {
      anu = (await createUrl(media, "uguMashi")).url;
      if (!anu) throw new Error("invalid Media!");
    } catch (e) {
      console.log(e);
      try {
        anu = await createUrl(media);
      } catch (e) {
        anu = false;
      }
    }
    try {
      fs.unlink(media);
    } catch (e) {}
    if (!anu) return m.reply("*_Failed To Create Url!_*");
    let base = await smdBuffer(`${baseApi}/api/maker/${cmd}?url=${anu}`);

    m.send(base, { caption: cap }, "img", mm);
  } catch (e) {
    if (error) {
      console.log(e);
      await m.error(`${e}\n\ncommand ${cmd}`, e, false);
    }
  }
};

for (let i = 0; i < gfxx.length; i++) {
  smd(
    {
      cmdname: gfxx[i],
      infocmd: `Edit image with ${gfxx[i]} effect!`,
      type: "editor",
      use: "< image >",
      filename: __filename,
    },
    async (m, text, { smd }) => {
      try {
        if (gfxold.includes(smd)) {
          await photoEditor(m, smd);
        } else {
          sendEditor(m, smd);
        }
      } catch (err) {
        await message.error(
          `${err}\n\ncommand: ${smd}`,
          err,
          "Request Denied!"
        );
      }
    }
  );
}

smd(
  {
    cmdname: "editor",
    infocmd: "create gfx logo for text",
    type: "editor",
    use: "< image >",
    filename: __filename,
  },
  async (m, text, { smd }) => {
    try {
      let mm = m.image
        ? m
        : m.reply_message && m.reply_message.image
        ? m.reply_message
        : false;

      let too = `*Separate the text with _:_ sign!*\n*Example : ${
        prefix + smd
      } David _:_ Bot*`;
      if (!mm) {
        let str = `┌───〈 *ᴇᴅɪᴛᴏʀ ᴍᴇɴᴜ*  〉───◆
│╭─────────────···▸
┴│▸
⬡│▸ ${gfxx.join(" \n⬡│▸ ")}
┬│▸
│╰────────────···▸▸
└───────────────···▸

\t *USE: _${prefix + smd}_ by replying image*
_To get All Results with single Cmd!_
`;
        return await m.sendUi(m.chat, { caption: str });
      }

      for (let i = 0; i < gfxx.length; i++) {
        try {
          if (gfxold.includes(gfxx[i])) {
            await photoEditor(m, gfxx[i]);
          } else {
            sendEditor(m, gfxx[i], false);
          }
        } catch (e) {}
      }
    } catch (e) {
      m.error(`${e}\n\nCommand: ${smd}`, e, false);
    }
  }
);
