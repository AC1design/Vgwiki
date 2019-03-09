export const frontmatter = {
  name: 'Tony',
  type: ['JUNGLE', 'WARRIOR'],
  role: ['JUNGLE'],
  path: '/Tony',
  description: 'Dwarven brawler who taunts and pummels enemies.',
  spotlight: 'HG-_NNyu4I8',
  stats: [
    { name: 'HEALTH', value: '762 - 2544', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '4.01 - 7.42', color: '#4eec8b' },
    { name: 'ENERGY', value: '280 - 643', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: '1.87 - 4.29', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '79 - 1.64', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '1.7', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '3.5', color: '#e19efb' },
  ],
  model: [{ image: 'Tonyblurred' }, { tmodel: 'Tony' }],
  skills: [
    {
      name: 'COME AT ME',
      type: 'Perk',
      image: 'Tony-P',
      text: [
        'When Tony receives damage, he gains 60-302 (level 1-12) (+20% of his bonus health) health barrier for 2s. This cannot occur again within 12s-6.5s (level 1-12).',
      ],
      stats: [],
    },
    {
      name: 'JAWBREAKER',
      type: 'A ABILITY',
      image: 'Tony-A',
      text: [
        'Tony’s next three basic attacks are empowered. These attacks launch Tony toward his target, dealing bonus damage. The third attack is a two-handed strike that will stun his target.',
        '• Tony also gains a decaying move speed bonus when activating this ability.',
      ],
      stats: [
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
        '• The duration is further increased with weapon power up to a cap of 1.8s with 300 weapon power.',
      ],
      stats: [
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
      color: '#7A02EA',
      text: [
        'Tony’s Jawbreaker (A) now deals damage in an area around the target.',
        '• Bonus Damage 30% (+2.5%)',
      ],
    },
    {
      name: 'Doesn’t Even Hurt',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Tony takes no damage from taunted targets.',
        '• Barrier Duration 1s',
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
