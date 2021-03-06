export const frontmatter = {
  name: 'Fortress',
  type: ['CAPTAIN', 'PROTECTOR'],
  role: ['CAPTAIN'],
  path: '/Fortress',
  wallpaper: [
    {
      name: 'Fortress',
      link: 'https://imgur.com/a/1SDlOFk'
    }
  ],
  description: 'Agressive pack leader who swarms the enemy with great speed.',
  spotlight: 'DGEg_EsKwwY',
  stats: [
    { name: 'HEALTH', value: '761 - 2581', color: '#4eec8b' },
    { name: 'H. REGEN', value: '4.3 - 9.91', color: '#4eec8b' },
    { name: 'ENERGY', value: '300 - 465', color: '#5bbcff' },
    { name: 'ENG REGEN', value: '1.56 - 3.21', color: '#5bbcff' },
    { name: 'WP DAMAGE', value: '73 - 156', color: '#f48596' },
    { name: 'ATK SPD', value: '100% - 144%', color: '#f48596' },
    { name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
    { name: 'ATK RANGE', value: '1.8', color: '#e19efb' },
    { name: 'MOVE SPD', value: '3.9', color: '#e19efb' },
  ],
  model: [{ image: 'Fortressblurred' }, { tmodel: 'Fortress' }],
  skills: [
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/08/P-Fortress-Packmates-Large.mp4',
      name: 'PACKMATES',
      type: 'Perk',
      image: 'Fortress-P',
      text: [
        "When Fortress is near an allied hero, he will move faster after 1s. He will maintain this move-speed bonus so long as he's alongside any allied hero.",
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/08/A-Fortress-Truth-of-the-Tooth-Large.mp4',
      name: 'TRUTH OF THE TOOTH',
      type: 'A ABILITY',
      image: 'Fortress-A',
      text: [
        'Fortress marks the target enemy as prey and his next basic attack becomes a short-range lunge.',
        '• Fortress and his allies move faster (Speed Boost 14.0) toward prey and have lifesteal when attacking them.',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['10s', '9.5s', '9s', '8.5s', '8s'],
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
          amount: ['30', '60', '90', '120', '180'],
          cr: '110%',
          wr: '100%',
        },
        {
          name: 'Range',
          amount: ['7', '7', '7', '7', '9'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Speed Boost',
          amount: ['1.8', '1.8', '1.8', '1.8', '1.8'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Duration',
          amount: ['3s', '3s', '3s', '3s', '4s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Lifesteal',
          amount: ['10%', '11%', '12%', '13%', '15%'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/08/B-Fortress-Truth-of-the-Tooth-Large.mp4',
      name: 'LAW OF THE CLAW',
      type: 'B ABILITY',
      image: 'Fortress-B',
      text: [
        'Fortress claws his target, causing it to bleed for several seconds.',
        '• Upon reaching 6 stacks, the target is dealt a burst of damage based on its max health and receives mortal wound (reduced healing).',
        '• Overdrive: At max rank, the target is also slowed by 40%.',
        '• Bleeding damage per second: 10 (+15% of crystal power).',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['10s', '9.5s', '9s', '8.5s', '8s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['50', '55', '60', '65', '70'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['70', '100', '130', '160', '190'],
          cr: '70%',
          wr: ' ',
        },
        {
          name: 'Damage/sec',
          amount: ['10', '10', '10', '10', '10'],
          cr: '15%',
          wr: ' ',
        },
        {
          name: 'Max Health %',
          amount: ['10%', '10%', '10%', '10%', '20%'],
          cr: '5%',
          wr: ' ',
        },
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/08/C-Fortress-Attack-of-the-Pack-Large.mp4',
      name: 'ATTACK OF THE PACK',
      type: 'ULTIMATE',
      image: 'Fortress-C',
      text: [
        'Fortress summons a pack of wolves. Each pack wolf seeks out a different enemy hero.',
        '• It takes three separate attacks to kill a pack wolf.',
        "• Wolves take normal damage from abilities and are granted 20% of Fortress' bonus defensive stats.",
        '• Wolves apply bleeding with their basic attacks.',
        '• Fortress gains fortified health and attack speed when the wolves are summoned.',
        '• Wolves suffer damage equal to 75% of their max health from turrets',
      ],
      stats: [
        {
          name: 'Cooldown',
          amount: ['120s', '110s', '100s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['120', '140', '160'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Duration',
          amount: ['10s', '12s', '14s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Attack Speed',
          amount: ['30%', '45%', '60%'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Fortified Health',
          amount: ['300', '425', '550'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Wolf Attack Damage',
          amount: ['20', '40', '60'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Wolf Base Health',
          amount: ['300', '450', '600'],
          cr: '5%',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Longtooth',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Truth of the Tooth (A) has 1.6 bonus range. Fortress passively gains attack speed and weapon power.',
        '• Bonus Range 1.6 (+0.1)',
        '• Passive Weapon Power +0.5% (+0.5%)',
        '• Passive Attack Speed +0.5% (+0.5%)',
      ],
      image: 'Fortress_Rare',
    },
    {
      name: 'Critical Wounds',
      type: 'Epic',
      color: '#c78cff',
      text: [
        'Fortress gains +15% critical chance for each active wolf summoned by Attack of the Pack (Ult). Fortress passively gains critical strike damage.',
        '• Passive Crit Dmg +25% (+2.5%)',
        '• Cooldown 125% (-5%)',
      ],
      image: 'Fortress_Epic',
    },
    {
      name: 'Flank Attack',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Truth of the Tooth (A) and Law of the Claw (B) spawn a wolf to attack Fortress’ target, up to a maximum of 3 wolves.',
        '• Bleed Damage 60% (+10%)',
        '• Cooldown 120% (-10%)',
      ],
      image: 'Fortress_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'Firehound Fortress',
      type: 'Rare',
      image: 'Fortress_Netherworld_I_R',
    },
    {
      color: '#c78cff',
      name: 'Netherworld Fortress',
      type: 'Epic',
      image: 'Fortress_Netherworld_II_E',
    },
    {
      color: '#FF9000',
      name: 'Cerberus Fortress',
      type: 'Legendary',
      image: 'Fortress_Netherworld_III_L',
    },
    {
      color: '#6393F9',
      name: 'Dire Fortress',
      type: 'Rare',
      image: 'Fortress_Dire_Rare',
    },
    {
      color: '#FADA5E',
      name: 'Gift Wrapped Fortress',
      type: 'Limited Edition',
      image: 'Fortress_Gift-wrapped_LE',
    },
    {
      color: 'red',
      name: 'Gift Wrapped Fortress',
      type: 'Special Edition',
      image: 'Fortress_Gift-wrapped_SE',
      price: '500',
      opals: true,
    },
    {
      color: 'red',
      name: 'Summer Party Fortress',
      type: 'Special Edition',
      image: 'Fortress_Summer_Party',
      price: '300',
      opals: true,
    },
    {
      color: '#FF9000',
      name: 'Kirin Fortress',
      type: 'Legendary',
      image: 'Fortress_Kirin',
    },
  ],
}
