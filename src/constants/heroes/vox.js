export const frontmatter = {
  name: 'Vox',
  type: ['LANE', 'SNIPER'],
  role: ['LANE'],
  path: '/Vox',
  description: 'Agile damage dealer who dashes around the battlefied.',
  spotlight: '5Z2KUYPYXEw',
  stats: [
    { name: 'HEALTH', value: '667 - 2054', color: '#4eec8b' },
    { name: 'H. REGEN', value: '3.55 - 7.4', color: '#4eec8b' },
    { name: 'ENERGY', value: '200 - 464', color: '#5bbcff' },
    { name: 'ENG REGEN', value: '1.33 - 3.09', color: '#5bbcff' },
    { name: 'WP DAMAGE', value: '54 - 109', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '5.8', color: '#e19efb' },
    { name: 'MOVE SPD', value: '3.8', color: '#e19efb' },
  ],
  model: [{ image: 'Voxblurred' }, { tmodel: 'Vox' }],
  skills: [
    {
      name: "JULIA'S SONG",
      type: 'Perk',
      image: 'Vox-P',
      text: [
        "Vox's abilities mark enemies with Resonance. When basic attacking marked enemies, Resonance Bolts will bounce outwards to two nearby enemies dealing bonus crystal damage while refreshing and spreading the Resonance mark.",
        '• Resonance Crystal damage: 20 (+70% of crystal power)',
        '• Resonance bounces deal 50% damage to minions.',
        '• Basic Attacks deal an additional 20-42 (level 1-12) (+40% of crystal power)(+100% of weapon power)',
      ],
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Vox-P-Julias-Song.mp4',
      stats: [],
    },
    {
      name: 'SONIC ZOOM',
      type: 'A ABILITY',
      image: 'Vox-A',
      text: [
        'Vox dashes in the targeted direction, throwing two basic attacks to the nearest enemy marked by Resonance (prioritizing heroes).',
      ],
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Vox-A-Sonic-Zoom.mp4',
      stats: [
        {
          name: 'Cooldown',
          amount: ['7s', '6.5s', '6s', '5.5s', '4s'],
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
          name: 'Basic Attack Damage on Overdrive',
          amount: ['50%', '60%', '70%', '80%', '100%'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'PULSE',
      type: 'B ABILITY',
      image: 'Vox-B',
      text: [
        'Vox emits a sonic pulse that echoes off nearby enemies and applies Resonance. The pulse applies a slow that is significantly stronger near its center.',
        "• Each upgrade to Pulse increases the damage of Vox's bouncing Resonance bolts.",
        '• Overdrive: Resonance bounce range increased by 2.',
      ],
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Vox-B-Pulse.mp4',
      stats: [
        {
          name: 'Cooldown',
          amount: ['8s', '8s', '8s', '8s', '6s'],
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
          name: 'Bonus Damage',
          amount: ['15', '30', '45', '60', '75'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Slow at Center',
          amount: ['15%', '17%', '19%', '21%', '25%'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Slow at Edge',
          amount: ['10%', '12%', '14%', '16%', '20%'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'WAIT FOR IT...',
      type: 'ULTIMATE',
      image: 'Vox-C',
      text: [
        'Vox fires an ultrasonic wave that applies Resonance to enemies in its path. Shortly after, a wide shockwave explodes along the same path, dealing crystal damage and silencing enemies.',
        '• Striking enemy heroes with the shockwave will also cause Resonance Bolts to bounce outward to other enemies.',
      ],
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Vox-C-Wait-for-It....mp4',
      stats: [
        {
          name: 'Cooldown',
          amount: ['70s', '60s', '50s'],
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
          name: 'Impact Damage',
          amount: ['100', '175', '250'],
          cr: '60%',
          wr: ' ',
        },
        {
          name: 'Burst Damage',
          amount: ['200', '350', '500'],
          cr: '120%',
          wr: ' ',
        },
        {
          name: 'Silence Duration',
          amount: ['0.6s', '0.8s', '1s'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Deep Dash',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Sonic Zoom (A) has 3 increased dash range. Vox passively gains attack speed.',
        '• Passive Attack Speed +25% (+1%)',
        '• Cooldown 100% (-2.5%)',
      ],
    },
    {
      name: 'Sound Barrier',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Vox’s basic attacks periodically grant him a health barrier.',
        '• Max Health to Barrier 5% (+2.5%)',
        '• Barrier Duration 4s',
      ],
    },
    {
      name: 'Echo Chamber',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Julia’s Song (Perk) Resonance bolts have an additional bounce.',
        '• Damage 80% (+15%)',
      ],
    },
  ],
  skins: [
    {
      name: 'Sky Captain Vox',
      color: '#6393F9',
      type: 'Rare',
      image: 'Vox_SkyCaptain',
    },
    {
      name: 'Cloud Raider Vox',
      color: '#c78cff',
      type: 'Epic',
      image: 'Vox_CloudRaider',
    },
    {
      name: 'Evolution Vox',
      color: '#FF9000',
      type: 'Legendary',
      image: 'Vox_Evolution',
    },
    {
      name: 'School Days Vox',
      color: '#c78cff',
      type: 'Epic',
      image: 'Vox_SchoolDays',
    },
    {
      name: 'Vox On Ice',
      color: '#FF9000',
      type: 'Legendary',
      image: 'Vox_OnIce',
    },
    {
      name: 'Netherknight Vox',
      color: '#FF9000',
      type: 'Legendary',
      image: 'Vox_Netherknight',
    },
  ],
}
