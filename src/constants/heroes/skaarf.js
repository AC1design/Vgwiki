export default {
	name: 'Skaarf',
	type: ['LANE', 'MAGE'],
	description: 'Spits long-range fireballs and incinerates entire teams.',
	spotlight: 'AlXyClywtNQ',
	stats: [
		{ name: 'HEALTH', value: '638 - 2112', color: '#4eec8b' },
		{ name: 'HEALTH REGEN', value: '3.55 - 7.4', color: '#4eec8b' },
		{ name: 'ENERGY', value: '200 - 464', color: '#5bbcff' },
		{ name: 'ENERGY REGEN', value: '1.33 - 3.09', color: '#5bbcff' },
		{ name: 'WEAPON DAMAGE', value: '80 - 154', color: '#f48596' },
		{ name: 'ATTACK SPEED', value: '100% - 122%', color: '#f48596' },
		{ name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
		{ name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
		{ name: 'ATTACK RANGE', value: '5.5', color: '#e19efb' },
		{ name: 'MOVE SPEED', value: '3.4', color: '#e19efb' },
	],
	model: [{ image: 'Skaarfblurred' }, { tmodel: 'Skaarf' }],
	skills: [
		{
			name: 'FAN THE FLAMES',
			type: 'Perk',
			image: 'Skaarf-P',
			text: [
				"Skaarf's abilities burn targets and his basic attacks deal bonus crystal damage to burning targets.",
				'Burn: 12-34 (level 1-12) (+15% Crystal Power) damage per second for 4s.',
				"Basic attacks: 2.5% of the target's max health as crystal damage.",
				'• Deals reduced damage to Kraken and structures.',
			],
			video:
				'https://www.vainglorygame.com/wp-content/uploads/2015/05/Skaarf-P-Fan-the-Flames.mp4',
		},
		{
			name: 'SPITFIRE',
			type: 'A ABILITY',
			image: 'Skaarf-A',
			text: [
				'Skaarf spits a fireball that collides with the first hero, structure or boss monster it hits.',
				'• The fireball damages and passes through smaller minions.',
				'• Each time it passes through a unit, its damate is reduced to 85% of before.',
				'• Deals 50% less damage damage to minions.',
			],
			video:
				'https://www.vainglorygame.com/wp-content/uploads/2015/05/Skaarf-A-Spitfire.mp4',
			stats: [
				{
					name: 'Cooldown',
					amount: ['6s', '5.5s', '5s', '4.5s', '4s'],
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
					amount: ['75', '125', '175', '225', '275'],
					cr: '90%',
					wr: '',
				},
			],
		},
		{
			name: 'GOOP',
			type: 'B ABILITY',
			image: 'Skaarf-B',
			text: [
				"Skaarf hurls a goop onto the target location. Enemies walking through the sticky substance are slowed. Any of Skaarf's flames will ignite the puddle, dealing burst damage and burning enemies over time.",
				'• A flaming puddle does not slow enemies as much as a goop puddle.',
				'• Deals half damage to minions and Kraken.',
			],
			video:
				'https://www.vainglorygame.com/wp-content/uploads/2015/05/Skaarf-B-Goop.mp4',
			stats: [
				{
					name: 'Cooldown',
					amount: ['9s', '8.5s', '8s', '7.5s', '6s'],
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
					name: 'Damage',
					amount: ['60', '105', '150', '195', '240'],
					cr: '70%',
					wr: '',
				},
				{
					name: 'Damage/sec',
					amount: ['40', '70', '100', '130', '160'],
					cr: '50%',
					wr: '',
				},
				{
					name: 'Duration',
					amount: ['8s', '8s', '8s', '8s', '10s'],
					cr: '',
					wr: '',
				},
				{
					name: 'Duration on Fire',
					amount: ['5s', '5s', '5s', '5s', '7s'],
					cr: '',
					wr: '',
				},
			],
		},
		{
			name: 'DRAGON BREATH',
			type: 'ULTIMATE',
			image: 'Skaarf-C',
			text: [
				'Skaarf inhales for 1.5s, then exhales a huge flames for 3s. Skaarf may move freely while spewing fire.',
				'• Skaarf gains a quick burst of move speed when exhaling.',
				'• While inhaling or exhaling, enemies moving against the current are slowed while allies moving with it are sped up.',
				'• Skaarf temporarily gains fortified health while channeling.',
				'• Deals 50% damage to non-heroes.',
			],
			video:
				'https://www.vainglorygame.com/wp-content/uploads/2015/05/Skaarf-C-Dragons-Breath.mp4',
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
					name: 'Damage',
					amount: ['400', '600', '800'],
					cr: '150%',
					wr: '',
				},
			],
		},
	],
	talents: [
		{
			name: 'Splitfire',
			type: 'Rare',
			color: '#6393F9',
			text: [
				'Spitfire (A) shoots three fireballs in a cone.',
				'• Damage 60% (+2%)',
			],
		},
		{
			name: 'Flash Fire',
			type: 'Epic',
			color: '#7A02EA',
			text: [
				'Dragon Breath (Ult) has a quicker start but shorter duration.',
				'• Cooldown 60% (-3%)',
				'• Damage 110% (+10%)',
			],
		},
		{
			name: 'Flaming Sludge',
			type: 'Legendary',
			color: '#FF9000',
			text: [
				'Spitfire (A) creates a Goop (B) pool when it expires.',
				'• Spitfire Damage 30% (+5%)',
				'• Burning Goop Damage 60% (+10%)',
				'• Range 9',
			],
		},
	],
	skins: [
		{
			name: 'Water Dragon Skaarf',
			color: '#6393F9',
			type: 'Rare',
			image: 'Skaarf_Water_Dragon',
		},
		{
			name: 'Cloud Dragon Skaarf',
			color: '#7A02EA',
			type: 'Epic',
			image: 'Skaarf_Cloud_Dragon',
		},
		{
			name: 'Ice Dragon Skaarf',
			color: '#FF9000',
			type: 'Legendary',
			image: 'Skaarf_Ice_Dragon',
		},
		{
			name: 'Rainbow Skaarf',
			color: '#FF9000',
			type: 'Legendary',
			image: 'Skaarf_Rainbow_White',
		},
		{
			name: 'Rainbow Tabby Skaarf',
			color: 'red',
			type: 'Special Edition',
			image: 'Skaarf_Rainbow_Tabby',
		},
		{
			name: 'Rainbow Bengal Skaarf',
			color: 'red',
			type: 'Special Edition',
			image: 'Skaarf_Rainbow_Bengal',
		},
		{
			name: 'Green Sparkler Skaarf',
			color: 'red',
			type: 'Special Edition',
			image: 'Skaarf_Sparkler_Green_SE',
		},
		{
			name: 'Purple Sparkler Skaarf',
			color: 'red',
			type: 'Special Edition',
			image: 'Skaarf_Sparkler_Purple_SE',
		},
		{
			name: 'Blue Sparkler Skaarf',
			color: 'red',
			type: 'Special Edition',
			image: 'Skaarf_Sparkler_Blue_SE',
		},
		{
			name: 'Red Sparkler Skaarf',
			color: 'red',
			type: 'Special Edition',
			image: 'Skaarf_Sparkler_Red_SE',
		},
		{
			name: 'Gold Sparkler Skaarf',
			color: 'red',
			type: 'Special Edition',
			image: 'Skaarf_Sparkler_Gold_SE',
		},
	],
};