export const frontmatter = {
  name: 'Reza',
  type: ['JUNGLE', 'MAGE'],
  role: ['JUNGLE'],
  path: '/Reza',
  description: 'A fast, devastating fire mage with a demon netherform.',
  spotlight: 'MsCucm_7QXU',
  stats: [
    { name: 'HEALTH', value: '718 - 2306', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '3.82 - 7.23', color: '#4eec8b' },
    { name: 'ENERGY', value: '380 - 732', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: '2.53 - 4.84', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '84 - 154', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 125%', color: '#f48596' },
    { name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '3', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '3.9', color: '#e19efb' },
  ],
  model: [{ image: 'Ozoblurred' }, { tmodel: 'Ozo' }],
  skills: [
    {
      name: 'FIRESTARTER',
      type: 'Perk',
      image: 'Reza-P',
      text: [
        'Scorcher and Netherform Detonator apply Firestarter to enemy targets.',
        "• Reza's basic attacks consume Firestarter, dealing crystal damage.",
        '• Crystal Damage: 45-100 (level 1-12) (+250% crystal power)',
      ],
    },
    {
      name: 'SCORCHER',
      type: 'A ABILITY',
      image: 'Reza-A',
      text: [
        'Reza smashes the ground, creating a fiery shockwave in front of him. This deals damage to anything it passes through and collides with the first enemy hero or jungle monster hit.',
        '• Scorcher applies Firestarter on impact.',
        '• Deals less damage to minions.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['5s', '4.5s', '4s', '3.5s', '3s'],
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
          amount: ['60', '95', '130', '165', '200'],
          cr: '40%',
          wr: ' ',
        },
        {
          name: 'Range',
          amount: ['7.5', '7.5', '7.5', '7.5', '9.5'],
          cr: '15%',
          wr: ' ',
        },
      ],
    },
    {
      name: 'TROUBLEMAKER',
      type: 'B ABILITY',
      image: 'Reza-B',
      text: [
        'Reza dashes to the target location, dealing crystal damage to enemies he passes through.',
        "• Reza's next basic attack deals bonus crystal damage.",
        '• This ability has 2 charges.',
      ],
      stats: [
        {
          name: 'Charge Time',
          amount: ['15s', '14s', '13s', '12s', '10s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['60', '75', '90', '105', '120'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['80', '110', '140', '170', '200'],
          cr: '40%',
          wr: ' ',
        },
        {
          name: 'Cooldown',
          amount: ['0.5s', '0.5s', '0.5s', '0.5s', '0.2s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Bonus Damage',
          amount: ['20', '40', '60', '80', '100'],
          cr: '20%',
          wr: ' ',
        },
      ],
    },
    {
      name: 'NETHERFORM DETONATOR',
      type: 'ULTIMATE',
      image: 'Reza-C',
      text: [
        'Reza vanishes removing from himself any negative movement-impairing effects, then reappears at the target location in empowered demon form.',
        '• Upon reappearing, he unleashes a blazing explosion, damaging enemies and consuming Firestarter within the target radius.',
        '• Reza then applies Firestarter to all enemies nearby.',
        '• Each basic attack now applies Firestarter on enemies without Firestarter on them.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['90s', '70s', '50s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['150', '175', '200'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['200', '300', '400'],
          cr: '80%',
          wr: ' ',
        },
        {
          name: 'Duration',
          amount: ['6s', '6s', '6s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Fortified Health',
          amount: ['0', '0', '0'],
          cr: '150%',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Burning Barrier',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Troublemaker (B) grants Reza a barrier for a short duration.',
        '• Barrier 7.5% (+7.5%)',
      ],
      image: 'Reza_Rare',
    },
    {
      name: 'Firemaker',
      type: 'Epic',
      color: '#7A02EA',
      text: [
        'Troublemaker (B) applies Firestarter (Perk) to enemy heroes he passes through.',
        '• Damage 100% (+5%)',
      ],
      image: 'Reza_Epic',
    },
    {
      name: 'Nether Rage',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Netherform Detonator (Ult) grants Reza bonus attack speed and lasts longer.',
        '• Passive Attack Speed +15% (+5%)',
        '• Bonus Duration 2s (+1s)',
      ],
      image: 'Reza_Legendary',
    },
  ],
  skins: [
    {
      color: '#FF9000',
      name: 'Netherknight Reza',
      type: 'Legendary',
      image: 'Reza_Netherknight',
    },
    {
      color: 'red',
      name: 'Red Lantern Reza',
      type: 'Special Edition',
      image: 'Reza_Red_Lantern',
      price: '300',
      opals: true,
    },
    {
      color: 'red',
      name: 'dAv11d Reza',
      type: 'iOS Esclusive',
      image: 'Reza_dAv11d',
    },
  ],
}
