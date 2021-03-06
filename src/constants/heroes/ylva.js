export const frontmatter = {
  name: 'Ylva',
  type: ['JUNGLE', 'ASSASSIN'],
  role: ['JUNGLE'],
  path: '/Ylva',
  description: 'A huntress that stalks her prey and lays traps for them.',
  spotlight: 'K6kHZW3Vq2g',
  stats: [
    { name: 'HEALTH', value: '703 - 2107', color: '#4eec8b' },
    /*{ name: 'H. REGEN', value: '(+)', color: '#4eec8b' }, */
    { name: 'ENERGY', value: '203 - 610', color: '#5bbcff' },
     /* { name: 'ENG REGEN', value: '(+)', color: '#5bbcff' }, */
    { name: 'WP DAMAGE', value: '70 - 125', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '5.5', color: '#e19efb' },
    { name: 'MOVE SPD', value: '3.9', color: '#e19efb' },
  ],
  skills: [
    {
      name: 'Hunter’s Sense',
      type: 'Perk',
      image: 'Ylva-P',
      text: [
        'Ylva can detect the location and movement direction of enemy heroes through walls and brush, as long as they are moving and within her vision range.',
      ],
      video: 'Ylva-P',
      stats: [],
    },
    {
      name: 'Charge Shot',
      type: 'A ABILITY',
      image: 'Ylva-A',
      text: [
        'Ylva charges her weapon, causing her next basic attack to deal bonus damage based on the time spent charging. After 1.6s it reaches full charge the attack will also stun for 1s. While active, Ylva is slowed by 30%. Reactivate to cancel. Tt is canceled automatically after 6s',
        '• Overdrive: At max rank, the time it takes to reach full charge is reduced.',
      ],
      video: 'Ylva-A',
      stats: [
        {
          name: 'Cooldown',
          amount: ['8s', '7.5s', '7s', '6.5s', '6s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['25', '30', '35', '40', '45'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['0', '0', '0', '0', '0'],
          cr: ' ',
          wr: '100%',
        },
        {
          name: 'Bonus Damage',
          amount: ['60', '120', '180', '240', '360'],
          cr: '100%',
          wr: ' ',
        },
        {
          name: 'Bonus Range',
          amount: ['0', '0', '0', '0', '0'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Stun Duration',
          amount: ['1s', '1s', '1s', '1s', '1s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Charge Time',
          amount: ['1.6s', '1.6s', '1.6s', '1.6s', '1.2s'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'Crimson Fang',
      type: 'B ABILITY',
      image: 'Ylva-B',
      text: [
        'Ylva lunges at her target to deliver a powerful strike that deals 75% more damage to immobilized targets. She then gains additional move and attack speed for 3s',
        '• Overdrive: At max rank, lunge range is increased.',
      ],
      video: 'Ylva-B',
      stats: [
        {
          name: 'Cooldown',
          amount: ['10s', '9.5s', '9s', '8.5s', '8s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['25', '30', '35', '40', '45'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['140', '190', '240', '290', '390'],
          cr: '175%',
          wr: '140%',
        },
        {
          name: 'Range',
          amount: ['5.5', '5.5', '5.5', '5.5', '7.5'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Bonus Move Speed Duration',
          amount: ['3s', '3s', '3s', '3s', '3s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Bonus Attack Speed',
          amount: ['40%', '45%', '50%', '55%', '60%'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Bonus Move Speed',
          amount: ['1.5', '1.5', '1.5', '1.5', '2'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'Blinding Mine',
      type: 'ULTIMATE',
      image: 'Ylva-C',
      text: [
        'Ylva places a mine that arms and stealths after 2s. When an enemy hero touches it, it will explode after 0.7s, causing all enemies within range of 6 to take damage and become rooted. Only 1 trap can exist at once.',
        '• Traps expire after a minute. Basic attacks reduce their remaining duration.',
      ],
      video: 'Ylva-C',
      stats: [
        {
          name: 'Cooldown',
          amount: ['25s', '20s', '15s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['50', '60', '70'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['300', '450', '600'],
          cr: '150%',
          wr: ' ',
        },
        {
          name: 'Trap Limit',
          amount: ['1', '1', '1'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Root Duration',
          amount: ['1.6s', '1.8s', '2s'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'SWIFT SHOT',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Charge Shot (A) reaches full charge faster.',
        '• Charge Time 80% (-3%)',
        '• Cooldown 100% (-2%)',
        '• Damage 100% (+2%)',
      ],
    },
    {
      name: 'MULTY MINE',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Ylva may place up to 3 Blinding Mines (Ult).',
        '• Trap Limit 3',
        '• Cooldown 80% (-3%)',
        '• Damage 75% (-5%)',
        '• Bonus Range 6',
      ],
      image: '',
    },
    {
      name: 'SHATTERED FANG',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Ylva places a Blinding Mine (Ult) at her feet after using Crimson Fang (B). ',
        '• Cooldown 90% (-4%)',
        '• Damage 100% (+3%)',
      ],
      image: '',
    },
  ],
  skins: [
    {
      name: 'Medieval Ylva',
      color: '#6393F9',
      type: 'Rare',
      image: 'Ylva_Medieval',
    },
  ],
}
