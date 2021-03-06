export const frontmatter = {
  name: 'Ringo',
  type: ['LANE', 'SNIPER'],
  role: ['LANE'],
  path: '/Ringo',
  description: 'Fast-moving, fast-shooting gunslinger with an epic fireball.',
  wallpaper: [
    {
      name: 'Ringo',
      link: 'https://imgur.com/a/0IqxgvQ'
    }
  ],
  spotlight: 'QKA4GSSrRRU',
  stats: [
    { name: 'HEALTH', value: '703 - 2107', color: '#4eec8b' },
    { name: 'H. REGEN', value: '2.15 - 4.68', color: '#4eec8b' },
    { name: 'ENERGY', value: '163 - 416', color: '#5bbcff' },
    { name: 'ENG REGEN', value: '1.2 - 2.85', color: '#5bbcff' },
    { name: 'WP DAMAGE', value: '74 - 140', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '6.2', color: '#e19efb' },
    { name: 'MOVE SPD', value: '3.6', color: '#e19efb' },
  ],
  model: [{ image: 'Ringoblurred' }, { tmodel: 'Ringo' }],
  skills: [
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Ringo-P-Double-Down.mp4',
      name: 'DOUBLE DOWN',
      type: 'Perk',
      image: 'Ringo-P',
      text: [
        "Ringo's next basic attack after killing anything will be a critical strike.",
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Ringo-A-Achilles-Shot.mp4',
      name: 'ACHILLES SHOT',
      type: 'A ABILITY',
      image: 'Ringo-A',
      text: [
        "Ringo fires a trick shot at his target's heel (or whatever lower extremity exists), slowing the target and dealing damage.",
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['9s', '8.5s', '8s', '7.5s', '7s'],
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
          amount: ['80', '125', '170', '215', '350'],
          cr: '125%',
          wr: ' ',
        },
        {
          name: 'Slow',
          amount: ['30%', '35%', '40%', '45%', '50%'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Slow Duration',
          amount: ['1.5s', '1.5s', '1.5s', '1.5s', '2.5s'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Ringo-B-Twirling-Silver.mp4',
      name: 'TWIRLING SILVER',
      type: 'B ABILITY',
      image: 'Ringo-B',
      text: [
        'Ringo slings bullets at his target in a mad flurry, dramatically increasing his attack speed and move speed for a duration.',
        "• Activating this ability resets Ringo's basic-attack cooldown.",
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['8s', '8s', '8s', '8s', '8s'],
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
          name: 'Bonus Damage',
          amount: ['5', '5', '5', '5', '5'],
          cr: '80%',
          wr: ' ',
        },
        {
          name: 'Duration',
          amount: ['4s', '4s', '4s', '4s', '4s'],
          cr: '15%',
          wr: ' ',
        },
        {
          name: 'Attack Speed',
          amount: ['30%', '40%', '50%', '60%', '80%'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Speed Boost',
          amount: ['0.55', '0.5', '0.5', '0.5', '0.8'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Ringo-C-Hellfire-Brew.mp4',
      name: 'HELLFIRE BREW',
      type: 'ULTIMATE',
      image: 'Ringo-C',
      text: [
        'Ringo takes a long swig from his gourd, then spits out a scorching fireball at his target. The explosion deals splash damage on impact and sets the target on fire, burning it & nearby enemies for 4s.',
        '• The fire pierces all shield on impact.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['90s', '80s', '70s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['100', '115', '130'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['250', '400', '550'],
          cr: '75%',
          wr: ' ',
        },
        {
          name: 'Burn Damage',
          amount: ['55', '90', '125'],
          cr: '40%',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Long Shot',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Achilles Shot (A) has 4 bonus range.',
        '• Damage 115% (+3%)',
        '• Cooldown 135% (-2%)',
      ],
      image: 'Ringo_Rare',
    },
    {
      name: 'Bullet Split',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Twirling Silver (B) causes Ringo’s basic attacks to fire a secondary shot at a nearby target.',
        '• Damage 87.5% (+2.5%)',
        '• Cooldown 90% (-3%)',
      ],
      image: 'Ringo_Epic',
    },
    {
      name: 'Spiked Brew',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Hellfire Brew (Ult) bounces to a nearby enemy hero upon impact.',
        '• Damage 70% (+15%)',
        '• Cooldown 70% (-7.5%)',
        '• Bounce Range 8.0',
      ],
      image: 'Ringo_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Shogun Nomad Ringo',
      type: 'Rare',
      image: 'Ringo_Shogun_Nomad',
    },
    {
      color: '#c78cff',
      name: 'Shogun Wrath Ringo',
      type: 'Epic',
      image: 'Ringo_Shogun_Wrath',
    },
    {
      color: '#FF9000',
      name: 'Shogun Master Ringo',
      type: 'Legendary',
      image: 'Ringo_Shogun_Master',
    },
    {
      color: '#6393F9',
      name: 'Vaquero Ringo',
      type: 'Rare',
      image: 'Ringo_Vaquero',
    },
    {
      color: 'red',
      name: 'Bakuto Ringo',
      type: 'Special Edition',
      image: 'Ringo_Bakuto',
      price: '150',
      opals: true,
    },
    {
      name: 'Corsair Ringo',
      type: 'Legendary',
      image: 'Ringo_Corsair',
    },
  ],
}
