export const frontmatter = {
    name: 'Leo',
    type: ['LANE', 'WARRIOR'],
    role: ['LANE'],
    path: '/Leo',
    description: 'Brawny bodyguard with a jet powered sword',
    spotlight: 'nHvdWkuoKwA',
    wallpaper: [
        {
            name: 'Leo',
            link: 'https://imgur.com/a/9ThRiga'
        }
    ],
    stats: [
        { name: 'HEALTH', value: '830 - 2337', color: '#4eec8b' },
        /*{ name: 'H. REGEN', value: '(+)', color: '#4eec8b' }, */
        { name: 'ENERGY', value: '328 - 639', color: '#5bbcff' },
         /* { name: 'ENG REGEN', value: '(+)', color: '#5bbcff' }, */
        { name: 'WP DAMAGE', value: '95 - 168', color: '#f48596' },
        { name: 'ATK SPD', value: '100% - 122%', color: '#f48596' },
        { name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
        { name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
        { name: 'ATK RANGE', value: '3.8', color: '#e19efb' },
        { name: 'MOVE SPD', value: '3.9', color: '#e19efb' },
    ],
    skills: [
        {
            name: 'Turbo Blade',
            type: 'Perk',
            image: 'Leo-P',
            text: [
                `Whenever Leo uses an ability, the turbo engine on his blade engages, granting him bonus movespeed (up to 3 stacks). Leo’s basic attacks are slow but deal damage to all targets in front of him.`,
            ],
            video: 'Leo-P',
            stats: [],
        },
        {
            name: 'Crushing Strike',
            type: 'A ABILITY',
            image: 'Leo-A',
            text: [
                'Leo charges his blade before striking down in front of him dealing heavy damage to enemies in the area.',
            ],
            video: 'Leo-A',
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['8s', '7.5s', '7s', '6.5s', '6s'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Energy Cost',
                    amount: ['40', '45', '50', '55', '60'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Damage',
                    amount: ['80', '160', '240', '320', '480'],
                    cr: ' ',
                    wr: '280%',
                },
            ],
        },
        {
            name: 'Jet Cyclone',
            type: 'B ABILITY',
            image: 'Leo-B',
            text: [
                'Leo briefly charges his blade before dashing to his target location, damaging and slowing enemies around him.',
                'Overdrive: Slow duration increases at max rank.',
            ],
            video: 'Leo-B',
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['10s', '9.5s', '9s', '8.5s', '8s'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Energy Cost',
                    amount: ['40', '50', '60', '70', '80'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Damage',
                    amount: ['60', '100', '140', '180', '220'],
                    cr: ' ',
                    wr: '200%',
                },
                {
                    name: 'Slow Strength',
                    amount: ['10%', '10%', '10%', '10%', '10%'],
                    cr: ' ',
                    wr: '30%',
                },
                {
                    name: 'Slow Duration',
                    amount: ['1.5s', '1.5s', '1.5s', '1.5s', '2s'],
                    cr: ' ',
                    wr: ' ',
                },
            ],
        },
        {
            name: `Lion's Might`,
            type: 'ULTIMATE',
            image: 'Leo-C',
            text: [
                `Leo briefly charges his blade then jumps in the target direction, damaging enemies in the area and empowering himself with Lion’s Might, granting additional effects on his other abilities. If there are enemy heroes near Leo,  he will use Lion’s Fury instead, shoving all enemy heroes in a target direction and stunning them before leaping to them and unleashing two great strikes on them.`,
                `• Lion’s Might – Crushing Strike (A) – Deals bonus damage and causes enemies to bleed for 3s (Weapon Ratio 50%).`,
                `• Lion’s Might – Jet Cyclone (B) – Deals bonus damage and roots enemies instead of slowing them.`,
            ],
            video: 'Leo-C',
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['80s', '65s', '50s'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Energy Cost',
                    amount: ['100', '125', '150'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Damage',
                    amount: ['150', '225', '300'],
                    cr: ' ',
                    wr: '150%',
                },
                {
                    name: 'Damage/Sec',
                    amount: ['50', '80', '110'],
                    cr: ' ',
                    wr: '100%',
                },
                {
                    name: 'Total Damage',
                    amount: ['250', '375', '500'],
                    cr: ' ',
                    wr: '150%',
                },
                {
                    name: 'Bonus Damage',
                    amount: ['10%', '15%', '20%'],
                    cr: ' ',
                    wr: ' ',
                },
            ],
        },
    ],
    talents: [
        {
            name: 'SONIC TURBINE',
            type: 'Rare',
            color: '#6393F9',
            text: [
                'Turbo Blade (Perk) grants additional movespeed as well as weapon power & crystal power.',
                '• Weapon Power/Stack +5% (+)',
                '• Crystal Power/Stack +5% (+)',
                '• Passive Movement Speed 0.05 (+)',
            ],
        },
        {
            name: 'MOCKING SLASH',
            type: 'Epic',
            color: '#c78cff',
            text: [
                'Jet Cyclone (B) taunts enemies hit and passively grants additional defense.',
                '• Passive Armor +10% (+)',
                '• Passive Shield +10% (+)',
            ],
            image: ' ',
        },
        {
            name: `LION'S ROAR`,
            type: 'Legendary',
            color: '#FF9000',
            text: [
                'Lion’s Might (C) empowerment is extended and is no longer removed when using other abilities.',
                '• Cooldown 90% (+)',
                '• Bonus Duration 6 (+)',
            ],
            image: ' ',
        },
    ],
    skins: [
        {
            name: 'Rebellion Leo',
            color: '#6393F9',
            type: 'Rare',
            image: 'Leo_Rebellion',
        },
        {
            name: 'Wu Xing Metal Leo',
            color: '#6393F9',
            type: 'Epic',
            image: 'Leo_WuXingMetal',
        },
    ],
}
