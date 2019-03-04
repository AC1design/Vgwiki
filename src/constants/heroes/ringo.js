export default {
	name: 'Ringo',
	type: ['LANE', 'SNIPER'],
	role: ['LANE'],
	description: 'Fast-moving, fast-shooting gunslinger with an epic fireball.',
	spotlight: 'QKA4GSSrRRU',
	stats: [
		{ name: 'HEALTH', value: '703 - 2107', color: '#4eec8b' },
		{ name: 'HEALTH REGEN', value: '2.15 - 4.68', color: '#4eec8b' },
		{ name: 'ENERGY', value: '163 - 416', color: '#5bbcff' },
		{ name: 'ENERGY REGEN', value: '1.2 - 2.85', color: '#5bbcff' },
		{ name: 'WEAPON DAMAGE', value: '71 - 130', color: '#f48596' },
		{ name: 'ATTACK SPEED', value: '100% - 136.3%', color: '#f48596' },
		{ name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
		{ name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
		{ name: 'ATTACK RANGE', value: '6.2', color: '#e19efb' },
		{ name: 'MOVE SPEED', value: '3.2', color: '#e19efb' },
	],
	model: [{ image: 'Ringoblurred' }, { tmodel: 'Ringo' }],
	skills: [
		{
			video:
				'https://www.vainglorygame.com/wp-content/uploads/2015/05/Ringo-P-Double-Down.mp4',
			name: 'DOUBLE DOWN',
			type: 'Perk',
			image: 'Ringo-P',
			text: [
				"Ringo's next basic attack after killing anything will be a critical strike.",
			],
		},
		{
			video:
				'https://www.vainglorygame.com/wp-content/uploads/2015/05/Ringo-A-Achilles-Shot.mp4',
			name: 'ACHILLES SHOT',
			type: 'A ABILITY',
			image: 'Ringo-A',
			text: [
				"Ringo fires a trick shot at his target's heel (or whatever lower extremity exists), slowing the target and dealing damage.",
			],
		},
		{
			video:
				'https://www.vainglorygame.com/wp-content/uploads/2015/05/Ringo-B-Twirling-Silver.mp4',
			name: 'TWIRLING SILVER',
			type: 'B ABILITY',
			image: 'Ringo-B',
			text: [
				'Ringo slings bullets at his target in a mad flurry, dramatically increasing his attack speed and move speed for a duration.',
				"• Activating this ability resets Ringo's basic-attack cooldown.",
			],
		},
		{
			video:
				'https://www.vainglorygame.com/wp-content/uploads/2015/05/Ringo-C-Hellfire-Brew.mp4',
			name: 'HELLFIRE BREW',
			type: 'ULTIMATE',
			image: 'Ringo-C',
			text: [
				'Ringo takes a long swig from his gourd, then spits out a scorching fireball at his target. The explosion deals splash damage on impact and sets the target on fire, burning it & nearby enemies for 7s.',
				'• The fire pierces all shield on impact.',
			],
		},
	],
	talents: [
		{
			name: 'Long Shot',
			type: 'Rare',
			color: '#6393F9',
			text: [
				'Achilles Shot (A) has 4 bonus range.',
				'• Damage 115% (+3%)',
				'• Cooldown 135% (-2%)',
			],
			image: 'Ringo_Rare',
		},
		{
			name: 'Bullet Split',
			type: 'Epic',
			color: '#7A02EA',
			text: [
				'Twirling Silver (B) causes Ringo’s basic attacks to fire a secondary shot at a nearby target.',
				'• Damage 87.5% (+2.5%)',
				'• Cooldown 90% (-3%)',
			],
			image: 'Ringo_Epic',
		},
		{
			name: 'Spiked Brew',
			type: 'Legendary',
			color: '#FF9000',
			text: [
				'Hellfire Brew (Ult) bounces to a nearby enemy hero upon impact.',
				'• Damage 70%',
				'• Cooldown 70%',
			],
			image: 'Ringo_Legendary',
		},
	],
	skins: [
		{
			color: '#6393F9',
			name: 'Shogun Nomad Ringo',
			type: 'Rare',
			image: 'Ringo_Shogun_Nomad',
		},
		{
			color: '#7A02EA',
			name: 'Shogun Wrath Ringo',
			type: 'Epic',
			image: 'Ringo_Shogun_Wrath',
		},
		{
			color: '#FF9000',
			name: 'Shogun Master Ringo',
			type: 'Legendary',
			image: 'Ringo_Shogun_Master',
		},
		{
			color: '#6393F9',
			name: 'Vaquero Ringo',
			type: 'Rare',
			image: 'Ringo_Vaquero',
		},
		{
			color: 'red',
			name: 'Bakuto Ringo',
			type: 'Special Edition',
			image: 'Ringo_Bakuto',
		},
	],
};
