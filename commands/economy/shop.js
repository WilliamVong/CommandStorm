const Discord = require('discord.js');
const superagent = require('superagent');
const mongoose = require('mongoose');
const Coins = require('../../models/coins.js');
const copypastas = require('../../assets/shopitems.json');
const Pagination = require('discord-paginationembed');


exports.run = async (client, message, args, tools) => {
    var embeds = [];

    copypastas.forEach((item) => {
        embeds.push(new Discord.MessageEmbed().addField(item.name, `ID: \`${item.id}\`\nDescription: \`${item.description}\`\nCost: ${item.cost} coins`, true))
    });

    new Pagination.Embeds()
        .setArray(embeds)
        .setAuthorizedUsers([message.author.id])
        .setChannel(message.channel)
        .setPageIndicator(true)
        .setPage(1)
        .setTitle('Shop')
        .setDescription('Buy an item with \`buy <id>!\`')
        .setTimestamp()
        .setColor("#d000a8")
        .build();

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    cooldown: 5,
    permLevel: 0
};

exports.help = {
    name: 'shop',
    description: 'Opens the shop so you can buy stuff.',
    usage: 'shop',
};