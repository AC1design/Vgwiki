export const frontmatter = {
  name: 'Lorelai',
  type: ['CAPTAIN', 'PROTECTOR'],
  role: ['CAPTAIN'],
  path: '/Lorelai',
  description: 'Backline support, excelling at zone control and team utility.',
  spotlight: 'VT0JBLt-QKE',
  stats: [
    { name: 'HEALTH', value: '691 - 2252', color: '#4eec8b' },
    { name: 'H. REGEN', value: '3.14 - 5.56', color: '#4eec8b' },
    { name: 'ENERGY', value: '360 - 690', color: '#5bbcff' },
    { name: 'ENG REGEN', value: '3.47 - 6', color: '#5bbcff' },
    { name: 'WP DAMAGE', value: '0', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 122%', color: '#f48596' },
    { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '6.2', color: '#e19efb' },
    { name: 'MOVE SPD', value: '3.8', color: '#e19efb' },
  ],
  model: [{ image: 'Lorelaiblurred' }, { tmodel: 'Lorelai' }],
  skills: [
    {
      name: "THAT'S SWELL",
      type: 'Perk',
      image: 'Lorelai-P',
      text: [
        "Lorelai's abilities leave pools of water on the ground. While on a pool, Lorelai gains 10-120 (level 1-12) crystal power. Using an ability while empowered consumes the pool she’s on and affects the ability used. Additionally, Lorelai's basic attacks are torrents of water that deals crystal damage.",
        '• Pools persist for 8s.',
        '• Basic attack crystal damage: 65-120 (level 1-12) (+50% crystal power).',
        /*"• Empowered bonus crystal power 15-180 (level 1-12).",*/
        '• Empowered Fish Food: Reduced delay before impact.',
        '• Empowered Splashdown: Reduced delay before impact.',
        '• Empowered Waterwall: Stronger barrier.',
        /*"Water Denizen: Lorelai gains the 5V5 river movement bonus in both directions.",*/
      ],
    },
    {
      name: 'FISH FOOD',
      type: 'A ABILITY',
      image: 'Lorelai-A',
      text: [
        'Lorelai calls upon her aquatic friends at the target location.',
        '• After 0.8s, her pet clam snaps the area, dealing damage to enemy units inside and stunning them for 0.5s.',
        '• A pool filled with small piranhas persists afterwards, dealing damage over time to enemy units inside.',
        "• The stun duration scales with 0.02% of Lorelai's bonus health.",
        '• Deals less damage to minions, structures, summons, and Mythic Creatures.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['12s', '11.5s', '11s', '10.5s', '10s'],
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
          amount: ['40', '75', '110', '145', '215'],
          cr: '80%',
          wr: ' ',
        },
        {
          name: 'Damage/sec',
          amount: ['55', '95', '135', '175', '255'],
          cr: '110%',
          wr: ' ',
        },
        {
          name: 'Range',
          amount: ['8', '8', '8', '8', '9.5'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'SPLASHDOWN',
      type: 'B ABILITY',
      image: 'Lorelai-B',
      text: [
        'Lorelai throws a sphere of water at target location.',
        '• After 0.8s, the water forms a pool.',
        '• Speed up allied units inside.',
        '• Slows down enemy units inside.',
        "• Slow strength scales with 0.015% of Lorelai's bonus health.",
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['10s', '9s', '8s', '7s', '5s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['50', '60', '70', '80', '40'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Speed Boost',
          amount: ['1', '1.2', '1.4', '1.6', '2'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Slow',
          amount: ['20%', '20%', '20%', '20%', '20%'],
          cr: '110%',
          wr: ' ',
        },
      ],
    },
    {
      name: 'WATERWALL',
      type: 'ULTIMATE',
      image: 'Lorelai-C',
      text: [
        'Lorelai forms a protective veil of water around the target allied hero.',
        '• Cleanses the target of any movement-impairing effects.',
        '• Temporarily grants the target a large barrier.',
        '• After 4s, the water barrier drops on the ground, leaving behind a Splashdown pool (if learned).',
        "• Barrier strength scales with 15% of Lorelai's bonus health.",
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['90s', '75s', '60s'],
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
          name: 'Speed Boost',
          amount: ['500', '750', '1000'],
          cr: '100%',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Splash Doubledown',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Splashdown (B) has 1 additional charge.',
        '• Charge Time 88% (-2%)',
        '• Energy Cost 25%',
      ],
      image: 'Lorelai_Rare',
    },
    {
      name: 'Clam Up',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Fish Food (A) stuns for a longer duration.',
        '• Bonus Stun Duration 0.4s (+0.15s)',
      ],
      image: 'Lorelai_Epic',
    },
    {
      name: 'Wonder Wall',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Waterwall (Ult) grants invulnerability instead of barrier.',
        '• Duration 3s (+1s)',
        '• Cooldown 100% (-5%)',
      ],
      image: 'Lorelai_Legendary',
    },
  ],
  skins: [
    {
      color: '#c78cff',
      name: 'Dark Siren Lorelai',
      type: 'Epic',
      image: 'Lorelai_Dark_Siren',
    },
  ],
}
