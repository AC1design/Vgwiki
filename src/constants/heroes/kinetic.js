export const frontmatter = {
  name: 'Kinetic',
  type: ['LANE', 'SNIPER'],
  role: ['LANE'],
  path: '/Kinetic',
  description: 'Nimble duelist weilding a powerful pulse cannon',
  wallpaper: [
    {
      name: 'Kinetic',
      link: 'https://imgur.com/a/KwZTjU3'
    }
  ],
  spotlight: 'I9A1w1OIIq4',
  stats: [
    { name: 'HEALTH', value: '721 - 2019', color: '#4eec8b' },
    { name: 'H. REGEN', value: '3.81 - 6.78', color: '#4eec8b' },
    { name: 'ENERGY', value: '169 - 389', color: '#5bbcff' },
    { name: 'ENG REGEN', value: '3.51 - 6.04', color: '#5bbcff' },
    { name: 'WP DAMAGE', value: '64 - 97', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '6.0', color: '#e19efb' },
    { name: 'MOVE SPD', value: '3.8', color: '#e19efb' },
  ],
  model: [{ image: 'Kineticblurred' }, { tmodel: 'Kinetic' }],
  skills: [
    {
      video: 'Kinetic-P',
      name: 'TRACER SHOTS',
      type: 'Perk',
      image: 'Kinetic-P',
      text: [
        'Landing Plasma Driver grants Kinetic a stack of Tracer Shots up to 4 stacks.',
        'Tracer Shots: Kinetic fires a tracer at her target.',
        'Tracer Shots - Stack Duration: 8.0s',
        '• Tracer Damage: 4-15 (Level 1-12) (+6% weapon power)',
      ],
    },
    {
      video: 'Kinetic-A',
      name: 'PLASMA DRIVER',
      type: 'A ABILITY',
      image: 'Kinetic-A',
      text: [
        'Kinetic unleashes a burst of energy, damaging the first enemy struck.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['3s', '2.8s', '2.6s', '2.4s', '2s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['15', '20', '25', '30', '35'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['60', '100', '140', '180', '260'],
          cr: '140%',
          wr: '80%',
        },
      ],
    },
    {
      video: 'Kinetic-B',
      name: 'OVERWHELM',
      type: 'B ABILITY',
      image: 'Kinetic-B',
      text: [
        'Kinetic dashes and temporarily becomes Charged for 3s.',
        "Charged: Kinetic's next Plasma Driver deals more damage, has increased range, and slows her target.",
        "• Overdrive: Kinetic's next Plasma Driver briefly stuns her target.",
        "• Refreshes Plasma Driver's cooldown",
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['10s', '18s', '16s', '14s', '12s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['50', '55', '60', '65', '70'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Bonus Damage',
          amount: ['30%', '35%', '40%', '45%', '50%'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Slow Strength',
          amount: ['30%', '35%', '40%', '45%', '50%'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Slow Duration',
          amount: ['1s', '1s', '1s', '1s', '1s'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      video: 'Kinetic-C',
      name: 'CHARGED PULSE',
      type: 'ULTIMATE',
      image: 'Kinetic-C',
      text: [
        'Kinetic charges up a powerful blast and fires it at her target.',
        '• Consumes all stacks of Tracer Shots to deal 25% bonus damage per stack',
        '• Can be blocked by enemy heroes, structures, and jungle bosses.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['80s', '70s', '60s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['100', '100', '100'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['250', '400', '550'],
          cr: '120%',
          wr: '120%',
        },
        {
          name: 'Range',
          amount: ['20', '20', '20'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Pain Tracers',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Tracer Shots (Perk) deals increased damage. Kinetic passively gains attack speed.',
        '• Attack Speed 30% (+2%)',
        '• Damage 104% (+4%)',
      ],
      image: 'Kinetic_Rare',
    },
    {
      name: 'Plasma Overdrive',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Plasma Driver (A) fires two additional bursts.',
        '• Damage 60% (+5%)',
        '• Range -2',
      ],
      image: 'Kinetic_Epic',
    },
    {
      name: 'Max Kinetic',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Damaging enemies with Plasma Driver (A) reduces Inertial Dash’s (B) cooldown.',
        '• Damage 30% (+20%)',
        '• Cooldown 150%',
      ],
      image: 'Kinetic_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Enforcer Kinetic',
      type: 'Rare',
      image: 'Kinetic_Enforcer',
    },
    {
      color: '',
      name: 'Kinetic Valkyrie',
      type: 'Epic',
      image: 'Kinetic_Valkyrie',
    },
  ],
}
