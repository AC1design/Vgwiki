export const frontmatter = {
  name: 'Ardan',
  type: ['CAPTAIN', 'PROTECTOR'],
  role: ['CAPTAIN'],
  path: '/Ardan',
  description:
    'Protects allies with barriers and traps enemies inside a large cage.',
  spotlight: 'NDKx8m_pfDU',
  stats: [
    { name: 'HEALTH', value: '838 - 2638', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '3.39 - 7.24', color: '#4eec8b' },
    { name: 'ENERGY', value: '-', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: '-', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '80 - 140', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '35 - 100', color: '#f6ee71' },
    { name: 'SHIELD', value: '25 - 75', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '1.8', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '3.9', color: '#e19efb' },
  ],
  model: [{ image: 'Ardanblurred' }, { tmodel: 'Ardan' }],
  skills: [
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Ardan-P-Julias-Gift.mp4',
      name: "JULIA'S GIFT",
      type: 'Perk',
      image: 'Ardan-P',
      text: [
        'Ardan benefits from purchasing health items.',
        '• Whenever Ardan takes damage, he heals for 0.8% of his missing health, but no more than 75% of the damage taken.',
        '• Instead of energy, Ardan uses a yellow meter called Vengeance. Vengeance builds over time and can also be gained with basic attacks, crtical strikes and abilities.',
        '• Vengeance per attack 5%',
        "• Because Ardan doesn't need regular energy, 5% of bonus energy and 50% of bonus energy recharge are converted to crystal power.",
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Ardan-A-Vanguard.mp4',
      name: 'VANGUARD',
      type: 'A ABILITY',
      text: [
        'Ardan dashes to protect an ally, granting them a 4s barrier and a burst of move speed. This also slows and damages nearby enemies.',
        '• Overdrive: At max rank, Vanguard grants 50% Vengeance when cast on an ally.',
        '• Using this ability on himself results in only half the barrier, speed boost and Vengeance gain.',
        "• Barrier scales up with 30% of Ardan's bonus health.",
        '• Any time this ally takes damage, Ardan gains Vengeance.',
      ],
      image: 'Ardan-A',
      stats: [
        {
          name: 'Cooldown',
          amount: ['17s', '16s', '15s', '14s', '12s'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['0', '0', '0', '0', '0'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['60', '100', '140', '180', '220'],
          cr: '120%',
          wr: ' ',
        },
        {
          name: 'Range',
          amount: ['7', '7', '7', '7', '9'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Barrier',
          amount: ['80', '120', '160', '200', '240'],
          cr: '',
          wr: ' ',
        },
      ],
    },
    {
      video:'https://www.vainglorygame.com/wp-content/uploads/2015/05/Ardan-B-Blood-for-Blood.mp4',
      name: 'BLOOD FOR BLOOD',
      type: 'B ABILITY',
      image: 'Ardan-B',
      text: [
        'Ardan rushes forward and punches his target.',
        '• Overdrive: At max rank, Blood for Blood deals additional 15% damage.',
        '• Blood for Blood can only be activated when Ardan has 100% Vengeance and will consume all of it.',
        '• Blood for Blood triggers basic-attack effects.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['20s', '19s', '18s', '17s', '16s'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['0', '0', '0', '0', '0'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['60', '120', '180', '250', '360'],
          cr: '40%',
          wr: '100%',
        },
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/C-Ardan-Gauntlet-Large.mp4',
      name: 'GAUNTLET',
      type: 'ULTIMATE',
      image: 'Ardan-C',
      text: [
        'Ardan leaps to the target location and projects a perimeter around him. Enemy heroes who touch or cross the perimeter are stunned and take crystal damage.',
        '• If Ardan leaves the perimeter, it is immediately destroyed.',
        '• Ardan instantly gains full Vengeance upon using this ability.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['120s', '110s', '100s'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['0', '0', '0'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['400', '500', '600'],
          cr: '250%',
          wr: ' ',
        },
        {
          name: 'Stun Duration',
          amount: ['0.6s', '0.9s', '1.2s'],
          cr: '',
          wr: ' ',
        },
        {
          name: 'Duration',
          amount: ['6s', '6s', '6s'],
          cr: '',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Vanguardian',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Vanguard (A) provides a full-strength barrier when self-cast.',
        '• Barrier 120% (+5%)',
        '• Damage 20% (+1%)',
        '• Cooldown 95% (-1%)',
      ],
      image: 'Ardan_Rare',
    },
    {
      name: 'Heavy Hitter',
      type: 'Epic',
      color: '#7A02EA',
      text: [
        'Blood for Blood (B) deals much more damage but has 3.5 shorter range.',
        '• Damage 140% (+15%)',
        '• Cooldown 150% (-3%)',
      ],
      image: 'Ardan_Epic',
    },
    {
      name: 'Knockout Punch',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Blood for Blood (B) also knocks back the target 10 meters.',
        '• Damage 110% (+20%)',
        '• Cooldown 100% (+10%)',
      ],
      image: 'Ardan_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Storm Lord Ardan',
      type: 'Rare',
      image: 'Ardan_Stormlord_I_R',
    },
    {
      color: '#7A02EA',
      name: 'Storm Vigil Ardan',
      type: 'Epic',
      image: 'Ardan_Stormlord_II_E',
    },
    {
      color: '#FF9000',
      name: 'Redemption Ardan',
      type: 'Legendary',
      image: 'Ardan_Stormlord_III_L',
    },
    {
      color: '#7A02EA',
      name: 'Gladiator Ardan',
      type: 'Epic',
      image: 'Ardan_Gladiator_E',
    },
    {
      color: '#7A02EA',
      name: 'Cagefighter Ardan',
      type: 'Epic',
      image: 'Ardan_Cagefighter_Epic',
    },
    {
      color: '#FADA5E',
      name: 'Contender Ardan',
      type: 'Limited Edition',
      image: 'Ardan_Contender',
    },
  ],
}
