export const frontmatter = {
  name: 'Varya',
  type: ['LANE', 'MAGE'],
  role: ['LANE'],
  description:
    'Shocking valkyrie who chains massive damage across enemy teams.',
  spotlight: 'dMBPEcWHgek',
  stats: [
    { name: 'HEALTH', value: '642 - 2127', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '2.81 - 6.22', color: '#4eec8b' },
    { name: 'ENERGY', value: '950 - 1500', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: '36 - 64.6', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '-', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 115%', color: '#f48596' },
    { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '6.2', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '3.2', color: '#e19efb' },
  ],
  model: [{ image: 'Varyablurred' }, { tmodel: 'Varya' }],
  skills: [
    {
      name: 'CHAIN LIGHTNING',
      type: 'Perk',
      image: 'Varya-P',
      text: [
        "Varya's attacks deal 70-114 (level 1-12) (+25% Crystal Power)(+100% Weapon Power) crystal damage. If Varya holds her ground after attacking, she will consume 170 energy to striker her target again and Chain Lightning up to 3 additional targets.",
        '• Chain Lightning: Deals 37-125 (level 1-12) (+50% Crystal Power) damage to each target.',
      ],
      stats: [],
    },
    {
      name: 'STORMFORGED SPEAR',
      type: 'A ABILITY',
      image: 'Varya-A',
      text: [
        'Varya throws a spear at lightning speed, striking the first enemy in its path. This deals a burst of damage to the target and chains additional damage to nearby targets.',
        '• When cast during or after Arc Recursion, the spear is thrown more quickly.',
        '• Number or additional targets hit is equal to her Chain Lighting attack.',
        '• The initial spear does not impact on lane minions.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['7s', '6.5s', '6s', '5.5s', '4.5s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['475', '475', '475', '475', '375'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Impact Damage',
          amount: ['70', '110', '150', '190', '230'],
          cr: '150%',
          wr: ' ',
        },
        {
          name: 'Chain Lighting Damage',
          amount: ['60', '95', '130', '165', '200'],
          cr: '130%',
          wr: ' ',
        },
        {
          name: 'Range',
          amount: ['12', '12', '12', '12', '12'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'ARC RECURSION',
      type: 'B ABILITY',
      image: 'Varya-B',
      text: [
        'After gathering power for 0.9s, Varya’s next two move commands will instantly dash in the chosen direction, striking the 3 nearest enemies at the end of each dash. For each enemy struck, Varya recovers 5% of her energy and gains a barrier equal to 3% of her health (bonuses doubled on heroes).',
        '• Overdrive: Varya moves further with each dash.',
        '• Varya can dash at any time, but will only dash once if she has not fully charged.',
        '• Varya can activate Stormforged Spear at any time during this ability. Any remaining dashes will trigger after the spear is thrown.',
        '• Deals less damage to minions.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['25s', '23s', '21s', '19s', '15s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['200', '200', '200', '200', '200'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['40', '70', '100', '130', '190'],
          cr: '60%',
          wr: ' ',
        },
      ],
    },
    {
      name: "ANVIL'S HAMMER",
      type: 'ULTIMATE',
      image: 'Varya-C',
      text: [
        'After channeling for 2.4s, Varya unleashes the fury of the storm, calling a series of lightning strikes on every enemy hero, regardless of distance. Passively, each rank of the ultimate permanently increases her attack speed and the number enemies her Chain Lightning and Stormforged Spear will hit.',
        '• Lightning strikes target the ground beneath enemy heroes, giving them an opportunity to move out of the way.',
        '• Lightning strikes deal 50% reduced damage to enemies already hit lightning in the same wave.',
        '• Varya can break out of channeling early by activating Stormforged Spear or Arc Recursion. This does not cancel the spell.',
        '• Deals 50% less damage to minions.',
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
          amount: ['400', '450', '600'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['120', '180', '240'],
          cr: '75%',
          wr: ' ',
        },
        {
          name: 'Bonus Chain Lighting',
          amount: ['1', '2', '3'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Bonus Attack Speed',
          amount: ['10%', '25%', '40%'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Long Strike',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Stormforged Spear(A) deals more damage and stuns on impact.',
        '• Bonus Range 0.8 (+0.3)',
        '• Damage 101% (+1%)',
        '• Stun Duration 0.12s (+0.02s)',
      ],
    },
    {
      name: 'Static Barrier',
      type: 'Epic',
      color: '#7A02EA',
      text: [
        'Arc Recursion (B) grants additional barrier and charges up quicker.',
        '• Barrier 130% (+15%)',
      ],
    },
    {
      name: 'Thunderstorm',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        "Anvil's Hammer(Ult) has two additional strikes and no longer has reduced damage for consecutive hits.",
        'Damage 130% (+35%)',
      ],
    },
  ],
  skins: [
    {
      name: 'Winter War Varya',
      color: '#6393F9',
      type: 'Rare',
      image: 'Varya_WinterWar',
    },
  ],
}
