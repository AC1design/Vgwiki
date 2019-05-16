export const frontmatter = {
  name: 'Taka',
  type: ['JUNGLE', 'ASSASSIN'],
  role: ['JUNGLE'],
  path: '/Taka',
  description: 'Stealthy assassin who can heal while invisible.',
  spotlight: 'Oo9Mu7cRRzA',
  stats: [
    { name: 'HEALTH', value: '717 - 2302', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '3.51 - 7.36', color: '#4eec8b' },
    { name: 'ENERGY', value: '180 - 422', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: '1.33 - 3.09', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '70 - 129', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '2', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '4.0', color: '#e19efb' },
  ],
  model: [{ image: 'Takablurred' }, { tmodel: 'Taka' }],
  skills: [
    {
      name: 'HOUSE KAMUHA',
      type: 'Perk',
      image: 'Taka-P',
      text: [
        'Taka gains Mortal Strike every 2s.',
        "• Mortal Strike: Taka's next basic attack deals 30-85 (level 1-12) (+30% weapon power) bonus damage and briefly gains bonus movement speed.",
        '• When Taka uses an ability or lands a Mortal Strike, he gains a stack of Ki.',
        '• Ki: Taka gains Mortal Strike faster and his ability cooldown are reduced by 5% per stack.',
        '• 5 stacks max.',
      ],
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Taka-P-House-Kamuha.mp4',
    },
    {
      name: 'KAITEN',
      type: 'A ABILITY',
      image: 'Taka-A',
      text: [
        'Taka flips over his target, cutting it with his switchblade. Taka is invulnerable to damage & debuffs while in mid-air.',
      ],
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Taka-A-Kaiten.mp4',
      stats: [
        {
          name: 'Cooldown',
          amount: ['9s', '9s', '9s', '9s', '7.5s'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['55', '55', '55', '55', '0'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['80', '120', '160', '200', '240'],
          cr: '140%',
          wr: ' ',
        },
      ],
    },
    {
      name: 'KAKU',
      type: 'B ABILITY',
      image: 'Taka-B',
      text: [
        'Taka throws a smoke bomb at his feet and becomes invisible. While stealthed, Taka moves faster and heals himself.',
        '• Invisibility ends early if he strikes a target or takes direct damage.',
        '• Turrets, Scout Traps and Flare Guns can still see Taka while he is invisible.',
      ],
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Taka-B-Kaku.mp4',
      stats: [
        {
          name: 'Cooldown',
          amount: ['12s', '12s', '12s', '12s', '10s'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['40', '50', '60', '70', '80'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Duration',
          amount: ['4s', '4.5s', '5s', '5.5s', '6s'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Speed Boost',
          amount: ['1.7', '1.8', '1.9', '2', '2.2'],
          cr: '',
          wr: ' ',
        },
      ],
    },
    {
      name: 'X-RETSU',
      type: 'ULTIMATE',
      image: 'Taka-C',
      text: [
        "Taka bursts through his target for massive damage and gains Ki Stacks. The target suffers a mortal wound (reduced healing) and takes damage per second for the next 3s. The wound's duration is refreshed whenever Taka Mortal Strikes this target.",
      ],
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Taka-C-X-Retsu.mp4',
      stats: [
        {
          name: 'Cooldown',
          amount: ['20s', '17.5s', '15s'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['80', '100', '120'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['250', '300', '350'],
          cr: '180%',
          wr: '100%',
        },
        {
          name: 'Damage/sec',
          amount: ['30', '35', '40'],
          cr: '75%',
          wr: ' ',
        },
        {
          name: 'Ki Stacks',
          amount: ['1', '2', '3'],
          cr: '75%',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Ranged Kaiten',
      type: 'Rare',
      color: '#6393F9',
      text: ['Kaiten (A) has 5 increased range.', '• Damage 125% (+4%)'],
    },
    {
      name: 'Protective Decoy',
      type: 'Epic',
      color: '#7A02EA',
      text: [
        'Kaku (B) grants Taka invulnerability for 0.8s.',
        '• Cooldown 70% (-2.5%)',
        '• Heal 110% (+5%)',
      ],
    },
    {
      name: 'Triple X-Retsu',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'X-Retsu (Ult) automatically chains to 3 targets.',
        '• Damage 100% (+15%)',
      ],
    },
  ],
  skins: [
    {
      name: 'Little Fox Taka',
      color: '#6393F9',
      type: 'Rare',
      image: 'Taka_Little_Fox',
    },
    {
      name: 'Shiro Kage Taka',
      color: '#7A02EA',
      type: 'Epic',
      image: 'Taka_Shiro_Kage',
    },
    {
      name: 'White Ghost Taka',
      color: '#FF9000',
      type: 'Legendary',
      image: 'Taka_White_Ghost',
    },
    {
      name: 'School Days Taka',
      color: '#FF9000',
      type: 'Legendary',
      image: 'Taka_School_Days',
    },
    {
      name: 'Fury Taka',
      color: '#7A02EA',
      type: 'Epic',
      image: 'Taka_Fury',
    },
    {
      name: 'Night Shadow Taka',
      color: 'red',
      type: 'Special Edition',
      image: 'Taka_Night_Shadow_SE',
      price: '1000',
      opals: true,
    },
    {
      name: 'Night Shadow Taka',
      color: '#FADA5E',
      type: 'Limited Edition',
      image: 'Taka_Night_Shadow_LE',
    },
    {
      name: 'Wu Xing Flame Taka',
      color: '#FF9000',
      type: 'Legendary',
      image: 'Taka_Wu_Xing_Flame',
    },
  ],
}
