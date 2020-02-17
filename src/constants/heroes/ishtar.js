export const frontmatter = {
    name: 'Ishtar',
    type: ['LANE', 'WARRIOR'],
    role: ['LANE'],
    path: '/Ishtar',
    wallpaper: [
        {
            name: 'Ishtar',
            link: 'https://imgur.com/a/Qbq8m2V'
        }
    ],
    description:
        'Demonic queen who manipulates Living Blades.',
    spotlight: 'UPc9QEL_SeM',
    stats: [
        { name: 'HEALTH', value: '666 - 2261', color: '#4eec8b' },
        /* { name: 'H. REGEN', value: '(+)', color: '#4eec8b' }, */
        { name: 'ENERGY', value: '186 - 461', color: '#5bbcff' },
        /* { name: 'ENG REGEN', value: '(+)', color: '#5bbcff' }, */
        { name: 'WP DAMAGE', value: '0', color: '#f48596' },
        { name: 'ATK SPD', value: '100% - 136.3%', color: '#f48596' },
        { name: 'ARMOR', value: '25 - 74', color: '#f6ee71' },
        { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
        { name: 'ATK RANGE', value: '6.2', color: '#e19efb' },
        { name: 'MOVE SPD', value: '3.8', color: '#e19efb' },
    ],
    model: [{ image: 'Ishtarblurred' }, { tmodel: 'Ishtar' }],
    skills: [
        {
            name: 'Demonic Decree',
            type: 'Perk',
            image: 'Ishtar-P',
            text: [
                "Ishtar's basic attacks are imbued with demonic energy that deal crystal damage.",
                'Damage: 75-163 (level 1-12) (+28% crystal power)(+100% weapon power).',
                '',
                'Ishtar can summon and control Living Blades. Every time she performs a basic attack, each Living Blade within range will also perform a basic attack targeting the same enemy. They have the following properties:',
                'Living Blades deal 10% (+30 crystal power) on each basic attack. Living Blades that strike the same target deal 25% after the first.',
                'It takes 4 separate attacks to kill a Living Blade.',
                "Living Blades take normal damage from abilities and are granted 25% of Ishtar's defensive stats.",
                'Living Blades take damage equal to 75% of their max health from turrets.',
                'If Ishtar is too far away from the Living Blades, they will disappear.',
            ],
            video: 'Ishtar-P',
            stats: [],
        },
        {
            name: 'SHADOW RAZOR',
            type: 'A ABILITY',
            image: 'Ishtar-A',
            text: [
                'Ishtar fires a Living Blade toward a target location, dealing damage to all enemies that it passes through. If there are any other Blades on the battlefield, they will also dash towards the target location. If they strike the same target, it will deal 25% damage after the first.',
                '',
                'Only four Living Blades can be present. If all four are currently active then Shadow Razor will instead command all of them to move towards the target location.'
            ],
            video: 'Ishtar-A',
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['15s', '14s', '13s', '12s', '9s'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Energy Cost',
                    amount: ['20', '25', '30', '35', '40'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Damage',
                    amount: ['30', '60', '90', '120', '150'],
                    cr: '50%',
                    wr: ' ',
                },
            ],
        },
        {
            name: 'BLADE WHIRL',
            type: 'B ABILITY',
            image: 'Ishtar-B',
            text: [
                'Ishtar and all Living Blades perform a spinning slash, dealing damage and slowing nearby enemies. If this successfully hits a target, Ishtar will gain a movement speed boost for a short period of time. If this ability strikes the same target, it will deal 25% after the first.',
                '',
                'Passively this ability grants bonus attack speed per level.'
            ],
            video: 'Ishtar-B',
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['12s', '11.5s', '11s', '10.5s', '9s'],
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
                    amount: ['40', '80', '120', '160', '240'],
                    cr: '50%',
                    wr: ' ',
                },
                {
                    name: 'Slow Strength',
                    amount: ['45%', '45%', '45%', '45%', '60%'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Passive Attack Speed',
                    amount: ['3%', '6%', '9%', '12%', '20%'],
                    cr: ' ',
                    wr: ' ',
                },
            ],
        },
        {
            name: 'ASCENSION',
            type: 'ULTIMATE',
            image: 'Ishtar-C',
            video:'Ishtar-C',
            text: [
                'Ishtar destroys all existing Living Blades before creating four new ones near her.',
                '',
                'Additionally she becomes empowered for a short time, granting her bonus vampirism and movement speed.',
                'Basic attacks will now also fire two projectiles that deal 50-94 (level 1-12) (+20% crystal power)(+55% x2 weapon power) and seperately apply basic-attack effects.'
            ],
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['85s', '75s', '65s'],
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
                    amount: ['50', '50', '50'],
                    cr: '20%',
                    wr: '55%',
                },
                {
                    name: 'Duration',
                    amount: ['8', '10', '12'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Bonus Lifesteal',
                    amount: ['5%', '10%', '15%'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Bonus Move Speed',
                    amount: ['1', '1', '1'],
                    cr: ' ',
                    wr: ' ',
                },
            ],
        },
    ],
    talents: [
        {
            name: 'Indomitable',
            type: 'Rare',
            color: '#6393F9',
            text: [
                'Ishtar gains a stack of Indomitable on each hero kill or assist and loses one on death. Each stack grant bonus armor, shield, vampirism. This can stack up to 10 times.',
                '🛡 Armor/Stack 10 (+1)',
                '🛡 Shield/Stack 10 (+1)',
                '🛡 Lifesteal/Stack 50%',
                '🔧 Max stacks 10',
            ],
            image: 'Ishtar_Rare',
        },
        {
            name: 'Pinned and Needles',
            type: 'Epic',
            color: '#c78cff',
            text: [
                "Ishtar's Blade Whirl (B) now will root targets and deal increased damage.",
                '⚔ Damage 110% (+10%)',
                '🔧 Root Duration 1',
            ],
            image: 'Ishtar_Epic',
        },
        {
            name: 'Relentless',
            type: 'Legendary',
            color: '#FF9000',
            text: [
                'Every time a Living Blade is summoned, Ishtar gains additional attack speed for 10 seconds. This can stack up to 20 times.',
                '⚔ Attack Speed/Stack 6% (+1%)',
                '🔧 Max Stacks 20',
            ],
            image: 'Ishtar_Legendary',
        },
    ],
    skins: [
        {
            name: 'Orchid Ishtar',
            color: '#6393F9',
            type: 'Rare',
            image: 'Ishtar_Orchid',
        },
        {
            name: 'Soaring Heart Ishtar',
            type: 'Special edition',
            image: 'Ishtar_Soaring_Heart',
            opals: false,
        },
    ],
}
