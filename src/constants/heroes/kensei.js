export const frontmatter = {
  name: 'Kensei',
  type: ['LANE', 'WARRIOR'],
  role: ['LANE'],
  path: '/Kensei',
  wallpaper: [
    {
      name: 'Kensei',
      link: 'https://imgur.com/a/2zzYZfL'
    }
  ],
  description:
    'Swift swordmaster who can easily manuever through the battlefield.',
  spotlight: 't6vVHJa90vA',
  stats: [
    { name: 'HEALTH', value: '761 - 2493', color: '#4eec8b' },
    { name: 'H. REGEN', value: '4.01 - 7.42', color: '#4eec8b' },
    { name: 'ENERGY', value: '280 - 643', color: '#5bbcff' },
    { name: 'ENG REGEN', value: '1.87 - 4.29', color: '#5bbcff' },
    { name: 'WP DAMAGE', value: '78 - 140', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '3.5', color: '#e19efb' },
    { name: 'MOVE SPD', value: '4.0', color: '#e19efb' },
  ],
  model: [{ image: 'Kenseiblurred' }, { tmodel: 'Kensei' }],
  skills: [
    {
      video: 'Kensei-P',
      name: 'IMMOVABLE MIND',
      type: 'Perk',
      image: 'Kensei-P',
      text: [
        "After striking enemy heroes or jungle monsters 3 times, Kensei's next basic attack deals 20% bonus damage and grants a burst of barrier.",
        '• Bonus Barrier: 30-140 (level 1-12)(+70% weapon power)',
        "Additionally, Kensei's basic attacks deal increased damage to heroes with higher health.",
      ],
    },
    {
      video: 'Kensei-A',
      name: 'LOTUS STRIKE',
      type: 'A ABILITY',
      image: 'Kensei-A',
      text: [
        'Kensei rushes forward, swinging his blade and dealing basic attack damage in an arc in front of him.',
        '• This ability can be reactivated two additional times within 7.5s.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['12s', '11s', '10s', '9s', '7s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['25', '25', '25', '25', '25'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['20', '40', '60', '80', '100'],
          cr: ' ',
          wr: '65%',
        },
        {
          name: 'Slow (Kensho)',
          amount: ['30%', '35%', '40%', '45%', '50%'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      video: 'Kensei-B',
      name: 'KENSHO',
      type: 'B ABILITY',
      image: 'Kensei-B',
      text: [
        'Kensei strikes his target and leaps backward, entering Kensho Stance and generating fortified health for the duration.',
        '• Kensho Stance: The next Lotus Strike or Path of the Ronin gain a powerful bonus effect when activated within 2.5s of canceling this stance.',
        '• Lotus Strike travels farther and slows enemies hit.',
        '• Path of the Ronin stuns enemies hit.',
        '• Stance is canceled automatically upon movement, attacking, or using any ability.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['14s', '12s', '10s', '8s', '6s'],
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
          amount: ['20', '35', '50', '65', '110'],
          cr: ' ',
          wr: '100%',
        },
        {
          name: 'Fortified Health/sec',
          amount: ['30', '50', '70', '90', '110'],
          cr: ' ',
          wr: '50%',
        },
      ],
    },
    {
      video: 'Kensei-C',
      name: 'PATH OF THE RONIN',
      type: 'ULTIMATE',
      image: 'Kensei-C',
      text: [
        'Kensei readies himself before quickly rushing forward, dealing basic attack plus bonus damage to all enemies in his wake.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['70s', '55s', '40s'],
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
          name: 'Damage',
          amount: ['200', '300', '400'],
          cr: ' ',
          wr: '100%',
        },
        {
          name: 'Stun Duration (Kensho)',
          amount: ['0.6s', '0.8s', '1s'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Accelerated Mind',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Hitting an enemy hero or jungle monster grants max stats of Immovable Mind (Perk)',
        '• Attack Speed +20% (+5%)',
        '• Barrier 40% (+2%)',
      ],
      image: 'Kensei_Rare',
    },
    {
      name: 'Enlightened Kensho',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Kensho’s empowered attack grants Kensei temporary invulnerability.',
        '• Passive Weapon Power 10% (+1%)',
        '• Cooldown 60% (-2.5%)',
        '• Duration 1.1s (+0.1s)',
      ],
      image: 'Kensei_Epic',
    },
    {
      name: 'Endless Path',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Landing Path of the Ronin (Ult) resets its cooldown',
        '• Damage 120% (+25%)',
        '• Cooldown 50% (-5%)',
      ],
      image: 'Kensei_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Tizen Boss Kensei',
      type: 'Rare',
      image: 'Kensei_TaizenBoss',
    },
    {
      color: 'red',
      name: 'Contender Kensei',
      type: 'Limited Edition',
      image: 'Kensei_Contender',
    },
    {
      color: 'red',
      name: 'Oni Kensei',
      type: 'Legendary',
      image: 'Kensei_Oni',
    },
  ],
}
