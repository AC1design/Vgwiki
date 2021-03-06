export const frontmatter = {
  name: 'Yates',
  type: ['CAPTAIN', 'PROTECTOR'],
  role: ['CAPTAIN'],
  path: '/Yates',
  description:
    'Battelfield commander who grabs enemies and has a global presence.',
  spotlight: 'K6kHZW3Vq2g',
  stats: [
    { name: 'HEALTH', value: '857 - 2672', color: '#4eec8b' },
    /*{ name: 'H. REGEN', value: '(+)', color: '#4eec8b' }, */
    { name: 'ENERGY', value: '174 - 471', color: '#5bbcff' },
     /* { name: 'ENG REGEN', value: '(+)', color: '#5bbcff' }, */
    { name: 'WP DAMAGE', value: '82 - 172', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '35 - 100', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 75', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '3.4', color: '#e19efb' },
    { name: 'MOVE SPD', value: '3.7', color: '#e19efb' },
  ],
  model: [{ image: 'Yatesblurred' }, { tmodel: 'Yates' }],
  skills: [
    {
      name: 'DEVASTATION FLAIL',
      type: 'Perk',
      image: 'Yates-P',
      text: [
        'Yates can combo up to three basic attacks within a short time of each other for increasingly powerful effects.',
        'Second Hit: Bonus damage and gain a small movespeed boost.',
        'Third Hit: Bonus damage and gain a large movespeed boost.',
      ],
      video: 'Yates-A',
      stats: [],
    },
    {
      name: 'WOLF’S MAW',
      type: 'A ABILITY',
      image: 'Yates-A',
      text: [
        'Yates extends his flail forward, pulling in the first enemy hit.',
      ],
      video: 'Yates-A',
      stats: [
        {
          name: 'Cooldown',
          amount: ['18s', '17s', '16s', '15s', '12s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['80', '80', '80', '80', '80'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['165', '255', '345', '435', '525'],
          cr: '125%',
          wr: ' ',
        },
      ],
    },
    {
      name: 'OVERWHELM',
      type: 'B ABILITY',
      image: 'Yates-B',
      text: [
        'Yates gathers energy for 1.5s before releasing a shockwave around himself, stunning affected enemies.',
      ],
      video: 'Yates-B',
      stats: [
        {
          name: 'Cooldown',
          amount: ['16s', '15s', '14s', '13s', '11s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['60', '65', '70', '75', '80'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['80', '160', '240', '320', '400'],
          cr: '75%',
          wr: ' ',
        },
        {
          name: 'Stun Duration',
          amount: ['0.8s', '0.8s', '0.8s', '0.8s', '1s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Bonus Move Speed',
          amount: ['1.2', '1.2', '1.2', '1.2', '1.8'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'IRON MANDATE',
      type: 'ULTIMATE',
      image: 'Yates-C',
      text: [
        'Yates leaps to the chosen location, dealing damage and slowing enemies while granting allies a barrier.',
        'Overwhelm will not disperse until Yates lands.',
        'Note: This is a global ability which means it can be casted anywhere in the map',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['120s', '105s', '90s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['80', '90', '100'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['350', '525', '700'],
          cr: '150%',
          wr: ' ',
        },
        {
          name: 'Slow Strength',
          amount: ['30%', '40%', '50%'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Slow Duration',
          amount: ['3s', '3s', '3s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Barrier Strength',
          amount: ['250', '375', '500'],
          cr: '125%',
          wr: ' ',
        },
        {
          name: 'Barrier Duration',
          amount: ['3s', '3s', '3s'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Extended Hooks',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Wolf’s Maw (A) has increased range.',
        '• Cooldown 110% (-2%)',
        '• Damage 75% (+5%)',
        '• Bonus Range 2.5 (+0.4)',
      ],
      image: 'Yates_Rare',
    },
    {
      name: 'Whiplash',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Devastation Flail (Perk) third hit deals greatly increased damage.',
        '• Trap Limit 3',
        '• Damage 120%',
        '• Passive Attack Speed +0%',
        '• Bonus Range 6',
      ],
      image: 'Yates_Epic',
    },
    {
      name: 'Rapid Response',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Iron Mandate (Ult) completes much more quickly.',
        '• Cooldown 60%',
        '• Damage 120%',
        '• Barrier 140%',
      ],
      image: 'Yates_Legendary',
    },
  ],
  skins: [
    {
      name: 'Crimson Wolf Yates',
      color: '#6393F9',
      type: 'Rare',
      image: 'Yates_CrimsonWolf',
    },
  ],
}
