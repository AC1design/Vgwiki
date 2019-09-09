export const frontmatter = {
  name: 'Magnus',
  type: ['LANE', 'MAGE'],
  role: ['LANE'],
  path: '/Magnus',
  description:
    'A powerful arcanist with a penchant for Arcane Magic decimating enemies from afar',
  spotlight: 'g9W8C8hPA2w',
  stats: [
    { name: 'HEALTH', value: '648 - 2065', color: '#4eec8b' },
    /*{ name: 'H. REGEN', value: '(+)', color: '#4eec8b' }, */
    { name: 'ENERGY', value: '380 - 732', color: '#5bbcff' },
     /* { name: 'ENG REGEN', value: '(+)', color: '#5bbcff' }, */
    { name: 'WP DAMAGE', value: '80 - 158', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 125%', color: '#f48596' },
    { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '6', color: '#e19efb' },
    { name: 'MOVE SPD', value: '3.8', color: '#e19efb' },
  ],
  model: [{ image: 'Magnusblurred' }, { tmodel: 'Magnus' }],
  skills: [
    {
      name: 'ARCANE RITE',
      type: 'Perk',
      image: 'Magnus-P',
      text: [
        'Whenever an enemy is hit by any of Magnus’ abilities, they are afflicted with an Arcane Mark for 4s. Magnus’ abilities have bonus effects when hitting enemies afflicted with Arcane Mark.',
        'Additionally, Magnus can basic attack an afflicted target, consuming the Arcane Mark and exploding it for 50-180 (level 1-12) (+100% crystal power) bonus crystal power.',
      ],
    },
    {
      name: 'MYSTIC MISSLE',
      type: 'A ABILITY',
      image: 'Magnus-A',
      text: [
        'Magnus fires a magic missile in the target direction, dealing crystal damage to the first target hit.',
        '• Hitting enemies with Arcane Mark scatters the missile to all other nearby targets.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['6s', '6s', '6s', '6s', '4s'],
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
          amount: ['80', '140', '200', '260', '320'],
          cr: '100%',
          wr: ' ',
        },
        {
          name: 'Damage (Split Missiles)',
          amount: ['60', '105', '150', '195', '240'],
          cr: '80%',
          wr: ' ',
        },
        {
          name: 'Range',
          amount: ['10', '10', '10', '10', '12'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Range (Split Missiles)',
          amount: ['6', '6', '6', '6', '6'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'CHRONO DRIVER',
      type: 'B ABILITY',
      image: 'Magnus-B',
      text: [
        'Magnus sends a disc of time magic in the target direction that returns to him, dealing crystal damage to all targets it passes through.',
        '• Hitting enemies with Arcane Mark briefly stuns them.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['14s', '13s', '12s', '11s', '10s'],
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
          amount: ['40', '70', '100', '130', '160'],
          cr: '40%',
          wr: ' ',
        },
        {
          name: 'Stun Duration',
          amount: ['0.4s', '0.5s', '0.6s', '0.7s', '1s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Range',
          amount: ['10', '10', '10', '10', '10'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'SERAPHIC FLARE',
      type: 'ULTIMATE',
      image: 'Magnus-C',
      text: [
        'Magnus gathers arcane energy in the target direction for 1s, dealing massive damage to all targets in the area afterwards.',
        '• Deals 50% bonus damage to targets with Arcane Mark.',
        '• If an enemy hero dies within 0.3s of getting hit by this ability, then they will explode in Arcane Magic, launching Mystic Missile to all nearby targets.',
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
          name: 'Damage',
          amount: ['250', '375', '500'],
          cr: '120%',
          wr: ' ',
        },
        {
          name: 'Range (Split Missiles)',
          amount: ['6', '6', '6', '6', '6'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'MYSTIC SEER',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Arcane Mark lasts longer and reveals marked targets.',
        '• Bonus Duration 0.4s (+0.4)',
      ],
      image: 'Magnus_Rare',
    },
    {
      name: 'ARCANE ALCHEMIST',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Banishing Kick (B) knocks targets further.',
        '• Passive Attack Speed 12% (+7%)',
      ],
      image: 'Magnus_Epic',
    },
    {
      name: 'INFINITE ARCANA',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Hitting an enemy hero with an ability reduces all ability cooldowns',
        '• Cooldown 10% (+5%)',
      ],
      image: 'Magnus_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Masquerade Magnus',
      type: 'Rare',
      image: 'Magnus_Masquerade',
    },
  ],
}
