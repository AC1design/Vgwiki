export const frontmatter = {
  name: 'SAW',
  type: ['LANE', 'SNIPER'],
  role: ['LANE'],
  path: '/SAW',
  wallpaper: [
    {
      name: 'SAW',
      link: 'https://imgur.com/a/Sr3UUaT'
    }
  ],
  description: 'Heavy machine gunner who sacrifices move speed for damage.',
  spotlight: '2nJHJGgcO3k',
  stats: [
    { name: 'HEALTH', value: '683 - 2023', color: '#4eec8b' },
    { name: 'H. REGEN', value: '2.4 - 5.15', color: '#4eec8b' },
    { name: 'ENERGY', value: '150 - 315', color: '#5bbcff' },
    { name: 'ENG REGEN', value: '1 - 2.21', color: '#5bbcff' },
    { name: 'WP DAMAGE', value: '50 - 105', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 111%', color: '#f48596' },
    { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '6.6', color: '#e19efb' },
    { name: 'MOVE SPD', value: '3.5', color: '#e19efb' },
  ],
  model: [{ image: 'Sawblurred' }, { tmodel: 'Saw' }],
  skills: [
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/SAW-P-Spin-Up.mp4',
      name: 'SPIN UP',
      type: 'Perk',
      image: 'Saw-P',
      text: [
        'Every basic attack gives SAW increased attack speed, but it also sifnificantly decreases his move speed (-1.0).',
        '• Each basic attack grants SAW +15% attack speed.',
        "• Each basic attack decreases SAW's move speed by -0.09.",
        '• Max 12 stacks.',
        '• After 3.5s without basic attacking, SAW rapidly spins down.',
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/SAW-B-Suppressing-Fire.mp4',
      name: 'ROADIE RUN',
      type: 'A ABILITY',
      image: 'Saw-A',
      text: [
        "SAW sprints and switches to a melee combat knife. If SAW attacks someone, he will deal bonus damage based on the target's missing health & roll backwards.",
        '• Activating this ability clears all stacks of Spin Up.',
        '• Crystal will boost the speed, up to a maximum of +3.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['13s', '12s', '11s', '10s', '9s'],
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
          amount: ['80', '135', '190', '245', '300'],
          cr: '280%',
          wr: '100%',
        },
        {
          name: 'Missing Health %',
          amount: ['20%', '20%', '20%', '20%', '40%'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Speed Boost',
          amount: ['2', '2', '2', '2', '2'],
          cr: '0.25%',
          wr: ' ',
        },
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/SAW-C-Mad-Cannon.mp4',
      name: 'SUPPRESSING FIRE',
      type: 'B ABILITY',
      image: 'Saw-B',
      text: [
        'SAW fires a hurricane of bullets in a set direction for 2 seconds, damaging and slowing enemies in its path.',
        'Finishing this ability grants all stacks of Spin Up and resets the cooldown of Roadie Run.Deal reduced damage to turrets if out of range.',
        '• This ability can be canceled by pressing the (B) button again.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['15s', '15s', '15s', '15s', '13s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['40', '50', '60', '70', '80'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['140', '175', '210', '245', '315'],
          cr: '220%',
          wr: ' ',
        },
        {
          name: 'Slow Duration ',
          amount: ['0.4s', '0.4s', '0.4s', '0.4s', '0.4s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Slow',
          amount: ['25%', '30%', '35%', '40%', '60%'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/SAW-A-Roadie-Run.mp4',
      name: 'MAD CANNON',
      type: 'ULTIMATE',
      image: 'Saw-C',
      text: [
        "SAW fires an explosive shell, dealing damage to nearby enemies when it explodes.",
      ],
      stats: [
        {
          name: 'Charge Time',
          amount: ['25s', '20s', '15s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['40', '40', '40'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['250', '275', '300'],
          cr: '150%',
          wr: '100%',
        },
        {
          name: 'Charges',
          amount: ['3', '4', '5'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Cooldown',
          amount: ['2s', '2s', '2s'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Piercing Bullets',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'SAW’s basic attack pierces its target to hit all enemies along its path.',
        '• Bonus Range 0.5',
        '• Damage 90% (+2.5%)',
      ],
      image: 'SAW_Rare',
    },
    {
      name: 'Speedy Spin Up',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Spin Up (Perk) no longer slows SAW.',
        '• Speed Boost Per Stack 0.012 (+0.017)',
      ],
      image: 'SAW_Epic',
    },
    {
      name: 'Road Rage',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'SAW gains Spin Up (Perk) stacks after attacking an enemy with Roadie Run (A). Basic attacks reduce the cooldown of Roadie Run (A) by 50%.',
        '• Damage 100%',
        '• Stacks 6',
      ],
      image: 'SAW_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'SAWborg 2.0',
      type: 'Rare',
      image: 'SAW_SAWborg_2.0',
    },
    {
      color: '#c78cff',
      name: 'SAWborg 3.0',
      type: 'Epic',
      image: 'SAW_SAWborg_3.0',
    },
    {
      color: '#FF9000',
      name: 'SAWborg X',
      type: 'Legendary',
      image: 'SAW_SAWborg_X',
    },
    {
      name: 'Elite Force SAW',
      type: 'Rare',
      image: 'SAW_Elite_Force',
    },
    {
      color: 'red',
      name: 'Summer Party SAW',
      type: 'Special Edition',
      image: 'SAW_Summer_Party_SE',
      price: '500',
      opals: true,
    },
    {
      color: '#FF9000',
      name: 'Dragon Slayer SAW',
      type: 'Legendary',
      image: 'SAW_Dragon_Slayer',
    },
  ],
}
