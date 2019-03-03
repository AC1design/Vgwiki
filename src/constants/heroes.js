export const heroTabs = [
  'ALL',
  'ASSASSINS',
  'MAGE',
  'PROTECTOR',
  'SNIPER',
  'WARRIOR',
]

export const heroCards = [
  //Adagio
  {
    name: "Adagio",
    type: ["CAPTAIN, PROTECTOR"], role: ["CAPTAIN"],
    description: "Team healer and damage enhancer with a large area stun.",
    spotlight: "TQx1TVGANF4",
    stats: [
      { name: "HEALTH", value: "685 - 2308", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "2.18 - 5.04", color: "#4eec8b" },
      { name: "ENERGY", value: "400 - 785", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "2.67 - 5.2", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "75 - 117", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 122%", color: "#f48596" },
      { name: "ARMOR", value: "25 - 75", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 55", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "6.7", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.4", color: "#e19efb" },
    ],

    model: [
      { image: "Adagioblurred" },
      { tmodel: "Adagio" }
    ],

    skills: [
      {
        video: "Adagio-P",
        name: "ARCANE RENEWAL",
        type: "HEROIC PERK",
        image: "Adagio-P",
        text: [
          "Whenever enemies burning with Arcane Fire take damage from any source, Adagio regenerates 25% of that damage as energy."
        ],
      },

      {
        video: "Adagio-A",
        name: "GIFT OF FIRE",
        type: "A ABILITY",
        text: [
          "Heals a target ally, then splashes Arcane Fire onto nearby enemies. If Adagio heals himself, he'll also apply a heavy slow to nearby enemies. ,Arcane Fire (status effect): Burns the target every second and causes Adagio's other abilities to deal more damage.",
          "• Burst heals the target instantly, followed by a gradual heal over the next few seconds.",
          "• Burst Heal is increased by 9% of Adagio's bonus health.",
          "• When cast on self, slows nearby enemies by 70% for 0.7s.",
          "• Resets basic-attack cooldown on activation."
        ],
        image: "Adagio-A",
        stats: [
          {
            name: "Cooldown",
            amount: ['10', '9.5', '9', '8.5', '8'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['120', '135', '150', '165', '180'],
            cr: '',
            wr: '',
          },
          {
            name: 'Fire Damage/s',
            amount: ['10', '20', '30', '40', '60'],
            cr: '25%',
            wr: '',
          },
          {
            name: 'Fire Duration',
            amount: ['5', '5.5', '6', '6.5', '7'],
            cr: '',
            wr: '',
          },
          {
            name: 'Heal Duration',
            amount: ['3', '3', '3', '3', '3'],
            cr: '',
            wr: '',
          },
          {
            name: 'Burst Heal',
            amount: ['40', '60', '80', '100', '140'],
            cr: '30%',
            wr: '',
          },
          {
            name: 'Heal/s',
            amount: ['15', '20', '25', '30', '35'],
            cr: '10%',
            wr: '',
          },
        ],
      },
      {
        video: "Adagio-B",
        name: "AGENT OF WRATH",
        type: "B ABILITY",
        image: "Adagio-B",
        text: [
          "Temporarily boosts an allied hero's next several basic attacks for 6s.",
          "• Deals bonus damage to enemies afflicted by Arcane Fire.",
          "• Bonus damage is increased if Adagio casts this spell on himself.",
          "• Resets basic-attack cooldown on activation.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['10', '10', '10', '10', '10'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['105', '130', '155', '180', '205'],
            cr: '',
            wr: '',
          },
          {
            name: 'Number of Attacks',
            amount: ['6', '6', '6', '6', '9'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['30', '50', '70', '90', '130'],
            cr: '40%',
            wr: '',
          },
          {
            name: 'Arcane Fire Bonus',
            amount: ['5', '15', '25', '35', '55'],
            cr: '50%',
            wr: '',
          },
          {
            name: 'Self-cast Bonus',
            amount: ['5', '10', '15', '20', '30'],
            cr: '20%',
            wr: '',
          },
        ],
      },
      {
        video: "Adagio-C",
        name: "VERSE OF JUDGEMENT",
        type: "ULTIMATE",
        image: "Adagio-C.",
        text: [
          "Adagio channels for 2s then deals heavy damage to all enemies in a wide ring around him. Enemies burning with Arcane Fire are also stunned. Adagio temporarily gains fortified health while channeling.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['100', '80', '60'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['140', '190', '240'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['800', '1000', '1200'],
            cr: '100%',
            wr: '',
          },
          {
            name: 'Fortified Health',
            amount: ['800', '1100', '1400'],
            cr: '',
            wr: '',
          },
          {
            name: 'Range',
            amount: ['9', '9', '9'],
            cr: '',
            wr: '',
          },
          {
            name: 'Stun Duration',
            amount: ['2.2s', '2.2s', '2.2s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Channel Time',
            amount: ['2', '2', '2'],
            cr: '',
            wr: '',
          },
        ]
      },
    ],
    talents: [
      {
        name: "GIFT OF LIFE",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Gift of Fire (A) grants fortified health equal to a portion of its burst heal. Shorter cooldown.",
          "• Heal to Fort Health 80% (+10%)",
          "• Cooldown 90% (-1%)",
        ],
        image: 'Adagio_Rare',
      },
      {
        name: "Avenging Wrath",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Core Collapse (B) creates four black-hole collapses. Longer cooldown and lower damage.",
          "• Dmg to Burning Targets 165% (+15%)",
          "• Charge Time 95% (-5%)",
        ],
        image: 'Adagio_Epic',
      },
      {
        name: "Healing Verse",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Verse of Judgement (Ult) heals all of Adagio's allies within its radius. Shorter cooldown but lower damage.",
          "• Damage 60% (+10%)",
          "• Cooldown 55% (-7.5%)",
          "• Max Health to Heal 65% (+15%)",
        ],
        image: 'Adagio_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Spiderwing Adagio",
        type: "Rare",
        image: 'Adagio_Dark_Parade_I_R.png',
      },
      {
        color: "#7A02EA",
        name: "Dark Parade Adagio",
        type: "Epic",
        image: 'Adagio_Dark_Parade_II_E.png'
      },
      {
        color: "#FF9000",
        name: "Crimson Song Adagio",
        type: "Legendary",
        image: 'Adagio_Dark_Parade_III_L.png',
      },
      {
        color: "#7A02EA",
        name: "Seraphim Adagio",
        type: "Epic",
        image: 'Adagio_Seraphim_E.png',
      },
      {
        color: "#6393F9",
        name: "Ra'dagio",
        type: "Rare",
        image: 'Adagio_Ra_Rare.png',
      },
    ],
  }
  //Aplha
  {
    name: "Alpha",
    type: ['JUNGLER, WARRIOR'], role: ['JUNGLER'],
    description: "Killing machine who can resurrect herself.",
    spotlight: "bZOG2BzWE2o",
    stats: [
      { name: "HEALTH", value: "761 - 2537", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "3.14 - 6.99 ", color: "#4eec8b" },
      { name: "ENERGY", value: "-", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "-", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "83 - 124", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 136.3%", color: "#f48596" },
      { name: "ARMOR", value: "30 - 85", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 60", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "2.1", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.6", color: "#e19efb", },
    ],
    model: [
      { image: "Alphablurred" },
      { tmodel: "Alpha" }
    ],
    skills: [
      {
        name: "INFINITE REBOOT",
        type: "HEROIC PERK",
        image: 'Alpha-P.jpg',
        text: [
          "Instead of dying, Alpha initiates 3.5s reboot sequence. If her reboot health is not destroyed before time runs out, she will return to life.",
          "When alive, Alpha's special energy bar shows the time until Infinite Reboot is available. When rebooting, the bar counts down to when she will revive.",
          "• Reboot health: 600-2600 (level 1-12) (+65% of Bonus Max Energy)",
          "• Reboot Duration: 3.5s",
          "• Alpha revives with her Prime Directive & Core Charge ability cooldowns refreshed."],
      },
      {
        name: "PRIME DIRECTIVE",
        type: "A ABILITY",
        text: [
          "Alpha scans for enemies along a path. If she scans an enemy, that enemy is slowed and Alpha instantly dashes behind them, dealing damage to the target and all enemies within 4.5 meters (50% damage to minions). This also removes the negative effects of Core Overload (without removing the positive effects), dealing increased damage based on the number of stacks removed."
        ],
        image: 'Alpha-A',
        stats: [
          {
            name: 'Cooldown',
            amount: ['11', '10', '9', '8', '7'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['80', '100', '120', '140', '160'],
            cr: '180%',
            wr: '60%',
          },
          {
            name: 'Damage/Stack',
            amount: ['40', '60', '80', '100', '120'],
            cr: '30%',
            wr: '40%',
          },
          {
            name: 'Range',
            amount: ['20', '20', '40', '50', '70'],
            cr: '20%',
            wr: '',
          },
          {
            name: 'Slow',
            amount: ['40%', '50%', '60%', '70%', '80%'],
            cr: '',
            wr: '',
          },
          {
            name: 'Slow Duration',
            amount: ['1.5', '1.5', '1.5', '1.5', '1.5'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        name: "CORE CHARGE",
        type: "B ABILITY",
        image: 'Alpha-B.jpg',
        text: [
          "Alpha lunges forward, and basic attacks her target. This ability costs 2% of her current health and applies Core Overload to herself, which will increase her damage output.",
          "Core Overload (status effect): Each stack increases health cost of Core Charge by 2%, but also increases the damage. Also causes basic attacks to heal her. This healing is reduced against lane minions. Lasts 8.0s, stacking up to 3 times. Basic attacks refresh the duration.",
          "• Attack has a small AOE, hitting nearby targets for crystal damage.",
          "• Basic attacks reduce the cooldown of this ability."
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['6', '5.5', '5', '4.5', '4'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['20', '35', '50', '65', '80'],
            cr: '100%',
            wr: '110%',
          },
          {
            name: 'Cooldown Reduction',
            amount: ['1', '1', '1', '1', '1.2'],
            cr: '',
            wr: '',
          },
          {
            name: 'Heal/Stack',
            amount: ['7', '8', '9', '10', '12'],
            cr: '',
            wr: '3%',
          },
          {
            name: 'Bonus Damage/stack',
            amount: ['11%', '11%', '11%', '11%', '15%'],
            cr: '',
            wr: '',
          },
        ]
      },
      {
        name: "TERMINATION PROTOCOL",
        type: "ULTIMATE",
        image: 'Alpha-C',
        text: [
          "Alpha starts her self-destruct sequence, exploding after 3s and then ressurrecting herself with Infinite Reboot.",
          "• At the start of the ability, she gains a burst of move speed that decays rapidly.",
          "• She also gains a large health barrier. If enemies break this barrier, she explodes early.",
          "• This ability can only be activated while Infinite Reboot is available.",
          "• Upgrading this ability reduces the cooldown of Infinite Reboot.",
          "• Barrier: 400-1000 (level 1-12)",
          "• Explosion radions: 4.5 meters"
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['85', '75', '65'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['529', '933', '1337'],
            cr: '250%',
            wr: '',
          },
        ],
      },
    ],

    talents: [
      {
        name: "Core Overclock",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Beneficial Core Overload (B) stacks boost attack speed. Alpha passively gains weapon power.",
          "• Attack Speed/Stack +15%",
          "• Passive Weapon Power +5% (+1%)"
        ],
        image: 'Alpha_Rare.png',
      },
      {
        name: "Prime Time",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Prime Directive (A) grants Alpha bonus fortified health for every negative Core Overload stack from Core Charge (B) she expends. Longer cooldown.",
          "• Health Fort/Stack 15% (+2.5%)",
          "• Duration 3s",
          "• Cooldown 100% (-3%)"
        ],
        image: 'Alpha_Epic',
      },
      {
        name: "Acceleration",
        type: "LEGENDARY",
        color: "#FF9000",
        text:
          [
            "Termination Protocol (Ult) has a stronger barrier and grants Alpha increased move speed instead of slowing her. Shorter cooldown.",
            "• Cooldown 80%",
            "• Bonus Move Speed 2",
            "• Barrier 125%"
          ],
        image: 'Alpha_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Broken Doll Alpha",
        type: "Rare",
        image: 'Alpha_Broken_Doll_I_R.png',
      },
      {
        color: "#7A02EA",
        name: "Toy Box Alpha",
        type: "Epic",
        image: 'Alpha_Broken_Doll_II_E.png',
      },
      {
        color: "#FF9000",
        name: "Clockwork Heart Alpha",
        type: "Legendary",
        image: 'Alpha_Broken_Doll_Legendary',
      },
      {
        color: "#6393F9",
        name: "Heartless Alpha",
        type: "Rare",
        image: 'Alpha_Heartless_Rare',
      },
    ],
  },
  //Anka
  {
    name: "Anka",
    type: ['LANE, ASSASSIN'], role: ['LANE'],
    description: "An elusive and bursty assassin who strikes with a flurry of blades.",
    spotlight: "EZ0Wq-FbU-o",
    stats: [
      { name: "HEALTH", value: "750 - 2301", color: "#4eec8b" }, ,
      { name: "HEALTH REGEN", value: "4.71 - 9.22", color: "#4eec8b" }, ,
      { name: "ENERGY", value: "200 - 695", color: "#5bbcff" }, ,
      { name: "ENERGY REGEN", value: "2.6 - 4.8", color: "#5bbcff" }, ,
      { name: "WEAPON DAMAGE", value: "82 - 152", color: "#f48596" }, ,
      { name: "ATTACK SPEED", value: "100% - 136.3%", color: "#f48596" }, ,
      { name: "ARMOR", value: "30 - 85", color: "#f6ee71" }, ,
      { name: "SHIELD", value: "20 - 60", color: "#f6ee71" }, ,
      { name: "ATTACK RANGE", value: "1.6", color: "#e19efb" }, ,
      { name: "MOVE SPEED", value: "3.6", color: "#e19efb" }, ,
    ],
    model: [
      { image: "Ankablurred" },
      { tmodel: "Anka" },
    ],
    skills: [
      {
        video: 'Anka-P',
        name: "GYTHIAN PROMISE",
        type: "HEROIC PERK",
        image: 'Anka-P.jpg',
        text: [
          "After 8s, Anka’s next basic attack on an enemy hero becomes Execute Strike, dealing bonus crystal damage equal to 19-30% (level 1-12) of the target’s missing health. Additionally, Anka fully refreshes Execute Strike and Shimmer Blade upon getting a hero kill or assist."
        ]
      },
      {
        video: 'Anka-A.mp4',
        name: "SHIMMER BLADE",
        type: "A ABILITY",
        text: [
          "Anka throws a dagger in the target direction, dealing damage to the first enemy hit. When the dagger hits an enemy, Anka can reactivate the ability within 2s to blink next to the victim.",
          "• Anka gains a burst of decaying movement speed upon blinking."
        ],
        image: 'Anka-A',
        stats: [
          {
            name: 'Energy Cost',
            amount: ['12s', '12s', '12s', '12s', '8s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Cooldown',
            amount: ['30', '35', '40', '45', '50'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['25', '50', '75', '100', '150'],
            cr: '40%',
            wr: '',
          },
          {
            name: 'Damage (Blink)',
            amount: ['50', '85', '120', '155', '225'],
            cr: '60%',
            wr: '',
          },
          {
            name: 'Range',
            amount: ['8', '9', '10', '11', '12'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        video: 'Anka-B',
        name: "DANCE OF BLADES",
        type: "B ABILITY",
        image: 'Anka-B',
        text: [
          "Anka throws five knives in a cone, dealing damage to all enemies the knives pass through.",
          "Each additional knife after the first deals damage equal to 50% of the initial damage."
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['8s', '7s', '6s', '5s', '4s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['30', '40', '50', '60', '70'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['50', '75', '100', '125', '175'],
            cr: '50%',
            wr: '',
          },
        ],
      },
      {
        video:: 'Anka-C',
        name: "MIRAGE",
        type: "ULTIMATE",
        image: 'Anka-C',
        text: [
          "Anka dashes in the target direction and splits off three clones to deceive enemies, dealing damage to enemies they pass through. Her clones dash back to her after 2s, dealing damage to enemies they pass through.",
          "• Anka is invulnerable and unable to be targeted during her dash.",
          "• Additional pass through deal damage equal to 50% of the initial damage."
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['100s', '80s', '60s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['70', '80', '90'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage (Initial Dash)',
            amount: ['100', '140', '180'],
            cr: '40%',
            wr: '',
          },
          {
            name: 'Damage (Returning Dash)',
            amount: ['200', '280', '360'],
            cr: '80%',
            wr: '',
          },
        ],
      },
    ],
    model: [
      {
        name: "Gale Blade",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Bonus movespeed on reactivating Shimmer Blade (A) is increased and lasts longer.",
          "• Damage 100% (+5%)",
          "• Bonus Move Speed 1.5 (+0.1)",
          "• Bonus Move Speed Duration 3s",
        ],
        image: 'Anka_Rare',
      },
      {
        name: "Gythian Tempest",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Gythian Promise (Perk) refreshes all abilities on hero kill/assist. Anka passively gains crystal power.",
          "• Passive Crystal Power +2%",
        ],
        image: 'Anka_Epic',
      },
      {
        name: "Crimson Blade",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Shimmer Blade (A) has greatly increased range, lower cooldown and increased damage.",
          "• Range 50",
          "• Cooldown 60%",
          "• Damage 110% (+20%)",
        ],
        image: 'Anka_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Frostborn Anka",
        type: "Rare",
        image: { require('./../images/Skins/Anka_Frostborn.png') },
      },
    ],
  },
  //Ardan
  {
    name: "Ardan",
    type: ['CAPTAIN, PROTECTOR'], role: ['CAPTAIN'],
    description: "Protects allies with barriers and traps enemies inside a large cage.",
    spotlight: "NDKx8m_pfDU",
    stats: [
      { name: "HEALTH", value: "838 - 2638", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "3.39 - 7.24", color: "#4eec8b" },
      { name: "ENERGY", value: "-", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "-", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "80 - 140", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 136.3%", color: "#f48596" },
      { name: "ARMOR", value: "35 - 100", color: "#f6ee71" },
      { name: "SHIELD", value: "25 - 75", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "1.8", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.4", color: "#e19efb" },
    ],
    model: [
      { image: "Ardanblurred" },
      { tmodel: "Ardan" }
    ],
    skills: [
      {
        video: 'Ardan-P',
        name: "JULIA'S GIFT",
        type: "HEROIC PERK",
        image: 'Ardan-P',
        text: [
          "Ardan benefits from purchasing health items.",
          "• Whenever Ardan takes damage, he heals for 0.8% of his missing health, but no more than 75% of the damage taken.",
          "• Instead of energy, Ardan uses a yellow meter called Vengeance. Vengeance builds over time and can also be gained with basic attacks, crtical strikes and abilities.",
          "• Vengeance per attack 5%",
          "• Because Ardan doesn't need regular energy, 5% of bonus energy and 50% of bonus energy recharge are converted to crystal power.",
        ],
            {
        video: 'Ardan-A',
        name: "VANGUARD",
        type: "A ABILITY",
        text: [
          "Ardan dashes to protect an ally, granting them a 4s barrier and a burst of move speed. This also slows and damages nearby enemies.",
          "• Overdrive: At max rank, Vanguard grants 50% Vengeance when cast on an ally.",
          "• Using this ability on himself results in only half the barrier, speed boost and Vengeance gain.",
          "• Barrier scales up with 30% of Ardan's bonus health.",
          "• Any time this ally takes damage, Ardan gains Vengeance.",
        ],
        image: 'Ardan-A',
        stats: [
          {
            name: 'Cooldown',
            amount: ['17s', '16s', '15s', '14s', '12s',],
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
            amount: ['60', '100', '140', '180', '220'],
            cr: '120%',
            wr: '',
          },
          {
            name: 'Range',
            amount: ['7', '7', '7', '7', '9'],
            cr: '',
            wr: '',
          },
          {
            name: 'Barrier',
            amount: ['80', '120', '160', '200', '240'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        video: 'Ardan-B',
        name: "BLOOD FOR BLOOD",
        type: "B ABILITY",
        image: 'Ardan-B',
        text: [
          "Ardan rushes forward and punches his target.",
          "• Overdrive: At max rank, Blood for Blood deals additional 15% damage.",
          "• Blood for Blood can only be activated when Ardan has 100% Vengeance and will consume all of it.",
          "• Blood for Blood triggers basic-attack effects.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['20s', '19s', '18s', '17s', '16s',],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['0', '0', '0', '0', '0',],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['60', '120', '180', '250', '360'],
            cr: '40%',
            wr: '100%',
          },
        ],
      },
      {
        video: 'Ardan-C',
        name: "GAUNTLET",
        type: "ULTIMATE",
        image: 'Ardan-C',
        text: [
          "Ardan leaps to the target location and projects a perimeter around him. Enemy heroes who touch or cross the perimeter are stunned and take crystal damage.",
          "• If Ardan leaves the perimeter, it is immediately destroyed.",
          "• Ardan instantly gains full Vengeance upon using this ability.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['120s', '110s', '100s'],
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
            ramount: ['400', '500', '600'],
            cr: '250%',
            wr: '',
          },
          {
            name: 'Stun Duration',
            amount: ['0.6s', '0.9s', '1.2s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Duration',
            amount: ['6s', '6s', '6s'],
            cr: '',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Vanguardian",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Vanguard (A) provides a full-strength barrier when self-cast.",
          "• Barrier 120% (+5%)",
          "• Damage 20% (+1%)",
          "• Cooldown 95% (-1%)"
        ],
        image: 'Ardan_Rare',
      },
      {
        name: "Heavy Hitter",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Blood for Blood (B) deals much more damage but has 3.5 shorter range.",
          "• Damage 140% (+15%)",
          "• Cooldown 150% (-3%)",
        ],
        image: 'Ardan_Epic',
      },
      {
        name: "Knockout Punch",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Blood for Blood (B) also knocks back the target 10 meters.",
          "• Damage 110% (+20%)",
          "• Cooldown 100% (+10%)",
        ],
        image: 'Ardan_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Storm Lord Ardan",
        type: "Rare",
        image: 'Ardan_Stormlord_I_R',
      },
      {
        color: "#7A02EA",
        name: "Storm Vigil Ardan",
        type: "Epic",
        image: 'Ardan_Stormlord_II_E',
      },
      {
        color: "#FF9000",
        name: "Redemption Ardan",
        type: "Legendary",
        image: 'Ardan_Stormlord_III_L',
      },
      {
        color: "#7A02EA",
        name: "Gladiator Ardan",
        type: "Epic",
        image: 'Ardan_Gladiator_E',
      },
      {
        color: "#7A02EA",
        name: "Cagefighter Ardan",
        type: "Epic",
        image: 'Ardan_Cagefighter_Epic',
      },
      {
        color: "#FADA5E",
        name: "Contender Ardan",
        type: "Limited Edition",
        image: 'Ardan_Contender',
      },
    ],
  },
  //Baptiste
  {
    name: "Baptiste",
    type: ['JUNGLE, MAGE'], role: ['JUNGLE'],
    description: "Mid-range mage who inflicts fear on foes.",
    spotlight: "0MG8X_w4EFI",
    stats: [
      { name: "HEALTH", value: "739 - 2323", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "2.38 - 5.35", color: "#4eec8b" },
      { name: "ENERGY", value: "273- 636", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "2.17 - 4.26", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "78 - 167", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 136.3%", color: "#f48596" },
      { name: "ARMOR", value: "30 - 85", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 60", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "2.8", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.5", color: "#e19efb" },
    ],
    model: [
      { image: "Baptisteblurred" },
      { tmodel: "Baptiste" }
    ],
    skills: [
      {
        name: "REAP",
        type: "HEROIC PERK",
        image: 'Baptiste-P',
        text: [
          "Baptiste steals soul fragments through combat and is healed for each soul fragment acquired.",
          "• Upon reaching 4 soul fragments, Baptiste is empowered for 4 seconds and deals increased damage but generates no additional soul fragments.",
          "• Basic attacks generate one soul fragment",
          "• Abilities generate one soul fragment for each enemy hero hit",
          "• Heal per Soul Fragment: 20-86 (level 1-12) (+ 25% of crystal power)",
          "• Empowered effects: +35% basic-attack damage and +100% ability damage.",
        ],
      },
      {
        name: "BAD MOJO",
        type: "A ABILITY",
        text: [
          "Baptiste pulls a vial of liquid from his vest and throws it. The vial explodes upon reaching its target or when colliding with an enemy.",
          "• Enemies near the explosion take damage and the first enemy hit is slowed.",
          "• Deals 50% less damage to minions.",
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
            row51: ['60%', '60%', '60%', '60%', '60%'],
            cr: '',
            wr: '',
          },
          {
            name: 'Slow Duration',
            row61: ['0.8s', '0.8s', '0.8s', '0.8s', '1.2s'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        name: "ORDAINED",
        type: "B ABILITY",
        image: 'Baptiste-B',
        text: [
          "Baptiste ordains a target enemy, damaging them and creating an ethereal prison around them. If the ordained target leaves the area, they are stunned and take additional damage."
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
        name: "FEARSOME SHADE",
        type: "ULTIMATE",
        image: 'Baptiste-C',
        text: [
          "Baptiste summons waves of shade that terrorize enemies caught in their path. Enemies struck by the shade run from the source in fear and take damage each second.",
          "• Deals 50% less damage to minions."
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
        name: "Bad Bad Mojo",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Bad Mojo (A) has 2 bonus range.",
          "• Cooldown 80% (-1.5%)",
          "• Dmaage 90% (+2.5%)",
        ],
        image: 'Baptiste_Rare'
      },
      {
        name: "The Reaper",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Reap (Perk) continues to collect souls when empowered.",
          "• Passive Attack Speed +30% (+3%)",
          "• Heal 45% (+4%)",
        ],
        image: 'Baptiste_Epic',
      },
      {
        name: "Army of Souls",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Fearsome Shade (Ult) summons two sets of spectres that travel side by side.",
          "• Cooldown 70%",
          "• Range 15%",
          "• Damage 120%",
        ],
        image: 'Baptiste_Legendary',
      },
    ],
    skins: [
      {
        color: "#7A02EA",
        name: "Scarecrow Baptiste",
        type: "Epic",
        image: 'Baptist_Scarecrow',
      },
      {
        color: "#7A02EA",
        name: "Anubis Baptiste",
        type: "Epic",
        image: 'Anubis_Epic.png',
      },
    ],
  },
  //Baron
  {
    name: "Baron",
    type: ['LANE, SNIPER'], role: ['LANE'],
    description: "Rocket soldier who can nuke anywhere on the map.",
    spotlight: "qTHw50-xTbc",
    stats: [
      { name: "HEALTH", value: "679 - 2054", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "3.29 - 7.91", color: "#4eec8b" },
      { name: "ENERGY", value: "270 - 765", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "6.67 - 18", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "71 - 130", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 111%", color: "#f48596" },
      { name: "ARMOR", value: "25 - 75", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 55", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "5.4", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3", color: "#e19efb" },],
    model: [
      { image: "Baronblurred" },
      { tmodel: "Baron" },
    ],
    skills: [
      {
        name: "ROCKET LAUNCHER",
        type: "HEROIC PERK",
        image: 'Baron-P',
        text: [
          "Baron’s basic attacks deal 135% weapon damage to the target and surrounding enemies.",
          "• Explosions deal 90% damage to surrounding enemies.",
          "• Explosions less damage to minions.",
        ],
      },
      {
        name: "PORCUPINE MORTAR",
        type: "A ABILITY",
        text: [
          "Baron launches artillery toward the target location, heavily damaging enemies on impact. This ability has 2 charges.",
          "• Enemies are also slowed by 10% (+10% weapon power), decaying over 2.2s.",
          "• This slow is further increased with weapon power up to a cap of 30% with 200 weapon power.",
          "• The range of this ability increases with crystal power up to a cap of 11 meters with 200 crystal power.",
          "• Baron can fire this while using Jump Jets.",
          "• Deals less damage to minions."
        ],
        image: 'Baron-A',
        stats: [
          {
            name: 'Charge Time',
            amount: ['5s', '4.5s', '4s', '3.5s', '2.5s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['40', '50', '60', '70', '80'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damege',
            amount: ['40', '120', '200', '280', '360'],
            cr: '130%',
            wr: '70%',
          },
          {
            name: 'Range',
            amount: ['8', '8', '8', '8', '8'],
            cr: '1.5%',
            wr: '',
          },
        ],
      },
      {
        name: "JUMP JETS",
        type: "B ABILITY",
        image: 'Baron-B',
        text: [
          "After a brief delay, Baron jets to the location then gains bonus move speed for 2.1s. His next basic attack is a double shot.",
          "• Overdrive: At max rank, Baron ignores all debuffs while leaping.",
          "• Baron takes longer to power up the farther away he is from his destination.However, this delay is reduced by weapon and crystal power up to a maximum of 200 total.",
          "• Basic attacks reduce this ability's cooldown by 15%."
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['22s', '20s', '18s', '16s', '12s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['130', '140', '150', '160', '170'],
            cr: '',
            wr: '',
          },
          {
            name: 'Speed Boost',
            amount: ['0.5', '0.6', '0.7', '0.8', '1'],
            cr: '',
            wr: '0.3%',
          },
        ],
      },
      {
        name: "ION CANNON",
        type: "ULTIMATE",
        image: 'Baron-C.jpg',
        text: [
          "Baron targets a location anywhere on the map for an orbital strike., obliterating the area after a 3s delay.",
          "• Deals 50 % less damage to minions.",
          "• This deals full damage to enemies near the center, falling off to 65 % damage at the edges.",
          "• Although Baron and his allies see the designated location immediately, enemies only become aware of it 0.9s before impact.",
          "• Passive: Each rank of this ability permanently increases Baron's basic-attac range.",
          "• Deals less damage to minions.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['80s', '70s', '60s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['100', '125', '150'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damege at Center',
            amount: ['500', '750', '1000'],
            cr: '150%',
            wr: '120%',
          },
          {
            name: 'Bonus Attack Range',
            amount: ['0.4', '0.8', '1.2'],
            cr: '',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Turbo Jets",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Jump Jets (B) has no startup delay and fires three rockets on Baron’s next basic attack.",
          "• Cooldown 110% (-2%)",
          "• Triple Shot Damage 70% (+2%)",
        ],
        image: 'Baron_Rare',
      },
      {
        name: "Endless Mortars",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Porcupine Mortar (A) has 6 additional charges and travels faster.",
          "• Damage 50% (+7.5%)",
          "• Energy Cost 20%",
        ],
        image: 'Baron_Epic',
      },
      {
        name: "Trion Cannon",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Ion Cannon (Ult) has 2 additional charges. Baron passively gains attack range.",
          "• Charge Time 60%",
          "• Damage 80%",
          "• Passive Bonus Attack Range 0.5"
        ],
        image: 'Baron_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Elite Force Baron",
        type: "Rare",
        image: 'Baron_Elite_Force_R',
      },
      {
        color: "#FF9000",
        name: "Fly or Die Baron",
        type: "Legendary",
        image: 'Baron_Fly_or_Die_Legendary',
      },
    ],
  },
  //Blackfeather
  {
    name: "Blackfeather",
    type: ['LANE, ASSASSIN'], role: ['LANE'],
    description: "Evasive fighter who excels at chasing and cleaning up fragile enemies.",
    spotlight: "d7-fyE9P7QI",
    stats: [
      { name: "HEALTH", value: "657 - 2387", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "-", color: "#4eec8b" },
      { name: "ENERGY", value: "-", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "-", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "81 - 160", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 122%", color: "#f48596" },
      { name: "ARMOR", value: "25 - 75", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 55", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "1.8", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.5", color: "#e19efb" },
    ],
    model: [
      { image: "Blackfeatherblurred" },
      { tmodel: "Blackfeather" },
    ],
    skills: [

      {
        name: "HEARTTHROB",
        type: "HEROIC PERK",
        image: 'Blackfeather-P',
        text: [
          "Blackfeather's attacks and abilities apply Heartthrob stacks to enemies. Any time stacks are added or refreshed, Blackfeather deals bonus crystal damage for each stack already on the target.",
          "• Bonus damage: 5-10 (level 1-12) (+15% of crystal power).",
          "• Mas 2 stacks on minions and monsters, 5 stacks on heroes and objectives.",
          "• Stacks appear as broken hearts around enemies.",
          "• Instead of energy, Blackfeather uses Focus for his abilities. This is capped at 100 and naturally regenerates 10 per second. Blackfeather also recovers and additional 10 focus for each basic attack he lands.",
        ],
      },
      {
        name: "FEINT OF HEART",
        type: "A ABILITY",
        text: [
          "Blackfeather lunges to his target with a thrust of his sword, then gains 2.2 bonus movement speed for 3s.",
          "• If the target has full Heartthrob stacks, it deals bonus weapon damage based on target's missing health.",
          "• Overdrive: At max rank, the cooldown for Feint of Heart is reset if the target is killed within 0.5s.",
          "• Execute damage is capped against non-heroes.",
          "• This ability triggers basic-attack effects."
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
        name: "ON POINT",
        type: "B ABILITY",
        image: 'Blackfeather-B',
        text: [
          "Blackfeather pierces all enemies in a line, damaging them.",
          "• Overdrive: At max rank, On Point gains increased range.",
          "• If this hits at least one enemy hero, Blackfeather also gains a 1.2s barrier that scales with 5% of his bonus health and recovers 40 focus.",
          "• The amount of focus recovered is further increased with 2% of his max energy and 50% of his Energy Regen.",
          "• Deals less damage to minions.",
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
        name: "ROSE OFFENSIVE",
        type: "ULTIMATE",
        image: 'Blackfeather-C',
        text: [
          "Blackfeather dashes and slashes all enemies along his path.",
          "• During the dash, Blackfeather is immune to negative effects and has fortified health.",
          "• This ability has 2 charges.",
          "• This ability triggers basic- attack effects.",
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
        name: "Hummingbird Heart",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Heartthrob (Perk) lasts 4s longer on targets. Blackfeather passively gains weapon power and attack speed.",
          "• Passive Attack Speed +20% (+2%)",
          "• Passive Weapon Power +5% (+1%)",
        ],
        image: 'Blackfeather_Rare.png',
      },
      {
        name: "Point Guard",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Landing On Point (B) on an enemy hero grants a stronger barrier to nearby allies for 2s.",
          "• Barrier 150% (+10%)",
        ],
        image: 'Blackfeather_Epic',
      },
      {
        name: "Elusiveness",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Rose Offensive (Ult) has 2 additional charges.",
          "• Damage 100% (+25%)",
          "• Focus Cost 5%",
          "• Charge Time 50% (-7.5%)",
        ],
        image: 'Blackfeather_Legendary',
      }
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Dynasties Blackfeather",
        type: "Rare",
        image: 'Blackfeather_Dynasties_R.png'
      },
      {
        color: "#FF9000",
        name: "Champion Blackfeather",
        type: "Legendary",
        image: 'Blackfeather_Champion_L',
      },
      {
        color: "red",
        name: "Love Bites Blackfeather",
        type: "Special Edition",
        image: 'Blackfeather_Love_Bites_SE',
      },
      {
        color: "red",
        name: "Summer Party Blackfeather",
        type: "Special Edition",
        image: 'Blackfeather_Summer_Party',
      },
    ],
  },
  //Catherine
  {
    name: "Catherine",
    type: ['CAPTAIN, PROTECTOR'], role: ['CAPTAIN'],
    description: "Disruptive tank with lots of stuns and a powerful silence.",
    spotlight: "i2cphmHljZM",
    stats: [
      { name: "HEALTH", value: "808 - 2673", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "4.06 - 7.91", color: "#4eec8b" },
      { name: "ENERGY", value: "200 - 464", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "1.33 - 3.09", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "74 - 141", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 136.3%", color: "#f48596" },
      { name: "ARMOR", value: "30 - 85", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 60", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "1.5", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.6", color: "#e19efb" },
    ],
    model: [
      { image: "Catherineblurred" },
      { tmodel: "Catherine" },
    ],
    skills: [
      {
        video: 'Catherine-P',
        name: "CAPTAIN OF THE GUARD",
        type: "HEROIC PERK",
        image: 'Catherine-P',
        text: [
          "Catherine gains 1 armor and shield every time she stuns or silences or silences an enemy hero with her abilities.",
        ],
      },
      {
        video: 'Catherine-A',
        name: "MERCILESS PURSUITS",
        type: "A ABILITY",
        text: [
          "Catherine gains a burst of move speed. Her next basic attack is replaced by a powerful stun attack.",
          "• Resets basic-attack cooldown on activation.",
        ],
        image: 'Catherine-A',
        stats: [
          {
            name: 'Cooldown',
            amount: ['16s', '15s', '14s', '13s', '12s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['30', '40', '50', '60', '70'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['35', '60', '85', '110', '135'],
            cr: '100%',
            wr: '100%',
          },
          {
            name: 'Bonus Speed Duration',
            amount: ['1.5', '1.5', '1.5', '1.5', '2'],
            cr: '',
            wr: '',
          },
          {
            name: 'Stun Duration',
            amount: ['0.7s', '0.7s', '0.7s', '0.7s', '0.9s'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        video: 'Catherine-B',
        name: "STORMGUARD",
        type: "B ABILITY",
        image: 'Catherine-B',
        text: [
          "Activates a protective bubble that reflects damage back to nearby enemies - especially when it comes in large bursts.",
          "• Reflects any damage above 7.5% of base maximum health.",
          "• Reflect damage is spread out to up 3 nearby enemies.",
          "• Each reflection reduces the shield duration by 0.4s.",
          "• Also damages enemies around Catherine while Stormguard is on.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['9s', '7.5s', '7s', '6.5s', '6s'],
            cr: '',
            wr: '',
          },

          {
            name: 'Energy Cost',
            amount: ['40', '50', '60', '70', '80'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage/sec',
            amount: ['45', '65', '85', '105', '125'],
            cr: '50%',
            wr: '',
          },
          {
            name: 'Duration',
            amount: ['4s', '4s', '4s', '4s', '4s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Bonus Reflect Damage',
            amount: ['0%', '5%', '10%', '15%', '25%'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        video: 'Catherine-C',
        name: "BLAST TREMOR",
        type: "ULTIMATE",
        image: 'Catherine-C',
        text: [
          "Catherine slams the ground, damaging and silencing enemies in a large cone in front of her."
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['90s', '80s', '70s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['120', '140', '160'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['400', '550', '700'],
            cr: '150%',
            wr: '',
          },
          {
            name: 'Range',
            amount: ['11', '11', '11'],
            cr: '',
            wr: '',
          },
          {
            name: 'Silence Duration',
            amount: ['1.5s', '2s', '2.5s'],
            cr: '',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Advancing Guard",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Captain of the Guard (Perk) also grants temporary bonys crystal and weapon power for 30s.",
          "• Duration 30s",
          "• Weapon Power/Stack +1% (+1%)",
          "• Crystal Power/Stack +1% (+1%)",
        ],
        image: 'Catherine_Rare',
      },
      {
        name: "Quick Pursuit",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "While Stormguard (B) is active, Catherine’s basic attacks will reduce the cooldown of Merciless Pursuit (A) and Blast Tremor (Ult).",
          "• Merciless Pursuit Reduction 10% (+1.5%)", ,
          "• Blast Tremor Reduction 5% (+1%)",
        ],
        image: 'Catherine_Epic',
      },
      {
        name: "Shockwave",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Blast Tremor (Ult) knock back enemies but no longer silences.",
          "• Cooldown 70% (-7.5%)",
          "• Damage 115% (+15%)",
        ],
        image: 'Catherine_Legendary'
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Queen's Knight Catherine",
        type: "Rare",
        image: 'Catherine_Paragon_I_R',
      },
      {
        color: "#7A02EA",
        name: "Paragon Catherine",
        type: "Epic",
        image: 'Catherine_Paragon_II_E',
      },
      {
        color: "#FF9000",
        name: "Serpent Mask Catherine",
        type: "Legendary",
        image: 'Catherine_Paragon_III_L',
      },
      {
        color: "#7A02EA",
        name: "Gladiator Catherine",
        type: "Epic",
        image: 'Catherine_Gladiator_E',
      },
      {
        color: "#FADA5E",
        name: "Winter War Catherine",
        type: "Limited Edition",
        image: 'Catherine_Winter_War_LE',
      },
      {
        color: "red",
        name: "Winter War Catherine",
        type: "Special Edition",
        image: 'Catherine_Winter_War_SE',
      },
      {
        color: "red",
        name: "Championship Catherine",
        type: "Special Edition",
        image: 'Catherine_Championship',
      },
      {
        color: "red",
        name: "Summer Party Catherine",
        type: "Special Edition",
        image: 'Catherine_Summer_Red',
      },
      {
        color: "red",
        name: "Surf's Up Catherine",
        type: "Special Edition",
        image: 'Catherine_Summer_Blue',
      },
      {
        color: "red", name: "Beeach Patrol Catherine",
        text: "Special Edition",
        image: 'Catherine_Summer_Black_Orange',
      },
      {
        color: "#FF9000",
        name: "Dragon Master Catherine",
        type: "Legendary",
        image: 'Catherine_Dragon_Master',
      },
    ],
  },
  //Celeste
  {
    name: "Celeste"
    type: ['LANER, MAGE'], role: ['LANER'],
    description: "Back-line mage with heavy area damage and a stun.",
    spotlight: "rC-vkqUkERY",
    stats: [
      { name: "HEALTH", value: "649 - 2028", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "2.23 - 4.76", color: "#4eec8b" },
      { name: "ENERGY", value: "380 - 732", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "2.53 - 4.84", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "0", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 125%", color: "#f48596" },
      { name: "ARMOR", value: "25 - 75", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 55", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "5.3", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.4", color: "#e19efb" },
    ],
    model: [
      { image: "Celesteblurred" },
      { tmodel: "Celeste" }
    ],
    skills: [
      {
        video: 'Celeste-P',
        name: "JULIA'S LIGHT",
        type: "HEROIC PERK",
        image: 'Celeste-P',
        type: [
          "Celeste's basic attacks have a spell component, dealing 75-125 (level 1-12) (+75% Crystal Power)(+100% Weapon Power). Celeste's basic attacks also reveal enemy heroes for 1.5 seconds - even after the target leaves vision range."
        ],
      },
      {
        video: 'Celeste-A',
        name: "HELIOGENESIS",
        type: "A ABILITY",
        type: [
          "Celeste forms a small star at a target location, dealing crystal damage to nearby enemies. The star will briefly linger on the field. If Celeste uses this ability on an existing star, the star will go supernova, dealing more crystal damage in a larger area.",
          "Deals reduced damage (-50%) to minions."
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
        video: 'Celeste-B',
        name: "CORE COLLAPSE",
        type: "B ABILITY",
        image: 'Celeste-B',
        type: [
          "After a brief delay, the target location collapses and nearby enemies are stunned and take crystal damage."
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
            amount: ['1s', '1s', '1s', '1s', '1.5s',],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        video: 'Celeste-C',
        name: "SOLAR STORM",
        type: "ULTIMATE",
        image: 'Celeste-C',
        type: [
          "Celeste launches a storm of stars that travel across the world. Stars collide with the first enemy they hit, dealing crystal damage in an area. The number of stars increases each time Solar Storm is upgraded.",
          "Deals reduced damage to non-heroes and does not damage structures.",
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
        name: "YOUNG STAR",
        type: "RARE",
        color: "#6393F9",
        type: [
          "Heliogensis (A) stars linger on the field 4s longer and continuously damage nearby enemies. Lower impact damage.",
          "• Impact Damage 30% (+1%)%",
          "• Damage/Sec 70% (+2.5%)",
        ],
        image: 'Celeste_Rare',
      },
      {
        name: "CORE LEAF CLOVER",
        type: "EPIC",
        color: "#7A02EA",
        type: [
          "Core Collapse (B) creates four black-hole collapses. Longer cooldown and lower damage.",
          "• Damage 25% (+2.5%)",
          "• Cooldown 125% (-4%)",
        ],
        image: 'Celeste_Epic',
      },
      {
        name: "GALAXY COLLAPSE",
        type: "LEGENDARY",
        color: "#FF9000",
        type: [
          "Heliogenesis (A) supernovas cause other stars to supernova. Lower damage.",
          "• Impact Damage 70% (+5%)",
          "• Supernova Damage 100% (+10%)",
        ],
        image: 'Celeste_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Rebellion Celeste",
        type: "Rare",
        image: 'Celeste_Star_Queen_I_R',
      },
      {
        color: "#7A02EA",
        name: "Rising Star Celeste",
        type: "Epic",
        image: 'Celeste_Star_Queen_II_E',
      },
      {
        color: "#FF9000",
        name: "Star Queen Celeste",
        type: "Legendary",
        image: 'Celeste_Star_Queen_III_L',
      },
      {
        color: "#6393F9",
        name: "Butterfly Celeste",
        type: "Rare",
        image: 'Celeste_Butterfly_R',
      },
      {
        color: "red",
        name: "Baewitched Celeste",
        type: "Special Edition",
        image: 'Celeste_Baewitched_SE',
      },
      {
        color: "red",
        name: "Moon Princess Celeste",
        type: "Special Edition",
        image: 'Celeste_Moon_Princess_SE',
      },
      {
        color: "#FADA5E",
        name: "Baewitched Celeste",
        type: "Limited Edition",
        image: 'Celeste_Baewitched_LE',
      },
      {
        color: "red",
        name: "Snow Queen Celeste",
        type: "Special Edition",
        image: 'Celeste_Snow_Queen'
      },
    ],
  },
  //Churnwalker
  {
    name: "Churnwalker",
    type: ['CAPTAIN, WARRIOR'], role: ['CAPTAIN'],
    description: "A disruptor who throws multiple skillshot hooks, chaining victims to him.",
    spotlight: "kFb2bUxln4E",
    stats: [
      { name: "HEALTH", value: "863 - 2749", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "4.05 - 6.8", color: "#4eec8b" },
      { name: "ENERGY", value: "380 - 732", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "2.38 - 4.69", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "80 - 165", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 122%", color: "#f48596" },
      { name: "ARMOR", value: "35 - 100", color: "#f6ee71" },
      { name: "SHIELD", value: "25 - 75", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "1.7", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.2", color: "#e19efb" },
    ],
    model: [
      { image: 'Churnwalkerblurred' },
      { tmodel: "Churnwalker" }
    ],
    skills: [
      {
        name: "FUTILITY OF LIFE",
        type: "HEROIC PERK",
        image: 'Churnwalker-P',
        text: [
          "• Whenever chained victims take damage from any source, Churnwalker regenerates 20% of that damage as health.",
          "• Whenever any chained victim takes damage, 30% of that damage is conferred on all other chained victims.",
        ],
      },
      {
        name: "HOOK & CHAIN",
        type: "A ABILITY",
        text: [
          "Churnwalker throws a skillshot hook that damages, briefly slows and chains victims to him.",
          "• Chained heroes take damage over time.",
          "• If a chained victim can get far enough away, the chain will break.",
          "• Landing a hook will reset this ability's cooldown. (Chained victims cannot be hit by a hook).",
          "• Overdrive: Increases the max range of the hook and the chain's damage over time.",
        ],
        image: 'Churnwalker-A',
        stats: [
          {
            name: 'Cooldown',
            amount: ['5s', '4.5s', '4s', '3.5s', '3s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['20', '20', '20', '20', '20'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['40', '80', '120', '160', '200'],
            cr: '50%',
            wr: '',
          },
          {
            name: 'Damage/sec',
            amount: ['1%', '1%', '1%', '1%', '3%'],
            cr: '',
            wr: '',
          },
        ],
      },

      {
        name: "TORMENT",
        type: "B ABILITY",
        image: 'Churnwalker-B',
        text: [
          "Torment yanks all chained victims toward Churnwalker a fixed distance, damaging them.",
          "• Overdrive: Yanks victims closer to Churnwalker.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['8s', '8s', '8s', '8s', '8s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['75', '75', '75', '75', '75'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['80', '140', '200', '260', '380'],
            cr: '80%',
            wr: '',
          },
        ],
      },
      {
        name: "TRESPASS",
        type: "ULTIMATE",
        image: 'Churnwalker-C',
        text: [
          "Churnwalker channels churn power for a short time, then travels to the target location, stunning all chained victims and breaking all chains.",
          "• Churnwalker requires a chained target to cast this ability.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['80s', '70s', '60s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['75', '75', '75'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['300', '400', '500'],
            cr: '100%',
            wr: '',
          },
          {
            name: 'Stun Duration',
            amount: ['1.2s', '1.4s', '1.6s'],
            cr: '',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Churn Tank",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Futility of Life (Perk) has significantly increased healing but decreased damage share.",
          "• Heal 210% (+10%)",
          "• Damage 50% (+1%)",
        ],
        image: 'Churnwalker_Rare',
      },
      {
        name: "Cloud of Torment",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Activating Torment (B) releases a powerful Churn Cloud that damages enemies over time, making Churnwalker a dangerous threat at close range. Cooldown increased.",
          "• Duration 3s (+ 0.25s)",
          "• Damage/Sec 50 (+40)",
          "• Radius 4",
          "• Cooldown 3s (-0.2s)",
        ],
        image: 'Churnwalker_Epic',
      },
      {
        name: "Grappling Hook",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Churnwalker’s Hook & Chain (A) gains a grappling hook. This ability has dramatically increased range and can grapple to targets, pulling Churnwalker to the hooked location.",
          "• Bonus Range 20 (+5)",
          "• Range 2 (+0.2)",
        ],
        image: 'Churnwalker_Legendary',
      },
    ],
    skins: [
      {
        color: "#FF9000",
        name: "Clownwalker",
        type: "Legendary",
        image: 'Churnwalker_Clownwalker',
      },
    ],
  },
  //Flicker
  {
    name: "Flicker",
    type: ['CAPTAIN, PROTECTOR'], role: ['CAPTAIN'],
    description: "Trickster who can make the entire team invisible.",
    spotlight: "xj7Lj295kXM",
    stats: [
      { name: "HEALTH", value: "797 - 2648", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "3.85 - 3.85", color: "#4eec8b" },
      { name: "ENERGY", value: "295 - 757", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "1.94 - 4.69", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "77 - 155", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 136.3%", color: "#f48596" },
      { name: "ARMOR", value: "35 - 100", color: "#f6ee71" },
      { name: "SHIELD", value: "25 - 75", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "1.5", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.5", color: "#e19efb" },
    ],
    model: [
      { image: "Flickerblurred" },
      { tmodel: "Flicker" }
    ],
    skills: [
      {
        name: "WILLOW WHISPER",
        type: "HEROIC PERK",
        image: 'Flicker-P',
        text: [
          "Flicker gains stealth and a move speed bonus when in brush for 2s. Flicker can then leave the brush and remain stealthed for 3s.",
          "• Flicker has true sight while stealthed.",
          "• Taking damage, attacking or using abilities removes stealth.",
        ],
      },
      {
        name: "BINDING LIGHT",
        type: "A ABILITY",
        text: [
          "Flicker commands his fairies to swarm a target location for 2s, dealing damage to enemies within it. When the effect expires, fairy light roots any enemy heroes still within the area.",
        ],
        image: 'Flicker-A',
        stats: [
          {
            name: 'Cooldown',
            amount: ['6s', '5.5s', '5s', '4.5s', '4s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['30', '40', '50', '60', '70'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage/sec',
            amount: ['60', '120', '180', '240', '300'],
            cr: '50%',
            wr: '',
          },
          {
            name: 'Range',
            amount: ['8', '8', '8', '8', '8'],
            cr: '',
            wr: '',
          },
          {
            name: 'Root Duration',
            amount: ['1s', '1s', '1s', '1s', '1.5s'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        name: "FAIRY DUST",
        type: "B ABILITY",
        image: 'Flicker-B',
        text: [
          "Flicker swirls fairy dust around him for 3s, slowing and dealing damage to anyone inside the dusted area. After 3s, the dust ignites, dealing a burst of damage."
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
            amount: ['60', '70', '80', '90', '100'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage/sec',
            amount: ['20', '40', '60', '80', '120'],
            cr: '40%',
            wr: '',
          },
          {
            name: 'Detonate Damage',
            amount: ['60', '120', '180', '240', '360'],
            cr: '100%',
            wr: '',
          },
          {
            name: 'Range',
            amount: ['4', '4', '4', '4', '4'],
            cr: '',
            wr: '',
          },
          {
            name: 'Slow',
            amount: ['35%', '40%', '45%', '50%', '60%'],
            cr: '',
            wr: '',
          },
        ]
      },
      {
        name: "MOONCLOAK",
        type: "ULTIMATE",
        image: 'Flicker-C',
        text: [
          "After 1s, Flicker and his allies temporarily gain stealth and a move speed-bonus.",
          "• The stealth will break when a hero uses an ability, attacks or takes damage.",
          "• All heroes affected by this ability will have true sight while stealthed.",
          "• After a short time, that hero will stealth again so long as Mooncloak's duration has not expired.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['120s', '100s', '80s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['100', '100', '100'],
            cr: '',
            wr: '',
          },
          {
            name: 'Duration',
            amount: ['8s', '10s', '12s'],
            cr: '',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Swarming Light",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Binding Light (A) has 1 additional charge.",
          "• Damage 90% (+2.5%)",
          "• Cooldown 90% (-2%)",
        ],
        image: 'Flicker_Rare',
      },
      {
        name: "Binding Dust",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Fairy Dust (B) roots enemies caught within its detonation and grants Flicker move speed while active.",
          "• Damage 80% (+5%)",
          "• Bonus Move Speed 1.5 (+0.15)",
          "• Root Duration 1.2s",
        ],
        image: 'Flicker_Epic',
      },
      {
        name: "Fairy Healing",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Flicker’s stealth also greatly increases health regeneration. Flicker passively gains crystal power.",
          "• Max Health to Heal 7.5% (+2.5%)",
          "• Passive Crystal Power +15% (+5%)",
        ],
        image: 'Flicker_Legendary',
      },
    ],
    skins: [
      {
        color: "#7A02EA",
        name: "Red Lantern Flicker",
        type: "Epic",
        image: 'Flicker_Red_Lantern_E',
      },
      {
        color: "#7A02EA",
        name: "Dr Franken Flicker",
        type: "Epic",
        image: 'Flicker_DrFrankenFlicker_Epic',
      },
      {
        color: "Red",
        name: "Black Cat Flicker",
        type: "Special Edition",
        image: 'Flicker_Blackcat',
      },
    ],
  },
  //Fortress
  {
    name: "Fortress",
    type: ['CAPTAIN, PROTECTOR'], role: ['CAPTAIN'],
    description: "Agressive pack leader who swarms the enemy with great speed.",
    spotlight: "DGEg_EsKwwY",
    stats: [
      { name: "HEALTH", value: "761 - 2581", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "4.3 - 9.91", color: "#4eec8b" },
      { name: "ENERGY", value: "300 - 465", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "1.56 - 3.21", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "73 - 156", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 144%", color: "#f48596" },
      { name: "ARMOR", value: "30 - 85", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 60", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "1.8", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.6", color: "#e19efb" },
    ],
    model: [
      { image: "Fortressblurred" },
      { tmodel: "Fortress" }
    ],
    skills: [
      {
        video: 'Fortress-P',
        name: "PACKMATES",
        type: "HEROIC PERK",
        image: 'Fortress-P',
        text: [
          "When Fortress is near an allied hero, he will move faster after 1s. He will maintain this move-speed bonus so long as he's alongside any allied hero.",
        ],
      },
      {
        video: 'Fortress-A',
        name: "TRUTH OF THE TOOTH",
        type: "A ABILITY",
        image: 'Fortress-A',
        text: [
          "Fortress marks the target enemy as prey and his next basic attack becomes a short-range lunge.",
          "• Fortress and his allies move faster toward prey and have lifesteal when attacking them.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['9s', '8.5s', '8s', '7.5s', '7s'],
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
            amount: ['30', '60', '90', '120', '180'],
            cr: '110%',
            wr: '100%',
          },
          {
            name: 'Range',
            amount: ['9', '9', '9', '9', '9'],
            cr: '',
            wr: '',
          },
          {
            name: 'Speed Boost',
            amount: ['1.8', '1.8', '1.8', '1.8', '1.8'],
            cr: '',
            wr: '',
          },
          {
            name: 'Duration',
            amount: ['3s', '3s', '3s', '3s', '4s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Lifesteal',
            amount: ['10%', '11%', '12%', '13%', '15%'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        video: 'Fortress-B',
        name: "LAW OF THE CLAW",
        type: "B ABILITY",
        image: 'Fortress-B',
        text: [
          "Fortress claws his target, causing it to bleed for several seconds.",
          "• Upon reaching 6 stacks, the target is dealt a burst of damage based on its max health and receives mortal wound (reduced healing).",
          "• Overdrive: At max rank, the target is also slowed by 40%.",
          "• Bleeding damage per second: 10 (+15% of crystal power).",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['11s', '10s', '9s', '8s', '7s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['30', '40', '50', '60', '70'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['70', '100', '130', '160', '190'],
            cr: '70%',
            wr: '',
          },
          {
            name: 'Damage/sec',
            amount: ['10', '10', '10', '10', '10'],
            cr: '15%',
            wr: '',
          },
          {
            name: 'Max Health %',
            amount: ['8%', '10%', '12%', '14%', '16%'],
            cr: '5%',
            wr: '',
          },
        ],
      },
      {
        video: 'Fortress-C',
        name: "ATTACK OF THE PACK",
        type: "ULTIMATE",
        image: 'Fortress-C',
        text: [
          "Fortress summons a pack of wolves. Each pack wolf seeks out a different enemy hero.",
          "• It takes three separate attacks to kill a pack wolf.",
          "• Wolves take normal damage from abilities and are granted 20% of Fortress' bonus defensive stats.",
          "• Wolves apply bleeding with their basic attacks.",
          "• Fortress gains fortified health and attack speed when the wolves are summoned.",
          "• Wolves suffer damage equal to 75% of their max health from turrets"
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['120s', '110s', '100s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['120', '140', '160'],
            cr: '',
            wr: '',
          },
          {
            name: 'Duration',
            amount: ['10s', '12s', '14s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Attack Speed',
            amount: ['30%', '45%', '60%'],
            cr: '',
            wr: '',
          },
          {
            name: 'Fortified Health',
            amount: ['300', '425', '550'],
            cr: '',
            wr: '',
          },
          {
            name: 'Wolf Attack Damage',
            amount: ['20', '40', '60'],
            cr: '',
            wr: '',
          },
          {
            name: 'Wolf Base Health',
            amount: ['300', '450', '600'],
            cr: '5%',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Longtooth",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Truth of the Tooth (A) has 1.6 bonus range. Fortress passively gains attack speed and weapon power.",
          "• Bonus Range 1.6 (+0.1)",
          "• Passive Weapon Power +0.5% (+0.5%)",
          "• Passive Attack Speed +0.5% (+0.5%)",
        ],
        image: 'Fortress_Rare',
      },
      {
        name: "Critical Wounds",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Fortress gains +15% critical chance for each active wolf summoned by Attack of the Pack (Ult). Fortress passively gains critical strike damage.",
          "• Passive Crit Dmg +25% (+2.5%)",
          "• Cooldown 125% (-5%)",
        ],
        image: 'Fortress_Epic',
      },
      {
        name: "Flank Attack",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Truth of the Tooth (A) and Law of the Claw (B) spawn a wolf to attack Fortress’ target, up to a maximum of 3 wolves.",
          "• Bleed Damage 60% (+10%)",
          "• Cooldown 190% (-10%)",
        ],
        image: 'Fortress_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Firehound Fortress",
        type: "Rare",
        image: 'Fortress_Netherworld_I_R',
      },
      {
        color: "#7A02EA",
        name: "Netherworld Fortress",
        type: "Epic",
        image: 'Fortress_Netherworld_II_E',
      },
      {
        color: "#FF9000",
        name: "Cerberus Fortress",
        type: "Legendary",
        image: 'Fortress_Netherworld_III_L',
      },
      {
        color: "#6393F9",
        name: "Dire Fortress",
        type: "Rare",
        image: 'Fortress_Dire_Rare',
      },
      {
        color: "#FADA5E",
        name: "Gift Wrapped Fortress",
        type: "Limited Edition",
        image: 'Fortress_Gift-wrapped_LE',
      },
      {
        color: "red",
        name: "Gift Wrapped Fortress",
        type: "Special Edition",
        image: 'Fortress_Gift-wrapped_SE',
      },
      {
        color: "red",
        name: "Summer Party Fortress",
        type: "Special Edition",
        image: 'Fortress_Summer_Party',
      },
    ],
  },
  //Glaive
  {
    name: "Glaive",
    type: ['JUNGLE, WARRIOR'], role: ['JUNGLE'],
    description: "Brutal axe warrior who can knock enemies out of position.",
    spotlight: "htECezLaZRI",
    stats: [
      { name: "HEALTH", value: "834 - 2503", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "2.47 - 6.21", color: "#4eec8b" },
      { name: "ENERGY", value: "275 - 440", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "1.47 - 2.9", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "70 - 156", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 122%", color: "#f48596" },
      { name: "ARMOR", value: "30 - 85", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 60", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "2.8", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.5", color: "#e19efb" },
    ],
    model: [
      { image: "Glaiveblurred" },
      { tmodel: "Glaive" }
    ],
    skills: [
      {
        video: 'Glaive-P',
        name: "HUNT THE WEAK",
        type: "HEROIC PERK",
        image: 'Glaive-P',
        text: [
          "Glaive's critical strikes cleave in a 4 metres cone in front of him.",
          "• Cleave deals half damage to minions.",
        ],
      },
      {
        video: 'Glaive-A',
        name: "AFTERBURN",
        type: "A ABILITY",
        image: 'Glaive-A',
        text: [
          "Glaive rockets in the target direction, damaging all enemies along the way. His next basic attack is replaced by a frightening blast that knocks his target back 5.5 meters and briefly stuns them.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['24s', '22s', '20s', '28s', '24s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['110', '120', '130', '140', '150'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['100', '150', '200', '250', '300'],
            cr: '130%',
            wr: '',
          },
        ],
      },
      {
        video: 'Glaive-B',
        name: "TWISTED STROKE",
        type: "B ABILITY",
        image: 'Glaive-B',
        text: [
          "Instantly executes a critical strike.",
          "• This ability deals weapon damage, but it can deal bonus crystal damage if you have any crystal power.",
          "• Triggers basic-attack effects.",
          "• Passive: Increases critical-strike chance and AOE-cleave damage of basic attacks.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['10s', '9s', '8s', '7s', '6s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['20', '25', '30', '35', '40'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['10', '20', '30', '40', '50'],
            cr: '120%',
            wr: '100%',
          },
          {
            name: 'Cleave Damage',
            amount: ['30%', '35%', '40%', '45%', '65%'],
            cr: '',
            wr: '',
          },
          {
            name: 'Crit Chance',
            amount: ['10%', '15%', '20%', '25%', '30%'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        video: 'Glaive-C',
        name: "BLOODSONG",
        type: "ULTIMATE",
        image: 'Glaive-C',
        text: [
          "Swing Glaive's axe in a 5.4-meter circle, dealing massive area damage that increases with the number of Bloodsong stacks used. This removes all stacks.",
          "• Passive: Glaive generates Bloodsong stacks from basic attacking or from receiving basic attacks (max 20 stacks).",
          "• Each stack grants Glaive bonus lifesteal.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['16s', '16s', '16s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['20', '25', '30'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['100', '200', '300'],
            cr: '110%',
            wr: '',
          },
          {
            name: 'Damage Stack',
            amount: ['15', '20', '25'],
            cr: '2%',
            wr: '',
          },
          {
            name: 'Lifesteal/Stack',
            amount: ['1.2', '1.2', '1.2'],
            cr: '',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Violent Afterburn",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Using Afterburn (A) to punt a target will deal a portion of Afterburn’s damage and stun all enemies along its path.",
          "Duration 0.5s",
          "• Damage 70% (+2%)",
          "• Cooldown 95% (-1.5%)",
        ],
        image: 'Glaive_Rare',
      },
      {
        name: "Stunning Bloodsong",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Bloodsong (Ult) stuns enemies caught by Glaive’s axe.",
          "• Cooldown 80% (-5%)",
          "• Stun Duration 0.75s",
          "• Damage 40% (+5%)",
        ],
        image: 'Glaive_Epic',
      },
      {
        name: "Twisted Pursuit",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Twisted Stroke (B) has 5 increased range and causes Glaive to dash to his target.",
          "• Cooldown 70% (-7.5%)",
          "• Damage 90% (+7.5%)",
        ],
        image: 'Glaive_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Prehistoric Glaive",
        type: "Rare",
        image: 'Glaive_Prehistoric_I_R',
      },
      {
        color: "#7A02EA",
        name: "Trophy Hunter Glaive",
        type: "Epic",
        image: 'Glaive_Prehistoric_II_E',
      },
      {
        color: "#FF9000",
        name: "Ice Age Glaive",
        type: "Legendary",
        image: 'Glaive_Prehistoric_III_L',
      },
      {
        color: "#7A02EA",
        name: "Sorrowblade Glaive",
        type: "Epic",
        image: 'Glaive_Sorrowblade_E',
      },
      {
        color: "#7A02EA",
        name: "King Glaive",
        type: "Epic",
        image: 'Glaive_King_Epic',
      },
      {
        color: "#FF9000",
        name: "Rainbow Glaive",
        type: "Legendary",
        image: 'Glaive_Rainbow',
      },
    ],
  },
  //Grace
  {
    name: "Grace",
    type: ['CAPTAIN, PROTECTOR'], role: ['CAPTAIN'],
    description: "A powerful paladin with a massive heal.",
    spotlight: "fjSbPL3KaqU",
    stats: [
      { name: "HEALTH", value: "740 - 2483", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "3.72 - 8.34", color: "#4eec8b" },
      { name: "ENERGY", value: "268 - 653", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "1.92 - 4.23", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "73 - 152", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 136.3%", color: "#f48596" },
      { name: "ARMOR", value: "35 - 100", color: "#f6ee71" },
      { name: "SHIELD", value: "25 - 75", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "2.7", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.6", color: "#e19efb" },
    ],
    model: [
      { image: "Graceblurred" },
      { tmodel: "Grace" }
    ],
    skills: [
      {
        name: "RETRIBUTION",
        type: "HEROIC PERK",
        image: 'Grace-P',
        text: [
          "Grace chains her normal basic attack into a ground slam, dealing bonus weapon damage and slowing enemies in a wide area. If any enemies are hit by the ground slam, her ability cooldowns are reduced by 1.2s.",
          "All effects in Grace's heroic perk and abilities are capped at 200 crystal power excluding damage and healing.",
          "• Bonus damage: 10-98 (level 1-12) (+5% weapon power).",
          "• Slow Strength: 75%",
          "• Slow duration: 0.6s (+0.3 crystal power)",
          "• Deals 50% less damage to minions."
        ],
      },
      {
        name: "BENEDICTION",
        type: "A ABILITY",
        image: 'Grace-A',
        text: [
          "Grace dashes to her target, striking them with an empowered Retribution attack. Nearby allies instantly gain a directional holy shield that continually faces the target, while Grace gains a full holy shield that protects her from all sides.",
          "• Holy Shield (status effect): reduce incoming damage by 40% (+5% of crystal power).",
          "• Passive: Upon learning this ability, Grace permanently reduces all damage she receives by 8% (+5% of crystal power).",
          "• Overdrive: This ability is refreshed upon casting Divine Intervention.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['15s', '14s', '13s', '12s', '10s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['35', '35', '35', '35', '35'],
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
            name: 'Bonus Damage',
            amount: ['20', '40', '60', '80', '120'],
            cr: '100%',
            wr: '15%',
          },
          {
            name: 'Duration (Self)',
            amount: ['3s', '3s', '3s', '3s', '3s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Duration (Ally)',
            amount: ['2s', '2s', '2s', '2s', '2s'],
            cr: '0,6%',
            wr: '',
          },
        ],
      },
      {
        name: "HOLY NOVA",
        type: "B ABILITY",
        image: 'Grace-B',
        text: [
          "After a short delay, Grace knocks enemies into the air, disabling them for 1s.",
          "• Overdrive: Grace gains immunity to negative effects when casting this ability.",
          "• If this attack hits at least one enemy, Grace will immediately recover from the ability.",
          "• Deals less damage to minions.",
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
            amount: ['100', '100', '100', '100', '100'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['210', '290', '370', '450', '530'],
            cr: '200%',
            wr: '',
          },
        ],
      },
      {
        name: "DIVINE INTERVENTION",
        type: "ULTIMATE",
        image: 'Grace-C',
        text: [
          "Grace instantly surrounds herself and her target with a full holy shield and begins channeling for 1.8s after which Grace’s target receives a massive heal."
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['60s', '50s', '40s'],
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
            name: 'Healing Strength',
            amount: ['500', '650', '800'],
            cr: '200%',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Seal of Retribution",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Retribution (Perk) deal bonus crystal damage. Grace passively gains crystal power.",
          "• Damage +100% (+4%)",
          "• Passive Crystal Power +15% (+2.5%)",
        ],
        image: 'Grace_Rare'
      },
      {
        name: "Double Benediction",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Benediction (A) has 1 additional charge.",
          "• Damage Reduction 50% (+3%)",
          "• Cooldown 80% (-3.5%)",
        ],
        image: 'Grace_Epic',
      },
      {
        name: "United Front",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Divine Intervention (Ult) also heals Grace.",
          "• Heal 75% (+15%)",
          "• Cooldown 80% (-7.5%)",
        ],
        image: 'Grace_Legendary',
      },
    ],
    skins: [
      {
        color: "#7A02EA",
        name: "Valkyrie Grace",
        type: "Epic",
        image: 'Grace_Valkyrie',
      },
      {
        color: "#FF9000"n,
        name: "Tea Party Grace",
        type: "Legendary",
        image: 'Grace_Tea_Party',
      },
    ],
  },
  //Grumpjaw
  {
    name: "Grumpjaw",
    type: ['JUNGLE, WARRIOR'], role: ['JUNGLE'],
    description: "A hungry beast who can swallow a hero whole.",
    spotlight: "kwm2U7-P-uc",
    stats: [
      { name: "HEALTH", value: "783 - 2592", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "3.39 - 3.39", color: "#4eec8b" },
      { name: "ENERGY", value: "234 - 465", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "1.47 - 2.9", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "74 - 158", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 113.2%", color: "#f48596" },
      { name: "ARMOR", value: "30 - 85", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 60", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "2.6", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.6", color: "#e19efb" },
    ],
    model: [
      { image: "Grumpjawblurred" },
      { tmodel: "Grumpjaw" }
    ],
    skills: [
      {
        name: "LIVING ARMOR",
        type: "HEROIC PERK",
        image: 'Grumpjaw-P',
        text: [
          "Each stack of Living Armor reduces incoming damage by 7%.",
          "• Grumpjaw gains a stack every 3s and every time he basic attacks.",
          "• While under attack, he loses a stack every 1s.",
          "• Max 5 stacks.",
        ],
      },
      {
        name: "GRUMPY",
        type: "A ABILITY",
        image: 'Grumpjaw-A',
        text: [
          "Grumpjaw charges forward and slashes the area in front of him, damaging and slowing enemies he hits. He also hits things at his ending location.",
          "• Deals bonus damage for each stack of Living Armor Grumpjaw has.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['12s', '11s', '10s', '9s', '8s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['50', '60', '70', '80', '90'],
            cr: '',
            wr: '',
          },
          {
            name: 'Range',
            amount: ['8', '8', '8', '8', '8'],
            cr: '',
            wr: '',
          },
          {
            name: 'Bonus Damage',
            amount: ['75', '110', '145', '180', '250'],
            cr: '75%',
            wr: '',
          },
          {
            name: 'Bonus Damage/Stack',
            amount: ['10', '15', '20', '25', '35'],
            cr: '40%',
            wr: '',
          },
          {
            name: 'Slow Duration',
            amount: ['2s', '2s', '2s', '2s', '2.5s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Slow Strenght',
            amount: ['65%', '65%', '65%', '65%', '65%'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        name: "HANGRY",
        type: "B ABILITY",
        image: 'Grumpjaw-B',
        text: [
          "Grumpjaw leaps toward his target and attacks it. Afterward, he gains bonus weapon damage and attack speed for several seconds."
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['7s', '7s', '7s', '7s', '7s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['30', '40', '50', '60', '70'],
            cr: '',
            wr: '',
          },
          {
            name: 'Bonus Damage',
            amount: ['40', '60', '80', '100', '120'],
            cr: '90%',
            wr: '',
          },
          {
            name: 'Duration',
            amount: ['5s', '5s', '5s', '5s', '6s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Attack Speed',
            amount: ['20%', '30%', '40%', '50%', '60%'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        name: "STUFFED",
        type: "ULTIMATE",
        image: 'Grumpjaw-C',
        text: [
          "Grumpjaw lunges forward, devouring the first enemy hero in his path. While inside Grumpjaw's belly, enemies cannot move, act or see. After 3s, Grumpjaw will spit the enemy out in front of him.",
          "• Reactivate this ability to spit the enemy out early.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['70s', '60s', '50s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['50', '60', '70'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['400', '550', '700'],
            cr: '150%',
            wr: '',
          },
          {
            name: 'Duration',
            amount: ['3s', '3s', '3s', '3s', '3s'],
            cr: '',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Rampage",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Grumpy (A) deals a portion of its damage to all enemies along its path.",
          "• Swipe to Trample Dmg 90% (+2.5%)",
        ],
        image: 'Grumpjaw_Rare',
      },
      {
        name: "Reconstitution",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Hangry (B) grants Grumpjaw life steal.",
          "• Cooldown 95% (-2.5%)",
          "• Bonus Lifesteal +25% (+4%)",
        ],
        image: 'Grumpjaw_Epic',
      },
      {
        name: "Big Appetite",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Stuffed (Ult) keeps enemies inside for much longer and eats all heros in Grumpjaw’s path.",
          "• Cooldown 40% (-5%)",
          "• Bonus Duration 1s (+0.4s)",
        ],
        image: 'Grumpjaw_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Lapdog Grumpjaw",
        type: "Rare",
        image: 'Grumpjaw_Lapdog_R',
      },
      {
        color: "#7A02EA",
        name: "Carnivore Grumpjaw",
        type: "Epic",
        image: 'Grumpjaw_Carnivore',
      },
    ],
  },
  //Gwen
  {
    name: "Gwen",
    type: ['LANE, SNIPER'], role: ['LANE'],
    description: "Gunslinger with powerful burst damage and ability to shake off disables.",
    spotlight: "lwv7-7lgE9o",
    stats: [
      { name: "HEALTH", value: "661 - 2072", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "2.63 - 5.16", color: "#4eec8b" },
      { name: "ENERGY", value: "175 - 395", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "1.2 - 2.85", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "68 - 132", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 136.3%", color: "#f48596" },
      { name: "ARMOR", value: "25 - 75", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 55", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "6.2", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.1", color: "#e19efb" },
    ],
    model: [
      { image: "Gwenblurred" },
      { tmodel: "Gwen" }
    ],
    skills: [
      {
        name: "BOOMSTICK",
        type: "HEROIC PERK",
        image: 'Gwen-P',
        text: [
          "After not attacking for 1.4s, Gwen's next basic attack is a Boomstick shot that deals bonus damage.",
          "• Bonus damage: 20-110 (+40% of bonus weapon power)",
          "• Additional attack speed increase the frequency of Boomstick shots.",
        ],
      },
      {
        name: "BUCKSHOT BONANZA",
        type: "A ABILITY",
        image: 'Gwen-A',
        text: [
          "Gwen blasts enemies in the target direction, dealing weapon damage to all targets in a cone. Enemies hit by this ability are slowed and revealed for 2s.",
          "• Deals less damage to minions.",
          "• Maximum slow amount: 65%",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['7s', '6.5s', '6s', '5.5s', '4s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['50', '55', '60', '65', '70'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['60', '105', '150', '195', '240'],
            cr: '200%',
            wr: '65%',
          },
          {
            name: 'Slow Strenght',
            amount: ['0%', '0%', '0%', '0%', '0%'],
            cr: '',
            wr: '20%',
          },
        ],
      },
      {
        name: "SKEDADDLE",
        type: "B ABILITY",
        image: 'Gwen-B',
        text: [
          "Gwen gains a burst of move speed while instantly removing from herself any negative movement-impairing effects.",
          "• Blocks further effects for 0.5s.",
          "• Passive: Gwen gains 0.8 bonus move speed for the entire match. This effect is temporarily disabled for 4s upon taking damage from an enemy hero."
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['20s', '18s', '16s', '14s', '10s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['60', '65', '70', '75', '80'],
            cr: '',
            wr: '',
          },
          {
            name: 'Speed Boost',
            amount: ['2.5', '2.8', '3.1', '3.4', '4'],
            cr: '',
            wr: '',
          },
          {
            name: 'Bonus Speed Duration',
            amount: ['2.2s', '2.2s', '2.2s', '2.2s', '2.2s'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        name: "ACES HIGH",
        type: "ULTIMATE",
        image: 'Gwen-C',
        text: [
          "Gwen flings a card in the target direction, stunning and dealing weapon damage the first hero it hits.",
          "• The card damages everything it passes through.",
          "• Deals less damage to minions."
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['80s', '65s', '50s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['100', '100', '100'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['300', '400', '500'],
            cr: '200%',
            wr: '100%',
          },
          {
            name: 'Stun Duration',
            amount: ['0.9s', '1.2s', '1.5s'],
            cr: '',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Speed Loader",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Buckshot Bonanza (A) is reset whenever Gwen uses Skedaddle (B).",
          "• Damage 90% (+2.5%)",
          "• Energy Cost 50%",
        ],
        image: 'Gwen_Rare',
      },
      {
        name: "Skedaddling",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Skedaddle’s (B) duration is increased. Gwen passively gains weapon power.",
          "• Bonus Duration 1s (+0.2s)",
          "• Cooldown 60% (-2.5%)",
          "• assive Weapon Power 10% (+1%)",
        ],
        image: 'Gwen_Epic',
      },
      {
        name: "Three of a Kind",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Aces High (Ult) fires three cards in a cone.",
          "• Damage 60% (+10%)",
          "• Cooldown 60% (-5%)",
        ],
        image: 'Gwen_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Gangster Gwen",
        type: "Rare",
        image: 'Gwen_Gangster_R',
      },
      {
        color: "red",
        name: "Red Lanter Gwen",
        type: "Special Edition",
        image: 'Gwen_Red_Lantern',
      },
      {
        color: "#7A02EA",
        name: "Snow Bunny Gwen",
        type: "Epic",
        image: 'Gwen_Snow_Bunny',
      },
      {
        color: "red",
        name: "Festive Gwen ",
        type: "Special Edition",
        image: 'Gwen_Festive',
      },
      {
        color: "red",
        name: "Black Diamond Gwen",
        type: "Special Edition",
        image: 'Gwen_Black_Diamond',
      },
    ],
  },
  //Idris
  {
    name: "Idris",
    type: ['JUNGLE, ASSASSIN'], role: ['JUNGLE'],
    description: "Nimble assassin who unlocks melee or ranged fighting styles.",
    spotlight: "aUL7JieeYUk",
    stats: [
      { name: "HEALTH", value: "697 - 2257", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "4.5 - 4.5", color: "#4eec8b" },
      { name: "ENERGY", value: " - ", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: " - ", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "77 - 161", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 136.3%", color: "#f48596" },
      { name: "ARMOR", value: "25 - 75", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 55", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "2.4", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.5", color: "#e19efb" },
    ],
    model: [
      { image: "Idrisblurred" },
      { tmodel: "Idris" }
    ],
    skills: [
      {
        name: "DIVERGENT PATHS",
        type: "HEROIC PERK",
        image: 'Idris-P',
        text: [
          "Idris unlocks unique combat styles upon attaining 100 weapon or crystal power",
          "• Melee (Weapon): Idris’s Shroudstep becomes an instantaneous blink. His basic attacks also restore 10 stamina and reduce the cooldowns of his Shroudstep and Shimmer Strike abilities by 1s.",
          "• Ranged (Crystal): Idris gains a 3.8-meter ranged attack with a 85% crystal ratio but only 0% weapon ratio.",
          "Instead of energy, Idris uses stamina to activate his abilities. Purchasing items with energy and energy recharge instead increases his stamina and stamina regeneration.",
          "• Max Stamina: 100 + 10% Max Energy",
          "• Stamina Regen: 7.5 + 50% Energy Regen",
        ],
      },
      {
        name: "SHROUDSTEP",
        type: "A ABILITY",
        image: 'Idris-A',
        text: [
          "Idris dashes in the target direction, dealing amplified damage to the next target he attacks within 4s.",
          "• If Idris has not taken damage within the last 7s, Shroudstep grants a 1.5s barrier.",
          "Barrier lockout duration scales down with 3% of Idris's bonus weapon power.",
          "• The availability of the barrier is displayed beneath his stamina meter.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['13s', '12s', '11s', '10s', '8s'],
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
            name: 'Stamina Cost',
            amount: ['70', '70', '70', '70', '70'],
            cr: '',
            wr: '',
          },
          {
            name: 'Amplified Damage',
            amount: ['30%', '30%', '30%', '30%', '50%'],
            cr: '',
            wr: '',
          },
          {
            name: 'Barrier Strenght',
            amount: ['70', '115', '160', '205', '250'],
            cr: '',
            wr: '120%',
          },
        ],
      },
      {
        name: "CHAKRAM",
        type: "B ABILITY",
        image: 'Idris-B',
        text: [
          "Idris throws a chakram that returns to him, damaging enemies each time it passes over them.",
          "• Hitting enemy heroes, miners, or Mythic Creatures recovers 10 stamina.",
          "• Idris can use his Shroudstep and Shimmer Strike abilities to temporarily keep his chakrams in the air longer.",
          "• Deals 50% less damage to minions."
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['8.5s', '8s', '7.5s', '7s', '5s'],
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
            amount: ['60', '110', '160', '210', '260'],
            cr: '100%',
            wr: '70%',
          },
          {
            name: 'Stamina Cost',
            amount: ['30', '30', '30', '30', '30'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        name: "SHIMMER STRIKE",
        type: "ULTIMATE",
        image: 'Idris-C',
        text: [
          "Idris disappears into the target hero becomes invulnerable, untargetable and cleanses movement-impairing effects from himself. While attached, tap to make Idris leap out in desired direction, striking all surrounding enemies with weapon damage as he jumps off.",
          "• If no direction is chosen, Idris will jump toward his original position.",
          "• Can latch onto enemies for 1.2s or allies for 2.8s.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['110s', '90s', '70s'],
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
            amount: ['150', '250', '350'],
            cr: '',
            wr: '125%',
          },
          {
            name: 'Stamina Cost',
            amount: ['0', '0', '0'],
            cr: '',
            wr: '',
          },
          {
            name: 'Crystal Damage',
            amount: ['250', '425', '600'],
            cr: '150%',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Path of the Seeker",
        type: "RARE",
        color: "#6393F9",
        text: [
          "All Divergent Paths (Perk) bonuses are unlocked. Idris passively gains weapon and crystal power.",
          "• Passive Weapon Power -45% (+1%)",
          "• Passive Crystal Power -45% (+1%)",
        ],

        image: 'Idris_Rare'
      },
      {
        name: "Cha-Cha-Chakram",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Chakram (B) throws thress projectiles in a cone.",
          "• Damage 60% (+5%)",
          "• Cooldown 110% (-2.5%)",
        ],
        image: 'Idris_Epic',
      },
      {
        name: "Shimmer Heal",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Shimmer Strike (Ult) heals Idris and target ally for a percentage of their maximum health.",
          "• Max Health Heal 40% (+7.5%)",
          "• Cooldown 60% (-7.5%)",
        ],
        image: 'Idris_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Elite Force Idris",
        type: "Rare",
        image: 'Idris_Elite_Force_R',
      },
      {
        color: "#7A02EA",
        name: "Horus Idris",
        type: "Epic",
        image: 'Idris_Horus_Epic',
      },
      {
        color: "red",
        name: "Idris Origins",
        type: "Special Edition",
        image: 'Idris_Origins',
      },
      {
        color: "red",
        name: "Headless Idris",
        type: "Special Edition",
        image: 'Idris_Headless',
      },
    ],
  },
  //Inara
  {
    name: "Inara",
    type: ['JUNGLE, ASSASSIN'], role: ['JUNGLE'],
    description: "An elusive and bursty assassin who strikes with a flurry of blades.",
    spotlight: "rvo9GzYoJkk",
    stats: [
      { name: "HEALTH", value: "805 - 2312", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "(+)", color: "#4eec8b" },
      { name: "ENERGY", value: "201 - 388", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "(+)", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "78 - 150", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 136.3%", color: "#f48596" },
      { name: "ARMOR", value: "30 - 85", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 50", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "2.4", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.5", color: "#e19efb" },
    ],
    model: [
      { image: "Inarablurred" },
      { tmodel: "Inara" }
    ],
    skills: [
      {
        video: 'Inara-P',
        name: "SACRED GROVE",
        type: "HEROIC PERK",
        image: 'Inara-P',
        text: [
          "Inara summons wisps around nearby treants, gaining vision and allowing her to leap to them. Killing a treant grants Inara a movement speed boost for 30s.",
        ],
      },
      {
        video: 'Inara-A',
        name: "DANCE OF LEAVES",
        type: "A ABILITY",
        image: 'Inara-A',
        text: [
          "Inara spins with her blades, dealing damage to and slowing nearby enemies. Deals 50% less damage to minions.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['6s', '5.5s', '5s', '4.5s', '4s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['30', '35', '40', '45', '0'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['80', '140', '200', '260', '320'],
            cr: '140%',
            wr: '120%',
          },
          {
            name: 'Slow Strenght',
            amount: ['30%', '35%', '40%', '45%', '50%'],
            cr: '',
            wr: '',
          },
          {
            name: 'Slow Duration',
            amount: ['1.5', '1.5', '1.5', '1.5', '1.5'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        video: 'Inara-B',
        name: "DANCE OF BLADES",
        type: "B ABILITY",
        image: 'Inara-B',
        text: [
          "Inara leaps backwards and kicks away enemies, dealing damage to and summoning a wisp on affected enemies. She may leap to marked enemies she has kicked for the next 3s. Enemies knocked into a wall are stunned. Deals 50% less damage to minions."
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['14s', '13s', '12s', '11s', '8s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['30', '35', '40', '45', '50'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['60', '90', '120', '150', '180'],
            cr: '125%',
            wr: '100%',
          },
          {
            name: 'Slow Duration',
            amount: ['0.5', '0.5', '0.5', '0.5', '0.5'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        video: 'Inara-C1',
        name: "MIRAGE",
        type: "ULTIMATE",
        image: 'Inara-C1',
        text: [
          "Inara rallies nearby allies, granting them movement speed.",
          "Reactivate Mirage (Ult) to dash in target direction, dealing damage to enemies.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['80s', '60s', '40s'],
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
            amount: ['150', '225', '300'],
            cr: '150%',
            wr: '120%',
          },
          {
            name: 'Bonus Speed Duration',
            amount: ['10', '10', '10'],
            cr: '',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "DANCE OF MENDING",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Dance of Leaves (A) also heals Inara and her allies.",
          "• Heal 125 (+15)",
          "• Damage 70% (+3%)",
        ],
        image: 'Inara_Rare',
      },
      {
        name: "BANISHING MIGHT",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Banishing Kick (B) knocks targets further.",
          "• Bonus Range 2 (+1)",
          "• Cooldown 90% (-3%)",
        ],
        image: 'Inara_Epic',
      },
      {
        name: "Sacred Warrior",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Shimmer Blade (A) has greatly increased range, lower cooldown and increased damage.",
          "• Duration 1s (+0,5s)",
        ],
        image: 'Inara_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Nightblade Inara",
        type: "Rare",
        image: 'Inara_Nightblade',
      },
    ],
  },
  //Joule
  {
    name: "Joule",
    type: ['JUNGLE, WARRIOR'], role: ['JUNGLE'],
    description: "Heavily armored mech rider with a powerful energy beam.",
    spotlight: "OYcWpLN_408",
    stats: [
      { name: "HEALTH", value: "742 - 2487", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "4.27 - 9.44", color: "#4eec8b" },
      { name: "ENERGY", value: "390 - 555", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "3.5 - 7.02", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "66 - 148", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 113.2%", color: "#f48596" },
      { name: "ARMOR", value: "20 - 25", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 55", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "2.4", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.5", color: "#e19efb" },
    ],
    model: [
      { image: "Jouleblurred" },
      { tmodel: "Joule" }
    ],
    skills: [
      {
        video: 'Joule-P',
        name: "HEAVY PLATING",
        type: "HEROIC PERK",
        image: 'Joule-P',
        text: [
          "Joule takes 35% less damage when hit from the front or sides.",
        ],
      },
      {
        video: 'Joule-A',
        name: "ROCKET LEAP",
        type: "A ABILITY",
        image: 'Joule-A',
        text: [
          "Joule leaps to a target location. Enemies caught underneath Joule take full damage and are stunned, while enemies near the impact are knocked away and take 50% damage.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['15s', '14s', '13s', '12s', '8s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['100', '115', '130', '145', '160'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['150', '200', '250', '300', '350'],
            cr: '100%',
            wr: '',
          },
          {
            name: 'Duration',
            amount: ['0.7s', '0.8s', '0.9s', '1s', '1,5s'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        video: 'Joule-B',
        name: "THUNDER STRIKE",
        type: "B ABILITY",
        image: 'Joule-B',
        text: [
          "Joule's mech fires an energy bolt directly in front of her. If this strikes an enemy, the next Thunder Strike will have bonus armor & shield pierce.",
          "• Cooldown speed improves with attack speed.",
          "• Deals less damage to minions.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['3s', '2.8s', '2.6s', '2.4s', '2s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['30', '35', '40', '45', '25'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['150', '200', '250', '300', '350'],
            cr: '180%',
            wr: '200%',
          },
        ],
      },
      {
        video: 'Joule-C',
        name: "BLAST TREMOR",
        type: "ULTIMATE",
        image: 'Joule-C',
        text: [
          "Joule fires a massive beam of energy for 1.5s.",
          "• The force of this beam pushes Joule backwards during channeling.",
          "• Deals 50% less damage to structures.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['80s', '70s', '60s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['100', '125', '150'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage/sec',
            amount: ['600', '900', '1200'],
            cr: '220%',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Rocket Leapfrog",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Rocket Leap (A) is reset whenever landing on enemies but no longer stuns or knocks back. Joule passively gains armor and shield.",
          "• Passive Armor +20% (+2.5%)",
          "• Passive Shield +20% (+2.5%)",
          "• Cooldown 90% (-2%)",
          "• Energy Cost 50%",
        ],
        image: 'Joule_Rare',
      },
      {
        name: "Backup Button",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Big Red Button (Ult) has 1 additional charge.",
          "• Cooldown 80% (-2.5%)",
          "• Damage 75% (+5%)",
        ],
        image: 'Joule_Epic',
      },
      {
        name: "Thundering Steps",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Thunder Strike (B) grants Joule bonus move speed when it strikes enemies. Joule passively gains weapon power.",
          "• Bonus Move Speed 1.5 (+0.5)",
          "• Bonus Move Speed Duration 2s",
          "• Passive Weapon Power +7.5% (+2.5%)",
        ],
        image: 'Joule_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Killa-Joule 9000",
        type: "Rare",
        image: 'Joule_Killa-Joule_9000_I_R',
      },
      {
        color: "#7A02EA",
        name: "Mega-Joule 9000",
        type: "Epic",
        image: 'Joule_Killa-Joule_9000_II_E',
      },
      {
        color: "#FF9000",
        name: "School Days Joule",
        type: "Legendary",
        image: 'Joule_Killa-Joule_9000_III_L',
      },
      {
        color: "red",
        name: "Snow Monster Joule",
        type: "Special Edition",
        image: 'Joule_Snow_Monster_SE',
      },
      {
        color: "red",
        name: "Panda Joule",
        type: "Special Edition",
        image: 'Joule_Panda',
      },
      {
        color: "red",
        name: "Teddy Bear Joule",
        type: "Special Edition",
        image: 'Joule_Teddy_Bear',
      },
    ],
  },
  //Kensei
  {
    name: "Kensei",
    type: ['JUNGLE, WARRIOR'], role: ['JUNGLE'],
    description: "Swift swordmaster who can easily manuever through the battlefield.",
    spotlight: "t6vVHJa90vA",
    stats: [
      { name: "HEALTH", value: "761 - 2493", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "4.01 - 7.42", color: "#4eec8b" },
      { name: "ENERGY", value: "280 - 643", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "1.87 - 4.29", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "74 - 129", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 136.3%", color: "#f48596" },
      { name: "ARMOR", value: "30 - 85", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 60", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "3.5", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.6", color: "#e19efb" },
    ],
    model: [
      { image: "Kenseiblurred" },
      { tmodel: "Kensei" }
    ],
    skills: [
      {
        video: 'Kensei-P',
        name: "IMMOVABLE MIND",
        type: "HEROIC PERK",
        image: 'Kensei-P',
        text: [
          "After striking enemy heroes or jungle monsters 3 times, Kensei's next basic attack deals 20% bonus damage and grants a burst of barrier.",
          "• Bonus Barrier: 30-140 (level 1-12)(+70% weapon power)",
          "Additionally, Kensei's basic attacks deal increased damage to heroes with higher health.",
        ],
      },
      {
        video: 'Kensei-A',
        name: "LOTUS STRIKE",
        type: "A ABILITY",
        image: 'Kensei-A',
        text: [
          "Kensei rushes forward, swinging his blade and dealing basic attack damage in an arc in front of him.",
          "• This ability can be reactivated two additional times within 7.5s.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['14s', '13s', '12s', '11s', '8s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['25', '25', '25', '25', '25'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['20', '40', '60', '80', '100'],
            cr: '',
            wr: '50%',
          },
          {
            name: 'Slow (Kensho)',
            amount: ['30%', '35%', '40%', '45%', '50%'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        video: 'Kensei-B',
        name: "KENSHO",
        type: "B ABILITY",
        image: 'Kensei-B',
        text: [
          "Kensei strikes his target and leaps backward, entering Kensho Stance and generating fortified health for the duration.",
          "• Kensho Stance: The next Lotus Strike or Path of the Ronin gain a powerful bonus effect when activated within 2.5s of canceling this stance.",
          "• Lotus Strike travels farther and slows enemies hit.",
          "• Path of the Ronin stuns enemies hit.",
          "• Stance is canceled automatically upon movement, attacking, or using any ability.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['14s', '12s', '10s', '8s', '6s'],
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
            amount: ['20', '35', '50', '65', '110'],
            cr: '',
            wr: '100%',
          },
          {
            name: 'Fortified Health/sec',
            amount: ['30', '50', '70', '90', '110'],
            cr: '',
            wr: '20%',
          },
        ],
      },
      {
        video: 'Kensei-C',
        name: "PATH OF THE RONIN",
        type: "ULTIMATE",
        image: 'Kensei-C',
        text: [
          "Kensei readies himself before quickly rushing forward, dealing basic attack plus bonus damage to all enemies in his wake."
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['70s', '55s', '40s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['100', '120', '140'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['200', '300', '400'],
            cr: '',
            wr: '100%',
          },
          {
            name: 'Stun Duration (Kensho)',
            amount: ['0.6s', '0.8s', '1s'],
            cr: '',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Accelerated Mind",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Hitting an enemy hero or jungle monster grants max stats of Immovable Mind (Perk)",
          "• Attack Speed +20% (+5%)",
          "• Barrier 40% (+2%)",
        ],
        image: 'Kensei_Rare',
      },
      {
        name: "Enlightened Kensho",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Kensho’s empowered attack grants Kensei temporary invulnerability.",
          "• Passive Weapon Power 10% (+1%)",
          "• Cooldown 60% (-2.5%)",
          "• Duration 1.1s (+0.1s)",
        ],
        image: 'Kensei_Epic',
      },
      {
        name: "Endless Path",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Landing Path of the Ronin (Ult) resets its cooldown",
          "• Damage 120% (+25%)",
          "• Cooldown 50% (-5%)",
        ],
        image: 'Kensei_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Tizen Boss Kensei",
        type: "Rare",
        image: 'Kensei_TaizenBoss',
      },
      {
        color: "red",
        name: "Contender Kensei",
        type: "Limited Edition",
        image: 'Kensei_Contender',
      },
    ],
  },
  //Kestrel
  {
    name: "Kestrel",
    type: ['LANER, SNIPER'], role: ['LANER'],
    description: "Stealthy archer with devastating skillshots and traps.",
    spotlight: "ClhyGmpQZhY",
    stats: [
      { name: "HEALTH", value: "700 - 2073", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: " - ", color: "#4eec8b" },
      { name: "ENERGY", value: "404 - 492", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: " - ", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "70 - 136", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 136.3%", color: "#f48596" },
      { name: "ARMOR", value: "25 - 75", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 55", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "6.2", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.2", color: "#e19efb" },
    ],
    model: [
      { image: "Kestrelblurred" },
      { tmodel: "Kestrel" },
    ],
    skills: [
      {
        name: "ADRENALINE",
        type: "HEROIC PERK",
        image: 'Kestrel-P',
        text: [
          "Whenever Kestrel lands a basic attack, she reduces the energy cost of her abilities by 10%. This stacks up to 5 times and wears off after 8s.",
        ],
      },
      {
        name: "GLIMMERSHOT",
        type: "A ABILITY",
        image: 'Kestrel-A',
        text: [
          "Kestrel fires an arrow that hits the first target in its path. The arrow then explodes, splashing crystal damage in a line beyond the point of impact.",
          "• Ammo system: Kestrel can fire several times without reloading. To reload, simply stop using her bow for 2.4s.",
          "• Reload time is decreased based on attack speed.",
          "• Primary impact triggers basic-attack effects.",
          "• Deals less damage to minions."
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['0', '0', '0', '0', '0'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['30', '35', '40', '45', '50'],
            cr: '',
            wr: '',
          },
          {
            name: 'Area Damage',
            amount: ['40', '80', '120', '160', '200'],
            cr: '100%',
            wr: '',
          },
          {
            name: 'Max Arrows',
            amount: ['4', '4', '4', '4', '4'],
            cr: '',
            wr: '',
          },
          {
            name: 'Basic Attack Damage',
            amount: ['105%', '110%', '115%', '120%', '125%'],
            cr: '100%',
            wr: '',
          },
        ],
      },
      {
        name: "ACTIVE CAMO",
        type: "B ABILITY",
        image: 'Kestrel-B',
        text: [
          "Kestrel instantly stealths and gains bonus move speed. She leaves behind an invisible mist trap that explodes when she damages an eney hero inside it, damaging and stunning them for 0.8s.",
          "• Kestrel cannot activate this ability if she took damage from a hero in the last 2.5s",
          "• This window is reduced by bonus weapon power.",
          "• The primary impact of Glimmershot reduces the cooldown of Active Camo by 1.5s.",
          "• Trap requires 1.2s to arm before it can detonate.",
          "• The trap has vision and can see enemies.",
          "• Turrets, Scout Traps and Flare Guns can still see Kestrel while she is invisible.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['10s', '10s', '10s', '10s', '8s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['100', '120', '140', '160', '180'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['140', '230', '320', '410', '500'],
            cr: '120%',
            wr: '',
          },
          {
            name: 'Stealth Duration',
            amount: ['1s', '1s', '1s', '1s', '1.5s'],
            cr: '3%',
            wr: '',
          },
          {
            name: 'Speed Boost',
            amount: ['1', '1', '1', '1', '1'],
            cr: '',
            wr: '0.5%',
          },
          {
            name: 'Mist Duration',
            amount: ['4s', '5s', '6s', '7s', '8s'],
            cr: '1%',
            wr: '',
          },
        ],
      },
      {
        name: "ONE SHOT, ONE KILL",
        type: "ULTIMATE",
        image: 'Kestrel-C',
        text: [
          "Kestrel charges up and fires a single powerful arrow across the fold, impacting on the first enemy hero, large creature or structure in its path.",
          "• When this hits a target, it reveals it and grants Kestrel full Adrenaline stacks.",
          "• The base damage dealt by this ability is weapon damage.",
          "• Deals 50% less damage to structures."
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['50s', '40s', '30s'],
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
            name: 'Damage',
            amount: ['600', '800', '1000'],
            cr: '180%',
            wr: '140%',
          },
          {
            name: 'Reveal Duration',
            amount: ['2s', '4s', '6s'],
            cr: '',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Glimmer Volley",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Glimmershot (A) launches two arrows without consuming an additional charge.",
          "• Damage 77.5% (+2.5%)",
          "• Range 8",
        ],
        image: 'Kestrel_Rare',
      },
      {
        name: "Active Reload",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Active Camo (B) refreshes all charges of Glimmershot (A). Glimmershot (A) has 2 additional charges.",
          "• Cooldown 100% (-2%)",
          "• Damage 80% (+7%)",
          "• Energy Cost 50%",
        ],
        image: 'Kestrel_Epic',
      },
      {
        name: "Piercing Shot",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "One Shot One Kill (Ult) pierces through its target, damaging all enemies along its path.",
          "• Damage 120% (+30%)",
          "• Cooldown 60% (-7.5%)",
        ],
        image: 'Kestrel_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "SKestreln Kestrel",
        type: "Rare",
        image: 'Kestrel_SKestreln_R',
      },
      {
        color: "#6393F9",
        name: "Winter War Kestrel",
        type: "Rare",
        image: 'Kestrel_Winter_War_R',
      },
      {
        color: "#6393F9",
        name: "Kyudo Kestrel",
        type: "Rare",
        image: 'Kestrel_Kyudo_Rare',
      },
      {
        color: "#7A02EA",
        name: "Spider Queen Kestrel",
        type: "Epic",
        image: 'Kestrel_Spider_Queen',
      },
      {
        color: "red",
        name: "Summer Party Kestrel",
        type: "Special Edition",
        image: 'Kestrel_Summer_Party_SE',
      },
      {
        color: "#FADA5E",
        name: "Contender Kestrel",
        type: "Limited Edition",
        image: 'Kestrel_Contender',
      },
    ],
  },
  //Kinetic
  {
    name: "Kinetic",
    type: ['LANER, SNIPER'], role: ['LANER'],
    description: "Nimble duelist weilding a powerful pulse cannon",
    spotlight: "I9A1w1OIIq4",
    stats: [
      { name: "HEALTH", value: "721 - 2019", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "3.81 - 6.78", color: "#4eec8b" },
      { name: "ENERGY", value: "169 - 389", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "3.51 - 6.04", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "64 - 97", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 136.3%", color: "#f48596" },
      { name: "ARMOR", value: "25 - 75", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 55", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "6.1", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.4", color: "#e19efb" },
    ],
    model: [
      { image: "Kineticblurred" },
      { tmodel: "Kinetic" },
    ],
    skills: [
      {
        video: 'Kinetic-P',
        name: "TRACER SHOTS",
        type: "HEROIC PERK",
        image: 'Kinetic-P',
        text: [
          "Landing Plasma Driver grants Kinetic a stack of Tracer Shots up to 4 stacks.",
          "Tracer Shots: Kinetic fires a tracer at her target.",
          "• Tracer Damage: 4-15 (Level 1-12) (+6.25% weapon power)",
        ],
      },
      {
        video: 'Kinetic-A',
        name: "PLASMA DRIVER",
        type: "A ABILITY",
        image: 'Kinetic-A',
        text: [
          "Kinetic unleashes a burst of energy, damaging the first enemy struck.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['3s', '2.8s', '2.6s', '2.4s', '2s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['25', '25', '25', '25', '25'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['60', '100', '140', '180', '260'],
            cr: '140%',
            wr: '60%',
          },
        ],
      },
      {
        video: 'Kinetic-B',
        name: "OVERWHELM",
        type: "B ABILITY",
        image: 'Kinetic-B',
        text: [
          "Kinetic dashes and temporarily becomes Charged for 5s.",
          "Charged: Kinetic's next Plasma Driver deals more damage, has increased range, and slows her target.",
          "• Overdrive: Kinetic's next Plasma Driver briefly stuns her target.",
          "• Refreshes Plasma Driver's cooldown",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['10s', '18s', '16s', '14s', '12s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['50', '55', '60', '65', '70'],
            cr: '',
            wr: '',
          },
          {
            name: 'Bonus Damage',
            amount: ['40%', '45%', '50%', '55%', '60%'],
            cr: '',
            wr: '',
          },
          {
            name: 'Slow Strenght',
            amount: ['30%', '35%', '40%', '45%', '50%'],
            cr: '',
            wr: '',
          },
          {
            name: 'Slow Duration',
            amount: ['1.5s', '1.5s', '1.5s', '1.5s', '1.5s'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        video: 'Kinetic-C',
        name: "IRON MANDATE",
        type: "ULTIMATE",
        image: 'Kinetic-C',
        text: [
          "Kinetic charges up a powerful blast and fires it at her target.",
          "• Consumes all stacks of Tracer Shots to deal 25% bonus damage per stack",
          "• Can be blocked by enemy heroes, structures, and jungle bosses.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['60s', '50s', '40s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['100', '100', '100'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['200', '300', '400'],
            cr: '130%',
            wr: '100%',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Pain Tracers",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Tracer Shots (Perk) deals increased damage. Kinetic passively gains attack speed.",
          "• Attack Speed 30% (+2%)",
          "• Damage 104% (+4%)",
        ],
        image: 'Kinetic_Rare',
      },
      {
        name: "Plasma Overdrive",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Plasma Driver (A) fires two additional bursts.",
          "• Damage 60% (+5%)",
          "• Range -2",
        ],
        image: 'Kinetic_Epic',
      },
      {
        name: "Max Kinetic",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Damaging enemies with Plasma Driver (A) reduces Inertial Dash’s (B) cooldown.",
          "• Damage 30% (+20%)",
          "• Cooldown 150%",
        ],
        image: 'Kinetic_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Enforcer Kinetic",
        type: "Rare",
        image: 'Kinetic_Enforcer',
      },
    ],
  },
  //Koshka
  {
    name: "Koshka",
    type: ['JUNGLE, ASSASSIN'], role: ['JUNGLE'],
    description: "Hit-and-run assassin who can pin down enemies with a long stun.",
    spotlight: "r73Ezze8OLE",
    stats: [
      { name: "HEALTH", value: "711 - 2367", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "3.54 - 6.95", color: "#4eec8b" },
      { name: "ENERGY", value: "280 - 643", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "1.87 - 4.29", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "79 - 164", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 108.8%", color: "#f48596" },
      { name: "ARMOR", value: "30 - 85", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 60", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "1.7", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.4", color: "#e19efb" },
    ],
    model: [
      { image: "Koshkablurred" },
      { tmodel: "Koshka" },
    ],
    skills: [
      {
        video: 'Koshka-P',
        name: "BLOODRUSH",
        type: "HEROIC PERK",
        image: 'Koshka-P',
        text: [
          "Koshka gains 2 move speed for 4s whenever she deals damage with her abilities."
        ],
      },
      {
        video: 'Koshka-A',
        name: "POUNCY FUN",
        type: "A ABILITY",
        image: 'Koshka-A',
        text: [
          "Koshka pounces to the target enemy and deals damage.",
          "• This hability resets her basic-attack cooldown upon activation.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['6s', '6s', '6s', '6s', '5.5s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['30', '35', '40', '45', '50'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['10', '40', '70', '100', '160'],
            cr: '80%',
            wr: '100%',
          },
        ],
      },
      {
        video: 'Koshka-B',
        name: "TWIRLY DEATH",
        type: "B ABILITY",
        image: 'Koshka-B',
        text: [
          "Koshka twirls, damaging all enemies around her.",
          "• Her next 2 basic attacks within 4s deal bonus crystal damage and have reduced cooldown.",
          "• Koshka gains barrier per enemy hero hit for 1s.",
          "• This hability resets her basic-attack cooldown upon activation.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['6s', '6s', '6s', '6s', '5s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['30', '40', '50', '60', '70'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['60', '100', '140', '180', '260'],
            cr: '80%',
            wr: '',
          },
          {
            name: 'Bonus Damage',
            amount: ['40', '70', '100', '130', '190'],
            cr: '150%',
            wr: '100%',
          },
          {
            name: 'Barrier',
            amount: ['20', '35', '50', '65', '95'],
            cr: '30%',
            wr: '',
          },
          {
            name: 'Cooldown',
            amount: ['1s', '1s', '1s', '1s', '1s'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        video: 'Koshka-C',
        name: "YUMMY CATNIP FRENZY",
        type: "ULTIMATE",
        image: 'Koshka-C',
        text: [
          "Koshka leaps at her target, then launches into a flurry of slashes, stunning the target for the entire 2.2s duration.",
          "• Koshka will stop slashing if the stun is blocked (by Reflex Block, for example)",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['80s', '65s', '50s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['120', '150', '180'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['350', '575', '800'],
            cr: '120%',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Frenzied",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Basic attacks reduce the cooldown of Koshka’s abilities.",
          "• Ability Damage 75% (+2.5%)",
          "• Pouncy Fun Reduction 10% (+1%)",
          "• Twirly Death Reduction 15% (+1%)",
          "• Yummy Catnip Frenzy Reduction 5% (+0.5%)",
        ],
        image: 'Koshka_Rare',
      },
      {
        name: "Twirly Life",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Twirly Death (B) grants Koshka additional health barrier.",
          "• Max Health to Barrier 13% (+3%)",
          "• Damage 65% (+3%)",
          "• Barrier Duration 2s",
        ],
        image: 'Koshka_Epic',
      },
      {
        name: "Slashy Play Time!",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Yummy Catnip Frenzy (Ult) activates quicker and stuns nearby enemies.",
          "• Damage 35% (+10%)",
          "• Cooldown 55% (-7.5%)",
        ],
        image: 'Koshka_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Kandy Claw Koshka",
        type: "Rare",
        image: 'Koshka_Kandi_Twirl_I_R',
      },
      {
        color: "#7A02EA",
        name: "Kandy Rave Koshka",
        type: "Epic",
        image: 'Koshka_Kandi_Twirl_II_E',
      },
      {
        color: "#FF9000",
        name: "Kandy Twirl Koshka",
        type: "Legendary",
        image: 'Koshka_Kandi_Twirl_III_L',
      },
      {
        color: "#7A02EA",
        name: "Shool Days Koshka",
        type: "Epic",
        image: 'Koshka_School_Days',
      },
      {
        color: "red",
        name: "Red Lantern Koshka",
        type: "Special Edition",
        image: 'Koshka_Red_Lantern_SE',
      },
      {
        color: "#FADA5E",
        name: "Red Lantern Koshka",
        type: "Limited Edition",
        image: 'Koshka_Red_Lantern_LE',
      },
      {
        color: "red",
        name: "Red Lantern Lotus Koshka",
        type: "Special Edition",
        image: 'Koshka_Red_Lantern_Lotus',
      },
    ],
  },
  //Krul
  {
    name: "Krul",
    type: ['JUNGLE, WARRIOR'], role: ['JUNGLE'],
    description: "The king of duels with massive lifesteal and self-healing.",
    spotlight: "ZR8J8b44FOk",
    stats: [
      { name: "HEALTH", value: "748 - 2394", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "3.51	7.8", color: "#4eec8b" },
      { name: "ENERGY", value: "220 - 506", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "1.33 - 3.2", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "70 - 147", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 136.3%", color: "#f48596" },
      { name: "ARMOR", value: "30 - 85", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 60", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "1.5", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.5", color: "#e19efb" },
    ],
    model: [
      { image: "Krulblurred" },
      { tmodel: "Krul" },
    ],
    skills: [
      {
        video: 'Krul-P',
        name: "SHADOWS EMPOWER ME",
        type: "HEROIC PERK",
        image: 'Krul-P',
        text: [
          "Krul is empowered by the shadows after standing still in brush for 1s. While empowered, Krul briefly gains 2.2 move speed and his basic attacks will slow the target by 40% for 2.5s."
        ],
      },
      {
        video: 'Krul-A',
        name: "DEAD MAN'S RUSH",
        type: "A ABILITY",
        image: 'Krul-A',
        text: [
          "Krul dashes to the target and deals damage.",
          "Activating Dead Man's Rush grants Krul a temporary health barrier.",
          "• This ability triggers basic-attack effects.",
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
        video: 'Krul-B',
        name: "SPECTRAL SMITE",
        type: "B ABILITY",
        image: 'Krul-B',
        text: [
          "Krul detonates the Weakness stacks built up on a single target, regaining health based on the number of stacks consumed.",
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
        video: 'Krul-C',
        name: "FROM HELL'S HEART ",
        type: "ULTIMATE",
        image: 'Krul-C',
        text: [
          "Krul pulls Hellrazor from his chest and hurls it in the targeted direction. The sword will boomerang back to Krul. If the sword hits an enemy hero, it deals damage and stuns, then slows the target.",
          "Damage and stun duration scales with the distance the sword traveled before hitting the target:",
          "• 50% at point blank range",
          "• 100% at max range",
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
        name: "Dead Man’s Barrier",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Dead Man’s Rush (A) has 0.5 increased range and stronger barrier.",
          "• Barrier 115% (+5%)",
        ],
        image: 'Krul_Rare',
      },
      {
        name: "Healing Smite",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Spectral Smite (B) heals nearby allies. Krul passively gains crystal power.",
          "• Heal 100% (5%)",
          "• Crystal Power +10% (+2.5%)",
        ],
        image: 'Krul_Epic',
      },
      {
        name: "Cursed Blade",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "From Hell’s Heart (Ult) applies max Spectral Smite (B) Weakness stacks to the victim.",
          "• Damage 30% (+10%)",
          "• Cooldown 70% (-5%)",
        ],
        image: 'Krul_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Trasher Krul",
        type: "Rare",
        image: 'Krul_Death_Metal_I_R',
      },
      {
        color: "#7A02EA",
        name: "Death Metal Krul",
        type: "Epic",
        image: 'Krul_Death_Metal_II_E',
      },
      {
        color: "#FF9000",
        name: "Ice Cold Krul",
        type: "Legendary",
        image: 'Krul_Death_Metal_III_L',
      },
      {
        color: "#FF9000",
        name: "Corsair Cold Krul",
        type: "Legendary",
        image: 'Krul_Samurai',
      },
      {
        color: "#7A02EA",
        name: "Death Metal Krul",
        type: "Epic",
        image: 'Krul_Death_Metal_II_E',
      },
      {
        color: "#FF9000",
        name: "Cyber Krul",
        type: "Legendary",
        image: 'Krul_Cyber',
      },
      {
        color: "#FF9000",
        name: "Cyber Krul Prime",
        type: "Legendary",
        image: 'Krul_Cyber_Prime',
      },
      {
        color: "#FF9000",
        name: "Cyber Krul Prototype",
        type: "Legendary",
        image: 'Krul_Cyber_Prototype',
      },
      {
        color: "red",
        name: "Summer Party Krul",
        type: "Special Edition",
        image: 'Krul_Summer_Party_SE',
      },
    ],
  },
  //Lance
  {
    name: "Lance",
    type: ['CAPTAIN, WARRIOR'], role: ['CAPTAIN'],
    description: "The king of duels with massive lifesteal and self-healing.",
    spotlight: "HTZIGNW5F7A",
    stats: [
      { name: "HEALTH", value: "842 - 2609", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "3.79 - 10.94", color: "#4eec8b" },
      { name: "ENERGY", value: "0", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: " - ", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "85 - 178", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 122%", color: "#f48596" },
      { name: "ARMOR", value: "35 - 100", color: "#f6ee71" },
      { name: "SHIELD", value: "25 - 75", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "4.5", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.4", color: "#e19efb" },
    ],
    model: [
      { image: "Lanceblurred" },
      { tmodel: "Lance" },
    ],
    skills: [
      {
        name: "PARTISAN'S TECHNIQUE",
        type: "HEROIC PERK",
        image: 'Lance-P',
        text: [
          "Lance's basic attacks damage every target along their path. However, his attacks are slow to land and attack speed is less effective on him.",
          "Instead of energy, Lance uses stamina to activate his abilities. Purchasing items with energy and energy regeneration increases his stamina and stamina regeneration.",
          "• Max Stamina: 100 + 30% Max Energy",
          "• Stamina Regen: 20 + 50% Energy Regen",
        ],
      },
      {
        name: "IMPALE",
        type: "A ABILITY",
        image: 'Lance-A',
        text: [
          "Lance lunges forward and strikes through his opponents, dealing weapon damage and rooting them in place (max 1.6s).",
          "• Overdrive: At max rank, ths ability also resets the cooldown of Combat Roll if Lance hits an enemy.",
          "• If this attack hits at least one enemy, Lance will immediately recover from the ability.",
          "• If this attack misses, Lance takes 0.7 seconds to recover.",
          "• Deals less damage to minions.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['11s', '10s', '9s', '8s', '6s'],
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
            amount: ['220', '290', '360', '430', '500'],
            cr: '80%',
            wr: '100%',
          },
          {
            name: 'Stamina Cost',
            amount: ['30', '30', '30', '30', '30'],
            cr: '',
            wr: '',
          },
          {
            name: 'Root Duration',
            amount: ['1s', '1s', '1s', '1s', '1s'],
            cr: '0.3%',
            wr: '',
          },
        ],
      },
      {
        name: "GYTHIAN WALL",
        type: "B ABILITY",
        image: 'Lance-B',
        text: [
          "Lance smashes enemies back with his shield, dealing weapon damage and also stunning them if they collide with a wall or structure (max 1.4s). Afterward, he holds his shield steadfast, greatly reducing incoming damage from the target direction by up to 90%.",
          "• Overdrive: At max rank, Lance ignores all negative effects (from any direction) while this ability is active.",
          "• Damage reduction is 50% effective against turrets.",
          "• Passive: Lance strafes around the enemy he has most recently attacked. While strafing, he reduces damage from the target's direction by up to 50%.",
        ],
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
            amount: ['80', '115', '150', '185', '220'],
            cr: '80%',
            wr: '80%',
          },
          {
            name: 'Stamina Cost',
            amount: ['30', '30', '30', '30', '30'],
            cr: '',
            wr: '',
          },
          {
            name: 'Stun Duration',
            amount: ['0.6s', '0.7s', '0.8s', '0.9s', '1s'],
            cr: '0.2%',
            wr: '',
          },
          {
            name: 'Passive Damage Reduction',
            amount: ['15%', '17.5%', '20%', '22.5%', '25%'],
            cr: '12.5%',
            wr: '',
          },
          {
            name: 'Active Damage Reduction',
            amount: ['40%', '45%', '50%', '55%', '60%'],
            cr: '15%',
            wr: '',
          },
        ],
      },
      {
        name: "COMBAT ROLL",
        type: "ULTIMATE",
        image: 'Lance-C',
        text: [
          "Lance rolls in the target direction. His next basic attack within 2s will strike quickly, dealing bonus crystal damage.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['5s', '4s', '3s'],
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
            amount: ['100', '175', '250'],
            cr: '80%',
            wr: '30%',
          },
          {
            name: 'Stamina Cost',
            amount: ['25', '20', '15'],
            cr: '',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Reinforced Walls",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Gythian Wall (B) grants Lance and nearby allies a barrier.",
          "• Max Health to Barrier 15% (+2.5%)",
          "• Barrier Duration 2s",
          "• Cooldown 125%",
        ],
        image: 'Lance_Rare',
      },
      {
        name: "Rollout",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Combat Roll (Ult) has 2 longer range and damages enemies along its path.",
          "• Basic Attack to Roll Dmg 120% (+4%)",
          "• Cooldown 80% (-2.5%)",
        ],
        image: 'Lance_Epic',
      },
      {
        name: "Striker",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Basic attacks reduce the cooldown of Impale (A) and Combat Roll (Ult).",
          "• Impale Damage 110% (+10%)",
          "• Impale Reduction 30% (+10%)",
          "• Combat Roll Reduction 20% (+10%)",
        ],
        image: 'Lance_Legendary',
      },
    ],
    skins: [
      {
        color: "#7A02EA",
        name: "Gladiator Lance",
        type: "Epic",
        image: 'Lance_Gladiator_E',
      },
      {
        color: "#7A02EA",
        name: "Netherknight Lance",
        type: "Epic",
        image: 'Lance_Netherknight_E',
      },
      {
        color: "#FF9000",
        name: "Pinnacle Lance",
        type: "Legendary",
        image: 'Lance_Netherknight_Legendary',
      },
      {
        color: "#FF9000",
        name: "Corsair Cold Krul",
        type: "Legendary",
        image: 'Krul_Samurai',
      },
      {
        color: "#7A02EA",
        name: "Golden Netherknight Lance",
        type: "Epic",
        image: 'Lance_Golden_LE',
      },
    ],
  },
  //Lorelai
  {
    name: "Lorelai",
    type: ['CAPTAIN, PROTECTOR'], role: ['CAPTAIN'],
    description: "Backline support, excelling at zone control and team utility.",
    spotlight: "VT0JBLt-QKE",
    stats: [
      { name: "HEALTH", value: "691 - 2252", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "3.14 - 5.56", color: "#4eec8b" },
      { name: "ENERGY", value: "360 - 690", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "3.47 - 6", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "0", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 122%", color: "#f48596" },
      { name: "ARMOR", value: "25 - 75", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 55", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "6.2", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.4", color: "#e19efb" },
    ],
    model: [
      { image: "Lorelaiblurred" },
      { tmodel: "Lorelai" },
    ],
    skills: [
      {
        name: "THAT'S SWELL",
        type: "HEROIC PERK",
        image: 'Lorelai-P',
        text: [
          "Lorelai's abilities leave pools of water on the ground. While on a pool, Lorelai gains 10-120 (level 1-12) crystal power. Using an ability while empowered consumes the pool she’s on and affects the ability used. Additionally, Lorelai's basic attacks are torrents of water that deals crystal damage.",
          "• Pools persist for 8s.",
          "• Basic attack crystal damage: 65-120 (level 1-12) (+50% crystal power).",
          /*"• Empowered bonus crystal power 15-180 (level 1-12).",*/
          "• Empowered Fish Food: Reduced delay before impact.",
          "• Empowered Splashdown: Reduced delay before impact.",
          "• Empowered Waterwall: Stronger barrier.",
          /*"Water Denizen: Lorelai gains the 5V5 river movement bonus in both directions.",*/
        ],
      },
      {
        name: "FISH FOOD",
        type: "A ABILITY",
        image: 'Lorelai-A',
        text: [
          "Lorelai calls upon her aquatic friends at the target location.",
          "• After 0.8s, her pet clam snaps the area, dealing damage to enemy units inside and stunning them for 0.5s.",
          "• A pool filled with small piranhas persists afterwards, dealing damage over time to enemy units inside.",
          "• The stun duration scales with 0.02% of Lorelai's bonus health.",
          "• Deals less damage to minions, structures, summons, and Mythic Creatures.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['12s', '11.5s', '11s', '10.5s', '10s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['60', '70', '80', '90', '100'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['40', '75', '110', '145', '215'],
            cr: '80%',
            wr: '',
          },
          {
            name: 'Damage/sec',
            amount: ['55', '95', '135', '175', '255'],
            cr: '110%',
            wr: '',
          },
          {
            name: 'Range',
            amount: ['8', '8', '8', '8', '9.5'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        name: "SPLASHDOWN",
        type: "B ABILITY",
        image: 'Lorelai-B',
        text: [
          "Lorelai throws a sphere of water at target location.",
          "• After 0.8s, the water forms a pool.",
          "• Speed up allied units inside.",
          "• Slows down enemy units inside.",
          "• Slow strength scales with 0.015% of Lorelai's bonus health.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['10s', '9s', '8s', '7s', '5s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['50', '60', '70', '80', '40'],
            cr: '',
            wr: '',
          },
          {
            name: 'Speed Boost',
            amount: ['1', '1.2', '1.4', '1.6', '2'],
            cr: '',
            wr: '',
          },
          {
            name: 'Slow',
            amount: ['20%', '20%', '20%', '20%', '20%'],
            cr: '110%',
            wr: '',
          },
        ],
      },
      {
        name: "WATERWALL",
        type: "ULTIMATE",
        image: 'Lorelai-C',
        text: [
          "Lorelai forms a protective veil of water around the target allied hero.",
          "• Cleanses the target of any movement-impairing effects.",
          "• Temporarily grants the target a large barrier.",
          "• After 4s, the water barrier drops on the ground, leaving behind a Splashdown pool (if learned).",
          "• Barrier strength scales with 15% of Lorelai's bonus health.",
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
            amount: ['100', '125', '150'],
            cr: '',
            wr: '',
          },
          {
            name: 'Speed Boost',
            amount: ['500', '750', '1000'],
            cr: '100%',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Splash Doubledown",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Splashdown (B) has 1 additional charge.",
          "• Charge Time 88% (-2%)",
          "• Energy Cost 25%",
        ],
        image: 'Lorelai_Rare',
      },
      {
        name: "Clam Up",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Fish Food (A) stuns for a longer duration.",
          "• Bonus Stun Duration 0.6s (+0.2s)",
        ],
        image: 'Lorelai_Epic',
      },
      {
        name: "Wonder Wall",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Waterwall (Ult) grants invulnerability instead of barrier.",
          "• Duration 4s (+2s)",
          "• Cooldown 100% (-5%)",
        ],
        image: 'Lorelai_Legendary',
      },
    ],
  },
  //Lyra
  {
    name: "Lyra",
    type: ['CAPTAIN, PROTECTOR'], role: ['CAPTAIN'],
    description: "Healer and zone mage who can create teleportation portals.",
    spotlight: "5URpZoYn9a8",
    stats: [
      { name: "HEALTH", value: "774 - 2253", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "4.01 - 7.42", color: "#4eec8b" },
      { name: "ENERGY", value: "248 - 908", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "2.15 - 7.1", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "0", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 136.3%", color: "#f48596" },
      { name: "ARMOR", value: "25 - 75", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 55", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "5.6", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.4", color: "#e19efb" },
    ],
    model: [
      { image: "Lyrablurred" },
      { tmodel: "Lyra" },
    ],
    skills: [
      {
        name: "PRINCIPLE ARCANUM",
        type: "HEROIC PERK",
        image: 'Lyra-P',
        text: [
          "Lyra’s attacks are arcane missiles that deal crystal damage. if she holds her ground after releasing an attack, she automatically follows up with a heavy attack that also slows the target.",
          "• Each channeled missile consumes 15-20 (level 1-12) energy points, but Lyra can continue using these even if she runs out of energy.",
          "• Light attack damage: 60-95 (level 1-12) (+40% Crystal Power)(+100% Weapon Power)",
          "• Heavy attack damage: 60-180 (level 1-12) (+120% Crystal Power)(+100% Weapon Power)",
          "• Heavy attack slow: 0% (+0.04% of bonus max health)",
        ],
      },
      {
        name: "IMPERIAL SIGIL",
        type: "A ABILITY",
        image: 'Lyra-A',
        text: [
          "Lyra creates a sigil that heals nearby allied heroes and damages nearby enemy heroes. Reactivate this ability to detonate the sigil, dealing heavy damage to enemies while providing a move speed boost to allies inside and immediately consuming the remaining duration to heal at 30% effectiveness.",
          "• The healing per second is increase by 11% of Lyra's bonus health.",
          "• The sigil depletes faster the more heroes it is healing/damaging.",
          "• The sigil has vision, so it can see enemies.",
          "• The Detonation deals 50% less damage to minions.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['12s', '11s', '10s', '9s', '8s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['80', '100', '120', '140', '160'],
            cr: '',
            wr: '',
          },
          {
            name: 'Range',
            amount: ['10', '10', '10', '10', '10'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage/sec',
            amount: ['65', '110', '155', '200', '290'],
            cr: '50%',
            wr: '',
          },
          {
            name: 'Heal/sec',
            amount: ['20', '30', '40', '50', '70'],
            cr: '',
            wr: '',
          },
          {
            name: 'Detonate Damage',
            amount: ['80', '130', '180', '230', '330'],
            cr: '60%',
            wr: '',
          },
        ],
      },
      {
        name: "BRIGHT BULWARK",
        type: "B ABILITY",
        image: 'Lyra-B',
        text: [
          "Lyra creates a walled zone around her, damaging and applying a slow to surrounding enemies.",
          "• Enemies inside the zone are slowed.",
          "• Enemies attempting to dash through the wall are stopped.",
          "• Enemies who cross the wall take the same damage and slow again.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['18s', '17s', '16s', '15s', '12s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['60', '70', '80', '90', '100'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['80', '160', '240', '320', '400'],
            cr: '30%',
            wr: '',
          },
          {
            name: 'Duration',
            amount: ['3s', '3s', '3s', '3s', '3s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Slow',
            amount: ['30%', '30%', '30%', '30%', '50%'],
            cr: '',
            wr: '',
          },
          {
            name: 'Duration',
            amount: ['1.5s', '1.5s', '1.5s', '1.5s', '2.5s'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        name: "ARCANE PASSAGE",
        type: "ULTIMATE",
        image: 'Lyra-C',
        text: [
          "Lyra teleports to the target location, creating portals at both ends that allow anyone to teleport across.",
          "• Portals last for 8.5s.",
          "• After travelling through a portal, heroes must wait 4.5s before re-entering one.",
          "• Enemies inside of Lyra's Bright Bulwark cannot enter a portal.",
          "• Heroes standing directly on top of a portal as it forms must step off the portal then re-enter to use it.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['90s', '80s', '70s'],
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
            name: 'Range',
            amount: ['10', '20', '30'],
            cr: '30%',
            wr: '',
          },
          {
            name: 'Bonus Attack Range',
            amount: ['0.5s', '1s', '1.5s'],
            cr: '',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Twin Missles",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Principle Arcanum (Perk) shoots an additional projectile but no longer slows.",
          "• Damage 65% (+3%)",
        ],
        image: 'Lyra_Rare'
      },
      {
        name: "Mobile Bulwark",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Bright Bulwark (B) moves with Lyra and lasts longer. Lyra passively gains crystal power.",
          "• Bonus Duration 1.4s (+0.4s)",
          "• Passive Crystal Power +7.5% (+2.5%)",
        ],
        image: 'Lyra_Epic'
      },
      {
        name: "Gythian Ward",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Bright Bulwark (B) grants a barrier for 2s and removes all negative effects on nearby allies.",
          "• Max Health to Barrier 10% (+5%)",
        ],
        image: 'Lyra_Legendary'
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "School Days Lyra",
        type: "Rare",
        image: 'Lyra_School_Days_R',
      },
      {
        color: "#FF9000",
        name: "Dear Diary Lyra",
        type: "Legendary",
        image: 'Lyra_Dear_Diary_L',
      },
      {
        color: "red",
        name: "Moon Empress\nLyra",
        type: "Special Edition",
        image: 'Lyra_Empress',
      },
      {
        color: "red",
        name: "Moon Goddess Lyra",
        type: "Special Edition",
        image: 'Lyra_Goddess',
      },
      {
        color: "red",
        name: "Moon Queen Lyra",
        type: "Special Edition",
        image: 'Lyra_Queen',
      },
    ],
  },
  //Magnus
  {
    name: "Magnus",
    type: ['LANE, MAGE'], role: ['LANE'],
    description: "A powerful arcanist with a penchant for Arcane Magic decimating enemies from afar",
    spotlight: "g9W8C8hPA2w",
    stats: [
      { name: "HEALTH", value: "648 - 2065", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "(+)", color: "#4eec8b" },
      { name: "ENERGY", value: "380 - 732", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "(+)", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "80 - 158", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 125%", color: "#f48596" },
      { name: "ARMOR", value: "25 - 75", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 55", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "6", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.4", color: "#e19efb" },
    ],
    model: [
      { image: "Magnusblurred" },
      { tmodel: "Magnus" },
    ],
    skills: [
      {
        name: "ARCANE RITE",
        type: "HEROIC PERK",
        image: 'Magnus-P',
        text: [
          "Whenever an enemy is hit by any of Magnus’ abilities, they are afflicted with an Arcane Mark for 4s. Magnus’ abilities have bonus effects when hitting enemies afflicted with Arcane Mark.",
          "Additionally, Magnus can basic attack an afflicted target, consuming the Arcane Mark and exploding it for 50-180 (level 1-12) (+100% crystal power) bonus crystal power.",
        ],
      },
      {
        name: "MYSTIC MISSLE",
        type: "A ABILITY",
        image: 'Magnus-A',
        text: [
          "Magnus fires a magic missile in the target direction, dealing crystal damage to the first target hit.",
          "• Hitting enemies with Arcane Mark scatters the missile to all other nearby targets.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['6s', '6s', '6s', '6s', '4s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['30', '35', '40', '45', '50'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['80', '140', '200', '260', '320'],
            cr: '100%',
            wr: '',
          },
          {
            name: 'Damage (Split Missiles)',
            amount: ['60', '105', '150', '195', '240'],
            cr: '75%',
            wr: '',
          },
          {
            name: 'Range',
            amount: ['10', '10', '10', '10', '12'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        name: "CHRONO DRIVER",
        type: "B ABILITY",
        image: 'Magnus-B',
        text: [
          "Magnus sends a disc of time magic in the target direction that returns to him, dealing crystal damage to all targets it passes through.",
          "• Hitting enemies with Arcane Mark briefly stuns them.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['14s', '13s', '12s', '11s', '10s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['60', '70', '80', '90', '100'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['40', '70', '100', '130', '160'],
            cr: '40%',
            wr: '',
          },
          {
            name: 'Stun Duration',
            amount: ['0.4s', '0.5s', '0.6s', '0.7s', '0.9s'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        name: "SERAPHIC FLARE",
        type: "ULTIMATE",
        image: 'Magnus-C',
        text: [
          "Magnus gathers arcane energy in the target direction for 1s, dealing massive damage to all targets in the area afterwards.",
          "• Deals 50% bonus damage to targets with Arcane Mark.",
          "• If an enemy hero dies within 0.3s of getting hit by this ability, then they will explode in Arcane Magic, launching Mystic Missile to all nearby targets.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['80s', '70s', '60s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['100', '125', '150'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['250', '375', '500'],
            cr: '120%',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "MYSTIC SEER",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Arcane Mark lasts longer and reveals marked targets.",
          "• Bonus Duration 0.4s (+0.4)",
        ],
        image: 'Magnus_Rare',
      },
      {
        name: "ARCANE ALCHEMIST",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Banishing Kick (B) knocks targets further.",
          "• Passive Attack Speed 12% (+7%)",
        ],
        image: 'Magnus_Epic',
      },
      {
        name: "INFINITE ARCANA",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Hitting an enemy hero with an ability reduces all ability cooldowns",
          "• Cooldown 10% (+5%)",
        ],
        image: 'Magnus_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Masquerade Magnus",
        type: "Rare",
        image: 'Magnus_Masquerade',
      },
    ],
  },
  //Malene
  {
    name: "Malene",
    type: ['LANE, MAGE'], role: ['LANE'],
    description: "Form swapping spellcaster who has the tools for any situation.",
    spotlight: "9H2Xp_HWB8o",
    stats: [
      { name: "HEALTH", value: "696 - 2148", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "4.75 - 8.05", color: "#4eec8b" },
      { name: "ENERGY", value: "300 - 685", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "3.2 - 5.4", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "-", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 122%", color: "#f48596" },
      { name: "ARMOR", value: "25 - 75", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 55", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "5.8", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.4", color: "#e19efb" },
    ],
    model: [
      { image: "Maleneblurred" },
      { tmodel: "Malene" },
    ],
    skills: [
      {
        name: "MASKED BALL",
        type: "HEROIC PERK",
        image: 'Malene-P',
        text: [
          "Malene's ultimate is available at level 1 and allows her to switch between Light Form and Shadow Form. Additionally, Malene's basic attacks deal crystal damage.",
          "• Basic attack crystal damage: 70-126 (level 1-12) (+60% Crystal Power)(+100% Weapon Power).",
          "• For 6s after switching forms, Malene's next basic attack is empowered.",
        ],
      },
      {
        name: "LIGHT RIBBONS",
        type: "A ABILITY (LIGHT FORM)",
        image: 'Malene-A1',
        text: [
          "Malene sends ribbons of light in the target direction, damaging and immobilizing the first enemy hit.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['16s', '15s', '14s', '13s', '12s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['40', '50', '60', '70', '35'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['60', '105', '150', '195', '240'],
            cr: '100%',
            wr: '',
          },
          {
            name: 'Root Duration',
            amount: ['1s', '1s', '1s', '1s', '1.5s'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        name: "SHADOW TENDRILS",
        type: "A ABILITY (SHADOW FORM)",
        image: 'Malene-A2',
        text: [
          "Shadow Form - Shadow Tendrils: Malene unleashes three shadow tendrils in the target direction, dealing crystal damage to all enemies along their path.",
          "• Each tendril deals its own instance of damage.",
          "• Deals less damage to minions.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['10s', '9.5s', '9s', '8.5s', '8s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['40', '50', '60', '70', '35'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['30', '60', '90', '120', '150'],
            cr: '60%',
            wr: '',
          },
        ],
      },
      {
        name: "ROYAL AMNESTY",
        type: "B ABILITY (LIGHT FORM)",
        image: 'Malene-B1',
        text: [
          "Malene instantly imbues herself with light, granting herself a barrier and a burst of movement speed for 3s.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['12s', '12s', '12s', '12s', '12s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['60', '70', '80', '90', '100'],
            cr: '',
            wr: '',
          },
          {
            name: 'Barrier Strength',
            amount: ['75', '120', '165', '210', '300'],
            cr: '60%',
            wr: '',
          },
          {
            name: 'Speed Boost',
            amount: ['0.8', '1', '1.2', '1.4', '1.8'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        name: "WICKED ESCAPADE",
        type: "B ABILITY (SHADOW FORM)",
        image: 'Malene-B2',
        text: [
          "Malene instantly becomes a trail of shadows for 1.5s, becoming invulnerable and slowing enemies she passes through. When this effect ends, enemies near her original location receive a burst of damage.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['20s', '19s', '18s', '17s', '14s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['80', '90', '100', '110', '120'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['80', '160', '240', '320', '480'],
            cr: '70%',
            wr: '',
          },
          {
            name: 'Slow',
            amount: ['30%', '35%', '40%', '45%', '50%'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        name: "ENCHANTED TRANSFORMATION",
        type: "ULTIMATE",
        image: 'Malene-C',
        text: [
          "Malene switches between Light Form and Shadow Form, swapping abilities and gaining an empowerment on her next basic attack based on which form she switches into.",
          "• Shadow Empowerment: Deal bonus damage.",
          "• Light Empowerment: Slows target.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['6s', '5s', '4s', '3s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['0', '0', '0', '0'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['40', '80', '120', '160'],
            cr: '80%',
            wr: '',
          },
          {
            name: 'Slow',
            amount: ['25%', '30%', '35%', '40%'],
            cr: '',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Spiky-Spiky",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Wicked Escapade (Shadow B) will also deal damage where Malene appears.",
          "• Damage 103% (+3%)",
          "• Cooldown 90% (-1%)",
        ],
        image: 'Malene_Rare',
      },
      {
        name: "Shadow Terror",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Shadow Tendrils (Shadow A) will also fear enemies.",
          "• Damage 101% (+1%)",
          "• Duration 0.6s (+0.1s)",
        ],
        image: 'Malene_Epic',
      },
      {
        name: "Royal Favors",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Royal Amnesty (Light B) will also apply to nearby allies and deal damage around shielded targets upon expiration.",
          "• Barrier 120% (+20%)",
          "• Damage 200 (+150)",
        ],
        image: 'Malene_Legendary',
      },
    ],
    skins: [
      {
        color: "Red",
        name: "Trick or Treat Malene",
        type: "Special Edition",
        image: 'Malene_Trick_or_Treat'
      },
    ],
  },
  //Ozo
  {
    name: "Ozo",
    type: ['JUNGLE, ASSASSIN'], role: ['JUNGLE'],
    description: "Acrobatic monkey with immense self-healing.",
    spotlight: "Dp7MIjNuZXc",
    stats: [
      { name: "HEALTH", value: "769 - 2536", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: " - ", color: "#4eec8b" },
      { name: "ENERGY", value: "350 - 650", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: " - ", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "80 - 157", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 136.3%", color: "#f48596" },
      { name: "ARMOR", value: "30 - 85", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 60", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "1.7", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.5", color: "#e19efb" },
    ],
    model: [
      { image: "Ozoblurred" },
      { tmodel: "Ozo" },
    ],
    skills: [
      {
        name: "CARNIE LUCK",
        type: "HEROIC PERK",
        image: 'Ozo-P',
        text: [
          "Ozo receives 10-25% additional healing, barrier and fortified health from all sources.",
          "• This does not affect health regeneration.",
        ],
      },
      {
        name: "THREE-RING CIRCUS",
        type: "A ABILITY",
        image: 'Ozo-A',
        text: [
          "Ozo can use this ability three times in a 5s window:",
          "• First hit: Smashes the target and other enemies in front of him.",
          "• Second hit: Dashes through his target and deals damage.",
          "• Final hit: Spins and damages all nearby enemies.",
          "• Each hit deals weapon damage, can crit, and triggers basic-attack effects on the primary targer.",
          "• Ozo heals for each enemy damaged by any of these hits (30% against non-heroes).",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['8s', '7.5s', '7s', '6.5s', '5s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['50', '55', '60', '65', '75'],
            cr: '',
            wr: '',
          },
          {
            name: 'First Hit Damage',
            amount: ['15', '25', '35', '45', '55'],
            cr: '75%',
            wr: '100%',
          },
          {
            name: 'Second Hit Damage',
            amount: ['15', '25', '35', '45', '55'],
            cr: '75%',
            wr: '100%',
          },
          {
            name: 'Third Hit Damage',
            amount: ['15', '25', '35', '45', '55'],
            cr: '75%',
            wr: '100%',
          },
          {
            name: 'Healing vs. Heroes',
            amount: ['20', '40', '60', '80%', '100'],
            cr: '15%',
            wr: '',
          },
        ],
      },
      {
        name: "ACROBOUNCE",
        type: "B ABILITY",
        image: 'Ozo-B',
        text: [
          "Ozo jumps onto a target, damaging and slowing it if it is an enemy. While airborne, quickly tap another target to bounce to it. Three hops maximum.",
          "• Each time Ozo starts a jump, he is granted fortified health.",
          "• The final landing deals increased damage plus a bonus per prior bounce.",
          "• If Ozo hops at least twice, he'll get a burst of move speed up to a maximum of 4.5s.",
          "• Deals 50% less damage to minions.",
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
            amount: ['100', '100', '100', '100', '100'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['60', '120', '180', '240', '300'],
            cr: '70%',
            wr: '',
          },
          {
            name: 'Final Damage',
            amount: ['80', '160', '240', '320', '400'],
            cr: '70%',
            wr: '',
          },
          {
            name: 'Bonus Damage/Bounce',
            amount: ['20', '40', '60', '80', '100'],
            cr: '35%',
            wr: '',
          },
          {
            name: 'Speed Boost',
            amount: ['3', '3', '3', '3', '3'],
            cr: '',
            wr: '0.75%',
          },
          {
            name: 'Bonus Speed Duration',
            amount: ['3', '3', '3', '3', '3'],
            cr: '',
            wr: '0.75%',
          },
          {
            name: 'Fortified Health	',
            amount: ['25', '50', '75', '100', '125'],
            cr: '15%',
            wr: '',
          },
        ],
      },
      {
        name: "BANGARANG",
        type: "ULTIMATE",
        image: 'Ozo-C',
        text: [
          "Ozo charges up, then rolls toward a targeted enemy hero. Upon arrival, Ozo damages, stuns for 0.8s, and flips the target over him.",
          "• While tumbling, Ozo will damage and knock aside other enemies along his path.",
          "• Max travel duration of 1s.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['70s', '50s', '30s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['120', '120', '120'],
            cr: '',
            wr: '',
          },
          {
            name: 'Primary Target Damage',
            amount: ['250', '400', '550'],
            cr: '150%',
            wr: '',
          },
          {
            name: 'Secondary Target Damage',
            amount: ['125', '200', '275'],
            cr: '75%',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Second Wind",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Acrobounce (B) is reset upon the third bounce.",
          "• Damage 65% (+2%)",
          "• Fortified Health 155% (+7.5%)",
        ],
        image: 'Talents/Ozo_Rare',
      },
      {
        name: "Ring Leader",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Three-Ring Circus (A) heals nearby allies.",
          "• Heal 110% (+7.5%)",
        ],
        image: 'Talents/Ozo_Epic',
      },
      {
        name: "Bangaranarang!",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Bangarang (ult) has 1 additional charge.",
          "• Damage 90% (+15%)",
          "• Cooldown 70% (-7.5%)",
        ],
        image: 'Talents/Ozo_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Wuxia Ozo",
        type: "Rare",
        image: 'Ozo_Wuxia_R',
      },
      {
        color: "#7A02EA",
        name: "Winged Ozo",
        type: "Epic",
        image: 'Winged_Ozo',
      },
    ],
  },
  //Petal
  {
    name: "Petal",
    type: ['JUNGLE, SNIPER'], role: ['JUNGLE'],
    description: "Commands 3 pets who tear apart enemies and block incoming skillshots.",
    spotlight: "6RBEJWEcBLs",
    stats: [
      { name: "HEALTH", value: "636 - 1983", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "2.4 - 5.15", color: "#4eec8b" },
      { name: "ENERGY", value: "410 - 718", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "1 - 2.21", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "64 - 134", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 136.3%", color: "#f48596" },
      { name: "ARMOR", value: "25 - 75", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 55", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "6.2", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.3", color: "#e19efb" },
    ],
    model: [
      { image: "Petalblurred" },
      { tmodel: "Petal" },
    ],
    skills: [
      {
        video: 'Petal-P',
        name: "MUNIONS",
        type: "HEROIC PERK",
        image: 'Petal-P',
        text: [
          "A few moments after Petal plants a Bramblebloom Seed, it will automatically sprout into a Munion pet, which will fight alongside Petal up to a maximum of 3 Munions.",
        ],
      },
      {
        video: 'Petal-A',
        name: "BRAMBLEBOOM SEEDS",
        type: "A ABILITY",
        image: 'Petal-A',
        text: [
          "Petal plants a Bramblebloom Seed directly in front of her.",
          "• If an enemy hero steps on a seed, the seed will explode and knock the enemy back.",
          "• Petal's seeds have a small vision radius.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['3s', '3s', '3s', '3s', '3s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['60', '65', '70', '75', '80'],
            cr: '',
            wr: '',
          },
          {
            name: 'Pet Health',
            amount: ['100', '180', '260', '340', '500'],
            cr: '65%',
            wr: '',
          },
          {
            name: 'Pet Defense',
            amount: ['30', '40', '50', '60', '80'],
            cr: '5%',
            wr: '',
          },
          {
            name: 'Pet Damage',
            amount: ['7', '14', '21', '28', '42'],
            cr: '40%',
            wr: '',
          },
          {
            name: 'Seed Health',
            amount: ['50', '80', '110', '140', '200'],
            cr: '15%',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['75', '125', '175', '225', '275'],
            cr: '100%',
            wr: '',
          },
        ],
      },
      {
        name: "TRAMPOLINE!",
        type: "B ABILITY",
        image: 'Petal-B',
        text: [
          "Petal leaps in the target direction, leaving a Bramblebloom Seed behind at her original location. Using this ability will increase Petal's basic-attack range and amplify her weapon and crystal power for 5s.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['15s', '14.5s', '14s', '13.5s', '12s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['80', '85', '90', '95', '100'],
            cr: '',
            wr: '',
          },
          {
            name: 'Bonus Attack Range',
            amount: ['0', '0.2', '0.4', '0.6', '1.2'],
            cr: '',
            wr: '',
          },
          {
            name: 'Crystal Amp.',
            amount: ['15%', '15%', '15%', '15%', '15%'],
            cr: '',
            wr: '',
          },
          {
            name: 'Crystal Amp.',
            amount: ['15%', '15%', '15%', '15%', '15%'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        video: 'Petal-C',
        name: "BLAST TREMOR",
        type: "ULTIMATE",
        image: 'Petal-C',
        text: [
          "Petal sends the nearest munion dashing towards the targeted location, exploding. The explosion slows and deals splash damage to nearby enemies while healing nearby allies.",
          "• Detonated pets become Bramblebloom Seeds.",
          "• This ability has 3 charges.",
        ],
        stats: [
          {
            name: 'Charge Time',
            amount: ['30s', '25s', '20s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['40', '40', '40'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['180', '240', '300'],
            cr: '70%',
            wr: '',
          },
          {
            name: 'Cooldown',
            amount: ['0.4s', '0.4s', '0.4s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Crystal Amp.',
            amount: ['75', '125', '175'],
            cr: '60%',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Bouncer",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Trampoline (B) has a 1s cooldown but will cost more energy if used while empowerment is still active.",
          "• Energy Cost 185% (-5%)",
        ],
        image: 'Petal_Rare',
      },
      {
        name: "Kaboom Seeds",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Brambleboom Seeds (A) explode for massive damage but no longer knock back enemies.",
          "• Damage 180% (+10%)",
        ],
        image: 'Petal_Epic',
      },
      {
        name: "Explosive Force",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Spontaneous Combustion (Ult) knocks back enemies caught within its explosion.",
          "• Damage 100% (+15%)",
        ],
        image: 'Petal_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Bee Petal",
        type: "Rare",
        image: 'Petal_Bee_R',
      },
      {
        color: "#7A02EA",
        name: "Beetle Petal",
        type: "Epic",
        image: 'Petal_Beetle_E',
      },
      {
        color: "#FF9000",
        name: "Space Bug Petal",
        type: "Legendary",
        image: 'Petal_SpaceBug_L',
      },
      {
        color: "#FF9000",
        name: "Tea Party Petal",
        type: "Legendary",
        image: 'Petal_TeaParty',
      },
      {
        color: "red",
        name: "Pumpkin Spice Petal",
        type: "Special Edition",
        image: 'Petal_Pumpkin_Spice_SE',
      },
      {
        color: "#FADA5E",
        name: "Pumpkin Spice Petal",
        type: "Limited Edition",
        image: 'Petal_Pumpkin_Spice_LE',
      },
    ],
  },
  //Phinn
  {
    name: "Phinn",
    type: ['CAPTAIN, PROTECTOR'], role: ['CAPTAIN'],
    description: "Extremely tanky and can pull in enemies from across the screen.",
    spotlight: "hu9kTiwJejc",
    stats: [
      { name: "HEALTH", value: "892 -	2781", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "3.39	7.24", color: "#4eec8b" },
      { name: "ENERGY", value: "220	440", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: " - ", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "95 - 154", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 113.2%", color: "#f48596" },
      { name: "ARMOR", value: "35 - 100", color: "#f6ee71" },
      { name: "SHIELD", value: "25 - 75", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "1.9", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.1", color: "#e19efb" },
    ],
    model: [
      { image: "Phinnblurred" },
      { tmodel: "Phinn" },
    ],
    skills: [
      {
        name: "UNSTOPPABLE",
        type: "HEROIC PERK",
        image: 'Phinn-P',
        text: [
          "Phinn cannot be stopped or stunned. All movement-impairing effects are instead reduced to moderate slows, and stuns are converted to silences.",
          "• He even shrugs off attempts on his life, passively gaining 18% additional armor, shield, and max health.",
          /*"Water Denizen: Phinn gains the 5V5 river movement bonus in both directions."*/
        ],
      },
      {
        name: "QUIBBLE",
        type: "A ABILITY",
        image: 'Phinn-A',
        text: [
          "Phinn slams his anchor down on the targeted location, heavily slowing enemies for 0.9s.",
          "• Overdrive: At max rank, the slow becomes a stun!",
          "• Deals less damage to minions.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['9s', '8s', '7s', '6s', '5s'],
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
            amount: ['200', '300', '400', '500', '600'],
            cr: '170%',
            wr: '',
          },
          {
            name: 'Slow',
            amount: ['55%', '60%', '65%', '70%', '0%'],
            cr: '15%',
            wr: '',
          },
        ],
      },
      {
        name: "POLITE COMPANY",
        type: "B ABILITY",
        image: 'Phinn-B',
        text: [
          "Phinn stomps the earth, damaging all enemies in a wide area and nudging them toward him. The effect reverberates around allies, temporarily granting them fortified health.",
          "• Fortified health increases by 4% of Phinn's bonus health and 15% of Phinn's bonus armor/shield.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['10s', '10s', '10s', '10s', '10s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['30', '30', '30', '30', '30'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['75', '125', '175', '225', '275'],
            cr: '120%',
            wr: '',
          },
          {
            name: 'Duration',
            amount: ['2s', '2s', '2s', '2s', '2s'],
            cr: '15%',
            wr: '',
          },
          {
            name: 'Fortified Health',
            amount: ['100', '125', '150', '175', '225'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        name: "FORCED ACCORD",
        type: "ULTIMATE",
        image: 'Phinn-C',
        text: [
          "Phinn throws his anchor in a direction. After the anchor reaches its destination, Phinn yanks it back, damaging all enemies in its path and pulling them back to him.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['85s', '70s', '55s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['60', '60', '60'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['100', '300', '500'],
            cr: '150%',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Friendly Cavil",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Polite Company (B) resets the cooldown of Quibble (A). The energy costs of both abilities are reduced by 50%.",
          "• Damage 70% (+3%)",
          "• Energy Cost 50%",
        ],
        image: 'Phinn_Rare',
      },
      {
        name: "Phaster",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Polite Company (B) grants bonus move speed to Phinn and his allies.",
          "• Fortified Health 100% (+1%)",
          "• Bonus Move Speed 1.3 (+0.2)",
        ],
        image: 'Phinn_Epic',
      },
      {
        name: "Raid Boss",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Phinn rapidly regenerates health.",
          "• Damage 45% (+7.5%)",
          "• Health Regen/Sec 7% (+2%)",
        ],
        image: 'Phinn_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Bonecruncher Phinn",
        type: "Rare",
        image: 'Phinn_Bonecruncher',
      },
      {
        color: "#7A02EA",
        name: "Bonegnasher Phinn",
        type: "Epic",
        image: 'Phinn_Bonegnasher',
      },
      {
        color: "#FF9000",
        name: "Churn Tyrant Phinn",
        type: "Legendary",
        image: 'Phinn_Churn_Tyrant',
      },
      {
        color: "red",
        name: "Summer Party Phinn",
        type: "Special Edition",
        image: 'Phinn_Summer_Party',
      },
    ],
  },
  //Reim
  {
    name: "Reim",
    type: ['JUNGLE, MAGE'], role: ['JUNGLE'],
    description: "Resilient ice mage who dominates close-quarter battles.",
    spotlight: "Ur-cD6ibo00",
    stats: [
      { name: "HEALTH", value: "746 - 2499", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "(+)", color: "#4eec8b" },
      { name: "ENERGY", value: "220 - 462", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "(+)", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "80 - 153", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 136.3%", color: "#f48596" },
      { name: "ARMOR", value: "30 - 85", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 60", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "1.9", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.5", color: "#e19efb" },
    ],
    model: [
      { image: "Reimblurred" },
      { tmodel: "Reim" },
    ],
    skills: [
      {
        name: "FROSTGUARD",
        type: "HEROIC PERK",
        image: 'Reim-P',
        text: [
          "Reim's basic attacks deal 50-160 (level 1-12) (+180% crystal power) damage over 4s and slow targets for 0.6s.",
          "Reim temporarily gains fortified health equal to 10% (2.5% against non-heroes) of damage dealt.",
          "• Fortified health is capped at 20% of Reim's maximum health."
        ],
      },
      {
        name: "WINTER SPIRE",
        type: "A ABILITY",
        image: 'Reim-A',
        text: [
          "Reim summons a spire of ice at a nearby location, dealing crystal damage to surrounding enemies. After a shower delay, the spire shatters, dealing heavy crystal damage.",
          "• Deals less damage to minions.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['4s', '3.5s', '3s', '2.5s', '2s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['30', '35', '40', '45', '50'],
            cr: '',
            wr: '',
          },
          {
            name: 'Impact Damage',
            amount: ['60', '100', '140', '180', '220'],
            cr: '80%',
            wr: '',
          },
          {
            name: 'Burst Damage',
            amount: ['80', '140', '200', '260', '320'],
            cr: '160%',
            wr: '',
          },
          {
            name: 'Range',
            amount: ['6', '6', '6', '6', '8'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        name: "CHILL WINDS",
        type: "B ABILITY",
        image: 'Reim-B',
        text: [
          "Reim deals a burst of crystal damage to all surrounding enemies, rooting enemies who are chilled. A rooted enemy cannot move or dash, but the enemy can still attack.",
          "• Deals 50 % less damage to minions.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['12s', '11.5s', '11s', '10.5s', '10s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['60', '65', '70', '75', '80'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['60', '100', '140', '180', '220'],
            cr: '60%',
            wr: '',
          },
          {
            name: 'Root Duration',
            amount: ['1s', '1s', '1s', '1s', '1.5s'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        name: "VALKYRIE",
        type: "ULTIMATE",
        image: 'Reim-C',
        text: [
          "Reim summons an ancient Valkyrie, devastating enemies in the area and applying a heavy decaying slow.",
          "• Enemies near center are also stunned and take greater damage.",
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
            amount: ['100', '125', '150'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage at Center',
            amount: ['300', '450', '600'],
            cr: '160%',
            wr: '',
          },
          {
            name: 'Damage at Edge',
            amount: ['50%', '50%', '50%'],
            cr: '',
            wr: '',
          },
          {
            name: 'Center Slow Duration',
            amount: ['4s', '5s', '6s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Edge Slow Duration',
            amount: ['2s', '3s', '4s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Slow',
            amount: ['80%', '80%', '80%'],
            cr: '',
            wr: '',
          },
          {
            name: 'Stun Duration',
            amount: ['0.9s', '1.2s', '1.5s'],
            cr: '',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Creeping Cold",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Winter Spire (A) deals damage to all enemies it passes through.",
          "• Impact to Travel Damage 35% (+2.5%)",
        ],
        image: 'Reim_Rare',
      },
      {
        name: "Long Winter",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Fortified Health generated by Reim lasts 30s longer. Reim passively gains crystal power.",
          "• Passive Crystal Power 15% (+2.5%)",
        ],
        image: 'Reim_Epic',
      },
      {
        name: "Revenant",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Chill Winds (B) prevents Reim from being slowed and grants him a barrier for 2s.",
          "• Max Health to Barrier 20% (+7.5%)",
          "• Barrier Duration 2s",
        ],
        image: 'Reim_Legendary',
      },
    ],
    skins: [
      {
        color: "#6393F9",
        name: "Ice Wind Reim",
        type: "Rare",
        image: 'Reim_Ice_Wind',
      },
      {
        color: "#7A02EA",
        name: "Valkyrie Reim",
        type: "Epic",
        image: 'Reim_Valkyrie',
      },
      {
        color: "#FF9000",
        name: "North Hammer Reim",
        type: "Legendary",
        image: 'Reim_North_Hammer',
      },
      {
        color: "#6393F9",
        name: "Deathless Reim",
        type: "Rare",
        image: 'Reim_Deathless',
      },
      {
        color: "red",
        name: "Santa Reim",
        type: "Special Edition",
        image: 'Reim_Santa',
      },
    ],
  },
  //Reza
  {
    name: "Reza",
    type: ['JUNGLE, MAGE'], role: ['JUNGLE'],
    description: "A fast, devastating fire mage with a demon netherform.",
    spotlight: "MsCucm_7QXU",
    stats: [
      { name: "HEALTH", value: "718 - 2306", color: "#4eec8b" },
      { name: "HEALTH REGEN", value: "3.82 - 7.23", color: "#4eec8b" },
      { name: "ENERGY", value: "380 - 732", color: "#5bbcff" },
      { name: "ENERGY REGEN", value: "2.53 - 4.84", color: "#5bbcff" },
      { name: "WEAPON DAMAGE", value: "84 - 154", color: "#f48596" },
      { name: "ATTACK SPEED", value: "100% - 125%", color: "#f48596" },
      { name: "ARMOR", value: "30 - 85", color: "#f6ee71" },
      { name: "SHIELD", value: "20 - 60", color: "#f6ee71" },
      { name: "ATTACK RANGE", value: "3", color: "#e19efb" },
      { name: "MOVE SPEED", value: "3.6", color: "#e19efb" },
    ],
    model: [
      { image: "Ozoblurred" },
      { tmodel: "Ozo" },
    ],
    skills: [
      {
        name: "FIRESTARTER",
        type: "HEROIC PERK",
        image: 'Reza-P',
        text: [
          "Scorcher and Netherform Detonator apply Firestarter to enemy targets.",
          "• Reza's basic attacks consume Firestarter, dealing crystal damage.",
          "• Crystal Damage: 45-100 (level 1-12) (+250% crystal power)",
        ],
      },
      {
        name: "SCORCHER",
        type: "A ABILITY",
        image: 'Reza-A',
        text: [
          "Reza smashes the ground, creating a fiery shockwave in front of him. This deals damage to anything it passes through and collides with the first enemy hero or jungle monster hit.",
          "• Scorcher applies Firestarter on impact.",
          "• Deals less damage to minions.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['5s', '4.5s', '4s', '3.5s', '3s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['30', '35', '40', '45', '50'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['40', '80', '120', '160', '200'],
            cr: '40%',
            wr: '',
          },
          {
            name: 'Range',
            amount: ['7.5', '7.5', '7.5', '7.5', '9.5'],
            cr: '15%',
            wr: '',
          },
        ],
      },
      {
        name: "TROUBLEMAKER",
        type: "B ABILITY",
        image: 'Reza-B',
        text: [
          "Reza dashes to the target location, dealing crystal damage to enemies he passes through.",
          "• Reza's next basic attack deals bonus crystal damage.",
          "• This ability has 2 charges.",
        ],
        stats: [
          {
            name: 'Charge Time',
            amount: ['15s', '14s', '13s', '12s', '10s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['40', '60', '80', '100', '120'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['80', '110', '140', '170', '200'],
            cr: '40%',
            wr: '',
          },
          {
            name: 'Cooldown',
            amount: ['0.5s', '0.5s', '0.5s', '0.5s', '0.2s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Bonus Damage',
            amount: ['20', '40', '60', '80', '100'],
            cr: '20%',
            wr: '',
          },
        ],
      },
      {
        name: "NETHERFORM DETONATOR",
        type: "ULTIMATE",
        image: 'Reza-C',
        text: [
          "Reza vanishes removing from himself any negative movement-impairing effects, then reappears at the target location in empowered demon form.",
          "• Upon reappearing, he unleashes a blazing explosion, damaging enemies and consuming Firestarter within the target radius.",
          "• Reza then applies Firestarter to all enemies nearby.",
          "• Each basic attack now applies Firestarter on enemies without Firestarter on them.",
        ],
        stats: [
          {
            name: 'Cooldown',
            amount: ['90s', '70s', '50s'],
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
            name: 'Damage',
            amount: ['200', '300', '400'],
            cr: '80%',
            wr: '',
          },
          {
            name: 'Duration',
            amount: ['6s', '6s', '6s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Fortified Health',
            amount: ['0', '0', '0'],
            cr: '150%',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: "Burning Barrier",
        type: "RARE",
        color: "#6393F9",
        text: [
          "Troublemaker (B) grants Reza a barrier for a short duration.",
          "• Barrier 7.5% (+7.5%)",
        ],
        image: 'Reza_Rare',
      },
      {
        name: "Firemaker",
        type: "EPIC",
        color: "#7A02EA",
        text: [
          "Troublemaker (B) applies Firestarter (Perk) to enemy heroes he passes through.",
          "• Damage 100% (+5%)",
        ],
        image: 'Reza_Epic',
      },
      {
        name: "Nether Rage",
        type: "LEGENDARY",
        color: "#FF9000",
        text: [
          "Netherform Detonator (Ult) grants Reza bonus attack speed and lasts longer.",
          "• Passive Attack Speed +15% (+5%)",
          "• Bonus Duration 2s (+1s)",
        ],
        image: 'Reza_Legendary',
      },
    ],
    skins: [
      {
        color: "#FF9000",
        name: "Netherknight Reza",
        type: "Legendary",
        image: 'Reza_Netherknight',
      },
      {
        color: "red",
        name: "Red Lantern Reza",
        type: "Special Edition",
        image: 'Reza_Red_Lantern',
      },
    ],
  },
  { name: 'Ringo', type: ['LANE', 'SNIPER'] },
  { name: 'Rona', type: ['JUNGLE', 'WARRIOR'] },
  { name: 'Samuel', type: ['LANE', 'MAGE'] },
  { name: 'SAW', type: ['LANE', 'SNIPER'] },
  { name: 'Silvernail', type: ['LANE', 'SNIPER'] },
  { name: 'Skaarf', type: ['LANE', 'MAGE'] },
  { name: 'Skye', type: ['LANE', 'SNIPER'] },
  { name: 'Taka', type: ['JUNGLE', 'ASSASSIN'] },
  { name: 'Tony', type: ['JUNGLE', 'WARRIOR'] },
  { name: 'Varya', type: ['LANE', 'MAGE'] },
  // Vox
  {
    name: 'Vox',
    type: ['LANE', 'SNIPER'], role: ['LANE'],
    description: 'Durable berserker who excels in the thick of fights.',
    spotlight: '5Z2KUYPYXEw',
    stats: [
      { name: 'HEALTH', value: '667 - 2054', color: '#4eec8b' },
      { name: 'HEALTH REGEN', value: '3.55 - 7.4', color: '#4eec8b' },
      { name: 'ENERGY', value: '200 - 464', color: '#5bbcff' },
      { name: 'ENERGY REGEN', value: '1.33 - 3.09', color: '#5bbcff' },
      { name: 'WEAPON DAMAGE', value: '54 - 109', color: '#f48596' },
      { name: 'ATTACK SPEED', value: '100% - 136.3%', color: '#f48596' },
      { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
      { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
      { name: 'ATTACK RANGE', value: '5.6', color: '#e19efb' },
      { name: 'MOVE SPEED', value: '3.4', color: '#e19efb' },
    ],
    model: [
      { image: 'Voxblurred' },
      { tmodel: 'Vox' }
    ],
    skills: [
      {
        name: "JULIA'S SONG",
        type: 'Perk',
        image: 'Vox-P',
        text: [
          "Vox's abilities mark enemies with Resonance. When basic attacking marked enemies, Resonance Bolts will bounce outwards to two nearby enemies dealing bonus crystal damage while refreshing and spreading the Resonance mark.",
          '• Resonance Crystal damage: 20 (+80% of crystal power)',
          '• Resonance bounces deal 50% damage to minions.',
          '• Basic Attacks deal an additional 20-42 (level 1-12) (+40% of crystal power)(+100% of weapon power)',
        ],
        video: 'Vox-P',
        stats: [],
      },
      {
        name: 'SONIC ZOOM',
        type: 'A ABILITY',
        image: 'Vox-A',
        text: [
          'Vox dashes in the targeted direction, throwing two basic attacks to the nearest enemy marked by Resonance (prioritizing heroes).',
        ],
        video: 'Vox-A',
        stats: [
            {
              name: 'Cooldown',
              amount: ['7s', '6.5s', '6s', '5.5s', '4s'],
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
              name: 'Basic Attack Damage',
              amount: ['50%', '50%', '50%', '50%', '50%'],
              cr: '',
              wr: '',
            },
        ],
      },
      {
        name: 'PULSE',
        type: 'B ABILITY',
        image: 'Vox-B',
        text: [
          'Vox emits a sonic pulse that echoes off nearby enemies and applies Resonance. The pulse applies a slow that is significantly stronger near its center.',
          "• Each upgrade to Pulse increases the damage of Vox's bouncing Resonance bolts.",
          '• Overdrive: Resonance bounce range increased by 2.',
        ],
        video: 'Vox-B',
        stats: [
            {
              name: 'Cooldown',
            amount: ['8s', '8s', '8s', '8s', '6s'],
              cr: '',
              wr: '',
            },
            {
              name: 'Energy Cost',
              amount: ['60', '70', '80', '90', '100'],
              cr: '',
              wr: '',
            },
            {
              name: 'Bonus Damage',
              amount: ['15', '30', '45', '60', '75'],
              cr: '',
              wr: '',
            },
            {
              name: 'Slow at Center',
              amount: ['15%', '17%', '19%', '21%', '25%'],
              cr: '',
              wr: '',
          },
          {
            name: 'Slow at Edge',
            amount: ['10%', '12%', '14%', '16%', '20%'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        name: 'WAIT FOR IT...',
        type: 'ULTIMATE',
        image: 'Vox-C',
        text: [
          'Vox fires an ultrasonic wave that applies Resonance to enemies in its path. Shortly after, a wide shockwave explodes along the same path, dealing crystal damage and silencing enemies.',
          '• Striking enemy heroes with the shockwave will also cause Resonance Bolts to bounce outward to other enemies.',
        ],
        video: 'Vox-C',
        stats: [
            {
              name: 'Cooldown',
              amount: ['70s', '60s', '50s'],
              cr: '',
              wr: '',
            },
            {
              name: 'Energy Cost',
              amount: ['100', '100', '100'],
              cr: '',
              wr: '',
            },
            {
              name: 'Impact Damage',
              amount: ['100', '175', '250'],
              cr: '50%',
              wr: '',
            },
            {
              name: 'Burst Damage',
              amount: ['200', '350', '500'],
              cr: '100%',
              wr: '',
            },
            {
              name: 'Silence Duration',
              amount: ['0.4s', '0.6s', '0.8s'],
              cr: '',
              wr: '',
            },
        ],
      },
    ],
    talents: [
      {
        name: 'Deep Dash',
        type: 'Rare',
        color: '#6393F9',
        text: [
          'Sonic Zoom (A) has 3 increased dash range. Vox passively gains attack speed.',
          '• Passive Attack Speed +25% (+1%)',
          '• Cooldown 125% (-2.5%)',
        ],
      },
      {
        name: 'Sound Barrier',
        type: 'Epic',
        color: '#7A02EA',
        text: [
          'Vox’s basic attacks periodically grant him a health barrier.',
          '• Max Health to Barrier 5% (+2.5%)',
          '• Barrier Duration 4s',
        ],
      },
      {
        name: 'Echo Chamber',
        type: 'Legendary',
        color: '#FF9000',
        text: [
          'Julia’s Song (Perk) Resonance bolts have an additional bounce.',
          '• Damage 60% (+10%)',
        ],
      },
    ],
    skins: [
      {
        name: 'Sky Captain Vox',
        color: '#6393F9',
        type: 'Rare',
        image: 'Vox_SkyCaptain',
      },
      {
        name: 'Cloud Raider Vox',
        color: '#7A02EA',
        type: 'Epic',
        image: 'Vox_CloudRaider',
      },
      {
        name: 'Evolution Vox',
        color: '#FF9000',
        type: 'Legendary',
        image: 'Vox_Evolution',
      },
      {
        name: 'School Days Vox',
        color: '#7A02EA',
        type: 'Epic',
        image: 'Vox_SchoolDays',
      },
      {
        name: 'Vox On Ice',
        color: '#FF9000',
        type: 'Legendary',
        image: 'Vox_OnIce',
      },
    ],
  },
  // Yates
  {
    name: 'Yates',
    type: ['CAPTAIN', 'PROTECTOR'], type: ['CAPTAIN'],
    description:
      'Battelfield commander who grabs enemies and has a global presence.',
    spotlight: 'K6kHZW3Vq2g',
    stats: [
      { name: 'HEALTH', value: '857 - 2672', color: '#4eec8b' },
      { name: 'HEALTH REGEN', value: '(+)', color: '#4eec8b' },
      { name: 'ENERGY', value: '174 - 471', color: '#5bbcff' },
      { name: 'ENERGY REGEN', value: '(+)', color: '#5bbcff' },
      { name: 'WEAPON DAMAGE', value: '82 - 172', color: '#f48596' },
      { name: 'ATTACK SPEED', value: '100% - 136.3%', color: '#f48596' },
      { name: 'ARMOR', value: '35 - 100', color: '#f6ee71' },
      { name: 'SHIELD', value: '20 - 75', color: '#f6ee71' },
      { name: 'ATTACK RANGE', value: '3.4', color: '#e19efb' },
      { name: 'MOVE SPEED', value: '3.4', color: '#e19efb' },
    ],
    model: [
      { image: 'Yatesblurred' },
      { tmodel: 'Yates' }
    ],
    skills: [
      {
        name: 'DEVASTATION FLAIL',
        type: 'Perk',
        image: 'Yates-P',
        text: [
          'Yates can combo up to three basic attacks within a short time of each other for increasingly powerful effects.',
          'Second Hit: Bonus damage and gain a small movespeed boost.',
          'Third Hit: Bonus damage and gain a large movespeed boost.',
        ],
        video: 'Yates-P',
        stats: [

        ],
      },
      {
        name: 'WOLF’S MAW',
        type: 'A ABILITY',
        image: 'Yates-A',
        text: [
          'Yates extends his flail forward, pulling in the first enemy hit.',
        ],
        video: 'Yates-A',
        stats: [
            {
              name: 'Cooldown',
              amount: ['8s', '7.5s', '7s', '6.5s', '6s'],
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
              amount: ['0', '0', '0', '0', '0'],
              cr: '',
              wr: '100%',
            },
            {
              name: 'Bonus Damage',
              amount: ['80', '120', '160', '200', '240'],
              cr: '100%',
              wr: '',
            },
            {
              name: 'Bonus Range',
              amount: ['0', '0', '0', '0', '0'],
              cr: '',
              wr: '',
            },
            {
              name: 'Stun Duration',
              amount: ['1s', '1s', '1s', '1s', '1s'],
              cr: '',
              wr: '',
            },
            {
              name: 'Charge Time',
              amount: ['1.6s', '1.6s', '1.6s', '1.6s', '1.2s'],
              cr: '',
              wr: '',
            },
            {
              name: 'Duration',
              amount: ['6s', '6s', '6s', '6s', '6s'],
              cr: '',
              wr: '',
            },
        ],
      },
      {
        name: 'OVERWHELM',
        type: 'B ABILITY',
        image: 'Yates-B',
        text: [
          'Yates gathers energy for 1.5s before releasing a shockwave around himself, stunning affected enemies.',
        ],
        video: 'Yates-B',
        stats: [
            {
              name: 'Cooldown',
              amount: ['10s', '9.5s', '9s', '8.5s', '8s'],
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
              amount: ['140', '190', '240', '290', '390'],
              cr: '175%',
              wr: '140%',
            },
            {
              name: 'Range',
              amount: ['5.5', '5.5', '5.5', '5.5', '7.5'],
              cr: '',
              wr: '',
            },
            {
              name: 'Bonus Move Speed Duration',
              amount: ['3s', '3s', '3s', '3s', '3s'],
              cr: '',
              wr: '',
            },
            {
              name: 'Bonus Attack Speed',
              amount: ['40%', '40%', '40%', '40%', '40%'],
              cr: '',
              wr: '',
            },
            {
              name: 'Bonus Move Speed',
              amount: ['1', '1', '1', '1', '1'],
              cr: '',
              wr: '',
            },
            {
              name: 'Duration',
              amount: ['6s', '6s', '6s', '6s', '6s'],
              cr: '',
              wr: '',
            },
        ],
      },
      {
        name: 'IRON MANDATE',
        type: 'ULTIMATE',
        image: 'Yates-C',
        text: [
          'Yates leaps to the chosen location, dealing damage and slowing enemies while granting allies a barrier.',
          'Overwhelm will not disperse until Yates lands.',
          'Note: This is a global ability which means it can be casted anywhere in the map',
        ],
        video: 'Yates-C',
        stats: [
            {
              name: 'Cooldown',
              amount: ['25s', '20s', '15s'],
              cr: '',
              wr: '',
            },
            {
              name: 'Energy Cost',
              amount: ['50', '60', '70'],
              cr: '',
              wr: '',
            },
            {
              name: 'Damage',
              amount: ['300', '450', '600'],
              cr: '150%',
              wr: '',
            },
            {
              name: 'Trap Limit',
              amount: ['1', '1', '1'],
              cr: '',
              wr: '',
            },
            {
              name: 'Root Duration',
              amount: ['1.6s', '1.8s', '2s'],
              cr: '',
              wr: '',
            },
            {
              name: 'Bonus Attack Speed',
              amount: ['40%', '40%', '40%', '40%', '40%'],
              cr: '',
              wr: '',
            },
            {
              name: 'Bonus Move Speed',
              amount: ['1', '1', '1', '1', '1'],
              cr: '',
              wr: '',
            },
            {
              name: 'Duration',
              amount: ['6s', '6s', '6s', '6s', '6s'],
              cr: '',
              wr: '',
            },
        ],
      },
    ],
    talents: [
      {
        name: 'Extended Hooks',
        type: 'Rare',
        color: '#6393F9',
        text: [
          'Wolf’s May (A) has increased range.',
          '• Cooldown 110% (-2%)',
          '• Damage 75% (+5%)',
          '• Bonus Range 2.5 (+0.4)',
        ],
      },
      {
        name: 'Whiplash',
        type: 'Epic',
        color: '#7A02EA',
        text: [
          'Devastation Flail (Perk) third hit deals greatly increased damage.',
          '• Trap Limit 3',
          '• Damage 120%',
          '• Passive Attack Speed +0%',
          '• Bonus Range 6',
        ],
        image: '',
      },
      {
        name: 'Rapid Response',
        type: 'Legendary',
        color: '#FF9000',
        text: [
          'Iron Mandate (Ult) completes much more quickly.',
          '• Cooldown 60%',
          '• Damage 120%',
          '• Barrier 140%',
        ],
        image: '',
      },
    ],
    skins: [
      {
        name: 'Crimson Wolf Yates',
        color: '#6393F9',
        type: 'Rare',
        price: '1200',
        image: 'Yates_CrimsonWolf',
      },
    ],
  },
  //Ylva
  {
    name: 'Ylva',
    type: ['JUNGLE', 'ASSASSIN'], role: ['JUNGLE'],
    description: 'A huntress that stalks her prey and lays traps for them.',
    spotlight: 'K6kHZW3Vq2g',
    stats: [
      { name: 'HEALTH', value: '703 - 2107', color: '#4eec8b' },
      { name: 'HEALTH REGEN', value: '(+)', color: '#4eec8b' },
      { name: 'ENERGY', value: '203 - 610', color: '#5bbcff' },
      { name: 'ENERGY REGEN', value: '(+)', color: '#5bbcff' },
      { name: 'WEAPON DAMAGE', value: '70 - 125', color: '#f48596' },
      { name: 'ATTACK SPEED', value: '100% - 136.3%', color: '#f48596' },
      { name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
      { name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
      { name: 'ATTACK RANGE', value: '5.5', color: '#e19efb' },
      { name: 'MOVE SPEED', value: '3.6', color: '#e19efb' },
    ],
    skills: [
      {
        name: 'Hunter’s Sense',
        type: 'Perk',
        image: 'Ylva-P',
        text: [
          'Ylva can detect the location and movement direction of enemy heroes through walls and brush, as long as they are moving and within her vision range.',
        ],
        video: 'Ylva-P',
        stats: [],
      },
      {
        name: 'Charge Shot',
        type: 'A ABILITY',
        image: 'Ylva-A',
        text: [
          'Ylva charges her weapon, causing her next basic attack to deal bonus damage based on the time spent charging. After 1.6s it reaches full charge the attack will also stun for 1s. While active, Ylva is slowed by 30%. Reactivate to cancel. Tt is canceled automatically after 6s',
          '• Overdrive: At max rank, the time it takes to reach full charge is reduced.',
        ],
        video: 'Ylva-A',
        stats: [
          {
            name: 'Cooldown',
            amount: ['8s', '7.5s', '7s', '6.5s', '6s'],
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
            amount: ['0', '0', '0', '0', '0'],
            cr: '',
            wr: '100%',
          },
          {
            name: 'Bonus Damage',
            amount: ['80', '120', '160', '200', '240'],
            cr: '100%',
            wr: '',
          },
          {
            name: 'Bonus Range',
            amount: ['0', '0', '0', '0', '0'],
            cr: '',
            wr: '',
          },
          {
            name: 'Stun Duration',
            amount: ['1s', '1s', '1s', '1s', '1s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Charge Time',
            amount: ['1.6s', '1.6s', '1.6s', '1.6s', '1.2s'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        name: 'Crimson Fang',
        type: 'B ABILITY',
        image: 'Ylva-B',
        text: [
          'Ylva lunges at her target to deliver a powerful strike that deals 75% more damage to immobilized targets. She then gains additional move and attack speed for 3s',
          '• Overdrive: At max rank, lunge range is increased.',
        ],
        video: 'Ylva-B',
        stats: [
          {
            name: 'Cooldown',
            amount: ['10s', '9.5s', '9s', '8.5s', '8s'],
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
            amount: ['140', '190', '240', '290', '390'],
            cr: '175%',
            wr: '140%',
          },
          {
            name: 'Range',
            amount: ['5.5', '5.5', '5.5', '5.5', '7.5'],
            cr: '',
            wr: '',
          },
          {
            name: 'Bonus Move Speed Duration',
            amount: ['3s', '3s', '3s', '3s', '3s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Bonus Attack Speed',
            amount: ['40%', '45%', '50%', '55%', '60%'],
            cr: '',
            wr: '',
          },
          {
            name: 'Bonus Move Speed',
            amount: ['1.5', '1.5', '1.5', '1.5', '2'],
            cr: '',
            wr: '',
          },
        ],
      },
      {
        name: 'VERSE OF JUDGEMENT',
        type: 'ULTIMATE',
        image: 'Ylva-C',
        text: [
          'Ylva places a mine that arms and stealths after 2s. When an enemy hero touches it, it will explode after 0.7s, causing all enemies within range of 6 to take damage and become rooted. Only 1 trap can exist at once.',
          '• Traps expire after a minute. Basic attacks reduce their remaining duration.',
        ],
        video: 'Ylva-C',
        stats: [
          {
            name: 'Cooldown',
            amount: ['25s', '20s', '15s'],
            cr: '',
            wr: '',
          },
          {
            name: 'Energy Cost',
            amount: ['50', '60', '70'],
            cr: '',
            wr: '',
          },
          {
            name: 'Damage',
            amount: ['300', '450', '600'],
            cr: '150%',
            wr: '',
          },
          {
            name: 'Trap Limit',
            amount: ['1', '1', '1'],
            cr: '',
            wr: '',
          },
          {
            name: 'Root Duration',
            amount: ['1.6s', '1.8s', '2s'],
            cr: '',
            wr: '',
          },
        ],
      },
    ],
    talents: [
      {
        name: 'SWIFT SHOT',
        type: 'Rare',
        color: '#6393F9',
        text: [
          'Charge Shot (A) reaches full charge faster.',
          '• Charge Time 80% (-3%)',
          '• Cooldown 100% (-2%)',
          '• Damage 100% (+2%)',
        ],
      },
      {
        name: 'MULTY MINE',
        type: 'Epic',
        color: '#7A02EA',
        text: [
          'Ylva may place up to 3 Blinding Mines (Ult).',
          '• Trap Limit 3',
          '• Cooldown 80% (-3%)',
          '• Damage 75% (-5%)',
          '• Bonus Range 6',
        ],
        image: '',
      },
      {
        name: 'SHATTERED FANG',
        type: 'Legendary',
        color: '#FF9000',
        text: [
          'Ylva places a Blinding Mine (Ult) at her feet after using Crimson Fang (B). ',
          '• Cooldown 90% (-4%)',
          '• Damage 100% (+3%)',
        ],
        image: '',
      },
    ],
    skins: [],
  },
]
