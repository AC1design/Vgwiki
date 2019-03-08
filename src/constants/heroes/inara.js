export const frontmatter = {
  name: 'Inara',
  type: ['JUNGLE', 'ASSASSIN'],
  role: ['JUNGLE'],
  path: '/Inara',
  description:
    'An elusive and bursty assassin who strikes with a flurry of blades.',
  spotlight: 'rvo9GzYoJkk',
  stats: [
    { name: 'HEALTH', value: '805 - 2312', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '(+)', color: '#4eec8b' },
    { name: 'ENERGY', value: '201 - 388', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: '(+)', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '78 - 150', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 50', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '2.4', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '3.5', color: '#e19efb' },
  ],
  model: [{ image: 'Inarablurred' }, { tmodel: 'Inara' }],
  skills: [
    {
      video: 'Inara-P',
      name: 'SACRED GROVE',
      type: 'Perk',
      image: 'Inara-P',
      text: [
        'Inara summons wisps around nearby treants, gaining vision and allowing her to leap to them. Killing a treant grants Inara a movement speed boost for 30s.',
      ],
    },
    {
      video: 'Inara-A',
      name: 'DANCE OF LEAVES',
      type: 'A ABILITY',
      image: 'Inara-A',
      text: [
        'Inara spins with her blades, dealing damage to and slowing nearby enemies. Deals 50% less damage to minions.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['6s', '5.5s', '5s', '4.5s', '4s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['30', '35', '40', '45', '0'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage',
          amount: ['80', '140', '200', '260', '320'],
          cr: '140%',
          wr: '120%',
        },
        {
          name: 'Slow Strenght',
          amount: ['30%', '35%', '40%', '45%', '50%'],
          cr: '',
          wr: '',
        },
        {
          name: 'Slow Duration',
          amount: ['1.5', '1.5', '1.5', '1.5', '1.5'],
          cr: '',
          wr: '',
        },
      ],
    },
    {
      video: 'Inara-B',
      name: 'DANCE OF BLADES',
      type: 'B ABILITY',
      image: 'Inara-B',
      text: [
        'Inara leaps backwards and kicks away enemies, dealing damage to and summoning a wisp on affected enemies. She may leap to marked enemies she has kicked for the next 3s. Enemies knocked into a wall are stunned. Deals 50% less damage to minions.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['14s', '13s', '12s', '11s', '8s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['30', '35', '40', '45', '50'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage',
          amount: ['60', '90', '120', '150', '180'],
          cr: '125%',
          wr: '100%',
        },
        {
          name: 'Slow Duration',
          amount: ['0.5', '0.5', '0.5', '0.5', '0.5'],
          cr: '',
          wr: '',
        },
      ],
    },
    {
      video: 'Inara-C1',
      name: 'MIRAGE',
      type: 'ULTIMATE',
      image: 'Inara-C1',
      text: [
        'Inara rallies nearby allies, granting them movement speed.',
        'Reactivate Mirage (Ult) to dash in target direction, dealing damage to enemies.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['80s', '60s', '40s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['60', '80', '100'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage',
          amount: ['150', '225', '300'],
          cr: '150%',
          wr: '120%',
        },
        {
          name: 'Bonus Speed Duration',
          amount: ['10', '10', '10'],
          cr: '',
          wr: '',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'DANCE OF MENDING',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Dance of Leaves (A) also heals Inara and her allies.',
        '• Heal 125 (+15)',
        '• Damage 70% (+3%)',
      ],
      image: 'Inara_Rare',
    },
    {
      name: 'BANISHING MIGHT',
      type: 'Epic',
      color: '#7A02EA',
      text: [
        'Banishing Kick (B) knocks targets further.',
        '• Bonus Range 2 (+1)',
        '• Cooldown 90% (-3%)',
      ],
      image: 'Inara_Epic',
    },
    {
      name: 'Sacred Warrior',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Shimmer Blade (A) has greatly increased range, lower cooldown and increased damage.',
        '• Duration 1s (+0,5s)',
      ],
      image: 'Inara_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Nightblade Inara',
      type: 'Rare',
      image: 'Inara_Nightblade',
    },
  ],
}
