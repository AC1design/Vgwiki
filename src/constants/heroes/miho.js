export const frontmatter = {
    name: 'Miho',
    type: ['JUNGLE', 'ASSASSIN'],
    role: ['JUNGLE'],
    path: '/Miho',
    description:
        'Skilled swordswoman that can cut through any obstacle',
    spotlight: '',
    stats: [
        { name: 'HEALTH', value: '775 - 2084', color: '#4eec8b' },
        { name: 'HEALTH REGEN', value: '(+)', color: '#4eec8b' },
        { name: 'ENERGY', value: '0', color: '#5bbcff' },
        { name: 'ENERGY REGEN', value: '-', color: '#5bbcff' },
        { name: 'WEAPON DAMAGE', value: '75 - 152', color: '#f48596' },
        { name: 'ATTACK SPEED', value: '100% - 136.3%', color: '#f48596' },
        { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
        { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
        { name: 'ATTACK RANGE', value: '3', color: '#e19efb' },
        { name: 'MOVE SPEED', value: '4', color: '#e19efb' },
    ],
    model: [{ image: 'Mihoblurred' }, { tmodel: 'Miho' }],
    skills: [
        {
            video: '',
            name: 'KEEN EYE',
            type: 'Perk',
            image: 'Miho-P',
            text: [
                `Instead of energy, Miho uses Focus for her abilities. This is capped at 100 and naturally regenerates 10 per second, Miho also recovers an additional 10 focus for each basic attack she lands.\nMiho's abilities apply Keen Eye stacks to enemy heroes, If Miho performs a basic attack on a target with three stacks, they become Unguarded, stunned, dealt a burst of true damage and grant Miho a barrier.\nMiho deals bonus damage to Unguarded targets but they cannot be inflicted with additional stacks of Keen Eye.`,
                '• Stun Duration: 0.3s',
                '• True Damage: 19-250 (level 1-12)',
                '• Barrier: 35-150 (level 1-12)(+100% weapon power)',
                '• Damage Amplification: +20% ',
            ],
        },
        {
            video: '',
            name: 'REIZAN',
            type: 'A ABILITY',
            image: 'Miho-A',
            text: [
                'Miho teleports a set distance, dealing damage to every enemy that she passes through and in the area where she reappears.',
                '• Overdrive: This ability is refreshed whenever any enemy becomes Unguarded.',
                '• Thies ability triggers basic-attack effects.',
            ],
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['18s', '17.5s', '17s', '16.5s', '16s'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Bonus Damage',
                    amount: ['30', '60', '90', '120', '180'],
                    cr: ' ',
                    wr: '100%',
                },
                {
                    name: 'Focus Cost',
                    amount: ['0', '0', '0', '0', '0'],
                    cr: ' ',
                    wr: ' ',
                },
            ],
        },
        {
            video: '',
            name: 'SHINGETSU',
            type: 'B ABILITY',
            image: 'Miho-B',
            text: [
                'Miho steps forward and performs a slash before entering Quick Draw Stance, While in the stance, she can perform additional slashes as long as she has enough Focus.',
            ],
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['12s', '11s', '10s', '9s', '5s'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Bonus Damage',
                    amount: ['35', '70', '105', '140', '210'],
                    cr: '70%',
                    wr: '30%',
                },
                {
                    name: 'Focus Cost',
                    amount: ['25', '25', '25', '25', '25'],
                    cr: ' ',
                    wr: ' ',
                },
            ],
        },
        {
            video: '',
            name: `TSUKUYOMI`,
            type: 'ULTIMATE',
            image: 'Miho-C',
            text: [
                'Miho charges her blade and fires a crescent wave of energy dealing damage to every target that it passes through as well as applying 3 stacks of Keen Eye.',
                'Tills will also destroy any enemy projectile It comes in contact with.',
            ],
            stats: [
                {
                    name: 'Cooldown',
                    amount: ['60s', '50s', '40s'],
                    cr: ' ',
                    wr: ' ',
                },
                {
                    name: 'Damage',
                    amount: ['300', '450', '600'],
                    cr: '110%',
                    wr: ' ',
                },
                {
                    name: 'Focus Cost',
                    amount: ['35', '35', '35'],
                    cr: ' ',
                    wr: ' ',
                },
            ],
        },
    ],
    talents: [
        {
            name: 'DEATH BLOW',
            type: 'Rare',
            color: '#6393F9',
            text: [
                'Enemies will longer become Unguarded but the but the burst of true damage is greater.',
                '• Damage 215% (max)',
                '• Passive Weapon Power +20% (max)',
                '• Passive Cristal Power +20% (max)',
            ],
            image: 'Miho_Rare',
        },
        {
            name: 'ECLIPSE',
            type: 'Epic',
            color: '#c78cff',
            text: [
                'Tsukuyomi (C) heals allies that it passes through and deals more damage to enemies.',
                '• Damage 156% (max)',
                '• Max Health Heal 92% (max)',
                '• Cooldown -44% (max)',
            ],
            image: 'Miho_Epic',
        },
        {
            name: 'SHUNPO',
            type: 'Legendary',
            color: '#FF9000',
            text: [
                'Reiaan (A) now has two additional charges and deals more damage.',
                '• Damage 250%',
            ],
            image: 'Miho_Legendary',
        },
    ],
    skins: [
        {
            color: '#6393F9',
            name: 'Twilight Miho',
            type: 'Rare',
            image: 'Miho_Twilight',
        },
    ],
}
