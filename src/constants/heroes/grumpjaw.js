export default {
	name: 'Grumpjaw',
	type: ['JUNGLE, WARRIOR'],
	role: ['JUNGLE'],
	description: 'A hungry beast who can swallow a hero whole.',
	spotlight: 'kwm2U7-P-uc',
	stats: [
		{ name: 'HEALTH', value: '783 - 2592', color: '#4eec8b' },
		{ name: 'HEALTH REGEN', value: '3.39 - 3.39', color: '#4eec8b' },
		{ name: 'ENERGY', value: '234 - 465', color: '#5bbcff' },
		{ name: 'ENERGY REGEN', value: '1.47 - 2.9', color: '#5bbcff' },
		{ name: 'WEAPON DAMAGE', value: '74 - 158', color: '#f48596' },
		{ name: 'ATTACK SPEED', value: '100% - 113.2%', color: '#f48596' },
		{ name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
		{ name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
		{ name: 'ATTACK RANGE', value: '2.6', color: '#e19efb' },
		{ name: 'MOVE SPEED', value: '3.6', color: '#e19efb' },
	],
	model: [{ image: 'Grumpjawblurred' }, { tmodel: 'Grumpjaw' }],
	skills: [
		{
			name: 'LIVING ARMOR',
			type: 'Perk',
			image: 'Grumpjaw-P',
			text: [
				'Each stack of Living Armor reduces incoming damage by 7%.',
				'• Grumpjaw gains a stack every 3s and every time he basic attacks.',
				'• While under attack, he loses a stack every 1s.',
				'• Max 5 stacks.',
			],
		},
		{
			name: 'GRUMPY',
			type: 'A ABILITY',
			image: 'Grumpjaw-A',
			text: [
				'Grumpjaw charges forward and slashes the area in front of him, damaging and slowing enemies he hits. He also hits things at his ending location.',
				'• Deals bonus damage for each stack of Living Armor Grumpjaw has.',
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
			name: 'HANGRY',
			type: 'B ABILITY',
			image: 'Grumpjaw-B',
			text: [
				'Grumpjaw leaps toward his target and attacks it. Afterward, he gains bonus weapon damage and attack speed for several seconds.',
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
			name: 'STUFFED',
			type: 'ULTIMATE',
			image: 'Grumpjaw-C',
			text: [
				"Grumpjaw lunges forward, devouring the first enemy hero in his path. While inside Grumpjaw's belly, enemies cannot move, act or see. After 3s, Grumpjaw will spit the enemy out in front of him.",
				'• Reactivate this ability to spit the enemy out early.',
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
			name: 'Rampage',
			type: 'Rare',
			color: '#6393F9',
			text: [
				'Grumpy (A) deals a portion of its damage to all enemies along its path.',
				'• Swipe to Trample Dmg 90% (+2.5%)',
			],
			image: 'Grumpjaw_Rare',
		},
		{
			name: 'Reconstitution',
			type: 'Epic',
			color: '#7A02EA',
			text: [
				'Hangry (B) grants Grumpjaw life steal.',
				'• Cooldown 95% (-2.5%)',
				'• Bonus Lifesteal +25% (+4%)',
			],
			image: 'Grumpjaw_Epic',
		},
		{
			name: 'Big Appetite',
			type: 'Legendary',
			color: '#FF9000',
			text: [
				'Stuffed (Ult) keeps enemies inside for much longer and eats all heros in Grumpjaw’s path.',
				'• Cooldown 40% (-5%)',
				'• Bonus Duration 1s (+0.4s)',
			],
			image: 'Grumpjaw_Legendary',
		},
	],
	skins: [
		{
			color: '#6393F9',
			name: 'Lapdog Grumpjaw',
			type: 'Rare',
			image: 'Grumpjaw_Lapdog_R',
		},
		{
			color: '#7A02EA',
			name: 'Carnivore Grumpjaw',
			type: 'Epic',
			image: 'Grumpjaw_Carnivore',
		},
	],
};