export const frontmatter = {
  name: 'SAW',
  type: ['LANE', 'SNIPER'],
  role: ['LANE'],
  description: 'Heavy machine gunner who sacrifices move speed for damage.',
  spotlight: '2nJHJGgcO3k',
  stats: [
    { name: 'HEALTH', value: '683 - 2023', color: '#4eec8b' },
    { name: 'HEALTH REGEN', value: '2.4 - 5.15', color: '#4eec8b' },
    { name: 'ENERGY', value: '150 - 315', color: '#5bbcff' },
    { name: 'ENERGY REGEN', value: '1 - 2.21', color: '#5bbcff' },
    { name: 'WEAPON DAMAGE', value: '50 - 105', color: '#f48596' },
    { name: 'ATTACK SPEED', value: '100% - 111%', color: '#f48596' },
    { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
    { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
    { name: 'ATTACK RANGE', value: '6.6', color: '#e19efb' },
    { name: 'MOVE SPEED', value: '3.2', color: '#e19efb' },
  ],
  model: [{ image: 'Sawblurred' }, { tmodel: 'Saw' }],
  skills: [
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/SAW-P-Spin-Up.mp4',
      name: 'SPIN UP',
      type: 'Perk',
      image: 'Saw-P',
      text: [
        'Every basic attack gives SAW increased attack speed, but it also sifnificantly decreases his move speed.',
        '• Each basic attack grants SAW + 15 % attack speed.',
        "• Each basic attack decreases SAW's move speed by -0.12.",
        '• Max 12 stacks.',
        '• After 3.5s without basic attacking, SAW rapidly spins down.',
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/SAW-B-Suppressing-Fire.mp4',
      name: 'ROADIE RUN',
      type: 'A ABILITY',
      image: 'Saw-A',
      text: [
        "SAW sprints and switches to a melee combat knife. If SAW attacks someone, he will deal bonus damage based on the target's missing health & roll backwards.",
        '• Activating this ability clears all stacks of Spin Up.',
        '• Crystal will boost the speed, up to a maximum of + 3.2.',
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/SAW-C-Mad-Cannon.mp4',
      name: 'SUPPRESSING FIRE',
      type: 'B ABILITY',
      image: 'Saw-B',
      text: [
        'SAW fires a hurricane of bullets in a set direction for 2 seconds, damaging and slowing enemies in its path.',
        'Finishing this ability grants all stacks of Spin Up and resets the cooldown of Roadie Run.Deal reduced damage to turrets if out of range.',
      ],
    },
    {
      video:
        'https://www.vainglorygame.com/wp-content/uploads/2015/05/SAW-A-Roadie-Run.mp4',
      name: 'MAD CANNON',
      type: 'ULTIMATE',
      image: 'Saw-C',
      text: [
        "SAW loads explosive shells into his gun which deal additional damage based on the target's missing health. The shells also deal splash damage based on the amount of crystal power SAW has.",
        '• This explosive ammo fires 36 % slower and grants 2 stacks of Spin Up.',
      ],
    },
  ],
  talents: [
    {
      name: 'Piercing Bullets',
      type: 'Rare',
      color: '#6393F9',
      text: [
        'SAW’s basic attack pierces its target to hit all enemies along its path.',
        '• Bonus Range 0.5',
        '• Damage 90% (+2.5%)',
      ],
      image: 'SAW_Rare',
    },
    {
      name: 'Speedy Spin Up',
      type: 'Epic',
      color: '#7A02EA',
      text: [
        'Spin Up (Perk) no longer slows SAW.',
        '• Speed Boost Per Stack 0.012 (+0.017)',
      ],
      image: 'SAW_Epic',
    },
    {
      name: 'Road Rage',
      type: 'Legendary',
      color: '#FF9000',
      text: [
        'SAW gains Spin Up (Perk) stacks after attacking an enemy with Roadie Run (A). Basic attacks reduce the cooldown of Roadie Run (A) by 50%.',
        '• Damage 100%',
        '• Stacks 6',
      ],
      image: 'SAW_Legendary',
    },
  ],
  skins: [
    {
      color: '#6393F9',
      name: 'SAWborg 2.0',
      type: 'Rare',
      image: 'SAW_SAWborg_2.0',
    },
    {
      color: '#7A02EA',
      name: 'SAWborg 3.0',
      type: 'Epic',
      image: 'SAW_SAWborg_3.0',
    },
    {
      color: '#FF9000',
      name: 'SAWborg X',
      type: 'Legendary',
      image: 'SAW_SAWborg_X',
    },
    {
      color: '#6393F9',
      name: 'Elite Force SAW',
      type: 'Rare',
      image: 'SAW_Elite_Force',
    },
    {
      color: 'red',
      name: 'Summer Party SAW',
      type: 'Special Edition',
      image: 'SAW_Summer_Party_SE',
    },
  ],
}
