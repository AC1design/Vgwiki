export const frontmatter = {
  name: 'Glaive',
  type: ['JUNGLE', 'WARRIOR'],
  role: ['JUNGLE'],
  path: '/Glaive',
  description: 'Brutal axe warrior who can knock enemies out of position.',
  spotlight: 'htECezLaZRI',
  stats: [
    { name: 'HEALTH', value: '834 - 2503', color: '#4eec8b' },
    { name: 'H. REGEN', value: '2.47 - 6.21', color: '#4eec8b' },
    { name: 'ENERGY', value: '275 - 440', color: '#5bbcff' },
    { name: 'ENG REGEN', value: '1.47 - 2.9', color: '#5bbcff' },
    { name: 'WP DAMAGE', value: '70 - 156', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 122%', color: '#f48596' },
    { name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '2.8', color: '#e19efb' },
    { name: 'MOVE SPD', value: '3.9', color: '#e19efb' },
  ],
  model: [{ image: 'Glaiveblurred' }, { tmodel: 'Glaive' }],
  skills: [
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Glaive-P-Hunt-the-Weak.mp4',
      name: 'HUNT THE WEAK',
      type: 'Perk',
      image: 'Glaive-P',
      text: [
        "Glaive's critical strikes cleave in a 4 metres cone in front of him.",
        '• Cleave deals half damage to minions.',
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Glaive-A-Afterburn.mp4',
      name: 'AFTERBURN',
      type: 'A ABILITY',
      image: 'Glaive-A',
      text: [
        'Glaive rockets in the target direction, damaging all enemies along the way. His next basic attack is replaced by a frightening blast that knocks his target back 5.5 meters and briefly stuns them.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['24s', '22s', '20s', '18s', '14s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['110', '120', '130', '140', '150'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['100', '150', '200', '250', '300'],
          cr: '130%',
          wr: ' ',
        },
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Glaive-B-Twisted-Stroke.mp4',
      name: 'TWISTED STROKE',
      type: 'B ABILITY',
      image: 'Glaive-B',
      text: [
        'Instantly executes a critical strike.',
        '• This ability deals weapon damage, but it can deal bonus crystal damage if you have any crystal power.',
        '• Triggers basic-attack effects.',
        '• Passive: Increases critical-strike chance and AOE-cleave damage of basic attacks.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['10s', '9s', '8s', '7s', '6s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['20', '25', '30', '35', '40'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['10', '20', '30', '40', '50'],
          cr: '120%',
          wr: '100%',
        },
        {
          name: 'Cleave Damage',
          amount: ['30%', '35%', '40%', '45%', '65%'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Crit Chance',
          amount: ['10%', '15%', '20%', '25%', '30%'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Glaive-C-Bloodsong.mp4',
      name: 'BLOODSONG',
      type: 'ULTIMATE',
      image: 'Glaive-C',
      text: [
        "Swing Glaive's axe in a 5.4-meter circle, dealing massive area damage that increases with the number of Bloodsong stacks used. This removes all stacks.",
        '• Passive: Glaive generates Bloodsong stacks from basic attacking or from receiving basic attacks (max 20 stacks).',
        '• Each stack grants Glaive bonus lifesteal.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['16s', '16s', '16s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['20', '25', '30'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['100', '200', '300'],
          cr: '110%',
          wr: ' ',
        },
        {
          name: 'Damage Stack',
          amount: ['15', '20', '25'],
          cr: '2%',
          wr: ' ',
        },
        {
          name: 'Lifesteal/Stack',
          amount: ['1.2', '1.2', '1.2'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Violent Afterburn',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Using Afterburn (A) to punt a target will deal a portion of Afterburn’s damage and stun all enemies along its path.',
        'Stun Duration on Collision 1.0s',
        '• Damage 70% (+2%)',
        '• Cooldown 95% (-2.0%)',
      ],
      image: 'Glaive_Rare',
    },
    {
      name: 'Stunning Bloodsong',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Bloodsong (Ult) stuns enemies caught by Glaive’s axe.',
        '• Cooldown 80% (-5%)',
        '• Stun Duration 0.75s',
        '• Damage 40% (+5%)',
      ],
      image: 'Glaive_Epic',
    },
    {
      name: 'Twisted Pursuit',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Twisted Stroke (B) has 5 increased range and causes Glaive to dash to his target.',
        '• Cooldown 70% (-7.5%)',
        '• Damage 90% (+7.5%)',
      ],
      image: 'Glaive_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Prehistoric Glaive',
      type: 'Rare',
      image: 'Glaive_Prehistoric_I_R',
    },
    {
      color: '#c78cff',
      name: 'Trophy Hunter Glaive',
      type: 'Epic',
      image: 'Glaive_Prehistoric_II_E',
    },
    {
      color: '#FF9000',
      name: 'Ice Age Glaive',
      type: 'Legendary',
      image: 'Glaive_Prehistoric_III_L',
    },
    {
      color: '#c78cff',
      name: 'Sorrowblade Glaive',
      type: 'Epic',
      image: 'Glaive_Sorrowblade_E',
    },
    {
      color: '#c78cff',
      name: 'King Glaive',
      type: 'Epic',
      image: 'Glaive_King_Epic',
    },
    {
      color: '#FF9000',
      name: 'Rainbow Glaive',
      type: 'Legendary',
      image: 'Glaive_Rainbow',
    },
  ],
}
