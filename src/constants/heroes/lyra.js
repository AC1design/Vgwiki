export const frontmatter = {
  name: 'Lyra',
  type: ['CAPTAIN', 'PROTECTOR'],
  role: ['CAPTAIN'],
  path: '/Lyra',
  description: 'Healer and zone mage who can create teleportation portals.',
  spotlight: '5URpZoYn9a8',
  stats: [
    { name: 'HEALTH', value: '774 - 2253', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '4.01 - 7.42', color: '#4eec8b' },
    { name: 'ENERGY', value: '248 - 908', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: '2.15 - 7.1', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '0', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '5.6', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '3.7', color: '#e19efb' },
  ],
  model: [{ image: 'Lyrablurred' }, { tmodel: 'Lyra' }],
  skills: [
    {
      name: 'PRINCIPLE ARCANUM',
      type: 'Perk',
      image: 'Lyra-P',
      text: [
        'Lyra’s attacks are arcane missiles that deal crystal damage. if she holds her ground after releasing an attack, she automatically follows up with a heavy attack that also slows the target.',
        '• Each channeled missile consumes 15-20 (level 1-12) energy points, but Lyra can continue using these even if she runs out of energy.',
        '• Light attack damage: 60-95 (level 1-12) (+40% Crystal Power)(+100% Weapon Power)',
        '• Heavy attack damage: 60-180 (level 1-12) (+120% Crystal Power)(+100% Weapon Power)',
        '• Heavy attack slow: 0% (+0.04% of bonus max health)',
      ],
    },
    {
      name: 'IMPERIAL SIGIL',
      type: 'A ABILITY',
      image: 'Lyra-A',
      text: [
        'Lyra creates a sigil that heals nearby allied heroes and damages nearby enemy heroes. Reactivate this ability to detonate the sigil, dealing heavy damage to enemies while providing a move speed boost to allies inside and immediately consuming the remaining duration to heal at 30% effectiveness.',
        "• The healing per second is increase by 11% of Lyra's bonus health.",
        '• The sigil depletes faster the more heroes it is healing/damaging.',
        '• The sigil has vision, so it can see enemies.',
        '• The Detonation deals 50% less damage to minions.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['12s', '11s', '10s', '9s', '8s'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['80', '100', '120', '140', '160'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Range',
          amount: ['10', '10', '10', '10', '10'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Damage/sec',
          amount: ['65', '110', '155', '200', '290'],
          cr: '50%',
          wr: ' ',
        },
        {
          name: 'Heal/sec',
          amount: ['20', '30', '40', '50', '70'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Detonate Damage',
          amount: ['80', '130', '180', '230', '330'],
          cr: '60%',
          wr: ' ',
        },
      ],
    },
    {
      name: 'BRIGHT BULWARK',
      type: 'B ABILITY',
      image: 'Lyra-B',
      text: [
        'Lyra creates a walled zone around her, damaging and applying a slow to surrounding enemies.',
        '• Enemies inside the zone are slowed.',
        '• Enemies attempting to dash through the wall are stopped.',
        '• Enemies who cross the wall take the same damage and slow again.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['18s', '17s', '16s', '15s', '12s'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['60', '70', '80', '90', '100'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['80', '160', '240', '320', '400'],
          cr: '30%',
          wr: ' ',
        },
        {
          name: 'Duration',
          amount: ['3s', '3s', '3s', '3s', '3s'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Slow',
          amount: ['30%', '30%', '30%', '30%', '50%'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Duration',
          amount: ['1.5s', '1.5s', '1.5s', '1.5s', '2.5s'],
          cr: '',
          wr: ' ',
        },
      ],
    },
    {
      name: 'ARCANE PASSAGE',
      type: 'ULTIMATE',
      image: 'Lyra-C',
      text: [
        'Lyra teleports to the target location, creating portals at both ends that allow anyone to teleport across.',
        '• Portals last for 8.5s.',
        '• After travelling through a portal, heroes must wait 4.5s before re-entering one.',
        "• Enemies inside of Lyra's Bright Bulwark cannot enter a portal.",
        '• Heroes standing directly on top of a portal as it forms must step off the portal then re-enter to use it.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['90s', '80s', '70s'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['150', '175', '200'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Range',
          amount: ['10', '20', '30'],
          cr: '30%',
          wr: ' ',
        },
        {
          name: 'Bonus Attack Range',
          amount: ['0.5s', '1s', '1.5s'],
          cr: '',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Twin Missles',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Principle Arcanum (Perk) shoots an additional projectile but no longer slows.',
        '• Damage 65% (+3%)',
      ],
      image: 'Lyra_Rare',
    },
    {
      name: 'Mobile Bulwark',
      type: 'Epic',
      color: '#7A02EA',
      text: [
        'Bright Bulwark (B) moves with Lyra and lasts longer. Lyra passively gains crystal power.',
        '• Bonus Duration 1.4s (+0.4s)',
        '• Passive Crystal Power +7.5% (+2.5%)',
      ],
      image: 'Lyra_Epic',
    },
    {
      name: 'Gythian Ward',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Bright Bulwark (B) grants a barrier for 2s and removes all negative effects on nearby allies.',
        '• Max Health to Barrier 10% (+5%)',
      ],
      image: 'Lyra_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'School Days Lyra',
      type: 'Rare',
      image: 'Lyra_School_Days_R',
    },
    {
      color: '#FF9000',
      name: 'Dear Diary Lyra',
      type: 'Legendary',
      image: 'Lyra_Dear_Diary_L',
    },
    {
      color: 'red',
      name: 'Moon Empress Lyra',
      type: 'Special Edition',
      image: 'Lyra_Empress',
      price: '150',
      opals: true,
    },
    {
      color: 'red',
      name: 'Moon Goddess Lyra',
      type: 'Special Edition',
      image: 'Lyra_Goddess',
      price: '150',
      opals: true,
    },
    {
      color: 'red',
      name: 'Moon Queen Lyra',
      type: 'Special Edition',
      image: 'Lyra_Queen',
      price: '150',
      opals: true,
    },
    {
      color: '#FF9000',
      name: 'Tidal Enchanter Lyra',
      type: 'Legendary',
      image: 'Lyra_Tidal_Enchanter',
    },
  ],
}
