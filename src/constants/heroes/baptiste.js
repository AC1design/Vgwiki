export const frontmatter = {
  name: 'Baptiste',
  type: ['JUNGLE', 'MAGE'],
  role: ['JUNGLE'],
  path: '/Baptiste',
  description: 'Mid-range mage who inflicts fear on foes.',
  spotlight: '0MG8X_w4EFI',
  stats: [
    { name: 'HEALTH', value: '739 - 2323', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '2.38 - 5.35', color: '#4eec8b' },
    { name: 'ENERGY', value: '273- 636', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: '2.17 - 4.26', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '78 - 167', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '2.8', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '3.9', color: '#e19efb' },
  ],
  model: [{ image: 'Baptisteblurred' }, { tmodel: 'Baptiste' }],
  skills: [
    {
      name: 'REAP',
      type: 'Perk',
      image: 'Baptiste-P',
      text: [
        'Baptiste steals soul fragments through combat and is healed for each soul fragment acquired.',
        '• Upon reaching 4 soul fragments, Baptiste is empowered for 4 seconds and deals increased damage but generates no additional soul fragments.',
        '• Basic attacks generate one soul fragment',
        '• Abilities generate one soul fragment for each enemy hero hit',
        '• Heal per Soul Fragment: 20-86 (level 1-12) (+ 25% of crystal power)',
        '• Empowered effects: +35% basic-attack damage and +100% ability damage.',
      ],
    },
    {
      name: 'BAD MOJO',
      type: 'A ABILITY',
      text: [
        'Baptiste pulls a vial of liquid from his vest and throws it. The vial explodes upon reaching its target or when colliding with an enemy.',
        '• Enemies near the explosion take damage and the first enemy hit is slowed.',
        '• Deals 50% less damage to minions.',
      ],
      image: 'Baptiste-A',
      stats: [
        {
          name: 'Cooldown',
          amount: ['4s', '3.8s', '3.6s', '3.4s', '3s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['40', '45', '50', '55', '60'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage',
          amount: ['80', '120', '160', '200', '280'],
          cr: '115%',
          wr: '',
        },
        {
          name: 'Splash Damage',
          amount: ['40', '60', '80', '100', '140'],
          cr: '60%',
          wr: '',
        },
        {
          name: 'Slow',
          amount: ['60%', '60%', '60%', '60%', '60%'],
          cr: '',
          wr: '',
        },
        {
          name: 'Slow Duration',
          amount: ['0.8s', '0.8s', '0.8s', '0.8s', '1.2s'],
          cr: '',
          wr: '',
        },
      ],
    },
    {
      name: 'ORDAINED',
      type: 'B ABILITY',
      image: 'Baptiste-B',
      text: [
        'Baptiste ordains a target enemy, damaging them and creating an ethereal prison around them. If the ordained target leaves the area, they are stunned and take additional damage.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['17s', '16s', '15s', '14s', '13s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['60', '70', '80', '90', '100'],
          cr: '45%',
          wr: '',
        },
        {
          name: 'Damage',
          amount: ['45', '75', '105', '135', '195'],
          cr: '45%',
          wr: '',
        },
        {
          name: 'Duration',
          amount: ['2.5', '2.5s', '2.5s', '2.5s', '2.5s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Bonus Damage',
          amount: ['60', '100', '140', '180', '260'],
          cr: '60%',
          wr: '',
        },
        {
          name: 'Stun Duration',
          amount: ['1.2s', '1.2s', '1.2s', '1.2s', '1.5s'],
          cr: '',
          wr: '',
        },
      ],
    },
    {
      name: 'FEARSOME SHADE',
      type: 'ULTIMATE',
      image: 'Baptiste-C',
      text: [
        'Baptiste summons waves of shade that terrorize enemies caught in their path. Enemies struck by the shade run from the source in fear and take damage each second.',
        '• Deals 50% less damage to minions.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['80', '65', '50'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['60', '80', '100'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage',
          amount: ['120', '160', '200'],
          cr: '65%',
          wr: '',
        },
        {
          name: 'Fear Duration',
          amount: ['1s', '1.3s', '1.6s'],
          cr: '',
          wr: '',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Bad Bad Mojo',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Bad Mojo (A) has 2 bonus range.',
        '• Cooldown 80% (-1.5%)',
        '• Dmaage 90% (+2.5%)',
      ],
      image: 'Baptiste_Rare',
    },
    {
      name: 'The Reaper',
      type: 'Epic',
      color: '#7A02EA',
      text: [
        'Reap (Perk) continues to collect souls when empowered.',
        '• Passive Attack Speed +30% (+3%)',
        '• Heal 45% (+4%)',
      ],
      image: 'Baptiste_Epic',
    },
    {
      name: 'Army of Souls',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Fearsome Shade (Ult) summons two sets of spectres that travel side by side.',
        '• Cooldown 70%',
        '• Range 15%',
        '• Damage 120%',
      ],
      image: 'Baptiste_Legendary',
    },
  ],
  skins: [
    {
      color: '#7A02EA',
      name: 'Scarecrow Baptiste',
      type: 'Epic',
      image: 'Baptist_Scarecrow',
    },
    {
      color: '#7A02EA',
      name: 'Anubis Baptiste',
      type: 'Epic',
      image: 'Baptiste_Anubis_Epic',
    },
  ],
}
