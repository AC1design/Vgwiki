export default {
	name: 'Vox',
	type: ['LANE', 'SNIPER'],
	role: ['LANE'],
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
	model: [{ image: 'Voxblurred' }, { tmodel: 'Vox' }],
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
			video: 'https://www.vainglorygame.com/wp-content/uploads/2015/05/Vox-P-Julias-Song.mp4',
			stats: [],
		},
		{
			name: 'SONIC ZOOM',
			type: 'A ABILITY',
			image: 'Vox-A',
			text: [
				'Vox dashes in the targeted direction, throwing two basic attacks to the nearest enemy marked by Resonance (prioritizing heroes).',
			],
			video: 'https://www.vainglorygame.com/wp-content/uploads/2015/05/Vox-A-Sonic-Zoom.mp4',
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
			video: 'https://www.vainglorygame.com/wp-content/uploads/2015/05/Vox-B-Pulse.mp4',
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
			video: 'https://www.vainglorygame.com/wp-content/uploads/2015/05/Vox-C-Wait-for-It....mp4',
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
};