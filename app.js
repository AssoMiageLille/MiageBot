const Discord = require('discord.js');
const Commander = require('discordjs-commanderjs');

const Client = new Discord.Client();
const Commands = new Commander.Commands(Client, '146707603915931649');
Commands.addCommandWithDirectory('commands');

const Dispatcher = new Commander.Dispatcher({
    discord: Discord,
    prefix: '!',
    responseOn : {
        prefix: true,
        mention: false
    },
    commands: Commands,
    deleteCommand: true,
    options: {
        client: Client
    }
});

Client.on('guildMemberAdd', member => {
    // Send the message, mentioning the member
    member.guild.roles.map(x => {
        if(x.name === "Plebe")
            member.addRole(x);
        else
            member.removeRole(x);
    });
    member.createDM().then(x => x.sendMessage("Pour pouvoir utiliser le serveur tu dois d'abord me préciser si tu es en L3, M1 ou M2. Pour ce faire tu dois m'écrire sur le serveur MIAGE Lille dans le salon textuel 'Console' (https://discord.gg/C3uV6AR): !l3 ou !m1 ou !m2."));
});

Client.on('message', message => {
    Dispatcher.launch(message);
});

Client.login('NjUzMTY3NTcwNDk2NjUxMjY0.XezOoA.1GF110Mf3jwJzRNUzSVmf4FB-9A').catch(console.error);