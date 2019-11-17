export const frontmatter = {
  name: 'Joule',
  type: ['JUNGLE', 'WARRIOR'],
  role: ['JUNGLE'],
  path: '/Joule',
  description: 'Heavily armored mech rider with a powerful energy beam.',
  spotlight: 'OYcWpLN_408',
  stats: [
    { name: 'HEALTH', value: '742 - 2487', color: '#4eec8b' },
    { name: 'H. REGEN', value: '4.27 - 9.44', color: '#4eec8b' },
    { name: 'ENERGY', value: '390 - 555', color: '#5bbcff' },
    { name: 'ENG REGEN', value: '3.5 - 7.02', color: '#5bbcff' },
    { name: 'WP DAMAGE', value: '66 - 148', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 113.2%', color: '#f48596' },
    { name: 'ARMOR', value: '35 - 100', color: '#f6ee71' },
    { name: 'SHIELD', value: '25 - 75', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '2.4', color: '#e19efb' },
    { name: 'MOVE SPD', value: '3.9', color: '#e19efb' },
  ],
  model: [{ image: 'Jouleblurred' }, { tmodel: 'Joule' }],
  skills: [
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Joule-Perk-Heavy-Plating.mp4',
      name: 'HEAVY PLATING',
      type: 'Perk',
      image: 'Joule-P',
      text: ['Joule takes 30% less damage when hit from the front or sides.'],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Joule-A-Rocket-Leap.mp4',
      name: 'ROCKET LEAP',
      type: 'A ABILITY',
      image: 'Joule-A',
      text: [
        'Joule leaps to a target location. Enemies caught underneath Joule take full damage and are stunned, while enemies near the impact are knocked away and take 50% damage.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['15s', '14s', '13s', '12s', '8s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['100', '115', '130', '145', '160'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['150', '200', '250', '300', '350'],
          cr: '100%',
          wr: ' ',
        },
        {
          name: 'Duration',
          amount: ['0.7s', '0.8s', '0.9s', '1s', '1,5s'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Joule-B-Thunder-Strike.mp4',
      name: 'THUNDER STRIKE',
      type: 'B ABILITY',
      image: 'Joule-B',
      text: [
        "Joule's mech fires an energy bolt directly in front of her. If this strikes an enemy, the next Thunder Strike will have bonus armor & shield pierce.",
        '• Cooldown speed improves with attack speed.',
        '• Deals less damage to minions.',
        '• Weapon Base Damage'
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['3s', '2.8s', '2.6s', '2.4s', '2s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['50', '55', '60', '65', '35'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['150', '200', '250', '300', '350'],
          cr: '140%',
          wr: '170%',
        },
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Joule-C-Big-Red-Button.mp4',
      name: 'BIG RED BUTTON',
      type: 'ULTIMATE',
      image: 'Joule-C',
      text: [
        'Joule fires a massive beam of energy for 1.5s.',
        '• The force of this beam pushes Joule backwards during channeling.',
        '• Deals 50% less damage to structures.',
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
          amount: ['100', '125', '150'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage/sec',
          amount: ['600', '900', '1200'],
          cr: '220%',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Rocket Leapfrog',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Rocket Leap (A) is reset whenever landing on enemies but no longer stuns or knocks back. Joule passively gains armor and shield.',
        '• Passive Armor +20% (+2.5%)',
        '• Passive Shield +20% (+2.5%)',
        '• Cooldown 90% (-2%)',
        '• Energy Cost 50%',
      ],
      image: 'Joule_Rare',
    },
    {
      name: 'Backup Button',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Big Red Button (Ult) has 1 additional charge.',
        '• Cooldown 80% (-2.5%)',
        '• Damage 75% (+5%)',
      ],
      image: 'Joule_Epic',
    },
    {
      name: 'Thundering Steps',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Thunder Strike (B) grants Joule bonus move speed when it strikes enemies. Joule passively gains weapon power.',
        '• Bonus Move Speed 1.5 (+0.5)',
        '• Bonus Move Speed Duration 2s',
        '• Passive Weapon Power +7.5% (+2.5%)',
      ],
      image: 'Joule_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Killa-Joule 9000',
      type: 'Rare',
      image: 'Joule_Killa-Joule_9000_I_R',
    },
    {
      color: '#c78cff',
      name: 'Mega-Joule 9000',
      type: 'Epic',
      image: 'Joule_Killa-Joule_9000_II_E',
    },
    {
      color: '#FF9000',
      name: 'School Days Joule',
      type: 'Legendary',
      image: 'Joule_Killa-Joule_9000_III_L',
    },
    {
      color: 'red',
      name: 'Snow Monster Joule',
      type: 'Special Edition',
      image: 'Joule_Snow_Monster_SE',
      price: '500',
      opals: true,
    },
    {
      color: '#FF9000',
      name: 'Teddy Bear Joule',
      type: 'Legendary',
      image: 'Joule_Teddy_Bear',
    },
    {
      color: 'red',
      name: 'Panda Joule',
      type: 'Special Edition',
      image: 'Joule_Panda',
      price: '500',
      opals: true,
    },
  ],
}
