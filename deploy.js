const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { discordClientId, discordGuildId, discordToken } = require('./config.json');

const commands = [
    {
        name: 'zap',
        description: 'Zaps poor poor Liliana... (or pick someone else... PLEASE? PRETTY PLEASE???)',
        options: [{
            name: 'user',
            type: 3,
            description: 'The user to shock (optional)',
            required: false,
        }],
    },
    {
        name: 'reward',
        description: 'Buzzes Liliana... (or pick someone else... But do not do that. Reward Liliana. She is a good girl.)',
        options: [{
            name: 'user',
            type: 3,
            description: 'The user to buzz (optional)',
            required: false,
        }],
    },
    {
        name: 'beep',
        description: 'Activate a beep sound',
        options: [{
            name: 'duration',
            type: 4,
            description: 'The duration of the beep (1-15)',
            required: true,
        }, {
            name: 'user',
            type: 3,
            description: 'The user to shock (optional)',
            required: false,
        }],
    },
    {
        name: 'add',
        description: 'Add your PiShock User',
        options: [{
            name: 'sharecode',
            type: 3,
            description: 'The share code of the PiShock User',
            required: true,
        }]
    },
    {
        name: 'remove',
        description: 'Remove your PiShock User'
    },
    {
        name: 'adminadd',
        description: 'Add a new PiShock User',
        options: [{
            name: 'username',
            type: 3,
            description: 'The username of the PiShock User',
            required: true,
        }, {
            name: 'sharecode',
            type: 3,
            description: 'The share code of the PiShock User',
            required: true,
        }]
    },
    {
        name: 'adminremove',
        description: 'Remove a new PiShock User',
        options: [{
            name: 'username',
            type: 3,
            description: 'The username of the PiShock User',
            required: true,
        }]
    },
    {
        name: 'shockban',
        description: '(Admin) Ban a user from using the shock',
        options: [{
            name: 'username',
            type: 6,
            description: 'The username of the PiShock User',
            required: true,
        }]
    },
    {
        name: 'shockunban',
        description: '(Admin) Unban a user from using the shock',
        options: [{
            name: 'username',
            type: 6,
            description: 'The username of the PiShock User',
            required: true,
        }]
    },
    {
        name: 'debug',
        description: 'Debug the PiShock device',
        options: [{
            name: 'user',
            type: 3,
            description: 'The user to debug',
            required: true,
        }]
    },
    {
        name: 'stats',
        description: 'Get stats about the top 10 users',
    },
    {
        name: 'shockstats',
        description: 'Get stats about the top 10 users',
    },
    {
        name: 'list',
        description: 'List all of the known PiShock Users',
    },
    {
        name: 'config',
        description: 'Set User configuration',
        options: [{
            name: 'maxshockintensity',
            type: 4,
            description: 'The maximum shock intensity',
            required: false,
        }, {
            name: 'maxshockduration',
            type: 4,
            description: 'The maximum shock duration',
            required: false,
        }, {
            name: 'maxvibrateintensity',
            type: 4,
            description: 'The maximum vibration intensity',
            required: false,
        }, {
            name: 'maxvibrateduration',
            type: 4,
            description: 'The maximum vibration duration',
            required: false,
        }]
    }
];

const rest = new REST({ version: '9' }).setToken(discordToken);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(discordClientId, discordGuildId),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

