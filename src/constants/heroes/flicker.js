export const frontmatter = {
  name: 'Flicker',
  type: ['CAPTAIN', 'PROTECTOR'],
  role: ['CAPTAIN'],
  path: '/Flicker',
  description: 'Trickster who can make the entire team invisible.',
  spotlight: 'xj7Lj295kXM',
  stats: [
    { name: 'HEALTH', value: '797 - 2648', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '3.85 - 3.85', color: '#4eec8b' },
    { name: 'ENERGY', value: '295 - 757', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: '1.94 - 4.69', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '77 - 155', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '35 - 100', color: '#f6ee71' },
    { name: 'SHIELD', value: '25 - 75', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '1.5', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '3.5', color: '#e19efb' },
  ],
  model: [{ image: 'Flickerblurred' }, { tmodel: 'Flicker' }],
  skills: [
    {
      name: 'WILLOW WHISPER',
      type: 'Perk',
      image: 'Flicker-P',
      text: [
        'Flicker gains stealth and a move speed bonus when in brush for 2s. Flicker can then leave the brush and remain stealthed for 3s.',
        '• Flicker has true sight while stealthed.',
        '• Taking damage, attacking or using abilities removes stealth.',
      ],
    },
    {
      name: 'BINDING LIGHT',
      type: 'A ABILITY',
      text: [
        'Flicker commands his fairies to swarm a target location for 2s, dealing damage to enemies within it. When the effect expires, fairy light roots any enemy heroes still within the area.',
      ],
      image: 'Flicker-A',
      stats: [
        {
          name: 'Cooldown',
          amount: ['6s', '5.5s', '5s', '4.5s', '4s'],
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
          name: 'Damage/sec',
          amount: ['60', '120', '180', '240', '300'],
          cr: '50%',
          wr: '',
        },
        {
          name: 'Range',
          amount: ['8', '8', '8', '8', '8'],
          cr: '',
          wr: '',
        },
        {
          name: 'Root Duration',
          amount: ['1s', '1s', '1s', '1s', '1.5s'],
          cr: '',
          wr: '',
        },
      ],
    },
    {
      name: 'FAIRY DUST',
      type: 'B ABILITY',
      image: 'Flicker-B',
      text: [
        'Flicker swirls fairy dust around him for 3s, slowing and dealing damage to anyone inside the dusted area. After 3s, the dust ignites, dealing a burst of damage.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['14s', '13s', '12s', '11s', '9s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['60', '70', '80', '90', '100'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage/sec',
          amount: ['20', '40', '60', '80', '120'],
          cr: '40%',
          wr: '',
        },
        {
          name: 'Detonate Damage',
          amount: ['60', '120', '180', '240', '360'],
          cr: '100%',
          wr: '',
        },
        {
          name: 'Range',
          amount: ['4', '4', '4', '4', '4'],
          cr: '',
          wr: '',
        },
        {
          name: 'Slow',
          amount: ['35%', '40%', '45%', '50%', '60%'],
          cr: '',
          wr: '',
        },
      ],
    },
    {
      name: 'MOONCLOAK',
      type: 'ULTIMATE',
      image: 'Flicker-C',
      text: [
        'After 1s, Flicker and his allies temporarily gain stealth and a move speed-bonus.',
        '• The stealth will break when a hero uses an ability, attacks or takes damage.',
        '• All heroes affected by this ability will have true sight while stealthed.',
        "• After a short time, that hero will stealth again so long as Mooncloak's duration has not expired.",
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['120s', '100s', '80s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['100', '100', '100'],
          cr: '',
          wr: '',
        },
        {
          name: 'Duration',
          amount: ['8s', '10s', '12s'],
          cr: '',
          wr: '',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Swarming Light',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Binding Light (A) has 1 additional charge.',
        '• Damage 90% (+2.5%)',
        '• Cooldown 90% (-2%)',
      ],
      image: 'Flicker_Rare',
    },
    {
      name: 'Binding Dust',
      type: 'Epic',
      color: '#7A02EA',
      text: [
        'Fairy Dust (B) roots enemies caught within its detonation and grants Flicker move speed while active.',
        '• Damage 80% (+5%)',
        '• Bonus Move Speed 1.5 (+0.15)',
        '• Root Duration 1.2s',
      ],
      image: 'Flicker_Epic',
    },
    {
      name: 'Fairy Healing',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Flicker’s stealth also greatly increases health regeneration. Flicker passively gains crystal power.',
        '• Max Health to Heal 7.5% (+2.5%)',
        '• Passive Crystal Power +15% (+5%)',
      ],
      image: 'Flicker_Legendary',
    },
  ],
  skins: [
    {
      color: '#7A02EA',
      name: 'Red Lantern Flicker',
      type: 'Epic',
      image: 'Flicker_Red_Lantern_E',
    },
    {
      color: '#7A02EA',
      name: 'Dr Franken Flicker',
      type: 'Epic',
      image: 'Flicker_DrFrankenFlicker_Epic',
    },
    {
      color: 'Red',
      name: 'Black Cat Flicker',
      type: 'Special Edition',
      image: 'Flicker_Blackcat',
    },
  ],
}
