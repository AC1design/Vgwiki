export default {
  name: 'Krul',
  type: ['JUNGLE', 'WARRIOR'],
  role: ['JUNGLE'],
  description: 'The king of duels with massive lifesteal and self-healing.',
  spotlight: 'ZR8J8b44FOk',
  stats: [
    { name: 'HEALTH', value: '748 - 2394', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '3.51	7.8', color: '#4eec8b' },
    { name: 'ENERGY', value: '220 - 506', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: '1.33 - 3.2', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '70 - 147', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '1.5', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '3.5', color: '#e19efb' },
  ],
  model: [{ image: 'Krulblurred' }, { tmodel: 'Krul' }],
  skills: [
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Krul-P-Shadows-Empower-Me.mp4',
      name: 'SHADOWS EMPOWER ME',
      type: 'Perk',
      image: 'Krul-P',
      text: [
        'Krul is empowered by the shadows after standing still in brush for 1s. While empowered, Krul briefly gains 2.2 move speed and his basic attacks will slow the target by 40% for 2.5s.',
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Krul-A-Dead-Mans-Rush.mp4',
      name: "DEAD MAN'S RUSH",
      type: 'A ABILITY',
      image: 'Krul-A',
      text: [
        'Krul dashes to the target and deals damage.',
        "Activating Dead Man's Rush grants Krul a temporary health barrier.",
        '• This ability triggers basic-attack effects.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['10s', '9.5s', '9s', '8.5s', '7s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['45', '50', '55', '60', '65'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage',
          amount: ['0', '0', '0', '0', '0'],
          cr: '70%',
          wr: '140%',
        },
        {
          name: 'Barrier',
          amount: ['80', '200', '320', '440', '560'],
          cr: '125%',
          wr: '',
        },
        {
          name: 'Cooldown',
          amount: ['2s', '2s', '2s', '2s', '2s'],
          cr: '',
          wr: '',
        },
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Krul-B-Spectral-Smite.mp4',
      name: 'SPECTRAL SMITE',
      type: 'B ABILITY',
      image: 'Krul-B',
      text: [
        'Krul detonates the Weakness stacks built up on a single target, regaining health based on the number of stacks consumed.',
        "Passive: Basic attacks and abilities apply Weakness on the enemy (up to 8 stacks). Each stack reduces the target's damage by 2.5% and increases Krul's lifesteal against the victim.",
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['12s', '12s', '12s', '12s', '10s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['45', '50', '55', '60', '65'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage',
          amount: ['60', '120', '180', '240', '360'],
          cr: '90%',
          wr: '',
        },
        {
          name: 'Damage/Stack',
          amount: ['15', '30', '45', '60', '90'],
          cr: '30%',
          wr: '',
        },
        {
          name: 'Heal',
          amount: ['40', '60', '80', '100', '140'],
          cr: '40%',
          wr: '',
        },
        {
          name: 'Heal/Stack',
          amount: ['15', '20', '25', '30', '40'],
          cr: '20%',
          wr: '',
        },
        {
          name: 'Lifesteal/Stack',
          amount: ['5%', '5%', '5%', '5%', '5%'],
          cr: '',
          wr: '',
        },
        {
          name: 'Duration',
          amount: ['4s', '4s', '4s', '4s', '4s'],
          cr: '',
          wr: '',
        },
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/Krul-C-From-Hells-Heart.mp4',
      name: "FROM HELL'S HEART ",
      type: 'ULTIMATE',
      image: 'Krul-C',
      text: [
        'Krul pulls Hellrazor from his chest and hurls it in the targeted direction. The sword will boomerang back to Krul. If the sword hits an enemy hero, it deals damage and stuns, then slows the target.',
        'Damage and stun duration scales with the distance the sword traveled before hitting the target:',
        '• 50% at point blank range',
        '• 100% at max range',
        "• 150% at 'boomerang' range",
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['90s', '75s', '60s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Energy Cost',
          amount: ['55', '70', '85'],
          cr: '',
          wr: '',
        },
        {
          name: 'Damage',
          amount: ['250', '450', '650'],
          cr: '120%',
          wr: '',
        },
        {
          name: 'Slow Duration',
          amount: ['2.6s', '3.3s', '4s'],
          cr: '',
          wr: '',
        },
        {
          name: 'Stun Duration',
          amount: ['1.6s', '1.8s', '2s'],
          cr: '',
          wr: '',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Dead Man’s Barrier',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Dead Man’s Rush (A) has 0.5 increased range and stronger barrier.',
        '• Barrier 115% (+5%)',
      ],
      image: 'Krul_Rare',
    },
    {
      name: 'Healing Smite',
      type: 'Epic',
      color: '#7A02EA',
      text: [
        'Spectral Smite (B) heals nearby allies. Krul passively gains crystal power.',
        '• Heal 100% (5%)',
        '• Crystal Power +10% (+2.5%)',
      ],
      image: 'Krul_Epic',
    },
    {
      name: 'Cursed Blade',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'From Hell’s Heart (Ult) applies max Spectral Smite (B) Weakness stacks to the victim.',
        '• Damage 30% (+10%)',
        '• Cooldown 70% (-5%)',
      ],
      image: 'Krul_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Trasher Krul',
      type: 'Rare',
      image: 'Krul_Death_Metal_I_R',
    },
    {
      color: '#7A02EA',
      name: 'Death Metal Krul',
      type: 'Epic',
      image: 'Krul_Death_Metal_II_E',
    },
    {
      color: '#FF9000',
      name: 'Ice Cold Krul',
      type: 'Legendary',
      image: 'Krul_Death_Metal_III_L',
    },
    {
      color: '#FF9000',
      name: 'Corsair Cold Krul',
      type: 'Legendary',
      image: 'Krul_Samurai',
    },
    {
      color: '#7A02EA',
      name: 'Death Metal Krul',
      type: 'Epic',
      image: 'Krul_Death_Metal_II_E',
    },
    {
      color: '#FF9000',
      name: 'Cyber Krul',
      type: 'Legendary',
      image: 'Krul_Cyber',
    },
    {
      color: '#FF9000',
      name: 'Cyber Krul Prime',
      type: 'Legendary',
      image: 'Krul_Cyber_Prime',
    },
    {
      color: '#FF9000',
      name: 'Cyber Krul Prototype',
      type: 'Legendary',
      image: 'Krul_Cyber_Prototype',
    },
    {
      color: 'red',
      name: 'Summer Party Krul',
      type: 'Special Edition',
      image: 'Krul_Summer_Party_SE',
    },
  ],
}