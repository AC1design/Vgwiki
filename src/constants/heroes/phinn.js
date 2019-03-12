export const frontmatter = {
  name: 'Phinn',
  type: ['CAPTAIN', 'PROTECTOR'],
  role: ['CAPTAIN'],
  path: '/Phinn',
  description:
    'Extremely tanky and can pull in enemies from across the screen.',
  spotlight: 'hu9kTiwJejc',
  stats: [
    { name: 'HEALTH', value: '892 -	2781', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '3.39	7.24', color: '#4eec8b' },
    { name: 'ENERGY', value: '220	440', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: ' - ', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '95 - 154', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 113.2%', color: '#f48596' },
    { name: 'ARMOR', value: '35 - 100', color: '#f6ee71' },
    { name: 'SHIELD', value: '25 - 75', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '1.9', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '3.1', color: '#e19efb' },
  ],
  model: [{ image: 'Phinnblurred' }, { tmodel: 'Phinn' }],
  skills: [
    {
      name: 'UNSTOPPABLE',
      type: 'Perk',
      image: 'Phinn-P',
      text: [
        'Phinn cannot be stopped or stunned. All movement-impairing effects are instead reduced to moderate slows, and stuns are converted to silences.',
        '• He even shrugs off attempts on his life, passively gaining 18% additional armor, shield, and max health.',
        /*"Water Denizen: Phinn gains the 5V5 river movement bonus in both directions."*/
      ],
    },
    {
      name: 'QUIBBLE',
      type: 'A ABILITY',
      image: 'Phinn-A',
      text: [
        'Phinn slams his anchor down on the targeted location, heavily slowing enemies for 0.9s.',
        '• Overdrive: At max rank, the slow becomes a stun!',
        '• Deals less damage to minions.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['9s', '8s', '7s', '6s', '5s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['45', '50', '55', '60', '65'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage',
          amount: ['200', '300', '400', '500', '600'],
          cr: '170%',
          wr: '',
        },
        {
          name: 'Slow',
          amount: ['55%', '60%', '65%', '70%', '0%'],
          cr: '15%',
          wr: '',
        },
      ],
    },
    {
      name: 'POLITE COMPANY',
      type: 'B ABILITY',
      image: 'Phinn-B',
      text: [
        'Phinn stomps the earth, damaging all enemies in a wide area and nudging them toward him. The effect reverberates around allies, temporarily granting them fortified health.',
        "• Fortified health increases by 4% of Phinn's bonus health and 15% of Phinn's bonus armor/shield.",
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['10s', '10s', '10s', '10s', '10s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['30', '30', '30', '30', '30'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage',
          amount: ['75', '125', '175', '225', '275'],
          cr: '120%',
          wr: '',
        },
        {
          name: 'Duration',
          amount: ['2s', '2s', '2s', '2s', '2s'],
          cr: '15%',
          wr: '',
        },
        {
          name: 'Fortified Health',
          amount: ['100', '125', '150', '175', '225'],
          cr: '',
          wr: '',
        },
      ],
    },
    {
      name: 'FORCED ACCORD',
      type: 'ULTIMATE',
      image: 'Phinn-C',
      text: [
        'Phinn throws his anchor in a direction. After the anchor reaches its destination, Phinn yanks it back, damaging all enemies in its path and pulling them back to him.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['85s', '70s', '55s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['60', '60', '60'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage',
          amount: ['100', '300', '500'],
          cr: '150%',
          wr: '',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Friendly Cavil',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Polite Company (B) resets the cooldown of Quibble (A). The energy costs of both abilities are reduced by 50%.',
        '• Damage 70% (+3%)',
        '• Energy Cost 50%',
      ],
      image: 'Phinn_Rare',
    },
    {
      name: 'Phaster',
      type: 'Epic',
      color: '#7A02EA',
      text: [
        'Polite Company (B) grants bonus move speed to Phinn and his allies.',
        '• Fortified Health 100% (+1%)',
        '• Bonus Move Speed 1.3 (+0.2)',
      ],
      image: 'Phinn_Epic',
    },
    {
      name: 'Raid Boss',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Phinn rapidly regenerates health.',
        '• Damage 45% (+7.5%)',
        '• Health Regen/Sec 7% (+2%)',
      ],
      image: 'Phinn_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Bonecruncher Phinn',
      type: 'Rare',
      image: 'Phinn_Bonecruncher',
    },
    {
      color: '#7A02EA',
      name: 'Bonegnasher Phinn',
      type: 'Epic',
      image: 'Phinn_Bonegnasher',
    },
    {
      color: '#FF9000',
      name: 'Churn Tyrant Phinn',
      type: 'Legendary',
      image: 'Phinn_Churn_Tyrant',
    },
    {
      color: 'red',
      name: 'Summer Party Phinn',
      type: 'Special Edition',
      image: 'Phinn_Summer_Party',
    },
    {
      color: 'red',
      name: 'Bakuto Phinn',
      type: 'Special Edition',
      image: 'Phinn_Bakuto',
      price: '500',
      opals: true,
    },
  ],
}
