export const frontmatter = {
  name: 'SanFeng',
  type: ['JUNGLE', 'WARRIOR'],
  role: ['JUNGLE'],
  path: '/SanFeng',
  description: 'Team healer and damage enhancer with a large area stun.',
  spotlight: 'Pv2r7OiUKJs',
  stats: [
    { name: 'HEALTH', value: '821 - 2176', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '-', color: '#4eec8b' },
    { name: 'ENERGY', value: '0', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: '-', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '86 - 165', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '1.8', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '3.6', color: '#e19efb' },
  ],
  model: [{ image: 'SanFengblurred' }, { tmodel: 'SanFeng' }],
  skills: [
    {
      video: '',
      name: 'IRON SOUL',
      type: 'Perk',
      image: 'SanFeng-P',
      text: [
        'San Feng’s health is fully fortified for 2s time whenever he casts an ability.',
      ],
      stats: [],
    },

    {
      video: 'SanFeng-A',
      name: "TIGER'S BRIDGE",
      type: 'A ABILITY',
      text: [
        'San Feng enters a counter stance and his next basic attack dashes to his target. If an enemy hero deals damage to San Feng during this time, he becomes empowered and may immediately move. While empowered, his dash attack stuns his target and deals 150% increased crystal damage.',
        '• Overdrive: At max rank, San Feng ignores all negative effects for 2s.',
      ],
      image: 'SanFeng-A',
      stats: [
        {
          name: 'Cooldown',
          amount: ['12s', '11s', '10s', '9s', '8s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['0', '0', '0', '0', '0'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['40', '80', '120', '160', '200'],
          cr: '80%',
          wr: '100%',
        },
        {
          name: 'Stun Duration',
          amount: ['1.2s', '1.2s', '1.2s', '1.2s', '1.2s'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      video: 'SanFeng-B',
      name: 'ADIVINE FIST',
      type: 'B ABILITY',
      image: 'SanFeng-B',
      text: [
        'San Feng gathers qi before unleashing a powerful burst of damage.',
        '• Overdrive: At max rank, San Feng ignores all negative effects for 2s.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['11s', '10s', '9s', '8s', '7'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['0', '0', '0', '0', '0'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['250', '400', '550', '700', '850'],
          cr: '60%',
          wr: '40%',
        },
      ],
    },
    {
      video: 'SanFeng-C',
      name: "MASTER'S LESSON",
      type: 'ULTIMATE',
      image: 'SanFeng-C',
      text: [
        'San Feng meditates before pulling in nearby foes, releasing a flurry of strikes around him, dealing damage to and stunning nearby enemies, then sending them flying.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['80s', '60s', '40s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['0', '0', '0', '', ''],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['400', '550', '700', '', ''],
          cr: '60%',
          wr: '40%',
        },
        {
          name: 'Stun Duration',
          amount: ['1.6s', '1.6s', '1.6s'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Master’s Rebuke',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Master’s Lesson (C) flings enemies in the opposite direction.',
        '• Damage 80% (+2%)',
        '• Cooldown 80% (-2%)',
      ],
      image: 'SanFeng_Rare',
    },
    {
      name: 'Divine Flurry',
      type: 'Epic',
      color: '#7A02EA',
      text: [
        'Divine Fist (B) slows enemies hit and has a much shorter cooldown.',
        '• Damage 90% (+3%)',
        '• Cooldown 40% (-4%)',
      ],
      image: 'SanFeng_Epic',
    },
    {
      name: 'Advancing Tiger',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Successfully countering refreshes the cooldown of Tiger’s Bridge (A).',
        '• Damage 80% (+10%)',
        '• Cooldown 100% (-5%)',
      ],
      image: 'SanFeng_Legendary',
    },
  ],
  skins: [],
}
