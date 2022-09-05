const Discord = require('discord.js');
const client = new Discord.Client();

const version = '1.0'

client.on('ready', () => {
    console.log('Logged in on version ' + version);
});

client.on('message', msg => {
    if (msg.content === '!hello') {
        msg.channel.send('Hi there!');
    }

    if (msg.content == '!backrooms') {
        msg.channel.send(`If you're not careful and noclip out of reality in the wrong areas, you'll end up in the 
Backrooms, where it's nothing but the stink of old moist carpet, the madness of mono-yellow, the endless 
background noise of fluorescent lights at maximum hum-buzz, and approximately six hundred million square miles 
of randomly segmented empty rooms to be trapped in. God save you if you hear something wandering around nearby, 
because it sure as hell has heard you.`);
    }
});

client.login(hidden);
