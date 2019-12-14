const {Command} = require('discordjs-commanderjs');
const {RichEmbed} = require('discord.js');

class m2 extends Command {

    constructor() {
        //option ci dessous
        super({
            name: 'm2',
            aliases: [],
            description: 'Permet au bot de vous inscrire dans le groupe des M2',
            group: 'généraux',
            hidden: false,
            examples: ['m2'],
            clientPermissions: ['SEND_MESSAGES'],
            userPermissions: ['SEND_MESSAGES'],
            throttling: {
                usages: 1,
                duration: 5
            },
            guildOnly: true,
            ownerOnly: {
                guild: false,
                bot: false
            },
            commandHelp: false,
            unknown: false
        });
    }

    run(message, args, option) { // la variable option contient l'objet que vous avez passé dans le Dispatcher
        // code a exécuté si la commande est appeler.
        message.guild.roles.map(x => {
            if (x.name === "M2")
                message.member.addRole(x);
            else
                message.member.removeRole(x);
        });

    }

    onError(err, message) {
        // code a exécuté si il y a une erreur
        message.channel.send("Error");
    }

}

module.exports = m2;