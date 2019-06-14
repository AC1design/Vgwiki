export const frontmatter = {
  name: 'Grace',
  type: ['CAPTAIN', 'PROTECTOR'],
  role: ['CAPTAIN'],
  path: '/Grace',
  description: 'A powerful paladin with a massive heal.',
  spotlight: 'fjSbPL3KaqU',
  stats: [
    { name: 'HEALTH', value: '740 - 2483', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '3.72 - 8.34', color: '#4eec8b' },
    { name: 'ENERGY', value: '268 - 653', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: '1.92 - 4.23', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '73 - 152', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '35 - 100', color: '#f6ee71' },
    { name: 'SHIELD', value: '25 - 75', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '2.7', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '4.1', color: '#e19efb' },
  ],
  model: [{ image: 'Graceblurred' }, { tmodel: 'Grace' }],
  skills: [
    {
      name: 'RETRIBUTION',
      type: 'Perk',
      image: 'Grace-P',
      text: [
        'Grace chains her normal basic attack into a ground slam, dealing bonus weapon damage and slowing enemies in a wide area. If any enemies are hit by the ground slam, her ability cooldowns are reduced by 1.2s.',
        "All effects in Grace's heroic perk and abilities are capped at 200 crystal power excluding damage and healing.",
        '• Bonus damage: 10-98 (level 1-12) (+5% weapon power).',
        '• Slow Strength: 75%',
        '• Slow duration: 0.6s (+0.3 crystal power)',
        '• Deals 50% less damage to minions.',
      ],
    },
    {
      name: 'BENEDICTION',
      type: 'A ABILITY',
      image: 'Grace-A',
      text: [
        'Grace dashes to her target, striking them with an empowered Retribution attack. Nearby allies instantly gain a directional holy shield that continually faces the target, while Grace gains a full holy shield that protects her from all sides.',
        '• Holy Shield (status effect): reduce incoming damage by 40% (+5% of crystal power).',
        '• Passive: Upon learning this ability, Grace permanently reduces all damage she receives by 8% (+5% of crystal power).',
        '• Overdrive: This ability is refreshed upon casting Divine Intervention.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['12s', '12s', '12s', '12s', '10s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['60', '60', '60', '60', '60'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Range',
          amount: ['7', '7', '7', '7', '9'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Bonus Damage',
          amount: ['20', '40', '60', '80', '120'],
          cr: '100%',
          wr: '15%',
        },
        {
          name: 'Duration (Self)',
          amount: ['3s', '3s', '3s', '3s', '3s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Duration (Ally)',
          amount: ['2s', '2s', '2s', '2s', '2s'],
          cr: '0,6%',
          wr: ' ',
        },
      ],
    },
    {
      name: 'HOLY NOVA',
      type: 'B ABILITY',
      image: 'Grace-B',
      text: [
        'After a short delay, Grace knocks enemies into the air, disabling them for 1s.',
        '• Overdrive: Grace gains immunity to negative effects when casting this ability.',
        '• If this attack hits at least one enemy, Grace will immediately recover from the ability.',
        '• Deals less damage to minions.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['10s', '10s', '10s', '10s', '8s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['80', '90', '100', '110', '120'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['210', '290', '370', '450', '530'],
          cr: '200%',
          wr: ' ',
        },
      ],
    },
    {
      name: 'DIVINE INTERVENTION',
      type: 'ULTIMATE',
      image: 'Grace-C',
      text: [
        'Grace instantly surrounds herself and her target with a full holy shield and begins channeling for 1.8s after which Grace’s target receives a massive heal.',
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
          amount: ['0', '0', '0'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Healing Strength',
          amount: ['400', '700', '1000'],
          cr: '200%',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Seal of Retribution',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Retribution (Perk) deal bonus crystal damage. Grace passively gains crystal power.',
        '• Damage +100% (+4%)',
        '• Passive Crystal Power +15% (+2.5%)',
      ],
      image: 'Grace_Rare',
    },
    {
      name: 'Double Benediction',
      type: 'Epic',
      color: '#7A02EA',
      text: [
        'Benediction (A) has 1 additional charge.',
        '• Damage Reduction 50% (+3%)',
        '• Cooldown 80% (-3.5%)',
      ],
      image: 'Grace_Epic',
    },
    {
      name: 'United Front',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Divine Intervention (Ult) also heals Grace.',
        '• Heal 75% (+15%)',
        '• Cooldown 80% (-7.5%)',
      ],
      image: 'Grace_Legendary',
    },
  ],
  skins: [
    {
      color: '#7A02EA',
      name: 'Valkyrie Grace',
      type: 'Epic',
      image: 'Grace_Valkyrie',
    },
    {
      color: '#FF9000',
      name: 'Tea Party Grace',
      type: 'Legendary',
      image: 'Grace_Tea_Party',
    },
  ],
}
