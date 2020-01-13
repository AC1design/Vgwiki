export const frontmatter = {
    name: 'Karas',
    type: ['LANE', 'MAGE'],
    role: ['LANE'],
    path: '/Karas',
    wallpaper: [
        {
            name: 'Karas',
            link: 'https://imgur.com/a/3PVzS4j'
        }
    ],
    description:
        'A mysterious teenager trained in the art of wind magic.',
    spotlight: '',
    stats: [
        { name: 'HEALTH', value: '724 - 2022', color: '#4eec8b' },
        /* { name: 'H. REGEN', value: '(+)', color: '#4eec8b' }, */
        { name: 'ENERGY', value: '320 - 595', color: '#5bbcff' },
        /* { name: 'ENG REGEN', value: '(+)', color: '#5bbcff' }, */
        { name: 'WP DAMAGE', value: '0', color: '#f48596' },
        { name: 'ATK SPD', value: '100% - 136.3%', color: '#f48596' },
        { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
        { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
        { name: 'ATK RANGE', value: '6.4', color: '#e19efb' },
        { name: 'MOVE SPD', value: '3.8', color: '#e19efb' },
    ],
    model: [{ image: 'Ishtarblurred' }, { tmodel: 'Ishtar' }],
    skills: [
        {
            name: 'MISTRAL BLADE',
            type: 'Perk',
            image: 'Karas-P',
            text: [
                "Karas's mythical blade  is infused with the power of wind dealing crystal damage. Whenever Karas uses an ability he gains 0.4 bonus movement speed for 5s.",
                " ",
                "• Damage: 70-136 (level 1-12)(+55% crystal power)(+100% weapon power).",
                "• Bonus movement speed stack up to 3 times.",
            ],
            video: 'Karas-P',
            stats: [],
        },
        {
            name: 'WIND BLADE',
            type: 'A ABILITY',
            image: 'Karas-A',
            text: [
                "Karas shoot a powerful Gust in the target direction, dealing crystal damage to enemies hit.",
                " ",
                "Enemy heroes hit by Gust are slowed for a brief duration",
            ],
            video: 'Karas-A',
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['14s', '13s', '12s', '11s', '10s'],
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
                    amount: ['110', '140', '170', '200', '290'],
                    cr: '100%',
                    wr: ' ',
                },
                {
                    name: 'Range',
                    amount: ['7', '7.5', '8', '8.5', '10'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Slow Stregth',
                    amount: ['12%', '12%', '12%', '12%', '12%'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Slow Duration',
                    amount: ['1.5%', '1.75%', '2%', '2.25%', '2.5%'],
                    cr: ' ',
                    wr: ' ',
                },
            ],
        },
        {
            name: 'BLUR',
            type: 'B ABILITY',
            image: 'Karas-B',
            text: [
                'Karas rapidly spins with his blade and dashes to target location, dealing damage to all enamies in his path',
                " ",
                "Use Twister to reposition yourself while Devil's Dust is active",
            ],
            video: 'Karas-B',
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['15s', '14s', '13s', '12s', '11s'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Energy Cost',
                    amount: ['60', '70', '80', '90', '100'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Damage',
                    amount: ['90', '110', '130', '150', '200'],
                    cr: '80%',
                    wr: ' ',
                },
                {
                    name: 'Range',
                    amount: ['9', '9', '9', '9', '9'],
                    cr: ' ',
                    wr: ' ',
                },
            ],
        },
        {
            name: 'BLADE BARRAGE',
            type: 'ULTIMATE',
            image: 'Karas-C',
            video: 'Karas-C',
            text: [
                `Karas encases himself in a shroud of wind and attacks enemies with Devil's Dust. Every fourth attack the dust deals damage to enemies in an area. `,
                '',
                '• Number of attacks 8/10/12.',
                'Use Twister to reposition yourself and finish off fleeing enemies.',
            ],
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['70s', '60s', '50s'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Energy Cost',
                    amount: ['120', '140', '160'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Damage',
                    amount: ['175', '200', '225'],
                    cr: '50%',
                    wr: ' ',
                },
                {
                    name: 'Area Damage',
                    amount: ['225', '275', '325'],
                    cr: '50%',
                    wr: ' ',
                },
                {
                    name: 'Range',
                    amount: ['10', '10', '10'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Range',
                    amount: ['1.2', '1.2', '1.2'],
                    cr: ' ',
                    wr: ' ',
                },
            ],
        },
    ],
    talents: [
        {
            name: 'Healing Wind',
            type: 'Rare',
            color: '#6393F9',
            text: [
                "Karas's Perk attack now heals him a set amount for every enemy hero hit and passively gains bonus attack speed.",
                '🔧 Heal 250',
                '⚔ Bonus Attack Speed/Stack 58% (Max)',
            ],
            image: 'Karas_Rare',
        },
        {
            name: 'Howling Cyclone',
            type: 'Epic',
            color: '#c78cff',
            text: [
                "Karas's Wind Blade (A) now fires two gusts side by side and deals increased damage.",
                '⚔ Damage 115% (Max)',
                '⚔ Passive Crystal Power +20% (Max)',
            ],
            image: 'Karas_Epic',
        },
        {
            name: 'Typhoon',
            type: 'Legendary',
            color: '#FF9000',
            text: [
                "Karas's Blade Barrage (C) now deal bonus damage in an area or every hit.",
                '⚔ Damage 120% (Max)',
            ],
            image: 'Karas_Legendary',
        },
    ],
    skins: [
        {
            name: 'Tizen Karas',
            color: '#6393F9',
            type: 'Rare',
            image: 'Karas_Taizen',
        },
    ],
}
