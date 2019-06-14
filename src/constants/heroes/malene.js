export const frontmatter = {
  name: 'Malene',
  type: ['LANE', 'MAGE'],
  role: ['LANE'],
  path: '/Malene',
  description: 'Form swapping spellcaster who has the tools for any situation.',
  spotlight: '9H2Xp_HWB8o',
  stats: [
    { name: 'HEALTH', value: '696 - 2148', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '4.75 - 8.05', color: '#4eec8b' },
    { name: 'ENERGY', value: '300 - 685', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: '3.2 - 5.4', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '-', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 122%', color: '#f48596' },
    { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '5.8', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '3.8', color: '#e19efb' },
  ],
  model: [{ image: 'Maleneblurred' }, { tmodel: 'Malene' }],
  skills: [
    {
      name: 'MASKED BALL',
      type: 'Perk',
      image: 'Malene-P',
      text: [
        "Malene's ultimate is available at level 1 and allows her to switch between Light Form and Shadow Form. Additionally, Malene's basic attacks deal crystal damage.",
        '• Basic attack crystal damage: 70-126 (level 1-12) (+60% Crystal Power)(+100% Weapon Power).',
        "• For 6s after switching forms, Malene's next basic attack is empowered.",
      ],
    },
    {
      name: 'LIGHT RIBBONS',
      type: 'A ABILITY (LIGHT FORM)',
      image: 'Malene-A1',
      text: [
        'Malene sends ribbons of light in the target direction, damaging and immobilizing the first enemy hit.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['16s', '15s', '14s', '13s', '12s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['40', '50', '60', '70', '35'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['60', '105', '150', '195', '240'],
          cr: '100%',
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
      name: 'SHADOW TENDRILS',
      type: 'A ABILITY (SHADOW FORM)',
      image: 'Malene-A2',
      text: [
        'Shadow Form - Shadow Tendrils: Malene unleashes three shadow tendrils in the target direction, dealing crystal damage to all enemies along their path.',
        '• Each tendril deals its own instance of damage.',
        '• Deals less damage to minions.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['10s', '9.5s', '9s', '8.5s', '8s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['40', '50', '60', '70', '35'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['30', '60', '90', '120', '150'],
          cr: '60%',
          wr: ' ',
        },
      ],
    },
    {
      name: 'ROYAL AMNESTY',
      type: 'B ABILITY (LIGHT FORM)',
      image: 'Malene-B1',
      text: [
        'Malene instantly imbues herself with light, granting herself a barrier and a burst of movement speed for 3s.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['12s', '12s', '12s', '12s', '12s'],
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
          name: 'Barrier Strength',
          amount: ['75', '120', '165', '210', '300'],
          cr: '60%',
          wr: ' ',
        },
        {
          name: 'Speed Boost',
          amount: ['0.8', '1', '1.2', '1.4', '1.8'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'WICKED ESCAPADE',
      type: 'B ABILITY (SHADOW FORM)',
      image: 'Malene-B2',
      text: [
        'Malene instantly becomes a trail of shadows for 1.5s, becoming invulnerable and slowing enemies she passes through. When this effect ends, enemies near her original location receive a burst of damage.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['20s', '19s', '18s', '17s', '14s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['80', '90', '100', '110', '120'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['80', '160', '240', '320', '480'],
          cr: '70%',
          wr: ' ',
        },
        {
          name: 'Slow',
          amount: ['30%', '35%', '40%', '45%', '50%'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'ENCHANTED TRANSFORMATION',
      type: 'ULTIMATE',
      image: 'Malene-C',
      text: [
        'Malene switches between Light Form and Shadow Form, swapping abilities and gaining an empowerment on her next basic attack based on which form she switches into.',
        '• Shadow Empowerment: Deal bonus damage.',
        '• Light Empowerment: Slows target.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['6s', '5s', '4s', '3s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['0', '0', '0', '0'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['40', '80', '120', '160'],
          cr: '80%',
          wr: ' ',
        },
        {
          name: 'Slow',
          amount: ['25%', '30%', '35%', '40%'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Spiky-Spiky',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Wicked Escapade (Shadow B) will also deal damage where Malene appears.',
        '• Damage 103% (+3%)',
        '• Cooldown 90% (-1%)',
      ],
      image: 'Malene_Rare',
    },
    {
      name: 'Shadow Terror',
      type: 'Epic',
      color: '#7A02EA',
      text: [
        'Shadow Tendrils (Shadow A) will also fear enemies.',
        '• Damage 101% (+1%)',
        '• Duration 0.6s (+0.1s)',
      ],
      image: 'Malene_Epic',
    },
    {
      name: 'Royal Favors',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Royal Amnesty (Light B) will also apply to nearby allies and deal damage around shielded targets upon expiration.',
        '• Barrier 120% (+20%)',
        '• Damage 200 (+150)',
      ],
      image: 'Malene_Legendary',
    },
  ],
  skins: [
    {
      color: 'Red',
      name: 'Trick or Treat Malene',
      type: 'Special Edition',
      image: 'Malene_Trick_or_Treat',
      price: '300',
      opals: true,
    },
  ],
}
