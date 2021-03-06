export const frontmatter = {
  name: 'Alpha',
  type: ['JUNGLE', 'WARRIOR'],
  role: ['JUNGLE'],
  path: '/Alpha',
  description: 'Killing machine who can resurrect herself.',
  spotlight: 'bZOG2BzWE2o',
  stats: [
    { name: 'HEALTH', value: '761 - 2537', color: '#4eec8b' },
    { name: 'H. REGEN', value: '3.14 - 6.99 ', color: '#4eec8b' },
    { name: 'ENERGY', value: '-', color: '#5bbcff' },
    { name: 'ENG REGEN', value: '-', color: '#5bbcff' },
    { name: 'WP DAMAGE', value: '83 - 124', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '2.1', color: '#e19efb' },
    { name: 'MOVE SPD', value: '4.0', color: '#e19efb' },
  ],
  model: [{ image: 'Alphablurred' }, { tmodel: 'Alpha' }],
  skills: [
    {
      name: 'INFINITE REBOOT',
      type: 'Perk',
      image: 'Alpha-P',
      text: [
        'Instead of dying, Alpha initiates 3.5s reboot sequence. If her reboot health is not destroyed before time runs out, she will return to life.',
        "When alive, Alpha's special energy bar shows the time until Infinite Reboot is available. When rebooting, the bar counts down to when she will revive.",
        '• Reboot health: 600-2600 (level 1-12) (+65% of Bonus Max Energy)',
        '• Reboot Duration: 3.5s',
        '• Alpha revives with her Prime Directive & Core Charge ability cooldowns refreshed.',
      ],
      stats: [],
    },
    {
      name: 'PRIME DIRECTIVE',
      type: 'A ABILITY',
      text: [
        'Alpha scans for enemies along a path. If she scans an enemy, that enemy is slowed and Alpha instantly dashes behind them, dealing damage to the target and all enemies within 4.5 meters (50% damage to minions). This also removes the negative effects of Core Overload (without removing the positive effects), dealing increased damage based on the number of stacks removed.',
      ],
      image: 'Alpha-A',
      stats: [
        {
          name: 'Cooldown',
          amount: ['8s', '7.5s', '7s', '6.5s', '6s'],
          cr: '  ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['80', '100', '120', '140', '160'],
          cr: '180%',
          wr: '60%',
        },
        {
          name: 'Damage/Stack',
          amount: ['40', '60', '80', '100', '120'],
          cr: '30%',
          wr: '40%',
        },
        {
          name: 'Range',
          amount: ['20', '20', '40', '50', '70'],
          cr: '20%',
          wr: ' ',
        },
        {
          name: 'Slow',
          amount: ['40%', '50%', '60%', '70%', '80%'],
          cr: '  ',
          wr: ' ',
        },
        {
          name: 'Slow Duration',
          amount: ['1.5s', '1.5s', '1.5s', '1.5s', '1.5s'],
          cr: '  ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'CORE CHARGE',
      type: 'B ABILITY',
      image: 'Alpha-B',
      text: [
        'Alpha lunges forward, and basic attacks her target. This ability costs 2% of her current health and applies Core Overload to herself, which will increase her damage output.',
        'Core Overload (status effect): Each stack increases health cost of Core Charge by 2%, but also increases the damage. Also causes basic attacks to heal her. This healing is reduced against lane minions. Lasts 8.0s, stacking up to 4 times. Basic attacks refresh the duration.',
        '• Attack has a small AOE, hitting nearby targets for crystal damage.',
        '• Basic attacks reduce the cooldown of this ability.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['6s', '5.5s', '5s', '4.5s', '4s'],
          cr: '  ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['20', '35', '50', '65', '80'],
          cr: '100%',
          wr: '110%',
        },
        {
          name: 'Cooldown Reduction',
          amount: ['1', '1', '1', '1', '1.2'],
          cr: '  ',
          wr: ' ',
        },
        {
          name: 'Heal/Stack',
          amount: ['7', '8', '9', '10', '12'],
          cr: '  ',
          wr: '3%',
        },
        {
          name: 'Bonus Damage/stack',
          amount: ['11%', '11%', '11%', '11%', '15%'],
          cr: '  ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'TERMINATION PROTOCOL',
      type: 'ULTIMATE',
      image: 'Alpha-C',
      text: [
        'Alpha starts her self-destruct sequence, exploding after 3s and then ressurrecting herself with Infinite Reboot.',
        '• At the start of the ability, she gains a burst of move speed that decays rapidly.',
        '• She also gains a large health barrier. If enemies break this barrier, she explodes early.',
        '• This ability can only be activated while Infinite Reboot is available.',
        '• Upgrading this ability reduces the cooldown of Infinite Reboot.',
        '• Barrier: 400-1000 (level 1-12)',
        '• Explosion radions: 4.5 meters',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['85s', '75s', '65s'],
          cr: '  ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['529', '933', '1337'],
          cr: '250%',
          wr: ' ',
        },
      ],
    },
  ],

  talents: [
    {
      name: 'Core Overclock',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Beneficial Core Overload (B) stacks boost attack speed. Alpha passively gains weapon power.',
        '• Attack Speed/Stack +15%',
        '• Passive Weapon Power +5% (+1%)',
      ],
      image: 'Alpha_Rare',
    },
    {
      name: 'Prime Time',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Prime Directive (A) grants Alpha bonus fortified health for every negative Core Overload stack from Core Charge (B) she expends. Longer cooldown.',
        '• Health Fort/Stack 15% (+2.5%)',
        '• Duration 3s',
        '• Cooldown 100% (-3%)',
      ],
      image: 'Alpha_Epic',
    },
    {
      name: 'Acceleration',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Termination Protocol (Ult) has a stronger barrier and grants Alpha increased move speed instead of slowing her. Shorter cooldown.',
        '• Cooldown 80%',
        '• Bonus Move Speed 2',
        '• Barrier 125%',
      ],
      image: 'Alpha_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Broken Doll Alpha',
      type: 'Rare',
      image: 'Alpha_Broken_Doll_I_R',
    },
    {
      color: '#c78cff',
      name: 'Toy Box Alpha',
      type: 'Epic',
      image: 'Alpha_Broken_Doll_II_E',
    },
    {
      color: '#FF9000',
      name: 'Clockwork Heart Alpha',
      type: 'Legendary',
      image: 'Alpha_Broken_Doll_Legendary',
    },
    {
      color: '#6393F9',
      name: 'Heartless Alpha',
      type: 'Rare',
      image: 'Alpha_Heartless_Rare',
    },
    {
      color: '#FADA5E',
      name: 'Contender Alpha',
      type: 'Limited Edition',
      image: 'Alpha_Contender',
    },
  ],
}
