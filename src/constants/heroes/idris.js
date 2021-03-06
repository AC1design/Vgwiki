export const frontmatter = {
  name: 'Idris',
  type: ['JUNGLE', 'ASSASSIN'],
  role: ['JUNGLE'],
  path: '/Idris',
  description: 'Nimble assassin who unlocks melee or ranged fighting styles.',
  spotlight: 'aUL7JieeYUk',
  stats: [
    { name: 'HEALTH', value: '697 - 2257', color: '#4eec8b' },
    { name: 'H. REGEN', value: '4.5 - 4.5', color: '#4eec8b' },
    { name: 'ENERGY', value: ' - ', color: '#5bbcff' },
    { name: 'ENG REGEN', value: ' - ', color: '#5bbcff' },
    { name: 'WP DAMAGE', value: '77 - 161', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '30 - 80', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '2.4', color: '#e19efb' },
    { name: 'MOVE SPD', value: '4.0', color: '#e19efb' },
  ],
  model: [{ image: 'Idrisblurred' }, { tmodel: 'Idris' }],
  skills: [
    {
      name: 'DIVERGENT PATHS',
      type: 'Perk',
      image: 'Idris-P',
      text: [
        'Idris unlocks unique combat styles upon attaining 100 weapon or crystal power',
        '• Melee (Weapon): Idris’s Shroudstep becomes an instantaneous blink. His basic attacks also restore 10 stamina and reduce the cooldowns of his Shroudstep and Shimmer Strike abilities by 1s.',
        '• Ranged (Crystal): Idris gains a 3.8-meter ranged attack with a 85% crystal ratio but only 0% weapon ratio.',
        'Instead of energy, Idris uses stamina to activate his abilities. Purchasing items with energy and energy recharge instead increases his stamina and stamina regeneration.',
        '• Max Stamina: 100 + 10% Max Energy',
        '• Stamina Regen: 7.5 + 50% Energy Regen',
      ],
    },
    {
      name: 'SHROUDSTEP',
      type: 'A ABILITY',
      image: 'Idris-A',
      text: [
        'Idris dashes in the target direction, dealing amplified damage to the next target he attacks within 4s.',
        '• If Idris has not taken damage within the last 7s, Shroudstep grants a 2s barrier.',
        "Barrier lockout duration scales down with 3% of Idris's bonus weapon power.",
        '• The availability of the barrier is displayed beneath his stamina meter.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['13s', '12s', '11s', '10s', '8s'],
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
          name: 'Stamina Cost',
          amount: ['70', '70', '70', '70', '70'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Amplified Damage',
          amount: ['30%', '30%', '30%', '30%', '50%'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Barrier Strength',
          amount: ['90', '130', '170', '210', '250'],
          cr: ' ',
          wr: '120%',
        },
      ],
    },
    {
      name: 'CHAKRAM',
      type: 'B ABILITY',
      image: 'Idris-B',
      text: [
        'Idris throws a chakram that returns to him, damaging enemies each time it passes over them.',
        '• Hitting enemy heroes, miners or Mythic Creatures recovers 10 stamina.',
        '• Idris can use his Shroudstep and Shimmer Strike abilities to temporarily keep his chakrams in the air longer.',
        '• Deals 50% less damage to minions.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['8.5s', '8s', '7.5s', '7s', '5s'],
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
          name: 'Damage',
          amount: ['60', '110', '160', '210', '260'],
          cr: '100%',
          wr: '80%',
        },
        {
          name: 'Projectile Speed',
          amount: ['19', '19', '19', '19', '19'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Stamina Cost',
          amount: ['30', '30', '30', '30', '30'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'SHIMMER STRIKE',
      type: 'ULTIMATE',
      image: 'Idris-C',
      text: [
        'Idris disappears into the target hero becomes invulnerable, untargetable and cleanses movement-impairing effects from himself. While attached, tap to make Idris leap out in desired direction, striking all surrounding enemies with weapon damage as he jumps off.',
        '• If no direction is chosen, Idris will jump toward his original position.',
        '• Can latch onto enemies for 1.2s or allies for 2.8s.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['110s', '90s', '70s'],
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
          name: 'Damage',
          amount: ['150', '250', '350'],
          cr: ' ',
          wr: '125%',
        },
        {
          name: 'Stamina Cost',
          amount: ['0', '0', '0'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Crystal Damage',
          amount: ['250', '425', '600'],
          cr: '150%',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Path of the Seeker',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'All Divergent Paths (Perk) bonuses are unlocked. Idris passively gains weapon and crystal power.',
        '• Passive Weapon Power -45% (+1%)',
        '• Passive Crystal Power -45% (+1%)',
      ],

      image: 'Idris_Rare',
    },
    {
      name: 'Cha-Cha-Chakram',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Chakram (B) throws thress projectiles in a cone.',
        '• Damage 60% (+5%)',
        '• Cooldown 120% (-3.0%)',
      ],
      image: 'Idris_Epic',
    },
    {
      name: 'Shimmer Heal',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Shimmer Strike (Ult) heals Idris and target ally for a percentage of their maximum health.',
        '• Max Health Heal 40% (+7.5%)',
        '• Cooldown 60% (-7.5%)',
      ],
      image: 'Idris_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Elite Force Idris',
      type: 'Rare',
      image: 'Idris_Elite_Force_R',
    },
    {
      color: '#c78cff',
      name: 'Horus Idris',
      type: 'Epic',
      image: 'Idris_Horus_Epic',
    },
    {
      color: 'red',
      name: 'Idris Origins',
      type: 'Special Edition',
      image: 'Idris_Origins',
    },
    {
      color: 'red',
      name: 'Headless Idris',
      type: 'Special Edition',
      image: 'Idris_Headless',
      price: '500',
      opals: true,
    },
    {
      color: '#FF9000',
      name: 'Kurokage Idris',
      type: 'Legendary',
      image: 'Idris_Kurokage',
    },
  ],
}
