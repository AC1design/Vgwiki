export const frontmatter = {
  name: 'Silvernail',
  type: ['LANE', 'SNIPER'],
  role: ['LANE'],
  path: '/Silvernail',
  description: 'Grizzled hunter with a powerful crossbow and tripwires.',
  spotlight: 'cC5-fdOn8C8',
  wallpaper: [
    {
      name: 'Silvernail',
      link: 'https://imgur.com/a/06U5cuQ'
    }
  ],
  stats: [
    { name: 'HEALTH', value: '745 - 2175', color: '#4eec8b' },
    { name: 'H. REGEN', value: '-', color: '#4eec8b' },
    { name: 'ENERGY', value: '203 - 610', color: '#5bbcff' },
    { name: 'ENG REGEN', value: '-', color: '#5bbcff' },
    { name: 'WP DAMAGE', value: '74 - 120', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '6.2', color: '#e19efb' },
    { name: 'MOVE SPD', value: '3.8', color: '#e19efb' },
  ],
  model: [{ image: 'Silvernailblurred' }, { tmodel: 'Silvernail' }],
  skills: [
    {
      name: 'DOUBLE SHOT',
      type: 'Perk',
      image: 'Silvernail-P',
      text: [
        'Silvernail loads an extra bolt every 4.0s which can be expended to chain a follow-up basic attack, dealing 35% damage.',
        '• Attack speed reduces load time.',
      ],
      video: 'Silvernail-P',
      stats: [],
    },
    {
      name: 'STAKE',
      type: 'A ABILITY',
      image: 'Silvernail-A',
      text: [
        'Silvernail plants an inactive Stake into the ground. Tripwires form between nearby inactive Stakes, activating the Stakes.',
        'Tripwire: Enemies crossing through will be briefly slowed, silenced, and take damage.',
        '• Silvernail can maintain up to 3 inactive Stakes at a time.',
        '• This ability has 2 charges.',
      ],
      video: 'Silvernail-A',
      stats: [
        {
          name: 'Cooldown',
          amount: ['8s', '8s', '8s', '8s', '7s'],
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
          name: 'Damage/sec',
          amount: ['80', '120', '160', '200', '240'],
          cr: '120%',
          wr: ' ',
        },
        {
          name: 'Duration (Tripwire)',
          amount: ['4s', '4.5s', '5s', '5.5s', '7s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Slow',
          amount: ['40%', '40%', '40%', '40%', '40%'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'CAUSTIC BLESSING',
      type: 'B ABILITY',
      image: 'Silvernail-B',
      text: [
        'Silvernail lobs a flask which damages, burns, and reveals enemies caught in the blast for 4s.',
        '• Refreshes Double Shot upon casting.',
      ],
      video: 'Silvernail-B',
      stats: [
        {
          name: 'Cooldown',
          amount: ['8s', '7.5s', '7s', '6.5s', '5s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['40', '45', '50', '55', '50'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['50', '90', '130', '170', '250'],
          cr: '100%',
          wr: ' ',
        },
        {
          name: 'Damage/sec',
          amount: ['5', '10', '15', '20', '30'],
          cr: '20%',
          wr: ' ',
        },
        {
          name: 'Range',
          amount: ['9', '9', '9', '9', '1'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'REBUKE',
      type: 'ULTIMATE',
      image: 'Silvernail-C',
      text: [
        'Passive: Double Shot damage increased.',
        'Activate: Silvernail fires a piercing bolt, dealing damage to and dragging enemies along with it.',
        '• Enemies who collide with a Tripwire, wall, or structure are stunned and take bonus damage.',
      ],
      video: 'Silvernail-C',
      stats: [
        {
          name: 'Cooldown',
          amount: ['60s', '45s', '30s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['60', '70', '80'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['120', '180', '240'],
          cr: '120%',
          wr: '75%',
        },
        {
          name: 'Bonus Damage',
          amount: ['60', '90', '120'],
          cr: '120%',
          wr: ' ',
        },
        {
          name: 'Stun Duration',
          amount: ['0.6s', '0.8s', '1s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Double Shot Bonus Damage',
          amount: ['20%', '30%', '40%'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Bolt Action',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Double Shot (Perk) fires an extra bolt. Rebuke (Ult) has increased range.',
        '• Cooldown 80% (-2%)',
        '• Damage 50% (+7.5%)',
        '• Bonus Range 1 (+0.2)',
      ],
    },
    {
      name: 'Caustic Bounty',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Caustic Blessing (B) throws two additional flasks.',
        '• Cooldown 90% (-3%)',
        '• Damage 60% (+5%)',
      ],
    },
    {
      name: 'Tri-Wire',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Stake (A) forms a tripwire triangle around target location.',
        '• Damage 70% (+10%)',
        '• Duration 30% (+5%)',
        '• Bonus Range 6.0',
      ],
    },
  ],
  skins: [
    {
      name: 'Tribal Silvernail',
      color: '#6393F9',
      type: 'Rare',
      image: 'Silvernail_Tribal',
    },
    {
      name: 'Medieval Silvernail',
      type: 'Epic',
      image: 'Silvernail_Medieval',
    },
  ],
}
