export const frontmatter = {
  name: 'Adagio',
  type: ['CAPTAIN', 'PROTECTOR'],
  role: ['CAPTAIN'],
  path: '/Adagio',
  description: 'Team healer and damage enhancer with a large area stun.',
  spotlight: 'TQx1TVGANF4',
  stats: [
    { name: 'HEALTH', value: '685 - 2308', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '2.18 - 5.04', color: '#4eec8b' },
    { name: 'ENERGY', value: '400 - 785', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: '2.67 - 5.2', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '75 - 117', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 122%', color: '#f48596' },
    { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '6.0', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '3.8', color: '#e19efb' },
  ],
  model: [{ image: 'Adagioblurred' }, { tmodel: 'Adagio' }],
  skills: [
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Adagio-P-Arcane-Renewal.mp4',
      name: 'ARCANE RENEWAL',
      type: 'Perk',
      image: 'Adagio-P',
      text: [
        'Whenever enemies burning with Arcane Fire take damage from any source, Adagio regenerates 25% of that damage as energy.',
      ],
      stats: [],
    },

    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Adagio-A-Gift-of-Fire.mp4',
      name: 'GIFT OF FIRE',
      type: 'A ABILITY',
      text: [
        "Heals a target ally, then splashes Arcane Fire onto nearby enemies. If Adagio heals himself, he'll also apply a heavy slow to nearby enemies. Arcane Fire (status effect): Burns the target every second and causes Adagio's other abilities to deal more damage.",
        '• Burst heals the target instantly, followed by a gradual heal over the next few seconds.',
        "• Burst Heal is increased by 9% of Adagio's bonus health.",
        '• When cast on self, slows nearby enemies by 70% for 0.7s.',
        '• Resets basic-attack cooldown on activation.',
      ],
      image: 'Adagio-A',
      stats: [
        {
          name: 'Cooldown',
          amount: ['10s', '9.5s', '9s', '8.5s', '8s'],
          cr: '  ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['120', '135', '150', '165', '180'],
          cr: '  ',
          wr: ' ',
        },
        {
          name: 'Fire Damage/s',
          amount: ['10', '20', '30', '40', '60'],
          cr: '30%',
          wr: ' ',
        },
        {
          name: 'Fire Duration',
          amount: ['5s', '5.5s', '6s', '6.5s', '7s'],
          cr: '  ',
          wr: ' ',
        },
        {
          name: 'Heal Duration',
          amount: ['3s', '3s', '3s', '3s', '3s'],
          cr: '  ',
          wr: ' ',
        },
        {
          name: 'Burst Heal',
          amount: ['40', '60', '80', '100', '140'],
          cr: '30%',
          wr: ' ',
        },
        {
          name: 'Heal/s',
          amount: ['10', '20', '30', '40', '50'],
          cr: '10%',
          wr: ' ',
        },
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Adagio-B-Agent-of-Wrath.mp4',
      name: 'AGENT OF WRATH',
      type: 'B ABILITY',
      image: 'Adagio-B',
      text: [
        "Temporarily boosts an allied hero's next several basic attacks for 6s.",
        '• Deals bonus damage to enemies afflicted by Arcane Fire.',
        '• Bonus damage is increased if Adagio casts this spell on himself.',
        '• Resets basic-attack cooldown on activation.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['9s', '9s', '9s', '9s', '9s'],
          cr: '  ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['105', '130', '155', '180', '205'],
          cr: '  ',
          wr: ' ',
        },
        {
          name: 'Number of Attacks',
          amount: ['4', '4', '4', '4', '6'],
          cr: '  ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['30', '50', '70', '90', '130'],
          cr: '60%',
          wr: ' ',
        },
        {
          name: 'Arcane Fire Bonus',
          amount: ['5', '15', '25', '35', '55'],
          cr: '60%',
          wr: ' ',
        },
        {
          name: 'Self-cast Bonus',
          amount: ['5', '10', '15', '20', '30'],
          cr: '30%',
          wr: ' ',
        },
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Adagio-C-Verse-of-Judgement.mp4',
      name: 'VERSE OF JUDGEMENT',
      type: 'ULTIMATE',
      image: 'Adagio-C',
      text: [
        'Adagio channels for 2s then deals heavy damage to all enemies in a wide ring around him. Enemies burning with Arcane Fire are also stunned. Adagio temporarily gains fortified health while channeling.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['100s', '80s', '60s'],
          cr: '  ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['140', '190', '240'],
          cr: '  ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['800', '1000', '1200'],
          cr: '100%',
          wr: ' ',
        },
        {
          name: 'Fortified Health',
          amount: ['300', '500', '800'],
          cr: '  ',
          wr: ' ',
        },
        {
          name: 'Range',
          amount: ['9', '9', '9'],
          cr: '  ',
          wr: ' ',
        },
        {
          name: 'Stun Duration',
          amount: ['1.6s', '2.3s', '3.0s'],
          cr: '  ',
          wr: ' ',
        },
        {
          name: 'Channel Time',
          amount: ['2', '2', '2'],
          cr: '  ',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'GIFT OF LIFE',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Gift of Fire (A) grants fortified health equal to a portion of its burst heal. Shorter cooldown.',
        '• Heal to Fort Health 80% (+10%)',
        '• Cooldown 90% (-1%)',
      ],
      image: 'Adagio_Rare',
    },
    {
      name: 'Avenging Wrath',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Core Collapse (B) creates four black-hole collapses. Longer cooldown and lower damage.',
        '• Dmg to Burning Targets 165% (+15%)',
        '• Charge Time 95% (-5%)',
      ],
      image: 'Adagio_Epic',
    },
    {
      name: 'Healing Verse',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        "Verse of Judgement (Ult) heals all of Adagio's allies within its radius. Shorter cooldown but lower damage.",
        '• Damage 60% (+10%)',
        '• Cooldown 55% (-7.5%)',
        '• Max Health to Heal 65% (+15%)',
      ],
      image: 'Adagio_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Spiderwing Adagio',
      type: 'Rare',
      image: 'Adagio_Dark_Parade_I_R',
    },
    {
      color: '#c78cff',
      name: 'Dark Parade Adagio',
      type: 'Epic',
      image: 'Adagio_Dark_Parade_II_E',
    },
    {
      color: '#FF9000',
      name: 'Crimson Song Adagio',
      type: 'Legendary',
      image: 'Adagio_Dark_Parade_III_L',
    },
    {
      color: '#c78cff',
      name: 'Seraphim Adagio',
      type: 'Epic',
      image: 'Adagio_Seraphim_E',
    },
    {
      color: '#6393F9',
      name: "Ra'dagio",
      type: 'Rare',
      image: 'Adagio_Ra_Rare',
    },
  ],
}
