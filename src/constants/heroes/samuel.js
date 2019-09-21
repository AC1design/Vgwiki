export const frontmatter = {
  name: 'Samuel',
  type: ['LANE', 'MAGE'],
  role: ['LANE'],
  path: '/Samuel',
  description: 'Dark zone-control mage who can put enemies to sleep.',
  spotlight: 'S01AKcC0TR0',
  stats: [
    { name: 'HEALTH', value: '652 - 2040', color: '#4eec8b' },
    { name: 'H. REGEN', value: '4.01 - 7.42', color: '#4eec8b' },
    { name: 'ENERGY', value: '290 - 620', color: '#5bbcff' },
    { name: 'ENG REGEN', value: '2.15 - 7.1', color: '#5bbcff' },
    { name: 'WP DAMAGE', value: '78 - 148', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 129.7%', color: '#f48596' },
    { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '6.3', color: '#e19efb' },
    { name: 'MOVE SPD', value: '3.8', color: '#e19efb' },
  ],
  model: [{ image: 'Samuelblurred' }, { tmodel: 'Samuel' }],
  skills: [
    {
      name: 'CORRUPTED GENIUS',
      type: 'Perk',
      image: 'Samuel-P',
      text: [
        'Every 6s, Samuels next basic attack fires a bolt of dark power that deals bonus crystal damage and draws health & energy back to Samuel.',
        '• Crystal Damage: 50-160 (level 1-12).',
        '• Healing: 10-120 (level 1-12).',
        '• Recharge: 30-200 (level 1-12) energy.',
        '• The restorative powers are only 25% as effective against non-heroes.',
      ],
    },
    {
      name: 'MALICE & VERDICT',
      type: 'A ABILITY',
      image: 'Samuel-A',
      text: [
        'Samuel fires two bolts from his wands at a target location, impacting the first enemy hit. Samuel can move between the shots.',
        'If Samuel is standing inside the energy field from Drifting Dark, these bolts move faster, travel farther and deal additional area damage. In addition, the cooldown is significantly reduced.',
        '• Empowered shots deal less damage to minions.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['4s', '4s', '4s', '4s', '4s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['40', '45', '50', '55', '60'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['60', '90', '120', '150', '210'],
          cr: '90%',
          wr: ' ',
        },
        {
          name: 'Empowered Damage',
          amount: ['75', '105', '135', '165', '225'],
          cr: '100%',
          wr: ' ',
        },
        {
          name: 'Range',
          amount: ['10', '10', '10', '10', '10'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'DRIFTING DARK',
      type: 'B ABILITY',
      image: 'Samuel-B',
      text: [
        'Samuel creates a large field of darkness that slowly drifts forward, damaging enemies who stand inside it. If Samuel also stands inside, Malice & Verdict is greatly empowered and he heals for a small amount for each affected target.',
        '• The field will disappear if Samuel moves more than 16 meters away from it.',
        '• Deals 50% less damage to minions.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['26s', '26s', '26s', '26s', '26s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['120', '160', '200', '240', '280'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Range',
          amount: ['14', '18', '22', '26', '30'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage/sec',
          amount: ['20', '30', '40', '50', '60'],
          cr: '10%',
          wr: ' ',
        },
        {
          name: 'Heal/Sec Per Target',
          amount: ['2', '4', '6', '8', '10'],
          cr: '10%',
          wr: ' ',
        },
        {
          name: 'Heal/Sec Per Minion',
          amount: ['1', '2', '3', '4', '5'],
          cr: '10%',
          wr: ' ',
        },
      ],
    },
    {
      name: 'OBLIVION',
      type: 'ULTIMATE',
      image: 'Samuel-C',
      text: [
        'After a short delay, Samuel summons a phantasm at the target location, which puts nearby enemies to sleep. Enemies inflicted are unable to move or act.',
        '• Dealing direct damage to a sleeping enemy with an attack or ability will wake them up.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['90s', '75s', '60s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['100', '130', '160'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['200', '325', '450'],
          cr: '100%',
          wr: ' ',
        },
        {
          name: 'Duration',
          amount: ['2s', '2.5s', '3s'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Power Siphon',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Corrupted Genius (Perk) occurs more frequently.',
        '• Heal 150% (+10%)',
        '• Charge Time 2s',
      ],
      image: 'Samuel_Rare',
    },
    {
      name: 'Unwaking Nightmare',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Enemies put to sleep by Oblivion (Ult) will not wake up when taking damage.',
        '• Cooldown 70% (-2.5%)',
        '• Sleep Duration 65% (+5%)',
      ],
      image: 'Samuel_Epic',
    },
    {
      name: 'Viscous Darkness',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Drifting Dark (B) moves slower and slows enemies caught within.',
        '• Heal 150% (+25%)',
        '• Damage 150% (+25%)',
        '• Duration 6s (+1s)',
        '• Slow Strength 50%',
      ],
      image: 'Samuel_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Apprentice Samuel',
      type: 'Rare',
      image: 'Samuel_Apprentice',
    },
    {
      color: '#c78cff',
      name: 'Evolution Samuel',
      type: 'Epic',
      image: 'Samuel_Evolution',
    },
  ],
}
