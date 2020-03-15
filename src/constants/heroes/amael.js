export const frontmatter = {
    name: 'Amael',
    type: ['JUNGLE', 'WARRIOR'],
    role: ['JUNGLE'],
    path: '/Amael',
    wallpaper: [
        {
            name: 'Amael',
            link: 'https://imgur.com/a/dMcUsOY'
        }
    ],
    description:
        'A grizzled mercenary who spends his spare time fighting in the arena for fun.',
    spotlight: '',
    stats: [
        { name: 'HEALTH', value: '830 - 2502', color: '#4eec8b' },
        /*{ name: 'H. REGEN', value: '(+)', color: '#4eec8b' }, */
        { name: 'ENERGY', value: '275 - 550', color: '#5bbcff' },
        /* { name: 'ENG REGEN', value: '(+)', color: '#5bbcff' }, */
        { name: 'WP DAMAGE', value: '86 - 152', color: '#f48596' },
        { name: 'ATK SPD', value: '100% - 122%', color: '#f48596' },
        { name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
        { name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
        { name: 'ATK RANGE', value: '1.6', color: '#e19efb' },
        { name: 'MOVE SPD', value: '3.9', color: '#e19efb' },
    ],
    model: [{ image: 'Amaellurred' }, { tmodel: 'Amael' }],
    skills: [
        {
            name: 'PUMP IT UP',
            type: 'Perk',
            image: 'Amael-P',
            text: [
                'Whenever Amael’s abilities hit any enemy heroes twice, he gains a bonus +30 weapon power boost and empowers his next ability to stun enemies.',
                '',
                '• Empower duration: 6s;',
                '• Stun duration: 1.5s;',
            ],
            video: '',
            stats: [],
        },
        {
            name: 'SUPER PUNCH',
            type: 'A ABILITY',
            image: 'Amael-A',
            text: [
                'Amael enters a charging stance, powering up his Super Punch. Upon reactivating the ability Amael will dash forward and perform a powerful punch, knocking back his target a sizable distance.',
                '',
                `• The distance Amael dashes is based on the time spent charging.`,
                `• Amael is fully charged after 1.4s.`,
                `• Cancels automatically after 5s.`,
            ],
            video: '',
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['14s', '13s', '12s', '11s', '8s'],
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
                    amount: ['100', '170', '240', '310', '450'],
                    cr: '100%',
                    wr: '150%',
                },
                {
                    name: 'Range',
                    amount: ['10', '10', '10', '10', '11'],
                    cr: ' ',
                    wr: ' ',
                },
            ],
        },
        {
            name: 'LAWN MOWER',
            type: 'B ABILITY',
            image: 'Amael-B',
            text: [
                'Amael hops backward building his momentum, then quickly dashes forward performing a double clothesline, dealing damage to all enemies that he passes through.',
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
                    amount: ['40', '45', '50', '55', '60'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Damage',
                    amount: ['125', '160', '195', '230', '300'],
                    cr: '60%',
                    wr: '80%',
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
            name: 'THE BULL-DOZER',
            type: 'ULTIMATE',
            image: 'Amael-C',
            video: '',
            text: [
                'Amael lunges at his target and delivers a super kick, dealing damage and knocking them into the air.',
                ' ',
                '• If his target is stunned or rooted, Amael instead performs a ground shattering elbow drop dealing damage and knocking up all enemies caught in a wide area.',
            ],
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['80s', '65s', '50s'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Energy Cost',
                    amount: ['80', '95', '110'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Damage',
                    amount: ['300', '400', '500'],
                    cr: '180%',
                    wr: '150%',
                },
                {
                    name: 'Range',
                    amount: ['7', '7', '7'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Area Damage',
                    amount: ['400', '525', '650'],
                    cr: '180%',
                    wr: '150%',
                },
            ],
        },
    ],
    talents: [
        {
            name: 'GALACTIC PUNCH',
            type: 'Rare',
            color: '#6393F9',
            text: [
                'Super Punch (A) reaches full charge faster and deals more damage.',
                '🔧 Charge Time 47% (Max)',
                '⚔ Damage 167% (Max)',
            ],
            image: 'Amael_Rare',
        },
        {
            name: 'PAIN TRAIN',
            type: 'Epic',
            color: '#c78cff',
            text: [
                'Lawn Mower (B) now dashes further and Amael gains additional armor.',
                '🛡 Passive Armore +39% (Max)',
                '⚔ Distance 6.5 (Max)',
            ],
            image: 'Amael_Epic',
        },
        {
            name: 'Flame Fury',
            type: 'Legendary',
            color: '#FF9000',
            text: [
                'The Bull-Dozer (C) has reduced cooldown and grants Amael increased weapon power. ',
                '⚔ Pssive Weapon Power +30% (Max)',
                '🔧 Cooldown -18s (Max)',
            ],
            image: 'Amael_Legendary',
        },
    ],
    skins: [
        {
            name: 'Gladiator Amael',
            color: '#6393F9',
            type: 'Rare',
            image: 'Amael_Gladiator',
        },
    ],
}
