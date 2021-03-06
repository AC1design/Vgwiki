export const frontmatter = {
  name: 'Rona',
  type: ['JUNGLE', 'WARRIOR'],
  role: ['JUNGLE'],
  path: '/Rona',
  description: 'Durable berserker who excels in the thick of fights.',
  spotlight: 'EYIhMwdQoug',
  stats: [
    { name: 'HEALTH', value: '778 - 2563', color: '#4eec8b' },
    /*{ name: 'H. REGEN', value: '(+)', color: '#4eec8b' }, */
    { name: 'ENERGY', value: ' - ', color: '#5bbcff' },
    /* { name: 'ENG REGEN', value: ' - ', color: '#5bbcff' }, */
    { name: 'WP DAMAGE', value: '77 - 156', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 122%', color: '#f48596' },
    { name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '1.8', color: '#e19efb' },
    { name: 'MOVE SPD', value: '4.0', color: '#e19efb' },
  ],
  model: [{ image: 'Ronablurred' }, { tmodel: 'Rona' }],
  skills: [
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/08/P-Rona-Berserkers-Fury-Large.mp4',
      name: "BERSERKERS' FURY",
      type: 'Perk',
      image: 'Rona-P',
      text: [
        'Rona attacks faster than most heroes, but she deals 90% damage with each attack.',
        "• Rona's abilities use Bloodrage instead of energy, a unique resource that is generated from basic attacks, abilities, and taking damage from enemies.",
        '• Critical strikes and basic attacks against targets afflicted by Mortal Wounds will generate additional Bloodrage.',
        'This caps at 100 and decays when Rona has been out of combat for 5s.',
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/08/A-Rona-Into-the-Fray-Large.mp4',
      name: 'INTO THE FRAY',
      type: 'A ABILITY',
      image: 'Rona-A',
      text: [
        'Rona leaps into battle, gaining Bloodrage for each enemy hero she collides with. After a short delay, the ground ruptures for 3s, dealing damage and slowing enemies who pass over it by 40%.',
        '• Rona is additionally granted fortified health for each enemy hero struck by the rupture.',
        '• Deals less damage to minions.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['12s', '11.5s', '11s', '10.5s', '10s'],
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
          name: 'Impact Damage',
          amount: ['60', '85', '110', '135', '185'],
          cr: '100%',
          wr: ' ',
        },
        {
          name: 'Rupture Damage',
          amount: ['100', '140', '180', '220', '300'],
          cr: '200%',
          wr: ' ',
        },
        {
          name: 'Bloodrage Gain',
          amount: ['25', '25', '25', '25', '35'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Fortified Health',
          amount: ['50', '70', '90', '110', '150'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/08/B-Rona-Foesplitter-Large.mp4',
      name: 'FOESPLITTER',
      type: 'B ABILITY',
      image: 'Rona-B',
      text: [
        'A two-part axe attack that can catch up to - then brutalize - an unsuspecting target.',
        'First activation: Rona lunges at her target, landing an empowered basic attack and granting her increased move speed and Bloodrage.',
        'Second activation: Expend the bonus move speed and all of her Bloodrage to deal 1% bonus damage for each point consumed and apply Mortal Wounds to her target.She is them temporarily granted additional attack speed.',
        "Each of Rona's basic attacks reduce Foesplitter's cooldown by 1s.",
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['14s', '14s', '14s', '14s', '12s'],
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
          name: 'First Attack Damage',
          amount: ['10', '20', '30', '40', '70'],
          cr: '100%',
          wr: '90%',
        },
        {
          name: 'Bloodrage Gain',
          amount: ['5', '10', '15', '20', '25'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Second Attack Damage',
          amount: ['10', '20', '30', '40', '70'],
          cr: '100%',
          wr: '90%',
        },
        {
          name: 'Attack Speed',
          amount: ['15%', '20%', '25%', '30%', '40%'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Duration',
          amount: ['4s', '4s', '4s', '4s', '4s'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/08/C-Rona-Red-Mist-Large.mp4',
      name: 'RED MIST',
      type: 'ULTIMATE',
      image: 'Rona-C',
      text: [
        'Rona drains her Bloodrage and spins in a whirlwind, dealing weapon damage to nearby enemies. While spinning, Rona moves 15% slower and gains fortified health each second.',
        '• Can be cancelled at any time by reactivating it or using another ability.',
        '• Requires at least 25 Bloodrage to activate.',
        '• Deals less damage to minions.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['6s', '6s', '6s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['0', '0', '0'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage/sec',
          amount: ['250', '350', '450'],
          cr: '120%',
          wr: '170%',
        },
        {
          name: 'Bloodrage/sec',
          amount: ['25', '25', '25'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Fortified Health/sec',
          amount: ['50', '100', '150'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'MOAR Rage',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Increases maximum Bloodrage. Rona passively gains weapon power.',
        '• Bonus Alt Energy 60 (+10)',
        '• Passive Weapon Power +5% (+1.5%)',
      ],
      image: 'Rona_Rare',
    },
    {
      name: 'Heroic Brawler',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Basic attacks reduce the cooldown of Into the Fray (A) by 10%. Rona passively gains attack speed.',
        '• Passive Attack Speed +25% (+5%)',
        '• Damage 50% (+7.5%)',
      ],
      image: 'Rona_Epic',
    },
    {
      name: 'Fast Whirlwind',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Red Mist (Ult) grants Rona 1.2s bonus move speed.',
        '• Damage 100%',
        '• Cooldown 125%',
      ],
      image: 'Rona_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Fury Rona',
      type: 'Rare',
      image: 'Rona_Fury',
    },
    {
      color: '#c78cff',
      name: 'Peacekeeper Rona',
      type: 'Epic',
      image: 'Rona_Peacekeeper',
    },
    {
      color: '#FF9000',
      name: 'Churnguard Rona',
      type: 'Legendary',
      image: 'Rona_Churnguard',
    },
    {
      color: '#FF9000',
      name: 'Red Rona',
      type: 'Legendary',
      image: 'Rona_Red',
    },
    {
      color: 'red',
      name: 'Killer Bunny Rona',
      type: 'Special Edition',
      image: 'Rona_Killer_Bunny_SE',
      price: '500',
      opals: true,
    },
    {
      color: '#FADA5E',
      name: 'Killer Bunny Rona',
      type: 'Limited Edition',
      image: 'Rona_Killer_Bunny_LE',
    },
  ],
}
