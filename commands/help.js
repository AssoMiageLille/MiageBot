const {Command} = require('discordjs-commanderjs');
const {RichEmbed} = require('discord.js');

class help extends Command {

    constructor() {
        //option ci dessous
        super({
            name: 'help',
            aliases: ['aide'],
            description: 'Obtenez de l\'aide sur le fonctionnement du bot.',
            group: 'généraux',
            hidden: false,
            examples: ['help'],
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
            commandHelp: true,
            unknown: false
        });
    }

    run(message, args, option) { // la variable option contient l'objet que vous avez passé dans le Dispatcher
        // code a exécuté si la commande est appeler.
        const embed = new RichEmbed()
            .setTitle("Commandes possibles:")
            .setColor(0xCA182F);
        let description = "";
        option.commands.map(x => {
            description += `${x.name}: ${x.description}\n`;
        });
        embed.setDescription(description);
        message.member.createDM().then(x => {
            x.sendEmbed(embed);
        });
    }

    onError(err, message) {
        // code a exécuté si il y a une erreur
        message.channel.send("Error");
    }

}

module.exports = help;