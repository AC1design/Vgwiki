export const frontmatter = {
  name: 'Skye',
  type: ['LANE', 'SNIPER'],
  role: ['LANE'],
  path: '/Skye',
  description:
    'Versatile, elusive mech pilot who can flank enemies from any angle.',
  spotlight: 'N2Ll7RmMnXs',
  stats: [
    { name: 'HEALTH', value: '708 - 2100', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: ' - ', color: '#4eec8b' },
    { name: 'ENERGY', value: '380 - 732', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: ' - ', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '72 - 111', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 136.3%', color: '#f48596' },
    { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '6.1', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '3.7', color: '#e19efb' },
  ],
  model: [{ image: 'Skyeblurred' }, { tmodel: 'Skye' }],
  skills: [
    {
      name: 'TARGET LOCK',
      type: 'Perk',
      image: 'Skye-P',
      text: [
        "Skye's basic attacks apply Target Lock to the last target.",
        '• Basic attacks and Forward Barrage on that locked target grant her up to +2 move speed for 1.2s, but this boost is much weaker while moving backward.',
        '• Target Lock lasts 3s and is lost when the target is more than 8.5 meters away.',
      ],
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/09/P-Skye-Target-Lock-Large.mp4',
    },
    {
      name: 'FORWARD BARRAGE',
      type: 'A ABILITY',
      image: 'Skye-A',
      text: [
        'Skye fires a continuous stream of bullets while strafing in the selected direction for 3s. Building weapon power makes the barrage slow approaching enemies by up to 60%.',
        '• Reactivate this ability to stop firing.',
        '• Deals bonus damage to locked target.',
        '• Deals 50% less damage to structures and bosses.',
      ],
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/09/A-Skye-Forward-Barrage-Large.mp4',
      stats: [
        {
          name: 'Cooldown',
          amount: ['6s', '6s', '6s', '6s', '5s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['40', '50', '60', '70', '80'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage/sec',
          amount: ['140', '180', '220', '260', '340'],
          cr: '180%',
          wr: '120%',
        },
        {
          name: 'Bonus Damage',
          amount: ['10%', '10%', '10%', '10%', '10%'],
          cr: '20%',
          wr: ' ',
        },
        {
          name: 'Slow',
          amount: ['0%', '0%', '0%', '0%', '0%'],
          cr: ' ',
          wr: '30%',
        },
      ],
    },
    {
      name: 'SURI STRIKE',
      type: 'B ABILITY',
      image: 'Skye-B',
      text: [
        'Skye dashes to a chosen location around her locked target while firing a volley of missiles along a line between her and her target.',
        '• Multiple missles can hit the same target, but subsequent hits deal 20% damage.',
        '• This ability can only be activated when Skye has a locked target.',
        '• Activation this ability resets a portion of the cooldown on Forward Barrage.',
        'Passive: Each ability point in Suri Strike increases the duration of Target Lock.',
        '• Deals less damage to minions.',
      ],
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/09/B-Skye-Suri-Strike-Large.mp4',
      stats: [
        {
          name: 'Cooldown',
          amount: ['16s', '14s', '12s', '10s', '6s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['70', '70', '70', '70', '70'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['90', '150', '210', '270', '330'],
          cr: '100%',
          wr: ' ',
        },
        {
          name: 'Bonus Duration',
          amount: ['1s', '1.5s', '2s', '2.5s', '4s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Cooldown Reset',
          amount: ['40%', '55%', '70%', '85%', '100%'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
    {
      name: 'DEATH FROM ABOVE',
      type: 'ULTIMATE',
      image: 'Skye-C',
      text: [
        'Skye fires a salvo of missiles at a chosen location around her locked target. After a 1.3s delay, the missiles rain down on that location, stunning enemies for 0.5s. Enemies still in the area afterward are slowed and take crystal damage.',
        '• Aiming directly on your locked target rains down the missiles in a cluster.',
        "• Aiming away from your locked target rains them down in a line across the target's path.",
        '• This ability can only be activated when Skye has a locked target.',
        '• Deals 50% less damage to structures and bosses.',
        'Passive: Each ability point in Death from Above increases the range of Target Lock.',
      ],
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/09/C-Skye-Death-From-Above-Large.mp4',
      stats: [
        {
          name: 'Cooldown',
          amount: ['30s', '24s', '128s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Energy Cost',
          amount: ['70', '90', '110'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Damage',
          amount: ['250', '300', '350'],
          cr: '50%',
          wr: ' ',
        },
        {
          name: 'Duration',
          amount: ['2s', '3s', '4s'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Slow',
          amount: ['55%', '60%', '65%'],
          cr: ' ',
          wr: ' ',
        },
        {
          name: 'Bonus Range',
          amount: ['2', '3', '4'],
          cr: ' ',
          wr: ' ',
        },
      ],
    },
  ],
  talents: [
    {
      name: 'Enhanced Thrusters',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'Sure Strike (B) grants Skye a move-speed bonus after completion. Skye passively gains crystal power.',
        '• Bonus Move Speed 1.5 (+0.1)',
        '• Bonus Move Speed Duration 3s',
        '• Passive Crystal Power +5% (+1.5%)',
      ],
    },
    {
      name: 'Raining Death',
      type: 'Epic',
      color: '#7A02EA',
      text: [
        'Death from Above (Ult) has 1 additional charge.',
        '• Damage 115% (+15%)',
        '• Cooldown 70% (-2.5%)',
      ],
    },
    {
      name: 'Piercing Barrage',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'Forward Barrage (A) pierces through enemies, damaging all in a line and has 2 bonus range.',
        '• Damage 100% (+10%)',
      ],
    },
  ],
  skins: [
    {
      name: 'Air Combat Skye',
      color: '#6393F9',
      type: 'Rare',
      image: 'Skye_Air_Combat',
    },
    {
      name: 'Stealth Fighter Skye',
      color: '#7A02EA',
      type: 'Epic',
      image: 'Skye_Stealth_Fighter',
    },
    {
      name: 'Supersonic Skye',
      color: '#FF9000',
      type: 'Legendary',
      image: 'Skye_Supersonic',
    },
    {
      name: 'Ride or Die Skye',
      color: '#FF9000',
      type: 'Legendary',
      image: 'Skye_Ride_or_Die',
    },
    {
      name: 'Exoframe Skye',
      color: '#FF9000',
      type: 'Legendary',
      image: 'Skye_Exoframe',
    },
  ],
}
