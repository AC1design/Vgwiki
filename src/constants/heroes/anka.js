export const frontmatter = {
  name: 'Anka',
  type: ['LANE', 'ASSASSIN'],
  role: ['LANE'],
  path: '/Anka',
  description:
    'An elusive and bursty assassin who strikes with a flurry of blades.',
  spotlight: 'EZ0Wq-FbU-o',
  stats: [
    { name: 'HEALTH', value: '750 - 2301', color: '#4eec8b' },
    { name: 'H. REGEN', value: '4.71 - 9.22', color: '#4eec8b' },
    { name: 'ENERGY', value: '200 - 695', color: '#5bbcff' },
    { name: 'ENG REGEN', value: '2.6 - 4.8', color: '#5bbcff' },
    { name: 'WP DAMAGE', value: '82 - 152', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '1.6', color: '#e19efb' },
    { name: 'MOVE SPD', value: '4.0', color: '#e19efb' },
  ],
  model: [{ image: 'Ankablurred' }, { tmodel: 'Anka' }],
  skills: [
    {
      video: 'Anka-P',
      name: 'GYTHIAN PROMISE',
      type: 'Perk',
      image: 'Anka-P',
      text: [
        'After 8s, Anka’s next basic attack on an enemy hero becomes Execute Strike, dealing bonus crystal damage equal to 20% of the target’s missing health. Additionally, Anka fully refreshes Execute Strike and Shimmer Blade upon getting a hero kill or assist.',
      ],
    },
    {
      video: 'Anka-A',
      name: 'SHIMMER BLADE',
      type: 'A ABILITY',
      text: [
        'Anka throws a dagger in the target direction, dealing damage to the first enemy hit. When the dagger hits an enemy, Anka can reactivate the ability within 2.5s to blink next to the victim.',
        '• Anka gains a burst of decaying movement speed upon blinking.',
      ],
      image: 'Anka-A',
      stats: [
        {
          name: 'Cooldown',
          amount: ['12s', '12s', '12s', '12s', '8s'],
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
          amount: ['25', '50', '75', '100', '150'],
          cr: '40%',
          wr: ' ',
        },
        {
          name: 'Damage (Blink)',
          amount: ['50', '85', '120', '155', '225'],
          cr: '60%',
          wr: ' ',
        },
        {
          name: 'Range',
          amount: ['10', '10', '10', '10', '12'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      video: 'Anka-B',
      name: 'DANCE OF BLADES',
      type: 'B ABILITY',
      image: 'Anka-B',
      text: [
        'Anka throws five knives in a cone, dealing damage to all enemies the knives pass through.',
        'Each additional knife after the first deals damage equal to 60% of the initial damage.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['8s', '7s', '6s', '5s', '4s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['30', '40', '50', '60', '70'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['50', '80', '110', '140', '200'],
          cr: '45%',
          wr: ' ',
        },
      ],
    },
    {
      video: 'Anka-C',
      name: 'MIRAGE',
      type: 'ULTIMATE',
      image: 'Anka-C',
      text: [
        'Anka dashes in the target direction and splits off three clones to deceive enemies, dealing damage to enemies they pass through. Her clones dash back to her after 2s, dealing damage to enemies they pass through.',
        '• Anka is invulnerable and unable to be targeted during her dash.',
        '• Additional pass through deal damage equal to 50% of the initial damage.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['100s', '80s', '60s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['70', '80', '90'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage (Initial Dash)',
          amount: ['100', '140', '180'],
          cr: '40%',
          wr: ' ',
        },
        {
          name: 'Damage (Returning Dash)',
          amount: ['200', '280', '360'],
          cr: '80%',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Gale Blade',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Bonus movespeed on reactivating Shimmer Blade (A) is increased and lasts longer.',
        '• Damage 100% (+5%)',
        '• Bonus Move Speed 1.5 (+0.1)',
        '• Bonus Move Speed Duration 3s',
      ],
      image: 'Anka_Rare',
    },
    {
      name: 'Gythian Tempest',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Gythian Promise (Perk) refreshes all abilities on hero kill/assist. Anka passively gains crystal power.',
        '• Passive Crystal Power +2%',
      ],
      image: 'Anka_Epic',
    },
    {
      name: 'Crimson Blade',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Shimmer Blade (A) has greatly increased range, lower cooldown and increased damage.',
        '• Range 50',
        '• Cooldown 60%',
        '• Damage 110% (+20%)',
      ],
      image: 'Anka_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Frostborn Anka',
      type: 'Rare',
      image: 'Anka_Frostborn',
    },
    {
      color: '#c78cff',
      name: 'Feathered Anka',
      type: 'Epic',
      image: 'Anka_Feathered',
    },
  ],
}
