const { smd } = require("../lib");
const { exec } = require("child_process");
const fs = require("fs");
async function audioEditor(_0x1ef339, _0x567a0f = "bass", _0x730356 = "") {
  if (!_0x1ef339.quoted) {
    return await _0x1ef339.send("*_Uhh Dear, Reply to audio!!!_*");
  }
  let _0x1e4c20 = _0x1ef339.quoted.mtype || _0x1ef339.mtype;
  if (!/audio/.test(_0x1e4c20)) {
    return await _0x1ef339.send(
      "*_Reply to the audio you want to change with_*",
      {},
      "",
      _0x730356
    );
  }
  try {
    let _0x3497f6 = "-af equalizer=f=54:width_type=o:width=2:g=20";
    if (/bass/.test(_0x567a0f)) {
      _0x3497f6 = "-af equalizer=f=54:width_type=o:width=2:g=20";
    }
    if (/blown/.test(_0x567a0f)) {
      _0x3497f6 = "-af acrusher=.1:1:64:0:log";
    }
    if (/deep/.test(_0x567a0f)) {
      _0x3497f6 = "-af atempo=4/4,asetrate=44500*2/3";
    }
    if (/earrape/.test(_0x567a0f)) {
      _0x3497f6 = "-af volume=12";
    }
    if (/fast/.test(_0x567a0f)) {
      _0x3497f6 = '-filter:a "atempo=1.63,asetrate=44100"';
    }
    if (/fat/.test(_0x567a0f)) {
      _0x3497f6 = '-filter:a "atempo=1.6,asetrate=22100"';
    }
    if (/nightcore/.test(_0x567a0f)) {
      _0x3497f6 = "-filter:a atempo=1.06,asetrate=44100*1.25";
    }
    if (/reverse/.test(_0x567a0f)) {
      _0x3497f6 = '-filter_complex "areverse"';
    }
    if (/robot/.test(_0x567a0f)) {
      _0x3497f6 =
        "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
    }
    if (/slow/.test(_0x567a0f)) {
      _0x3497f6 = '-filter:a "atempo=0.7,asetrate=44100"';
    }
    if (/smooth/.test(_0x567a0f)) {
      _0x3497f6 =
        "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
    }
    if (/tupai/.test(_0x567a0f)) {
      _0x3497f6 = '-filter:a "atempo=0.5,asetrate=65100"';
    }
    let _0x25e2bd = await _0x1ef339.bot.downloadAndSaveMediaMessage(
      _0x1ef339.quoted
    );
    let _0x58830b = "temp/" + (_0x1ef339.sender.slice(6) + _0x567a0f) + ".mp3";
    exec(
      "ffmpeg -i " + _0x25e2bd + " " + _0x3497f6 + " " + _0x58830b,
      async (_0x43e1ec, _0x22acc9, _0x3cea68) => {
        try {
          fs.unlinkSync(_0x25e2bd);
        } catch {}
        if (_0x43e1ec) {
          return _0x1ef339.error(_0x43e1ec);
        } else {
          let _0x11bfca = fs.readFileSync(_0x58830b);
          try {
            fs.unlinkSync(_0x58830b);
          } catch {}
          var _0xfba2a2 = {
            ...(await _0x1ef339.bot.contextInfo(
              "Hellow " + _0x1ef339.senderName + " 🤍",
              "⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ⇆"
            )),
          };
          return _0x1ef339.bot.sendMessage(
            _0x1ef339.chat,
            {
              audio: _0x11bfca,
              mimetype: "audio/mpeg",
              ptt: /ptt|voice/.test(_0x1ef339.test || "") ? true : false,
              contextInfo: _0xfba2a2,
            },
            {
              quoted: _0x1ef339,
              messageId: _0x1ef339.bot.messageId(),
            }
          );
        }
      }
    );
  } catch (_0x48606a) {
    await _0x1ef339.error(_0x48606a + "\n\ncmdName : " + _0x567a0f + "\n");
    return console.log("./lib/asta.js/audioEditor()\n", _0x48606a);
  }
}
smd(
  {
    cmdname: "bass",
    info: "adds bass in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x5d6ad1, _0x53c461, { smd: _0xf17388 }) => {
    try {
      return await audioEditor(_0x5d6ad1, _0xf17388, _0x5d6ad1);
    } catch (_0x429687) {
      return await _0x5d6ad1.error(
        _0x429687 + " \n\nCommand: " + _0xf17388,
        _0x429687
      );
    }
  }
);
smd(
  {
    cmdname: "blown",
    info: "adds blown in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x483202, _0x13c66b, { smd: _0x4afb5c }) => {
    try {
      return await audioEditor(_0x483202, _0x4afb5c, _0x483202);
    } catch (_0x370dd7) {
      return await _0x483202.error(
        _0x370dd7 + " \n\nCommand: " + _0x4afb5c,
        _0x370dd7
      );
    }
  }
);
smd(
  {
    cmdname: "deep",
    info: "adds deep in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x4f23d9, _0x3cf305, { smd: _0x7e1b7 }) => {
    try {
      return await audioEditor(_0x4f23d9, _0x7e1b7, _0x4f23d9);
    } catch (_0x212449) {
      return await _0x4f23d9.error(
        _0x212449 + " \n\nCommand: " + _0x7e1b7,
        _0x212449
      );
    }
  }
);
smd(
  {
    cmdname: "earrape",
    info: "adds earrape in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x17a00c, _0x54b87c, { smd: _0x22851d }) => {
    try {
      return await audioEditor(_0x17a00c, _0x22851d, _0x17a00c);
    } catch (_0x1069a9) {
      return await _0x17a00c.error(
        _0x1069a9 + " \n\nCommand: " + _0x22851d,
        _0x1069a9
      );
    }
  }
);
smd(
  {
    cmdname: "fast",
    info: "adds fast in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x329304, _0x290150, { smd: _0x555cf0 }) => {
    try {
      return await audioEditor(_0x329304, _0x555cf0, _0x329304);
    } catch (_0x2e5829) {
      return await _0x329304.error(
        _0x2e5829 + " \n\nCommand: " + _0x555cf0,
        _0x2e5829
      );
    }
  }
);
smd(
  {
    cmdname: "fat",
    info: "adds fat in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x4e50f6, _0x5469bf, { smd: _0x210909 }) => {
    try {
      return await audioEditor(_0x4e50f6, _0x210909, _0x4e50f6);
    } catch (_0x2d03a6) {
      return await _0x4e50f6.error(
        _0x2d03a6 + " \n\nCommand: " + _0x210909,
        _0x2d03a6
      );
    }
  }
);
smd(
  {
    cmdname: "nightcore",
    info: "adds nightcore in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x562f14, _0x4de080, { smd: _0x3887ce }) => {
    try {
      return await audioEditor(_0x562f14, _0x3887ce, _0x562f14);
    } catch (_0x1c2061) {
      return await _0x562f14.error(
        _0x1c2061 + " \n\nCommand: " + _0x3887ce,
        _0x1c2061
      );
    }
  }
);
smd(
  {
    cmdname: "reverse",
    info: "adds reverse in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x362707, _0xcb10cd, { smd: _0x5223dd }) => {
    try {
      return await audioEditor(_0x362707, _0x5223dd, _0x362707);
    } catch (_0x5ee99a) {
      return await _0x362707.error(
        _0x5ee99a + " \n\nCommand: " + _0x5223dd,
        _0x5ee99a
      );
    }
  }
);
smd(
  {
    cmdname: "robot",
    info: "adds robot in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x310526, _0x4716ec, { smd: _0xa9fd5 }) => {
    try {
      return await audioEditor(_0x310526, _0xa9fd5, _0x310526);
    } catch (_0x552466) {
      return await _0x310526.error(
        _0x552466 + " \n\nCommand: " + _0xa9fd5,
        _0x552466
      );
    }
  }
);
smd(
  {
    cmdname: "slow",
    info: "adds slow in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x4a8426, _0x4b49bd, { smd: _0x181538 }) => {
    try {
      return await audioEditor(_0x4a8426, _0x181538, _0x4a8426);
    } catch (_0x489533) {
      return await _0x4a8426.error(
        _0x489533 + " \n\nCommand: " + _0x181538,
        _0x489533
      );
    }
  }
);
smd(
  {
    cmdname: "smooth",
    info: "adds smooth in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x40e425, _0x2b44c9, { smd: _0x4894c8 }) => {
    try {
      return await audioEditor(_0x40e425, _0x4894c8, _0x40e425);
    } catch (_0x346685) {
      return await _0x40e425.error(
        _0x346685 + " \n\nCommand: " + _0x4894c8,
        _0x346685
      );
    }
  }
);
smd(
  {
    cmdname: "tupai",
    info: "adds tupai in given sound",
    type: "audio",
    use: "<reply to any audio>",
  },
  async (_0x206b7, _0x3d2b22, { smd: _0x1f70bd }) => {
    try {
      return await audioEditor(_0x206b7, _0x1f70bd, _0x206b7);
    } catch (_0x2f0862) {
      return await _0x206b7.error(
        _0x2f0862 + " \n\nCommand: " + _0x1f70bd,
        _0x2f0862
      );
    }
  }
);
