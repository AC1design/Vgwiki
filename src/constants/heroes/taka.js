export default {
  name: 'Taka',
  type: ['JUNGLE', 'ASSASSIN'],
  description: 'Stealthy assassin who can heal while invisible.',
  spotlight: 'Oo9Mu7cRRzA',
  stats: [
    { name: 'HEALTH', value: '702 - 2287', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '3.51 - 7.36', color: '#4eec8b' },
    { name: 'ENERGY', value: '180 - 422', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: '1.33 - 3.09', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '68 - 125', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '2', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '3.5', color: '#e19efb' },
  ],
  model: [{ image: 'Takablurred' }, { tmodel: 'Taka' }],
  skills: [
    {
      name: 'HOUSE KAMUHA',
      type: 'Perk',
      image: 'Taka-P',
      text: [
        'Taka gains Mortal Strike every 4s.',
        "• Mortal Strike: Taka's next basic attack deals 30-63 (level 1-12) (+35% weapon power) bonus damage and briefly gains bonus movement speed.",
        '• When Taka uses an ability or lands a Mortal Strike, he gains a stack of Ki.',
        '• Ki: Taka gains Mortal Strike faster and his ability cooldown are reduced by 10% per stack.',
        '• 5 stacks max.',
      ],
      video: 'Taka-P',
      stats: [],
    },
    {
      name: 'KAITEN',
      type: 'A ABILITY',
      image: 'Taka-A',
      text: [
        'Taka flips over his target, cutting it with his switchblade. Taka is invulnerable to damage & debuffs while in mid-air.',
      ],
      video: 'Taka-A',
      stats: [
        // {
        //   name: 'Cooldown',
        //   amount: ['8s', '7.5s', '7s', '6.5s', '6s'],
        //   cr: '',
        //   wr: '',
        // },
        // {
        //   name: 'Energy Cost',
        //   amount: ['25', '30', '35', '40', '45'],
        //   cr: '',
        //   wr: '',
        // },
        // {
        //   name: 'Damage',
        //   amount: ['0', '0', '0', '0', '0'],
        //   cr: '',
        //   wr: '100%',
        // },
        // {
        //   name: 'Bonus Damage',
        //   amount: ['80', '120', '160', '200', '240'],
        //   cr: '100%',
        //   wr: '',
        // },
        // {
        //   name: 'Bonus Range',
        //   amount: ['0', '0', '0', '0', '0'],
        //   cr: '',
        //   wr: '',
        // },
        // {
        //   name: 'Stun Duration',
        //   amount: ['1s', '1s', '1s', '1s', '1s'],
        //   cr: '',
        //   wr: '',
        // },
        // {
        //   name: 'Charge Time',
        //   amount: ['1.6s', '1.6s', '1.6s', '1.6s', '1.2s'],
        //   cr: '',
        //   wr: '',
        // },
        // {
        //   name: 'Duration',
        //   amount: ['6s', '6s', '6s', '6s', '6s'],
        //   cr: '',
        //   wr: '',
        // },
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
      video: 'Taka-B',
      stats: [
        // {
        //   name: 'Cooldown',
        //   amount: ['10s', '9.5s', '9s', '8.5s', '8s'],
        //   cr: '',
        //   wr: '',
        // },
        // {
        //   name: 'Energy Cost',
        //   amount: ['25', '30', '35', '40', '45'],
        //   cr: '',
        //   wr: '',
        // },
        // {
        //   name: 'Damage',
        //   amount: ['140', '190', '240', '290', '390'],
        //   cr: '175%',
        //   wr: '140%',
        // },
        // {
        //   name: 'Range',
        //   amount: ['5.5', '5.5', '5.5', '5.5', '7.5'],
        //   cr: '',
        //   wr: '',
        // },
        // {
        //   name: 'Bonus Move Speed Duration',
        //   amount: ['3s', '3s', '3s', '3s', '3s'],
        //   cr: '',
        //   wr: '',
        // },
        // {
        //   name: 'Bonus Attack Speed',
        //   amount: ['40%', '40%', '40%', '40%', '40%'],
        //   cr: '',
        //   wr: '',
        // },
        // {
        //   name: 'Bonus Move Speed',
        //   amount: ['1', '1', '1', '1', '1'],
        //   cr: '',
        //   wr: '',
        // },
        // {
        //   name: 'Duration',
        //   amount: ['6s', '6s', '6s', '6s', '6s'],
        //   cr: '',
        //   wr: '',
        // },
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
        '"https://www.vainglorygame.com/wp-content/uploads/2015/05/Taka-C-X-Retsu.mp4"',
      stats: [
        // {
        //   name: 'Cooldown',
        //   amount: ['25s', '20s', '15s'],
        //   cr: '',
        //   wr: '',
        // },
        // {
        //   name: 'Energy Cost',
        //   amount: ['50', '60', '70'],
        //   cr: '',
        //   wr: '',
        // },
        // {
        //   name: 'Damage',
        //   amount: ['300', '450', '600'],
        //   cr: '150%',
        //   wr: '',
        // },
        // {
        //   name: 'Trap Limit',
        //   amount: ['1', '1', '1'],
        //   cr: '',
        //   wr: '',
        // },
        // {
        //   name: 'Root Duration',
        //   amount: ['1.6s', '1.8s', '2s'],
        //   cr: '',
        //   wr: '',
        // },
        // {
        //   name: 'Bonus Attack Speed',
        //   amount: ['40%', '40%', '40%', '40%', '40%'],
        //   cr: '',
        //   wr: '',
        // },
        // {
        //   name: 'Bonus Move Speed',
        //   amount: ['1', '1', '1', '1', '1'],
        //   cr: '',
        //   wr: '',
        // },
        // {
        //   name: 'Duration',
        //   amount: ['6s', '6s', '6s', '6s', '6s'],
        //   cr: '',
        //   wr: '',
        // },
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
        '• Heal 110% (+4%)',
      ],
    },
    {
      name: 'Triple X-Retsu',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'X-Retsu (Ult) automatically chains to 3 targets.',
        '• Damage 80%',
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
      color: '#6393F9',
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
    },
    {
      name: 'Night Shadow Taka',
      color: '#FADA5E',
      type: 'Limited Edition',
      image: 'Taka_Night_Shadow_LE',
    },
    {
      name: 'Wu Xing Flame Taka',
      color: 'red',
      type: 'Special Edition',
      image: 'Taka_Wu_Xing_Flame',
    },
  ],
}
