const { smd, audioEditor } = require("../lib");

// Bass effect
smd(
 {
   cmdname: "bass",
   info: "adds bass in given sound",
   type: "audio",
   use: "<reply to any audio>",
 },
 async (cld, _, { smd: cmdName }) => {
   try {
     return await audioEditor(cld, cmdName, cld);
   } catch (err) {
     return await cld.error(err + " \n\nCommand: " + cmdName, err);
   }
 }
);

// Blown effect
smd(
 {
   cmdname: "blown",
   info: "adds blown in given sound",
   type: "audio",
   use: "<reply to any audio>",
 },
 async (cld, _, { smd: cmdName }) => {
   try {
     return await audioEditor(cld, cmdName, cld);
   } catch (err) {
     return await cld.error(err + " \n\nCommand: " + cmdName, err);
   }
 }
);

// Deep effect
smd(
 {
   cmdname: "deep",
   info: "adds deep in given sound",
   type: "audio",
   use: "<reply to any audio>",
 },
 async (cld, _, { smd: cmdName }) => {
   try {
     return await audioEditor(cld, cmdName, cld);
   } catch (err) {
     return await cld.error(err + " \n\nCommand: " + cmdName, err);
   }
 }
);

// Earrape effect
smd(
 {
   cmdname: "earrape",
   info: "adds earrape in given sound",
   type: "audio",
   use: "<reply to any audio>",
 },
 async (cld, _, { smd: cmdName }) => {
   try {
     return await audioEditor(cld, cmdName, cld);
   } catch (err) {
     return await cld.error(err + " \n\nCommand: " + cmdName, err);
   }
 }
);

// Fast effect
smd(
 {
   cmdname: "fast",
   info: "adds fast in given sound",
   type: "audio",
   use: "<reply to any audio>",
 },
 async (cld, _, { smd: cmdName }) => {
   try {
     return await audioEditor(cld, cmdName, cld);
   } catch (err) {
     return await cld.error(err + " \n\nCommand: " + cmdName, err);
   }
 }
);

// Fat effect
smd(
 {
   cmdname: "fat",
   info: "adds fat in given sound",
   type: "audio",
   use: "<reply to any audio>",
 },
 async (cld, _, { smd: cmdName }) => {
   try {
     return await audioEditor(cld, cmdName, cld);
   } catch (err) {
     return await cld.error(err + " \n\nCommand: " + cmdName, err);
   }
 }
);

// Nightcore effect
smd(
 {
   cmdname: "nightcore",
   info: "adds nightcore in given sound",
   type: "audio",
   use: "<reply to any audio>",
 },
 async (cld, _, { smd: cmdName }) => {
   try {
     return await audioEditor(cld, cmdName, cld);
   } catch (err) {
     return await cld.error(err + " \n\nCommand: " + cmdName, err);
   }
 }
);

// Reverse effect
smd(
 {
   cmdname: "reverse",
   info: "adds reverse in given sound",
   type: "audio",
   use: "<reply to any audio>",
 },
 async (cld, _, { smd: cmdName }) => {
   try {
     return await audioEditor(cld, cmdName, cld);
   } catch (err) {
     return await cld.error(err + " \n\nCommand: " + cmdName, err);
   }
 }
);

// Robot effect
smd(
 {
   cmdname: "robot",
   info: "adds robot in given sound",
   type: "audio",
   use: "<reply to any audio>",
 },
 async (cld, _, { smd: cmdName }) => {
   try {
     return await audioEditor(cld, cmdName, cld);
   } catch (err) {
     return await cld.error(err + " \n\nCommand: " + cmdName, err);
   }
 }
);

// Slow effect
smd(
 {
   cmdname: "slow",
   info: "adds slow in given sound",
   type: "audio",
   use: "<reply to any audio>",
 },
 async (cld, _, { smd: cmdName }) => {
   try {
     return await audioEditor(cld, cmdName, cld);
   } catch (err) {
     return await cld.error(err + " \n\nCommand: " + cmdName, err);
   }
 }
);

// Smooth effect
smd(
 {
   cmdname: "smooth",
   info: "adds smooth in given sound",
   type: "audio",
   use: "<reply to any audio>",
 },
 async (cld, _, { smd: cmdName }) => {
   try {
     return await audioEditor(cld, cmdName, cld);
   } catch (err) {
     return await cld.error(err + " \n\nCommand: " + cmdName, err);
   }
 }
);

// Tupai effect
smd(
 {
   cmdname: "tupai",
   info: "adds tupai in given sound",
   type: "audio",
   use: "<reply to any audio>",
 },
 async (cld, _, { smd: cmdName }) => {
   try {
     return await audioEditor(cld, cmdName, cld);
   } catch (err) {
     return await cld.error(err + " \n\nCommand: " + cmdName, err);
   }
 }
);
