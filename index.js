
const express = require("express");
const app = express();


app.listen(3000, () => {
  console.log("Server is running on port:3000");
})


app.get("/", (req, res) => {
  res.send("Server online");
})


const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});


client.on("ready", () => {
  console.log(`${client.user.username} is ready!`);
})
client.on("message", message => {
  if(message.content === '!ping'){
    message.reply('Pinged');
  }
})
client.login(process.env.token)
