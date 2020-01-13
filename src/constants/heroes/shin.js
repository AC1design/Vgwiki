export const frontmatter = {
    name: 'Shin',
    type: ['JUNGLE', 'WARRIOR'],
    role: ['JUNGLE'],
    path: '/Shin',
    description:
        'Warrior God with cybernetic improvements.',
    spotlight: '',
    stats: [
        { name: 'HEALTH', value: '746 - 2400', color: '#4eec8b' },
        /*{ name: 'H. REGEN', value: '(+)', color: '#4eec8b' }, */
        { name: 'ENERGY', value: '320 - 562', color: '#5bbcff' },
        /* { name: 'ENG REGEN', value: '(+)', color: '#5bbcff' }, */
        { name: 'WP DAMAGE', value: '80 - 153', color: '#f48596' },
        { name: 'ATK SPD', value: '100% - 136.3%', color: '#f48596' },
        { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
        { name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
        { name: 'ATK RANGE', value: '3.2', color: '#e19efb' },
        { name: 'MOVE SPD', value: '3.9', color: '#e19efb' },
    ],
    model: [{ image: 'Yatesblurred' }, { tmodel: 'Yates' }],
    skills: [
        {
            name: 'FLAME CHARGE',
            type: 'Perk',
            image: 'Shin-P',
            text: [
                'Every time Shin uses an ability, he gains Heat which fills up the Flame Charge meter upto 4 stacks. When the meter is full he gains bonus movement speed +0.4 and is granted empowered versions of all his abilities.',
                '',
                '• The Flame Charge meter is reset upon performing an empowered ability.',
            ],
            video: '',
            stats: [],
        },
        {
            name: 'BLAZE STRIKE',
            type: 'A ABILITY',
            image: 'Shin-A',
            text: [
                'Shin uses his fire tipped spear to strike the ground and deal damage to all enemies in front of him.',
                '',
                `Flame Charged: Shin's strike reaches further and deals more damage.`,
            ],
            video: '',
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['6s', '5.5s', '5s', '4.5s', '3s'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Energy Cost',
                    amount: ['60', '65', '70', '75', '80'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Damage',
                    amount: ['110', '150', '190', '230', '300'],
                    cr: '123%',
                    wr: ' ',
                },
                {
                    name: 'Range',
                    amount: ['7', '7', '7', '7', '8'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Empowered Damage',
                    amount: ['150', '192', '234', '276', '360'],
                    cr: '150%',
                    wr: ' ',
                },
                {
                    name: 'Bonus Range',
                    amount: ['8', '8', '8', '8', '9'],
                    cr: ' ',
                    wr: ' ',
                },
            ],
        },
        {
            name: 'MYSTIC SASH',
            type: 'B ABILITY',
            image: 'Shin-B',
            text: [
                'Shin sends out his sash which transforms into mystic fire, dealing damage and slowing enemies for a brief duration.',
                ' ',
                'Flame Charged: Sash deals more damage and roots enemies hit.',
            ],
            video: '',
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['8s', '7.5s', '7s', '6.5s', '6s'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Energy Cost',
                    amount: ['60', '65', '70', '75', '80'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Damage',
                    amount: ['80', '110', '140', '170', '200'],
                    cr: '100%',
                    wr: ' ',
                },
                {
                    name: 'Slow Strength',
                    amount: ['30%', '32.5%', '35%', '37.5%', '40%'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Slow Duration',
                    amount: ['3s', '3s', '3s', '3s', '3.5s'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Empowered Damage',
                    amount: ['100', '133', '166', '199', '232'],
                    cr: '150%',
                    wr: ' ',
                },
                {
                    name: 'Root Duration',
                    amount: ['1s', '1s', '1s', '1s', '1.5s'],
                    cr: ' ',
                    wr: ' ',
                },
            ],
        },
        {
            name: 'SACRED FLAME',
            type: 'ULTIMATE',
            image: 'Shin-C',
            text: [
                'Shin holds his ground and fires sacred flames, dealing damage in a wide cone to all enemies in front of him.',
                ' ',
                'Flame Charged: Shin releases his inner flames and strikes the ground dealing damage to all surrounding enemies.',
            ],
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['60s', '50s', '40s'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Energy Cost',
                    amount: ['100', '120', '140'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Range',
                    amount: ['7', '7', '7'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Total Damage',
                    amount: ['750', '850', '950'],
                    cr: '150%',
                    wr: ' ',
                },
                {
                    name: 'Empowered Damage',
                    amount: ['900', '1050', '1200'],
                    cr: '120%',
                    wr: ' ',
                },
            ],
        },
    ],
    talents: [
        {
            name: 'Swift Strike',
            type: 'Rare',
            color: '#6393F9',
            text: [
                'Blaze Strike (A) has reduced cooldown and deals increased damage.',
                '⚔ Damage 110% (+2%)',
                '🔧 Cooldown 95% (-2%)',
            ],
            image: 'Yates_Rare',
        },
        {
            name: 'Fiery Temper',
            type: 'Epic',
            color: '#c78cff',
            text: [
                'Mystic Sash (B) now has increased range and amplified crystal power damage.',
                '⚔ Damage 80% (+5%)',
                '⚔ Passive Crystal Power +2% (+2%)',
                '🔧 Range 1.5 (+0.5)',
            ],
            image: 'Yates_Epic',
        },
        {
            name: 'Flame Fury',
            type: 'Legendary',
            color: '#FF9000',
            text: [
                'Sacred Flames (Ult) deals significantly more damage and has reduced cooldown.',
                '⚔ Damage 120% (+5%)',
                '🔧 Cooldown -2s (-2s)',
            ],
            image: 'Yates_Legendary',
        },
    ],
    skins: [
        {
            name: 'Crimson Shin',
            color: '#6393F9',
            type: 'Rare',
            image: 'Shin_Crimson',
        },
    ],
}
