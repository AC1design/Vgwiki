export const frontmatter = {
  name: 'Koshka',
  type: ['JUNGLE', 'ASSASSIN'],
  role: ['JUNGLE'],
  path: '/Koshka',
  description:
    'Hit-and-run assassin who can pin down enemies with a long stun.',
  spotlight: 'r73Ezze8OLE',
  wallpaper: [
    {
      name: 'Koshka',
      link: 'https://imgur.com/a/lwa9fC3'
    }
  ],
  stats: [
    { name: 'HEALTH', value: '711 - 2367', color: '#4eec8b' },
    { name: 'H. REGEN', value: '3.54 - 6.95', color: '#4eec8b' },
    { name: 'ENERGY', value: '280 - 643', color: '#5bbcff' },
    { name: 'ENG REGEN', value: '1.87 - 4.29', color: '#5bbcff' },
    { name: 'WP DAMAGE', value: '79 - 164', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 108.8%', color: '#f48596' },
    { name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '1.7', color: '#e19efb' },
    { name: 'MOVE SPD', value: '3.9', color: '#e19efb' },
  ],
  model: [{ image: 'Koshkablurred' }, { tmodel: 'Koshka' }],
  skills: [
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Koshka-P-Bloodrush.mp4',
      name: 'BLOODRUSH',
      type: 'Perk',
      image: 'Koshka-P',
      text: [
        'Koshka gains 2 move speed for 2.5s whenever she deals damage with her abilities.',
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Koshka-A-Pouncy-Fun.mp4',
      name: 'POUNCY FUN',
      type: 'A ABILITY',
      image: 'Koshka-A',
      text: [
        'Koshka pounces to the target enemy and deals damage.',
        '• This hability resets her basic-attack cooldown upon activation.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['6s', '6s', '6s', '6s', '5.5s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['30', '35', '40', '45', '50'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['10', '40', '70', '100', '160'],
          cr: '80%',
          wr: '100%',
        },
      ],
    },
    {
      video: '',
      name: 'TWIRLY DEATH',
      type: 'B ABILITY',
      image: 'Koshka-B',
      text: [
        'Koshka twirls, damaging all enemies around her.',
        '• Her next 2 basic attacks within 4s deal bonus crystal damage and have reduced cooldown.',
        '• Koshka gains barrier per enemy hero hit for 2s.',
        '• This hability resets her basic-attack cooldown upon activation.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['6s', '6s', '6s', '6s', '5s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['30', '40', '50', '60', '70'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['60', '100', '140', '180', '260'],
          cr: '80%',
          wr: ' ',
        },
        {
          name: 'Bonus Damage',
          amount: ['40', '70', '100', '130', '190'],
          cr: '150%',
          wr: '100%',
        },
        {
          name: 'Barrier',
          amount: ['25', '45', '65', '85', '125'],
          cr: '30%',
          wr: ' ',
        },
        {
          name: 'Cooldown',
          amount: ['1s', '1s', '1s', '1s', '1s'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      video: '',
      name: 'YUMMY CATNIP FRENZY',
      type: 'ULTIMATE',
      image: 'Koshka-C',
      text: [
        'Koshka leaps at her target, then launches into a flurry of slashes, stunning the target for the entire 2.2s duration.',
        '• Koshka will stop slashing if the stun is blocked (by Reflex Block, for example)',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['80s', '65s', '50s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['120', '150', '180'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['350', '575', '800'],
          cr: '120%',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Frenzied',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Basic attacks reduce the cooldown of Koshka’s abilities.',
        '• Ability Damage 75% (+2.5%)',
        '• Pouncy Fun Reduction 10% (+1%)',
        '• Twirly Death Reduction 15% (+1%)',
        '• Yummy Catnip Frenzy Reduction 5% (+0.5%)',
      ],
      image: 'Koshka_Rare',
    },
    {
      name: 'Twirly Life',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Twirly Death (B) grants Koshka additional health barrier.',
        '• Max Health to Barrier 13% (+3%)',
        '• Damage 65% (+3%)',
        '• Barrier Duration 2s',
      ],
      image: 'Koshka_Epic',
    },
    {
      name: 'Slashy Play Time!',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Yummy Catnip Frenzy (Ult) activates quicker and stuns nearby enemies.',
        '• Damage 35% (+10%)',
        '• Cooldown 55% (-7.5%)',
      ],
      image: 'Koshka_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Kandy Claw Koshka',
      type: 'Rare',
      image: 'Koshka_Kandi_Twirl_I_R',
    },
    {
      color: '#c78cff',
      name: 'Kandy Rave Koshka',
      type: 'Epic',
      image: 'Koshka_Kandi_Twirl_II_E',
    },
    {
      color: '#FF9000',
      name: 'Kandy Twirl Koshka',
      type: 'Legendary',
      image: 'Koshka_Kandi_Twirl_III_L',
    },
    {
      color: '#c78cff',
      name: 'Shool Days Koshka',
      type: 'Epic',
      image: 'Koshka_School_Days',
    },
    {
      color: 'red',
      name: 'Red Lantern Koshka',
      type: 'Special Edition',
      image: 'Koshka_Red_Lantern_SE',
      price: '300',
      opals: true,
    },
    {
      color: '#FADA5E',
      name: 'Red Lantern Koshka',
      type: 'Limited Edition',
      image: 'Koshka_Red_Lantern_LE',
    },
    {
      color: 'red',
      name: 'Red Lantern Lotus Koshka',
      type: 'Special Edition',
      image: 'Koshka_Red_Lantern_Lotus',
      price: '300',
      opals: true,
    },
  ],
}
