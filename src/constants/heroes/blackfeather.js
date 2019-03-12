export const frontmatter = {
  name: 'Blackfeather',
  type: ['LANE', 'ASSASSIN'],
  role: ['LANE'],
  path: '/Blackfeather',
  description:
    'Evasive fighter who excels at chasing and cleaning up fragile enemies.',
  spotlight: 'd7-fyE9P7QI',
  stats: [
    { name: 'HEALTH', value: '657 - 2387', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '-', color: '#4eec8b' },
    { name: 'ENERGY', value: '-', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: '-', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '81 - 160', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 122%', color: '#f48596' },
    { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '1.8', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '3.5', color: '#e19efb' },
  ],
  model: [{ image: 'Blackfeatherblurred' }, { tmodel: 'Blackfeather' }],
  skills: [
    {
      name: 'HEARTTHROB',
      type: 'Perk',
      image: 'Blackfeather-P',
      text: [
        "Blackfeather's attacks and abilities apply Heartthrob stacks to enemies. Any time stacks are added or refreshed, Blackfeather deals bonus crystal damage for each stack already on the target.",
        '• Bonus damage: 5-10 (level 1-12) (+15% of crystal power).',
        '• Mas 2 stacks on minions and monsters, 5 stacks on heroes and objectives.',
        '• Stacks appear as broken hearts around enemies.',
        '• Instead of energy, Blackfeather uses Focus for his abilities. This is capped at 100 and naturally regenerates 10 per second. Blackfeather also recovers and additional 10 focus for each basic attack he lands.',
      ],
    },
    {
      name: 'FEINT OF HEART',
      type: 'A ABILITY',
      text: [
        'Blackfeather lunges to his target with a thrust of his sword, then gains 2.2 bonus movement speed for 3s.',
        "• If the target has full Heartthrob stacks, it deals bonus weapon damage based on target's missing health.",
        '• Overdrive: At max rank, the cooldown for Feint of Heart is reset if the target is killed within 0.5s.',
        '• Execute damage is capped against non-heroes.',
        '• This ability triggers basic-attack effects.',
      ],
      image: 'Blackfeather-A',
      stats: [
        {
          name: 'Cooldown',
          amount: ['9s', '8.5s', '8s', '7.5s', '7s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['0', '0', '0', '0', '0'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage',
          amount: ['60', '95', '130', '165', '200'],
          cr: '50%',
          wr: '100%',
        },
        {
          name: 'Missing Health %',
          amount: ['15%', '15%', '15%', '15%', '25%'],
          cr: '',
          wr: '',
        },
        {
          name: 'Focus Cost',
          amount: ['60', '60', '60', '60', '60'],
          cr: '',
          wr: '',
        },
        {
          name: 'Stacks',
          amount: ['1', '2', '3', '4', '5'],
          cr: '',
          wr: '',
        },
      ],
    },
    {
      name: 'ON POINT',
      type: 'B ABILITY',
      image: 'Blackfeather-B',
      text: [
        'Blackfeather pierces all enemies in a line, damaging them.',
        '• Overdrive: At max rank, On Point gains increased range.',
        '• If this hits at least one enemy hero, Blackfeather also gains a 1.2s barrier that scales with 5% of his bonus health and recovers 40 focus.',
        '• The amount of focus recovered is further increased with 2% of his max energy and 50% of his Energy Regen.',
        '• Deals less damage to minions.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['6s', '5.5s', '5s', '4.5s', '3.5s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['0', '0', '0', '0', '0'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage',
          amount: ['80', '120', '160', '200', '240'],
          cr: '180%',
          wr: '120%',
        },
        {
          name: 'Focus Cost',
          amount: ['60', '60', '60', '60', '40'],
          cr: '',
          wr: '',
        },
        {
          name: 'Range',
          amount: ['7', '7', '7', '7', '9'],
          cr: '',
          wr: '',
        },
        {
          name: 'Stacks',
          amount: ['125', '175', '225', '275', '325'],
          cr: '',
          wr: '',
        },
      ],
    },
    {
      name: 'ROSE OFFENSIVE',
      type: 'ULTIMATE',
      image: 'Blackfeather-C',
      text: [
        'Blackfeather dashes and slashes all enemies along his path.',
        '• During the dash, Blackfeather is immune to negative effects and has fortified health.',
        '• This ability has 2 charges.',
        '• This ability triggers basic- attack effects.',
      ],
      stats: [
        {
          name: 'Charge Time',
          amount: ['40s', '30s', '20s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['0', '0', '0'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage',
          amount: ['100', '150', '200'],
          cr: '50%',
          wr: '100%',
        },
        {
          name: 'Cooldown',
          amount: ['0.2s', '0.2s', '0.2s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Focus Cost',
          amount: ['60', '40', '20'],
          cr: '',
          wr: '',
        },
        {
          name: 'Fortified Health',
          amount: ['75', '125', '175'],
          cr: '',
          wr: '',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Hummingbird Heart',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Heartthrob (Perk) lasts 4s longer on targets. Blackfeather passively gains weapon power and attack speed.',
        '• Passive Attack Speed +20% (+2%)',
        '• Passive Weapon Power +5% (+1%)',
      ],
      image: 'Blackfeather_Rare',
    },
    {
      name: 'Point Guard',
      type: 'Epic',
      color: '#7A02EA',
      text: [
        'Landing On Point (B) on an enemy hero grants a stronger barrier to nearby allies for 2s.',
        '• Barrier 150% (+10%)',
      ],
      image: 'Blackfeather_Epic',
    },
    {
      name: 'Elusiveness',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Rose Offensive (Ult) has 2 additional charges.',
        '• Damage 100% (+25%)',
        '• Focus Cost 5%',
        '• Charge Time 50% (-7.5%)',
      ],
      image: 'Blackfeather_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Dynasties Blackfeather',
      type: 'Rare',
      image: 'Blackfeather_Dynasties_R',
    },
    {
      color: '#FF9000',
      name: 'Champion Blackfeather',
      type: 'Legendary',
      image: 'Blackfeather_Champion_L',
    },
    {
      color: 'red',
      name: 'Love Bites Blackfeather',
      type: 'Special Edition',
      image: 'Blackfeather_Love_Bites_SE',
      price: '500',
      opals: true,
    },
    {
      color: 'red',
      name: 'Summer Party Blackfeather',
      type: 'Special Edition',
      image: 'Blackfeather_Summer_Party',
      price: '300',
      opals: true,
    },
  ],
}
