const Discord = require('discord.js'),
  AlexAPI = require('alexflipnote.js'),
  settings = require('../../settings.json'),
  AlexClient = new AlexAPI(process.env.apitoken);

exports.run = async (client, message, args) => {
  let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 }),
    link = await AlexClient.image.cats();
message.channel.send({files: [{ attachment: link.file }]});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    cooldown: 3,
    permLevel: 0
  };
  
  exports.help = {
    name: 'cat',
    description: 'Sends a cat image',
    usage: 'cat'
  };
   
