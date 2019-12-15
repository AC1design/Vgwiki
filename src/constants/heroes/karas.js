export const frontmatter = {
    name: 'Karas',
    type: ['LANE', 'MAGE'],
    role: ['LANE'],
    path: '/Karas',
    /*wallpaper: [
        {
            name: '',
            link: ''
        }
    ],*/
    description:
        'A mysterious teenager trained in the art of wind magic.',
    spotlight: '',
    stats: [
        { name: 'HEALTH', value: '724 - 202', color: '#4eec8b' },
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
            name: 'FATAL WIND',
            type: 'Perk',
            image: 'Karas-P',
            text: [
                "Every 3 basic attacks, Karas's wind transforms into a devastating typhoon, dealing 120-197 (level 1-12) (+90% crystal power) damage to the target and nearby enemy units.",
            ],
            video: '',
            stats: [],
        },
        {
            name: 'WIND BLADE',
            type: 'A ABILITY',
            image: 'Karas-A',
            text: [
                'Karas heaves his mighty fan and slices air to shoot powerful wind blades, dealing damage to the first enemy unit it comes into contact with.',
                '',
                'If an enemy Hero is hit, the next blade will deal additional damage with Fatal Wind.'
            ],
            video: '',
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['10s', '9s', '8s', '7s', '5s'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Energy Cost',
                    amount: ['80', '90', '100', '110', '120'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Damage',
                    amount: ['150', '180', '210', '240', '330'],
                    cr: '100%',
                    wr: ' ',
                },
                {
                    name: 'Range',
                    amount: ['11', '11', '11', '11', '11'],
                    cr: '',
                    wr: ' ',
                },
            ],
        },
        {
            name: 'BLUR',
            type: 'B ABILITY',
            image: 'Karas-B',
            text: [
                'Karas uses his wind magic, becoming a blur and teleports to the designated position. His rare magical prowess allows him to pass through impassable terrain.'
            ],
            video: '',
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['15s', '14s', '13s', '12s', '11s'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Energy Cost',
                    amount: ['60', '75', '90', '105', '120'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Range',
                    amount: ['9', '9', '9', '9', '9'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Duration (Self)',
                    amount: ['3s', '4s', '5s', '6s', '7s'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Passive Attack Speed',
                    amount: ['+12%', '+14%', '+16%', '+18%', '+25%'],
                    cr: ' ',
                    wr: ' ',
                },
            ],
        },
        {
            name: 'BLADE BARRAGE',
            type: 'ULTIMATE',
            image: 'Karas-C',
            video: '',
            text: [
                'Karas activates the wind force unleashing a flurry of 8/10/12 Wind Blades. Each Wind Blade deals damage and every fourth blade deals additional damage with Fatal Wind.',
                '',
                'Use Blur to reposition yourself and finish off fleeing enemies.'
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
                    cr: '30%',
                    wr: '',
                },
                {
                    name: 'Area Damage',
                    amount: ['225', '275', '325'],
                    cr: '30%',
                    wr: '',
                },
                {
                    name: 'Range',
                    amount: ['10', '10', '10'],
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
