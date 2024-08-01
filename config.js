const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || ""; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "256789440803" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256789440803";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_23_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzksXG4gICAgICAgIDU1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzUsXG4gICAgICAgIDY2LFxuICAgICAgICA1MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4OSxcbiAgICAgICAgOSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg5LFxuICAgICAgICA5MixcbiAgICAgICAgMTAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMixcbiAgICAgICAgMTIyLFxuICAgICAgICA0NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQyLFxuICAgICAgICA5MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA1OCxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgODcsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4LFxuICAgICAgICA5NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDczLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDExLFxuICAgICAgICA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDExLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk4LFxuICAgICAgICA3MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVrWStRaUQ3NU5ncTY1Sk9hWWVQTlZtSnRqZElPa0owLzg3TXNLNkJETmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2Nzg5NDQwODAzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEMDA2MjlBNDQ2Nzc4NjNFRkNDMTIwODY3RjRBNzAwN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1MTg1OThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSjZLa0Y3Si1SM3VHVlo0NGdocFd3Z1wiLFxuICBcInBob25lSWRcIjogXCI2YWI0OTQ4Ny1iZmY0LTQwZDctODQ3OC04MTQzYTg2MGY1YzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ5LFxuICAgICAgMTk5LFxuICAgICAgNTIsXG4gICAgICAxMjksXG4gICAgICAxNCxcbiAgICAgIDI4LFxuICAgICAgMTI1LFxuICAgICAgMTQxLFxuICAgICAgNixcbiAgICAgIDAsXG4gICAgICAxMDksXG4gICAgICA5MixcbiAgICAgIDEzMCxcbiAgICAgIDI0NyxcbiAgICAgIDEwOCxcbiAgICAgIDIxMCxcbiAgICAgIDE0OCxcbiAgICAgIDY0LFxuICAgICAgMjUyLFxuICAgICAgMTM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOSxcbiAgICAgIDE4MCxcbiAgICAgIDE1NyxcbiAgICAgIDExOCxcbiAgICAgIDE1MyxcbiAgICAgIDI1NSxcbiAgICAgIDEzNyxcbiAgICAgIDE3OCxcbiAgICAgIDE1NyxcbiAgICAgIDExNSxcbiAgICAgIDUyLFxuICAgICAgMjA4LFxuICAgICAgNjAsXG4gICAgICAxNDgsXG4gICAgICAxMTIsXG4gICAgICA4OCxcbiAgICAgIDE5NixcbiAgICAgIDI0OSxcbiAgICAgIDEyOSxcbiAgICAgIDE3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYQ1RMMThSOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2Nzg5NDQwODAzOjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDgxMzAxMzAyNDc3NjA6NDFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiVHJhdXRzIEVsdWxha/Cfh7rwn4esXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUE8xNCtZREVMK1lyclVHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiMTF4a1dOckVxZTJFS1VzaGZSYjhCWFJ2VisyR3pvS0c0cUwzYmdVT0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBXS01wK2Nyc085T0R3MlowRXVidisrdzlRMENNZFo4UVc3VVY3QVd5bitYdTZueGd0Z1lBVzVNd0I1ZzhoRDFLSjczSU5TK2hsaEFBbnAyU1VRbkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjN0OVl3cW9rcURUMVY2RVZZcGluVUJHTHcvcjF2VmJKRUszalNNWHYzQjhONXpKS2JlVGNDMDczdXBmOU80bHlLTE1NUnROenpRdUVreG9BT3dWMmd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc4OTQ0MDgwMzo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTE4NTk0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT2VIXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPZUguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwYm5aNEdSVHA0REQ1b2kzOWVtM1BZQ3pFWDIzcWZMMFZ1aGNYV1NYa1dzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjA4NDQ3ODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjQwMDQ5ODA3OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "trauts md",
  ownername:process.env.OWNER_NAME|| "trauts",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
