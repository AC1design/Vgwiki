export const frontmatter = {
  name: 'Kestrel',
  type: ['LANE', 'SNIPER'],
  role: ['LANE'],
  path: '/Kestrel',
  wallpaper: [
    {
      name: 'Kestrel',
      link: 'https://imgur.com/gallery/fRsNCKQ'
    }
  ],
  description: 'Stealthy archer with devastating skillshots and traps.',
  spotlight: 'ClhyGmpQZhY',
  stats: [
    { name: 'HEALTH', value: '728 - 2147', color: '#4eec8b' },
    /*{ name: 'H. REGEN', value: '(+)', color: '#4eec8b' }, */
    { name: 'ENERGY', value: '404 - 492', color: '#5bbcff' },
    /*{ name: 'ENG REGEN', value: ' - ', color: '#5bbcff' },*/
    { name: 'WP DAMAGE', value: '70 - 136', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '6.2', color: '#e19efb' },
    { name: 'MOVE SPD', value: '3.6', color: '#e19efb' },
  ],
  model: [{ image: 'Kestrelblurred' }, { tmodel: 'Kestrel' }],
  skills: [
    {
      name: 'ADRENALINE',
      type: 'Perk',
      image: 'Kestrel-P',
      text: [
        'Whenever Kestrel lands a basic attack, she reduces the energy cost of her abilities by 10%. This stacks up to 5 times and wears off after 8s.',
      ],
    },
    {
      name: 'GLIMMERSHOT',
      type: 'A ABILITY',
      image: 'Kestrel-A',
      text: [
        'Kestrel fires an arrow that hits the first target in its path. The arrow then explodes, splashing crystal damage in a line beyond the point of impact.',
        '• Ammo system: Kestrel can fire several times without reloading. To reload, simply stop using her bow for 2.4s.',
        '• Reload time is decreased based on attack speed.',
        '• Primary impact triggers basic-attack effects.',
        '• Deals less damage to minions.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['0', '0', '0', '0', '0'],
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
          name: 'Area Damage',
          amount: ['40', '80', '120', '160', '200'],
          cr: '100%',
          wr: ' ',
        },
        {
          name: 'Max Arrows',
          amount: ['4', '4', '4', '4', '4'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Basic Attack Damage',
          amount: ['105%', '110%', '115%', '120%', '130%'],
          cr: '100%',
          wr: ' ',
        },
      ],
    },
    {
      name: 'ACTIVE CAMO',
      type: 'B ABILITY',
      image: 'Kestrel-B',
      text: [
        'Kestrel instantly stealths and gains bonus move speed. She leaves behind an invisible mist trap that explodes when she damages an eney hero inside it, damaging and stunning them for 0.8s.',
        '• Kestrel cannot activate this ability if she took damage from a hero in the last 2.5s',
        '• This window is reduced by bonus weapon power.',
        '• The primary impact of Glimmershot reduces the cooldown of Active Camo by 1.5s.',
        '• Trap requires 1.2s to arm before it can detonate.',
        '• The trap has vision and can see enemies.',
        '• Turrets, Scout Traps and Flare Guns can still see Kestrel while she is invisible.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['10s', '10s', '10s', '10s', '8s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['100', '110', '120', '130', '140'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['140', '230', '320', '410', '500'],
          cr: '120%',
          wr: ' ',
        },
        {
          name: 'Stealth Duration',
          amount: ['1.2s', '1.2s', '1.2s', '1.2s', '1.5s'],
          cr: '3%',
          wr: ' ',
        },
        {
          name: 'Speed Boost',
          amount: ['1', '1', '1', '1', '1'],
          cr: ' ',
          wr: '0.5%',
        },
        {
          name: 'Mist Duration',
          amount: ['4s', '5s', '6s', '7s', '8s'],
          cr: '1%',
          wr: ' ',
        },
      ],
    },
    {
      name: 'ONE SHOT, ONE KILL',
      type: 'ULTIMATE',
      image: 'Kestrel-C',
      text: [
        'Kestrel charges up and fires a single powerful arrow across the fold, impacting on the first enemy hero, large creature or structure in its path.',
        '• When this hits a target, it reveals it and grants Kestrel full Adrenaline stacks.',
        '• The base damage dealt by this ability is weapon damage.',
        '• Deals 50% less damage to structures.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['50s', '40s', '30s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['140', '155', '170'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['600', '800', '1000'],
          cr: '180%',
          wr: '140%',
        },
        {
          name: 'Reveal Duration',
          amount: ['2s', '4s', '6s'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Glimmer Volley',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Glimmershot (A) launches two arrows without consuming an additional charge.',
        '• Damage 77.5% (+2.5%)',
        '• Range 8',
      ],
      image: 'Kestrel_Rare',
    },
    {
      name: 'Active Reload',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Active Camo (B) refreshes all charges of Glimmershot (A). Glimmershot (A) has 2 additional charges.',
        '• Cooldown 100% (-2%)',
        '• Damage 80% (+7%)',
        '• Energy Cost 50%',
      ],
      image: 'Kestrel_Epic',
    },
    {
      name: 'Piercing Shot',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'One Shot One Kill (Ult) pierces through its target, damaging all enemies along its path.',
        '• Damage 120% (+20%)',
        '• Cooldown 100% (-10%)',
      ],
      image: 'Kestrel_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Sylvan Kestrel',
      type: 'Rare',
      image: 'Kestrel_Sylvan_R',
    },
    {
      color: '#6393F9',
      name: 'Winter War Kestrel',
      type: 'Rare',
      image: 'Kestrel_Winter_War_R',
    },
    {
      color: '#6393F9',
      name: 'Kyudo Kestrel',
      type: 'Rare',
      image: 'Kestrel_Kyudo_Rare',
    },
    {
      color: '#c78cff',
      name: 'Spider Queen Kestrel',
      type: 'Epic',
      image: 'Kestrel_Spider_Queen',
    },
    {
      color: 'red',
      name: 'Summer Party Kestrel',
      type: 'Special Edition',
      image: 'Kestrel_Summer_Party_SE',
      price: '500',
      opals: true,
    },
    {
      color: '#FADA5E',
      name: 'Contender Kestrel',
      type: 'Limited Edition',
      image: 'Kestrel_Contender',
    },

    {
      color: '#c78cff',
      name: 'Wu Xing Forest Kestrel',
      type: 'Epic',
      image: 'Kestrel_WuXingForest',
    },
  ],
}
