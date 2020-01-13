export const frontmatter = {
    name: 'Warhawk',
    type: ['LANE', 'SNIPER'],
    role: ['LANE'],
    path: '/Warhawk',
    description:
        'Smallest hero wielding the biggest missile launcher.',
    spotlight: 'Omm4KGllXXo',
    stats: [
        { name: 'HEALTH', value: '721 - 2019', color: '#4eec8b' },
        /*{ name: 'H. REGEN', value: '(+)', color: '#4eec8b' }, */
        { name: 'ENERGY', value: '230 - 450', color: '#5bbcff' },
         /* { name: 'ENG REGEN', value: '(+)', color: '#5bbcff' }, */
        { name: 'WP DAMAGE', value: '85 - 151', color: '#f48596' },
        { name: 'ATK SPD', value: '100% - 136.3%', color: '#f48596' },
        { name: 'ARMOR', value: '25 - 55', color: '#f6ee71' },
        { name: 'SHIELD', value: '25 - 55', color: '#f6ee71' },
        { name: 'ATK RANGE', value: '5.5', color: '#e19efb' },
        { name: 'MOVE SPD', value: '3.8', color: '#e19efb' },
    ],
    model: [{ image: 'Warhawkblurred' }, { tmodel: 'Warhawk' }],
    skills: [
        {
            name: 'MK-II ANNABELLE',
            type: 'Perk',
            image: 'Warhawk-P',
            text: [
                'Base Damage: 5+5 per hero level.',
                'Every time Warhawk casts an ability, his next basic attack is empowered dealing 10-120 (level 1-12) (+7% crystal power)(+100% weapon power) and extending his attack range (+4.0).',
            ],
            video: 'Warhawk-P',
            stats: [],
        },
        {
            name: 'ROCKET RIDE',
            type: 'A ABILITY',
            image: 'Warhawk-A',
            text: [
                'Warhawk fires a rocket that deals damage in a small area on impact. The blast from the missile launcher is so powerful that he is also knocked backwards at the same time.',
            ],
            video: 'Warhawk-A',
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['12s', '11.5s', '11s', '10.5s', '9s'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Energy Cost',
                    amount: ['30', '35', '40', '45', '50'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Damage',
                    amount: ['95', '145', '195', '245', '345'],
                    cr: '125%',
                    wr: '80%',
                },
            ],
        },
        {
            name: 'VACUUM GRENADE',
            type: 'B ABILITY',
            image: 'Warhawk-B',
            text: [
                'Warhawk throws a grenade to a target location. Upon reactivation or after a short period of time, the grenade will explode dealing damage and stunning all nearby enemies while pulling them towards the center.',
            ],
            video: 'Warhawk-B',
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['20s', '19s', '18s', '17s', '15s'],
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
                    amount: ['150', '225', '300', '375', '525'],
                    cr: '40%',
                    wr: ' ',
                },
                {
                    name: 'Stun Duration',
                    amount: ['0.5s', '0.5s', '0.5s', '0.5s', '1.0s'],
                    cr: ' ',
                    wr: ' ',
                },
            ],
        },
        {
            name: 'MIGHTIEST BARRAGE',
            type: 'ULTIMATE',
            image: 'Warhawk-C',
            video:'Warhawk-C',
            text: [
                'Warhawk targets up to three nearby locations before firing a missile towards each area. The missile deals damage in an area on impact and leaves behind a pool of fire that continuously deals damage and slows enemies inside.',
                'Targets take 33% of the impact damage after the first missle hits.',
            ],
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['70s', '65s', '60s'],
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
                    name: 'Damage (Impact)',
                    amount: ['150', '200', '250'],
                    cr: '70%',
                    wr: '200%',
                },
                {
                    name: 'Damage/Sec (Burn)',
                    amount: ['180', '240', '300'],
                    cr: '100%',
                    wr: ' ',
                },
                {
                    name: 'Slow Stregth',
                    amount: ['25%', '35%', '45%'],
                    cr: ' ',
                    wr: ' ',
                },
            ],
        },
    ],
    talents: [
        {
            name: 'Healing Bomb',
            type: 'Rare',
            color: '#6393F9',
            text: [
                'Vecuum Grenade (B) now also heals allies in the blast radius.',
                '• Cooldown 80% (-2%)',
                '• Healing Strength 250 (+50)',
            ],
            image: 'Warhawk_Rare',
        },
        {
            name: 'Rocketeer',
            type: 'Epic',
            color: '#c78cff',
            text: [
                'Rocket Ride (A) knocks Warhawk back further.',
                '• Cooldown 90% (-4%)',
                '• Damage 115% (+4%)',
                '• Distance 6 (+0.2)',
            ],
            image: 'Warhawk_Epic',
        },
        {
            name: 'Super Mega Barrage',
            type: 'Legendary',
            color: '#FF9000',
            text: [
                'Mightiest Barrage (C) can now target five locations and the burn is increased.',
                '• Impact Damage 40% (+7%)',
                '• Damage/Sec 150% (+10%)',
            ],
            image: 'Warhawk_Legendary',
        },
    ],
    skins: [
        {
            name: 'Demolition Warhawk',
            color: '#6393F9',
            type: 'Rare',
            image: 'Warhawk_Demolition',
        },
        {
            name: 'Lunar Warhawk',
            color: 'red',
            type: 'Special Edition',
            image: 'Warhawk_Lunar',
        },
    ],
}
