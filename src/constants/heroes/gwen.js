export const frontmatter = {
  name: 'Gwen',
  type: ['LANE', 'SNIPER'],
  role: ['LANE'],
  description:
    'Gunslinger with powerful burst damage and ability to shake off disables.',
  spotlight: 'lwv7-7lgE9o',
  stats: [
    { name: 'HEALTH', value: '661 - 2072', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '2.63 - 5.16', color: '#4eec8b' },
    { name: 'ENERGY', value: '175 - 395', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: '1.2 - 2.85', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '68 - 132', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '6.2', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '3.1', color: '#e19efb' },
  ],
  model: [{ image: 'Gwenblurred' }, { tmodel: 'Gwen' }],
  skills: [
    {
      name: 'BOOMSTICK',
      type: 'Perk',
      image: 'Gwen-P',
      text: [
        "After not attacking for 1.4s, Gwen's next basic attack is a Boomstick shot that deals bonus damage.",
        '• Bonus damage: 20-110 (+40% of bonus weapon power)',
        '• Additional attack speed increase the frequency of Boomstick shots.',
      ],
    },
    {
      name: 'BUCKSHOT BONANZA',
      type: 'A ABILITY',
      image: 'Gwen-A',
      text: [
        'Gwen blasts enemies in the target direction, dealing weapon damage to all targets in a cone. Enemies hit by this ability are slowed and revealed for 2s.',
        '• Deals less damage to minions.',
        '• Maximum slow amount: 65%',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['7s', '6.5s', '6s', '5.5s', '4s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['50', '55', '60', '65', '70'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage',
          amount: ['60', '105', '150', '195', '240'],
          cr: '200%',
          wr: '65%',
        },
        {
          name: 'Slow Strenght',
          amount: ['0%', '0%', '0%', '0%', '0%'],
          cr: '',
          wr: '20%',
        },
      ],
    },
    {
      name: 'SKEDADDLE',
      type: 'B ABILITY',
      image: 'Gwen-B',
      text: [
        'Gwen gains a burst of move speed while instantly removing from herself any negative movement-impairing effects.',
        '• Blocks further effects for 0.5s.',
        '• Passive: Gwen gains 0.8 bonus move speed for the entire match. This effect is temporarily disabled for 4s upon taking damage from an enemy hero.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['20s', '18s', '16s', '14s', '10s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['60', '65', '70', '75', '80'],
          cr: '',
          wr: '',
        },
        {
          name: 'Speed Boost',
          amount: ['2.5', '2.8', '3.1', '3.4', '4'],
          cr: '',
          wr: '',
        },
        {
          name: 'Bonus Speed Duration',
          amount: ['2.2s', '2.2s', '2.2s', '2.2s', '2.2s'],
          cr: '',
          wr: '',
        },
      ],
    },
    {
      name: 'ACES HIGH',
      type: 'ULTIMATE',
      image: 'Gwen-C',
      text: [
        'Gwen flings a card in the target direction, stunning and dealing weapon damage the first hero it hits.',
        '• The card damages everything it passes through.',
        '• Deals less damage to minions.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['80s', '65s', '50s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['100', '100', '100'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage',
          amount: ['300', '400', '500'],
          cr: '200%',
          wr: '100%',
        },
        {
          name: 'Stun Duration',
          amount: ['0.9s', '1.2s', '1.5s'],
          cr: '',
          wr: '',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Speed Loader',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Buckshot Bonanza (A) is reset whenever Gwen uses Skedaddle (B).',
        '• Damage 90% (+2.5%)',
        '• Energy Cost 50%',
      ],
      image: 'Gwen_Rare',
    },
    {
      name: 'Skedaddling',
      type: 'Epic',
      color: '#7A02EA',
      text: [
        'Skedaddle’s (B) duration is increased. Gwen passively gains weapon power.',
        '• Bonus Duration 1s (+0.2s)',
        '• Cooldown 60% (-2.5%)',
        '• assive Weapon Power 10% (+1%)',
      ],
      image: 'Gwen_Epic',
    },
    {
      name: 'Three of a Kind',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Aces High (Ult) fires three cards in a cone.',
        '• Damage 60% (+10%)',
        '• Cooldown 60% (-5%)',
      ],
      image: 'Gwen_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Gangster Gwen',
      type: 'Rare',
      image: 'Gwen_Gangster_R',
    },
    {
      color: 'red',
      name: 'Red Lanter Gwen',
      type: 'Special Edition',
      image: 'Gwen_Red_Lantern',
    },
    {
      color: '#7A02EA',
      name: 'Snow Bunny Gwen',
      type: 'Epic',
      image: 'Gwen_Snow_Bunny',
    },
    {
      color: 'red',
      name: 'Festive Gwen ',
      type: 'Special Edition',
      image: 'Gwen_Festive',
    },
    {
      color: 'red',
      name: 'Black Diamond Gwen',
      type: 'Special Edition',
      image: 'Gwen_Black_Diamond',
    },
  ],
}
