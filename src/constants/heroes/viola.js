export const frontmatter = {
    name: 'Viola',
    type: ['CAPTAIN', 'PROTECTOR'],
    role: ['CAPTAIN'],
    path: '/Viola',
    wallpaper: [
        {
            name: 'Viola',
            link: 'https://imgur.com/a/UK8l8WO'
        }
    ],
    description:
        'A wandering musician with a mysterious magical instrument.',
    spotlight: 'iDw9Hvk1DtA',
    stats: [
        { name: 'HEALTH', value: '721 - 2019', color: '#4eec8b' },
        /* { name: 'H. REGEN', value: '(+)', color: '#4eec8b' }, */
        { name: 'ENERGY', value: '290 - 675', color: '#5bbcff' },
        /* { name: 'ENG REGEN', value: '(+)', color: '#5bbcff' }, */
        { name: 'WP DAMAGE', value: '64 - 97', color: '#f48596' },
        { name: 'ATK SPD', value: '100% - 136.3%', color: '#f48596' },
        { name: 'ARMOR', value: '20 - 50', color: '#f6ee71' },
        { name: 'SHIELD', value: '20 - 50', color: '#f6ee71' },
        { name: 'ATK RANGE', value: '6.4', color: '#e19efb' },
        { name: 'MOVE SPD', value: '3.8', color: '#e19efb' },
    ],
    model: [{ image: 'Ishtarblurred' }, { tmodel: 'Ishtar' }],
    skills: [
        {
            name: 'Melodius Tune',
            type: 'Perk',
            image: 'Viola-P',
            text: [
                'Every time Viola casts an ability, she gains a stack of Melodious Tune granting her cooldown reduction.',
                'Basic Attack Damage: 70+5.5% per level (+40% crystal power)',
            ],
            video: '',
            stats: [],
        },
        {
            name: 'HARMONY',
            type: 'A ABILITY',
            image: 'Viola-A',
            text: [
                'Viola sends out a music note that grants a barrier to herself as well as any allies that it passes through. This barrier can be stacked up to on any person',
                "Barrier scales up with 7% of Viola's bonus health.",
                'Afterwards, she will gain 1 Harmony Note (A). If Viola already has three notes, then the oldest one will be replaced instead.'
            ],
            video: 'Viola-A',
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['4s', '4s', '4s', '4s', '3s'],
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
                    name: 'Barrier Strength',
                    amount: ['50', '85', '120', '155', '225'],
                    cr: '50%',
                    wr: ' ',
                },
            ],
        },
        {
            name: 'DISCORD',
            type: 'B ABILITY',
            image: 'Viola-B',
            text: [
                'Viola sends a music note that damages and slows the first enemy that it hits.',
                'After cast, she will gain 1 Discord Note CB). If Viola already has three notes, then the oldest one will be replaced instead.',
            ],
            video: 'Viola-B',
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['4s', '4s', '4s', '4s', '3s'],
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
                    name: 'Bonus Damage',
                    amount: ['60', '100', '140', '180', '260'],
                    cr: '115%',
                    wr: ' ',
                },
                {
                    name: 'Slow Strength',
                    amount: ['25%', '30%', '35%', '40%', '45%'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Slow Duration',
                    amount: ['1s', '1s', '1s', '1s', '1.5s'],
                    cr: ' ',
                    wr: ' ',
                },
            ],
        },
        {
            name: 'POWER BALLAD',
            type: 'ULTIMATE',
            image: 'Viola-C',
            text: [
                ' Viola plays a song that grants various effects to allies and enemies that are first tagged by the aura. The effects of the song and who it applies to is based on the combination of Musical Notes that she currently possesses. This ability can only be activated if she has 3 Musical Notes present.',
                '',
                'A A A - Fleeting Song',
                'Casts an aura that cleanses movement impairing effects and grants movement speed to tagged allies for 3s. This can be cast while under Crowd Control effects such as stuns and silences.',
                '',
                'A A B - Tempo',
                ' Casts an aura that increases attack speed and cooldown reduction to tagged allies for 5s.',
                '',
                'A B B - Dissonance',
                'Casts an aura that deals damage damage over time and applies mortal wounds to tagged enemies.',
                '',
                'B B B - Lullaby',
                'Casts an aura that makes tagged enemies Drowsy and inflicts a ramping slow. After 3s, the enemies will be put to sleep and unable to move or act until they take damage or after it wears off. Enemies affected by Lullaby cannot be affected again for 45s. ',
            ],
            video: 'Viola-C',
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['18s', '15s', '12s'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Energy Cost',
                    amount: ['40', '50', '60'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Burst Damage',
                    amount: ['200', '300', '400'],
                    cr: '70%',
                    wr: ' ',
                },
                {
                    name: 'Damage/sec',
                    amount: ['50', '80', '110'],
                    cr: '15%',
                    wr: ' ',
                },
                {
                    name: 'Bonus Move Speed',
                    amount: ['1', '1.5', '2'],
                    cr: '0.7%',
                    wr: ' ',
                },
                {
                    name: 'Bonus Attack Speed',
                    amount: ['15%', '30%', '45%'],
                    cr: '10%',
                    wr: ' ',
                },
                {
                    name: 'Cooldown Reduction',
                    amount: ['10%', '15%', '20%'],
                    cr: '10%',
                    wr: ' ',
                },
                {
                    name: 'Sleep Duration',
                    amount: ['3s', '3s', '3s'],
                    cr: ' ',
                    wr: ' ',
                },
            ],
        },
    ],
    talents: [
        {
            name: 'Fortissimo',
            type: 'Rare',
            color: '#6393F9',
            text: [
                "Viola's Harmony (A) can now stack 2 additional times and te amount of barrier it garants is increased",
                '🛡 Barrier 205% (Max)',
            ],
            image: 'Viola_Rare',
        },
        {
            name: 'Toccata',
            type: 'Epic',
            color: '#c78cff',
            text: [
                "Enemy heroes that are within Viola's Power Ballad (C) take additional damage while allies take reduced damage.",
                '🔧 Damage Amp 100% (Max)',
                '🔧 Active Damage Reduction 30%',
            ],
            image: 'Viola_Epic',
        },
        {
            name: 'Rubato',
            type: 'Legendary',
            color: '#FF9000',
            text: [
                'Harmony (A) and Discord (B) have three charges and refreshes after Viola casts her Power Ballad',
                '🛡 Barrier 100% (Max)',
                '⚔ Damage 100% (Max)',
            ],
            image: 'Viola_Legendary',
        },
    ],
    skins: [
        {
            name: 'Encore Viola',
            color: '#6393F9',
            type: 'Rare',
            image: 'Viola_Encore',
        },
    ],
}
