export default {
  name: 'Catherine',
  type: ['CAPTAIN', 'PROTECTOR'],
  role: ['CAPTAIN'],
  description: 'Disruptive tank with lots of stuns and a powerful silence.',
  spotlight: 'i2cphmHljZM',
  stats: [
    { name: 'HEALTH', value: '808 - 2673', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '4.06 - 7.91', color: '#4eec8b' },
    { name: 'ENERGY', value: '200 - 464', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: '1.33 - 3.09', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '74 - 141', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '1.5', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '3.6', color: '#e19efb' },
  ],
  model: [{ image: 'Catherineblurred' }, { tmodel: 'Catherine' }],
  skills: [
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Catherine-P-Captain-of-the-Guard.mp4',
      name: 'CAPTAIN OF THE GUARD',
      type: 'Perk',
      image: 'Catherine-P',
      text: [
        'Catherine gains 1 armor and shield every time she stuns or silences or silences an enemy hero with her abilities.',
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Catherine-A-Merciless-Pursuit.mp4',
      name: 'MERCILESS PURSUITS',
      type: 'A ABILITY',
      text: [
        'Catherine gains a burst of move speed. Her next basic attack is replaced by a powerful stun attack.',
        '• Resets basic-attack cooldown on activation.',
      ],
      image: 'Catherine-A',
      stats: [
        {
          name: 'Cooldown',
          amount: ['16s', '15s', '14s', '13s', '12s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['30', '40', '50', '60', '70'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage',
          amount: ['35', '60', '85', '110', '135'],
          cr: '100%',
          wr: '100%',
        },
        {
          name: 'Bonus Speed Duration',
          amount: ['1.5', '1.5', '1.5', '1.5', '2'],
          cr: '',
          wr: '',
        },
        {
          name: 'Stun Duration',
          amount: ['0.7s', '0.7s', '0.7s', '0.7s', '0.9s'],
          cr: '',
          wr: '',
        },
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Catherine-B-Stormguard.mp4',
      name: 'STORMGUARD',
      type: 'B ABILITY',
      image: 'Catherine-B',
      text: [
        'Activates a protective bubble that reflects damage back to nearby enemies - especially when it comes in large bursts.',
        '• Reflects any damage above 7.5% of base maximum health.',
        '• Reflect damage is spread out to up 3 nearby enemies.',
        '• Each reflection reduces the shield duration by 0.4s.',
        '• Also damages enemies around Catherine while Stormguard is on.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['9s', '7.5s', '7s', '6.5s', '6s'],
          cr: '',
          wr: '',
        },

        {
          name: 'Energy Cost',
          amount: ['40', '50', '60', '70', '80'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage/sec',
          amount: ['45', '65', '85', '105', '125'],
          cr: '50%',
          wr: '',
        },
        {
          name: 'Duration',
          amount: ['4s', '4s', '4s', '4s', '4s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Bonus Reflect Damage',
          amount: ['0%', '5%', '10%', '15%', '25%'],
          cr: '',
          wr: '',
        },
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Catherine-C-Blast-Tremor.mp4',
      name: 'BLAST TREMOR',
      type: 'ULTIMATE',
      image: 'Catherine-C',
      text: [
        'Catherine slams the ground, damaging and silencing enemies in a large cone in front of her.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['90s', '80s', '70s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['120', '140', '160'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage',
          amount: ['400', '550', '700'],
          cr: '150%',
          wr: '',
        },
        {
          name: 'Range',
          amount: ['11', '11', '11'],
          cr: '',
          wr: '',
        },
        {
          name: 'Silence Duration',
          amount: ['1.5s', '2s', '2.5s'],
          cr: '',
          wr: '',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Advancing Guard',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Captain of the Guard (Perk) also grants temporary bonys crystal and weapon power for 30s.',
        '• Duration 30s',
        '• Weapon Power/Stack +1% (+1%)',
        '• Crystal Power/Stack +1% (+1%)',
      ],
      image: 'Catherine_Rare',
    },
    {
      name: 'Quick Pursuit',
      type: 'Epic',
      color: '#7A02EA',
      text: [
        'While Stormguard (B) is active, Catherine’s basic attacks will reduce the cooldown of Merciless Pursuit (A) and Blast Tremor (Ult).',
        '• Merciless Pursuit Reduction 10% (+1.5%)',
        '• Blast Tremor Reduction 5% (+1%)',
      ],
      image: 'Catherine_Epic',
    },
    {
      name: 'Shockwave',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Blast Tremor (Ult) knock back enemies but no longer silences.',
        '• Cooldown 70% (-7.5%)',
        '• Damage 115% (+15%)',
      ],
      image: 'Catherine_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: "Queen's Knight Catherine",
      type: 'Rare',
      image: 'Catherine_Paragon_I_R',
    },
    {
      color: '#7A02EA',
      name: 'Paragon Catherine',
      type: 'Epic',
      image: 'Catherine_Paragon_II_E',
    },
    {
      color: '#FF9000',
      name: 'Serpent Mask Catherine',
      type: 'Legendary',
      image: 'Catherine_Paragon_III_L',
    },
    {
      color: '#7A02EA',
      name: 'Gladiator Catherine',
      type: 'Epic',
      image: 'Catherine_Gladiator_E',
    },
    {
      color: '#FADA5E',
      name: 'Winter War Catherine',
      type: 'Limited Edition',
      image: 'Catherine_Winter_War_LE',
    },
    {
      color: 'red',
      name: 'Winter War Catherine',
      type: 'Special Edition',
      image: 'Catherine_Winter_War_SE',
    },
    {
      color: 'red',
      name: 'Championship Catherine',
      type: 'Special Edition',
      image: 'Catherine_Championship',
    },
    {
      color: 'red',
      name: 'Summer Party Catherine',
      type: 'Special Edition',
      image: 'Catherine_Summer_Red',
    },
    {
      color: 'red',
      name: "Surf's Up Catherine",
      type: 'Special Edition',
      image: 'Catherine_Summer_Blue',
    },
    {
      color: 'red',
      name: 'Beeach Patrol Catherine',
      text: 'Special Edition',
      image: 'Catherine_Summer_Black_Orange',
    },
    {
      color: '#FF9000',
      name: 'Dragon Master Catherine',
      type: 'Legendary',
      image: 'Catherine_Dragon_Master',
    },
  ],
}