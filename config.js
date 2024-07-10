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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_21_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA1OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUyLFxuICAgICAgICA1NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0LFxuICAgICAgICA5MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjA3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NixcbiAgICAgICAgMTUxLFxuICAgICAgICA1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDk2LFxuICAgICAgICA1LFxuICAgICAgICA2NyxcbiAgICAgICAgNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDAsXG4gICAgICAgIDEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTczLFxuICAgICAgICAxNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk2LFxuICAgICAgICA1MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTksXG4gICAgICAgIDUzLFxuICAgICAgICA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICA3NixcbiAgICAgICAgMTI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxODksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZsZE9zc2tDSWtJTGRkZHBZRFVGL0F1U2hzajNDQS9MZ3lpcVl2Uk1yTGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2Nzg5NDQwODAzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NjFCMEQ1NEIzMkNFNDBDMzRDOUZERUFFODcyMzIxQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1OTk3MDdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYXdHQ2VSVUxTWDZIVkhVUHo0VWROd1wiLFxuICBcInBob25lSWRcIjogXCI1MzdmMjYwYi02NWY5LTQyN2EtYjk2ZC0xZTBhMjU5NzBlNzJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTYsXG4gICAgICAxMCxcbiAgICAgIDIwMixcbiAgICAgIDc3LFxuICAgICAgMTE3LFxuICAgICAgMjQ5LFxuICAgICAgMTQsXG4gICAgICAyMDMsXG4gICAgICAxMDUsXG4gICAgICA2NCxcbiAgICAgIDIzNixcbiAgICAgIDE1OSxcbiAgICAgIDE3LFxuICAgICAgOTIsXG4gICAgICAxNjgsXG4gICAgICAxMSxcbiAgICAgIDkwLFxuICAgICAgNDUsXG4gICAgICAyNDAsXG4gICAgICAyMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTgsXG4gICAgICAxMzQsXG4gICAgICAxMTEsXG4gICAgICAyMDIsXG4gICAgICAyMjcsXG4gICAgICA5LFxuICAgICAgMTIsXG4gICAgICAyNDYsXG4gICAgICAxLFxuICAgICAgMzAsXG4gICAgICAxODIsXG4gICAgICAyMjksXG4gICAgICA5MixcbiAgICAgIDE3NCxcbiAgICAgIDE5NCxcbiAgICAgIDYwLFxuICAgICAgMTM0LFxuICAgICAgNDQsXG4gICAgICAyMTcsXG4gICAgICAxNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkMySzhFSFdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc4OTQ0MDgwMzozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA4MTMwMTMwMjQ3NzYwOjM2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BLMTQrWURFSkdKdWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYjExeGtXTnJFcWUyRUtVc2hmUmI4QlhSdlYrMkd6b0tHNHFMM2JnVU9BQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJob08zeHFEOTBuWElhQ0xLTGFaaU1jSXFJWGxrN2s3MVpLMlNxaXprY0dFRXZyckkzakcyVHVJRGF0OTFTVFA2aTBqUTRiTURENGN4QUpadGQreXlBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvZjV4ajlEVmhjZ09BeFB2c3dxeFIwT2tIN0xDQkdsd0dxQWNsUzU2MGpDY2k2UGlwWk85eHJvSDBRa3pUTnd4ZVI3RlMya3MwWTJRMmJxUUtFR2loZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3ODk0NDA4MDM6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU5OTcwMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURyOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHI4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTEcrMEY2MklGRjU3WWFEVm1pTXdWZlZ0YjVXLzNNK3dNNExXVU04MDFlYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDIwODQ0Nzg1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
