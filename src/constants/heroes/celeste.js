export default {
  name: 'Celeste',
  type: ['LANE', 'MAGE'],
  role: ['LANE'],
  description: 'Back-line mage with heavy area damage and a stun.',
  spotlight: 'rC-vkqUkERY',
  stats: [
    { name: 'HEALTH', value: '649 - 2028', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '2.23 - 4.76', color: '#4eec8b' },
    { name: 'ENERGY', value: '380 - 732', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: '2.53 - 4.84', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '0', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 125%', color: '#f48596' },
    { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '5.3', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '3.4', color: '#e19efb' },
  ],
  model: [{ image: 'Celesteblurred' }, { tmodel: 'Celeste' }],
  skills: [
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Celeste-P-Julias-Light.mp4',
      name: "JULIA'S LIGHT",
      type: 'Perk',
      image: 'Celeste-P',
      text: [
        "Celeste's basic attacks have a spell component, dealing 75-125 (level 1-12) (+75% Crystal Power)(+100% Weapon Power). Celeste's basic attacks also reveal enemy heroes for 1.5 seconds - even after the target leaves vision range.",
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Celeste-A-Heliogenesis.mp4',
      name: 'HELIOGENESIS',
      type: 'A ABILITY',
      text: [
        'Celeste forms a small star at a target location, dealing crystal damage to nearby enemies. The star will briefly linger on the field. If Celeste uses this ability on an existing star, the star will go supernova, dealing more crystal damage in a larger area.',
        'Deals reduced damage (-50%) to minions.',
      ],
      image: 'Celeste-A',
      stats: [
        {
          name: 'Cooldown',
          amount: ['2.8s', '2.4s', '2s', '1.6s', '1.2s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['25', '30', '35', '40', '45'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage',
          amount: ['80', '130', '180', '230', '280'],
          cr: '80%',
          wr: '',
        },
        {
          name: 'Nova Damage',
          amount: ['100', '155', '210', '265', '320'],
          cr: '170%',
          wr: '',
        },
        {
          name: 'Range',
          amount: ['7', '7', '7', '7', '9'],
          cr: '',
          wr: '',
        },
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Celeste-B-Core-Collapse.mp4',
      name: 'CORE COLLAPSE',
      type: 'B ABILITY',
      image: 'Celeste-B',
      text: [
        'After a brief delay, the target location collapses and nearby enemies are stunned and take crystal damage.',
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
          amount: ['100', '100', '100', '100', '0'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage',
          amount: ['100', '175', '250', '325', '475'],
          cr: '40%',
          wr: '',
        },
        {
          name: 'Stun Duration',
          amount: ['1s', '1s', '1s', '1s', '1.5s'],
          cr: '',
          wr: '',
        },
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Celeste-C-Solar-Storm.mp4',
      name: 'SOLAR STORM',
      type: 'ULTIMATE',
      image: 'Celeste-C',
      text: [
        'Celeste launches a storm of stars that travel across the world. Stars collide with the first enemy they hit, dealing crystal damage in an area. The number of stars increases each time Solar Storm is upgraded.',
        'Deals reduced damage to non-heroes and does not damage structures.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['70s', '65s', '60s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['150', '175', '200'],
          cr: '',
          wr: '',
        },
        {
          name: 'Lead Star Damage',
          amount: ['300', '325', '350'],
          cr: '100%',
          wr: '',
        },
        {
          name: 'Star Damage',
          amount: ['150', '160', '170'],
          cr: '20%',
          wr: '',
        },
        {
          name: 'Stars',
          amount: ['3', '5', '7'],
          cr: '',
          wr: '',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'YOUNG STAR',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Heliogensis (A) stars linger on the field 4s longer and continuously damage nearby enemies. Lower impact damage.',
        '• Impact Damage 30% (+1%)%',
        '• Damage/Sec 70% (+2.5%)',
      ],
      image: 'Celeste_Rare',
    },
    {
      name: 'CORE LEAF CLOVER',
      type: 'Epic',
      color: '#7A02EA',
      text: [
        'Core Collapse (B) creates four black-hole collapses. Longer cooldown and lower damage.',
        '• Damage 25% (+2.5%)',
        '• Cooldown 125% (-4%)',
      ],
      image: 'Celeste_Epic',
    },
    {
      name: 'GALAXY COLLAPSE',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Heliogenesis (A) supernovas cause other stars to supernova. Lower damage.',
        '• Impact Damage 70% (+5%)',
        '• Supernova Damage 100% (+10%)',
      ],
      image: 'Celeste_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Rebellion Celeste',
      type: 'Rare',
      image: 'Celeste_Star_Queen_I_R',
    },
    {
      color: '#7A02EA',
      name: 'Rising Star Celeste',
      type: 'Epic',
      image: 'Celeste_Star_Queen_II_E',
    },
    {
      color: '#FF9000',
      name: 'Star Queen Celeste',
      type: 'Legendary',
      image: 'Celeste_Star_Queen_III_L',
    },
    {
      color: '#6393F9',
      name: 'Butterfly Celeste',
      type: 'Rare',
      image: 'Celeste_Butterfly_R',
    },
    {
      color: 'red',
      name: 'Baewitched Celeste',
      type: 'Special Edition',
      image: 'Celeste_Baewitched_SE',
    },
    {
      color: 'red',
      name: 'Moon Princess Celeste',
      type: 'Special Edition',
      image: 'Celeste_Moon_Princess_SE',
    },
    {
      color: '#FADA5E',
      name: 'Baewitched Celeste',
      type: 'Limited Edition',
      image: 'Celeste_Baewitched_LE',
    },
    {
      color: 'red',
      name: 'Snow Queen Celeste',
      type: 'Special Edition',
      image: 'Celeste_Snow_Queen',
    },
  ],
}
