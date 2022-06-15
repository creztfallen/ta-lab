const { interactions } = require('./responses');
const dotenv = require('dotenv');
const colors = require('colors');
const { Client, Intents } = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`.cyan);
});

client.on('messageCreate', async (msg) => {
  const hasTalabId = msg.mentions.has(client.user.id);

  if (msg.content === 'ying') {
    msg.reply('yang');
  }

  if (msg.content === 'ping') {
    msg.reply('pong');
  }

  if (msg.content.toLowerCase() === "ta'lab, ta'lab, tell me a riddle") {
    msg.react('🖤');
    await msg.reply(interactions[0][0]);
  }
});

dotenv.config({ path: './config/config.env' });

client.login(process.env.TOKEN);
