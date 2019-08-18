export const frontmatter = {
  name: 'Petal',
  type: ['JUNGLE', 'SNIPER'],
  role: ['JUNGLE'],
  path: '/Petal',
  description:
    'Commands 3 pets who tear apart enemies and block incoming skillshots.',
  spotlight: '6RBEJWEcBLs',
  stats: [
    { name: 'HEALTH', value: '636 - 1983', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '2.4 - 5.15', color: '#4eec8b' },
    { name: 'ENERGY', value: '410 - 718', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: '1 - 2.21', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '64 - 134', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '6.2', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '3.8', color: '#e19efb' },
  ],
  model: [{ image: 'Petalblurred' }, { tmodel: 'Petal' }],
  skills: [
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Petal-P-Bramblethorn-Munions.mp4',
      name: 'MUNIONS',
      type: 'Perk',
      image: 'Petal-P',
      text: [
        'A few moments after Petal plants a Bramblebloom Seed, it will automatically sprout into a Munion pet, which will fight alongside Petal up to a maximum of 3 Munions (Movement Speed 6.0).',
        "NOTE: Petal's Munions can't be marked with Miho's Keen Eye.",
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Petal-A-Bramblethorn-Seed.mp4',
      name: 'BRAMBLEBOOM SEEDS',
      type: 'A ABILITY',
      image: 'Petal-A',
      text: [
        'Petal plants a Bramblebloom Seed directly in front of her.',
        '• If an enemy hero steps on a seed, the seed will explode and knock the enemy back.',
        "• Petal's seeds have a small vision radius.",
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['2s', '2s', '2s', '2s', '2s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['40', '40', '40', '40', '40'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Pet Health',
          amount: ['100', '180', '260', '340', '500'],
          cr: '70%',
          wr: ' ',
        },
        {
          name: 'Pet Defense',
          amount: ['30', '40', '50', '60', '80'],
          cr: '10%',
          wr: ' ',
        },
        {
          name: 'Pet Damage',
          amount: ['7', '14', '21', '28', '42'],
          cr: '40%',
          wr: ' ',
        },
        {
          name: 'Seed Health',
          amount: ['50', '80', '110', '140', '200'],
          cr: '15%',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['75', '125', '175', '225', '275'],
          cr: '100%',
          wr: ' ',
        },
      ],
    },
    {
      name: 'TRAMPOLINE!',
      type: 'B ABILITY',
      image: 'Petal-B',
      text: [
        "Petal leaps in the target direction, leaving a Bramblebloom Seed behind at her original location. Using this ability will increase Petal's basic-attack range and amplify her weapon and crystal power for 5s.",
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['15s', '14.5s', '14s', '13.5s', '12s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['80', '85', '90', '95', '100'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Bonus Attack Range',
          amount: ['1.2', '1.2', '1.2', '1.2', '1.2'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Crystal Amp.',
          amount: ['15%', '15%', '15%', '15%', '15%'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Crystal Amp.',
          amount: ['15%', '15%', '15%', '15%', '15%'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      video:
        'https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2018/04/Petal_Ultimate.gif',
      name: 'SPONTANEOUS COMBUSTION',
      type: 'ULTIMATE',
      image: 'Petal-C',
      text: [
        'Petal sends the nearest munion dashing towards the targeted location, exploding. The explosion slows and deals splash damage to nearby enemies while healing nearby allies.',
        '• Detonated pets become Bramblebloom Seeds.',
        '• This ability has 3 charges.',
      ],
      stats: [
        {
          name: 'Charge Time',
          amount: ['30s', '25s', '20s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['40', '40', '40'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['180', '240', '300'],
          cr: '70%',
          wr: ' ',
        },
        {
          name: 'Cooldown',
          amount: ['0.4s', '0.4s', '0.4s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Healing Strength',
          amount: ['75', '125', '175'],
          cr: '75%',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Bouncer',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Trampoline (B) has a 1s cooldown but will cost more energy if used while empowerment is still active.',
        '• Energy Cost 185% (-5%)',
      ],
      image: 'Petal_Rare',
    },
    {
      name: 'Kaboom Seeds',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Brambleboom Seeds (A) explode for massive damage but no longer knock back enemies.',
        '• Damage 180% (+10%)',
      ],
      image: 'Petal_Epic',
    },
    {
      name: 'Explosive Force',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Spontaneous Combustion (Ult) knocks back enemies caught within its explosion.',
        '• Damage 100% (+15%)',
      ],
      image: 'Petal_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Bee Petal',
      type: 'Rare',
      image: 'Petal_Bee_R',
    },
    {
      color: '#c78cff',
      name: 'Beetle Petal',
      type: 'Epic',
      image: 'Petal_Beetle_E',
    },
    {
      color: '#FF9000',
      name: 'Space Bug Petal',
      type: 'Legendary',
      image: 'Petal_SpaceBug_L',
    },
    {
      color: '#FF9000',
      name: 'Tea Party Petal',
      type: 'Legendary',
      image: 'Petal_TeaParty',
    },
    {
      color: 'red',
      name: 'Pumpkin Spice Petal',
      type: 'Special Edition',
      image: 'Petal_Pumpkin_Spice_SE',
      price: '500',
      opals: true,
    },
    {
      color: '#FADA5E',
      name: 'Pumpkin Spice Petal',
      type: 'Limited Edition',
      image: 'Petal_Pumpkin_Spice_LE',
    },
  ],
}
