export const frontmatter = {
  name: 'Reim',
  type: ['JUNGLE', 'MAGE'],
  role: ['JUNGLE'],
  path: '/Reim',
  description: 'Resilient ice mage who dominates close-quarter battles.',
  spotlight: 'Ur-cD6ibo00',
  stats: [
    { name: 'HEALTH', value: '746 - 2499', color: '#4eec8b' },
    /*{ name: 'H. REGEN', value: '(+)', color: '#4eec8b' }, */
    { name: 'ENERGY', value: '220 - 462', color: '#5bbcff' },
     /* { name: 'ENG REGEN', value: '(+)', color: '#5bbcff' }, */
    { name: 'WP DAMAGE', value: '80 - 153', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '1.9', color: '#e19efb' },
    { name: 'MOVE SPD', value: '3.9', color: '#e19efb' },
  ],
  model: [{ image: 'Reimblurred' }, { tmodel: 'Reim' }],
  skills: [
    {
      name: 'FROSTGUARD',
      type: 'Perk',
      image: 'Reim-P',
      text: [
        "Reim's basic attacks deal 50-160 (level 1-12) (+180% crystal power) damage over 4s and slow targets for 0.6s.",
        'Reim gains fortified health for 2.5s equal to 15% (2.5% against non-heroes) of damage dealt.',
        "• Fortified health is capped at 20% of Reim's maximum health.",
      ],
    },
    {
      name: 'WINTER SPIRE',
      type: 'A ABILITY',
      image: 'Reim-A',
      text: [
        'Reim summons a spire of ice at a nearby location, dealing crystal damage to surrounding enemies. After 0.5s, the spire shatters, dealing heavy crystal damage.',
        '• Deals less damage to minions.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['4s', '3.5s', '3s', '2.5s', '2s'],
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
          name: 'Impact Damage',
          amount: ['60', '100', '140', '180', '220'],
          cr: '80%',
          wr: ' ',
        },
        {
          name: 'Burst Damage',
          amount: ['80', '140', '200', '260', '320'],
          cr: '160%',
          wr: ' ',
        },
        {
          name: 'Range',
          amount: ['6', '6', '6', '6', '8'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'CHILL WINDS',
      type: 'B ABILITY',
      image: 'Reim-B',
      text: [
        'Reim deals a burst of crystal damage to all surrounding enemies, rooting enemies who are chilled. A rooted enemy cannot move or dash, but the enemy can still attack.',
        '• Deals 50 % less damage to minions.',
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
          amount: ['60', '65', '70', '75', '80'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['60', '100', '140', '180', '220'],
          cr: '60%',
          wr: ' ',
        },
        {
          name: 'Root Duration',
          amount: ['1s', '1s', '1s', '1s', '1.5s'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'VALKYRIE',
      type: 'ULTIMATE',
      image: 'Reim-C',
      text: [
        'Reim summons an ancient Valkyrie, devastating enemies in the area and applying a heavy decaying slow.',
        '• Enemies near center are also stunned and take greater damage.',
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
          amount: ['100', '125', '150'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage at Center',
          amount: ['300', '450', '600'],
          cr: '180%',
          wr: ' ',
        },
        {
          name: 'Damage at Edge',
          amount: ['50%', '50%', '50%'],
          cr: '90%',
          wr: ' ',
        },
        {
          name: 'Center Slow Duration',
          amount: ['4s', '5s', '6s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Edge Slow Duration',
          amount: ['2s', '3s', '4s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Slow',
          amount: ['80%', '80%', '80%'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Stun Duration',
          amount: ['0.9s', '1.2s', '1.5s'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Creeping Cold',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Winter Spire (A) deals damage to all enemies it passes through.',
        '• Impact to Travel Damage 35% (+2.5%)',
      ],
      image: 'Reim_Rare',
    },
    {
      name: 'Long Winter',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Fortified Health generated by Reim lasts 30s longer. Reim passively gains crystal power.',
        '• Passive Crystal Power 15% (+2.5%)',
      ],
      image: 'Reim_Epic',
    },
    {
      name: 'Revenant',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Chill Winds (B) prevents Reim from being slowed and grants him a barrier for 2s.',
        '• Max Health to Barrier 20% (+7.5%)',
        '• Barrier Duration 2s',
      ],
      image: 'Reim_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Ice Wind Reim',
      type: 'Rare',
      image: 'Reim_Ice_Wind',
    },
    {
      color: '#c78cff',
      name: 'Valkyrie Reim',
      type: 'Epic',
      image: 'Reim_Valkyrie',
    },
    {
      color: '#FF9000',
      name: 'North Hammer Reim',
      type: 'Legendary',
      image: 'Reim_North_Hammer',
    },
    {
      color: '#6393F9',
      name: 'Deathless Reim',
      type: 'Rare',
      image: 'Reim_Deathless',
    },
    {
      color: 'red',
      name: 'Santa Reim',
      type: 'Special Edition',
      image: 'Reim_Santa',
      price: '150',
      opals: true,
    },
  ],
}
