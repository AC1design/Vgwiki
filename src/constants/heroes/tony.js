export const frontmatter = {
  name: 'Tony',
  type: ['JUNGLE', 'WARRIOR'],
  role: ['JUNGLE'],
  path: '/Tony',
  description: 'Dwarven brawler who taunts and pummels enemies.',
  spotlight: 'HG-_NNyu4I8',
  stats: [
    { name: 'HEALTH', value: '762 - 2544', color: '#4eec8b' },
    { name: 'H. REGEN', value: '4.01 - 7.42', color: '#4eec8b' },
    { name: 'ENERGY', value: '280 - 643', color: '#5bbcff' },
    { name: 'ENG REGEN', value: '1.87 - 4.29', color: '#5bbcff' },
    { name: 'WP DAMAGE', value: '79 - 164', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '1.7', color: '#e19efb' },
    { name: 'MOVE SPD', value: '3.9', color: '#e19efb' },
  ],
  model: [{ image: 'Tonyblurred' }, { tmodel: 'Tony' }],
  skills: [
    {
      name: 'COME AT ME',
      type: 'Perk',
      image: 'Tony-P',
      text: [
        'When Tony receives damage, he gains 60-302 (level 1-12) (+20% of his bonus health) health barrier for 2s. This cannot occur again within 10s-6s (level 1-12).',
      ],
      stats: [],
    },
    {
      name: 'JAWBREAKER',
      type: 'A ABILITY',
      image: 'Tony-A',
      text: [
        'Tony’s next three basic attacks are empowered for 4s. These attacks launch Tony toward his target, dealing bonus damage. The third attack is a two-handed strike that will stun his target.',
        '• Tony also gains a decaying move speed bonus when activating this ability.',
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
          amount: ['40', '45', '50', '65', '60'],
          cr: '  ',
          wr: ' ',
        },
        {
          name: 'Weapon Damage',
          amount: ['10', '20', '30', '40', '50'],
          cr: ' ',
          wr: '60%',
        },
        {
          name: 'Bonus Move Speed',
          amount: ['1.5', '1.75', '2', '2.25', '2.5'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Duration',
          amount: ['0.8', '0.8', '0.8', '0.8', '1.2'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'TRASH TALK',
      type: 'B ABILITY',
      image: 'Tony-B',
      text: [
        'Tony hurls insults in the target direction. All enemies hit receive damage and heroes are forced to attack Tony for 0.8s.',
        '• This also resets the cooldown of Come At Me, allowing it to trigger again.',
        '• Tony gains a 25% damage reduction while taunting.',
        '• The duration is further increased with weapon power up to a cap of 2s with 300 weapon power.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['22s', '20s', '18s', '16s', '14s'],
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
          amount: ['50', '90', '130', '170', '210'],
          cr: '125%',
          wr: ' ',
        },
        {
          name: 'Range',
          amount: ['8', '8', '8', '8', '8'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Taunt Duration',
          amount: ['1.2', '1.2', '1.2', '1.2', '1.6'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'BADA BOOM',
      type: 'ULTIMATE',
      image: 'Tony-C',
      text: [
        'Tony winds up, then dashes to target location, releasing a massive uppercut. This colossal punch deals damage and knocks away all enemies caught in the area.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['80s', '70s', '60s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['100', '100', '100'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['300', '450', '600'],
          cr: '100%',
          wr: '150%',
        },
        {
          name: 'Range',
          amount: ['8', '13', '18'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Mighty Brawler',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Tony gains bonus attack speed and increased health barrier from Come At Me (Perk).',
        '• Attack Speed 10% (+2.5%)',
        '• Barrier 20% (+5%)',
      ],
    },
    {
      name: 'Haymakers',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Tony’s Jawbreaker (A) now deals damage in an area around the target.',
        '• Bonus Damage 20% (+2.5%)',
      ],
    },
    {
      name: 'Doesn’t Even Hurt',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Tony takes no damage from taunted targets.',
        '• Barrier Duration 1s (+0.2s)',
      ],
    },
  ],
  skins: [
    {
      name: 'Steam Knight Tony',
      color: '#6393F9',
      type: 'Rare',
      image: 'Tony_SteamKnight',
    },
  ],
}
