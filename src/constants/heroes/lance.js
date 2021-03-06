export const frontmatter = {
  name: 'Lance',
  type: ['CAPTAIN', 'WARRIOR'],
  role: ['CAPTAIN'],
  path: '/Lance',
  wallpaper: [
    {
      name: 'Lance',
      link: 'https://imgur.com/gallery/mQ6EjCg'
    }
  ],
  description: 'The king of duels with massive lifesteal and self-healing.',
  spotlight: 'HTZIGNW5F7A',
  stats: [
    { name: 'HEALTH', value: '842 - 2609', color: '#4eec8b' },
    { name: 'H. REGEN', value: '3.79 - 10.94', color: '#4eec8b' },
    { name: 'ENERGY', value: '0', color: '#5bbcff' },
    { name: 'ENG REGEN', value: ' - ', color: '#5bbcff' },
    { name: 'WP DAMAGE', value: '85 - 178', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 122%', color: '#f48596' },
    { name: 'ARMOR', value: '35 - 100', color: '#f6ee71' },
    { name: 'SHIELD', value: '25 - 75', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '4.5', color: '#e19efb' },
    { name: 'MOVE SPD', value: '3.9', color: '#e19efb' },
  ],
  model: [{ image: 'Lanceblurred' }, { tmodel: 'Lance' }],
  skills: [
    {
      name: "PARTISAN'S TECHNIQUE",
      type: 'Perk',
      image: 'Lance-P',
      text: [
        "Lance's basic attacks damage every target along their path. However, his attacks are slow to land and attack speed is less effective on him.",
        'Instead of energy, Lance uses stamina to activate his abilities. Purchasing items with energy and energy regeneration increases his stamina and stamina regeneration.',
        '• Max Stamina: 100 + 30% Max Energy',
        '• Stamina Regen: 25 + 50% Energy Regen',
      ],
    },
    {
      name: 'IMPALE',
      type: 'A ABILITY',
      image: 'Lance-A',
      text: [
        'Lance lunges forward and strikes through his opponents, dealing weapon damage and rooting them in place (max 1.6s).',
        '• Overdrive: At max rank, ths ability also resets the cooldown of Combat Roll if Lance hits an enemy.',
        '• If this attack hits at least one enemy, Lance will immediately recover from the ability.',
        '• If this attack misses, Lance takes 0.7 seconds to recover.',
        '• Deals less damage to minions.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['11s', '10s', '9s', '8s', '6s'],
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
          amount: ['220', '290', '360', '430', '500'],
          cr: '80%',
          wr: '80%',
        },
        {
          name: 'Stamina Cost',
          amount: ['30', '30', '30', '30', '30'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Root Duration',
          amount: ['1s', '1s', '1s', '1s', '1s'],
          cr: '0.3%',
          wr: ' ',
        },
      ],
    },
    {
      name: 'GYTHIAN WALL',
      type: 'B ABILITY',
      image: 'Lance-B',
      text: [
        'Lance smashes enemies back with his shield, dealing weapon damage and also stunning them if they collide with a wall or structure (max 1.6s). Afterward, he holds his shield steadfast, greatly reducing incoming damage from the target direction by up to 90%.',
        '• Overdrive: At max rank, Lance ignores all negative effects (from any direction) while this ability is active.',
        '• Damage reduction is 50% effective against turrets.',
        "• Passive: Lance strafes around the enemy he has most recently attacked. While strafing, he reduces damage from the target's direction by up to 50%.",
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['9s', '8.5s', '8s', '7.5s', '7s'],
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
          amount: ['80', '115', '150', '185', '220'],
          cr: '80%',
          wr: '60%',
        },
        {
          name: 'Stamina Cost',
          amount: ['30', '30', '30', '30', '30'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Stun Duration',
          amount: ['0.6s', '0.7s', '0.8s', '0.9s', '1.2s'],
          cr: '0.2%',
          wr: ' ',
        },
        {
          name: 'Passive Damage Reduction',
          amount: ['20%', '20%', '20%', '20%', '20%'],
          cr: '12.5%',
          wr: ' ',
        },
        {
          name: 'Active Damage Reduction',
          amount: ['60%', '60%', '60%', '60%', '60%'],
          cr: '15%',
          wr: ' ',
        },
      ],
    },
    {
      name: 'COMBAT ROLL',
      type: 'ULTIMATE',
      image: 'Lance-C',
      text: [
        'Lance rolls in the target direction. His next basic attack within 2s will strike quickly, dealing bonus crystal damage.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['5s', '4s', '3s'],
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
          amount: ['100', '175', '250'],
          cr: '80%',
          wr: '30%',
        },
        {
          name: 'Stamina Cost',
          amount: ['25', '20', '15'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Reinforced Walls',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Gythian Wall (B) grants Lance and nearby allies a barrier.',
        '• Max Health to Barrier 15% (+2.5%)',
        '• Barrier Duration 2s',
        '• Cooldown 125%',
      ],
      image: 'Lance_Rare',
    },
    {
      name: 'Rollout',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Combat Roll (Ult) has 2 longer range and damages enemies along its path.',
        '• Basic Attack to Roll Dmg 120% (+4%)',
        '• Cooldown 80% (-2.5%)',
      ],
      image: 'Lance_Epic',
    },
    {
      name: 'Striker',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Basic attacks reduce the cooldown of Impale (A) and Combat Roll (Ult).',
        '• Impale Damage 110% (+10%)',
        '• Impale Reduction 30% (+10%)',
        '• Combat Roll Reduction 20% (+10%)',
      ],
      image: 'Lance_Legendary',
    },
  ],
  skins: [
    {
      color: '#c78cff',
      name: 'Gladiator Lance',
      type: 'Epic',
      image: 'Lance_Gladiator_E',
    },
    {
      color: '#c78cff',
      name: 'Netherknight Lance',
      type: 'Epic',
      image: 'Lance_Netherknight_E',
    },
    {
      color: '#FF9000',
      name: 'Pinnacle Lance',
      type: 'Legendary',
      image: 'Lance_Netherknight_Legendary',
    },
    {
      color: '#c78cff',
      name: 'Golden Netherknight Lance',
      type: 'Epic',
      image: 'Lance_Golden_LE',
    },
    {
      color: '#FF9000',
      name: 'Poseidon Lance',
      type: 'Legendary',
      image: 'Lance_Poseidon',
    },
  ],
}
