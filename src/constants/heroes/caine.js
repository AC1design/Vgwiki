export const frontmatter = {
    name: 'Caine',
    type: ['LANE', 'SNIPER'],
    role: ['LANE'],
    path: '/Caine',
    description: 'Hitman who wields his revolver with deadly',
    spotlight: '36HNkV5dRZA',
    stats: [
        { name: 'HEALTH', value: '750 - 2048', color: '#4eec8b' },
        { name: 'HEALTH REGEN', value: '(+)', color: '#4eec8b' },
        { name: 'ENERGY', value: '0', color: '#5bbcff' },
        { name: 'ENERGY REGEN', value: '(+)', color: '#5bbcff' },
        { name: 'WEAPON DAMAGE', value: '82 - 159', color: '#f48596' },
        { name: 'ATTACK SPEED', value: '100% - 122%', color: '#f48596' },
        { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
        { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
        { name: 'ATTACK RANGE', value: '6.4', color: '#e19efb' },
        { name: 'MOVE SPEED', value: '3.8', color: '#e19efb' },
    ],
    model: [{ image: 'Caineblurred' }, { tmodel: 'Caine' }],
    skills: [
        {
            video:'Caine-P',
            name: 'PEACEMAKER',
            type: 'Perk',
            image: 'Caine-P',
            text: [
                `Caine's revolver can load up to 6 Bullets, used for basic attacks or abilities`,
                `• After Caine stops attacking for 2s, he will start reloading his Bullets`,
                `• Once all Bullets are used, Caine will receive a small speed boost`,
                `• Caine's basic attacks cause 115% weapon power`,
            ],
            stats: [],
        },

        {
            video:'Caine-A',
            name: 'TRIPLE TAP',
            type: 'A ABILITY',
            text: [
                "Caine faces towards and rapidly fires a maximum of 3 Bullets in a straight line, causing damage to enemies and slowing them",
            ],
            image: 'Caine-A',
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['14s', '13s', '12s', '11s', '10s'],
                    cr: '  ',
                    wr: ' ',
                },
                {
                    name: 'Damage',
                    amount: ['20', '40', '60', '80', '100'],
                    cr: '60%',
                    wr: '115%',
                },
                {
                    name: 'Slow Strenght',
                    amount: ['30%', '35%', '40%', '45%', '65%'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Slow Duration',
                    amount: ['2s', '2s', '2s', '2s', '2s'],
                    cr: '  ',
                    wr: ' ',
                },
                {
                    name: 'Range',
                    amount: ['7.5', '7.5', '7.5', '7.5', '9'],
                    cr: '  ',
                    wr: ' ',
                },
            ],
        },
        {
            video:'Caine-B',
            name: 'ONCE MORE',
            type: 'B ABILITY',
            image: 'Caine-B',
            text: [
                "Caine dashes towards targeted location, reloading his Bullets and refreshes his Bullet Trio (A) and Prayer at Death (Ult) abilities",
                '• Caine can use his Bullet Trio (A) or Prayer at Death (Ult) ability immediately after finishing his dash.',
                '• Basic attacks will reduce the cooldown of this ability.',
            ],
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['18s', '17s', '16s', '15s', '12s'],
                    cr: '  ',
                    wr: ' ',
                },
                {
                    name: 'Cooldown Reduction',
                    amount: ['1s', '1s', '1s', '1s', '1s'],
                    cr: '  ',
                    wr: ' ',
                },
                {
                    name: 'Reloaded Bullets',
                    amount: ['2', '3', '4', '5', '6'],
                    cr: '  ',
                    wr: ' ',
                },
            ],
        },
        {
            video:'Caine-C',
            name: 'LAST RITES',
            type: 'ULTIMATE',
            image: 'Caine-C',
            text: [
                'Caine fires a long range bullet, penetrating all enemies on its path. The bullet will explode and deal damage upon reaching its max distance. Enemies whose health is below a certain amount will be instantly killed.',
            ],
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['20s', '18s', '16s'],
                    cr: '  ',
                    wr: ' ',
                },
                {
                    name: 'Damage',
                    amount: ['50', '75', '100'],
                    cr: '100%',
                    wr: '130%',
                },
                {
                    name: 'Explosion Damage',
                    amount: ['150', '225', '300'],
                    cr: '120%',
                    wr: ' ',
                },
                {
                    name: 'Health Baseline',
                    amount: ['15%', '20%', '25%'],
                    cr: '  ',
                    wr: ' ',
                },
            ],
        },
    ],
    talents: [
        {
            name: 'ANOTHER ROUND',
            type: 'Rare',
            color: '#6393F9',
            text: [
                'Once More (B) grants invulnerability while dashing.',
                '• Cooldown 80% (-2%)',
            ],
            image: 'Caine_Rare',
        },
        {
            name: 'JUDJE AND JURY',
            type: 'Epic',
            color: '#7A02EA',
            text: [
                'Last Rite’s (C) execute threshold is increased but may no longer be refreshed by Once More (B).',
                '• Execute Threshold 2% (+2%)',
            ],
            image: 'Caine_Epic',
        },
        {
            name: 'VOLCANIC',
            type: 'Legendary',
            color: '#FF9000',
            text: [
                "Caine’s revolver may load double the Bullets and Triple Tap’s (A) range is increased.",
                '• Cooldown 80% (-15%)',
                '• Bonus Range 1 (+0.5%)',
            ],
            image: 'Caine_Legendary',
        },
    ],
    skins: [
        {
            color: '#6393F9',
            name: 'Bandit Caine',
            type: 'Rare',
            image: 'Caine_Bandit',
        },
    ],
}
