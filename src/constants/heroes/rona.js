export default {
	name: 'Rona',
	type: ['JUNGLE, WARRIOR'],
	role: ['JUNGLE'],
	description: 'Durable berserker who excels in the thick of fights.',
	spotlight: 'EYIhMwdQoug',
	stats: [
		{ name: 'HEALTH', value: '778 - 2563', color: '#4eec8b' },
		{ name: 'HEALTH REGEN', value: ' - ', color: '#4eec8b' },
		{ name: 'ENERGY', value: ' - ', color: '#5bbcff' },
		{ name: 'ENERGY REGEN', value: ' - ', color: '#5bbcff' },
		{ name: 'WEAPON DAMAGE', value: '77 - 156', color: '#f48596' },
		{ name: 'ATTACK SPEED', value: '100% - 122%', color: '#f48596' },
		{ name: 'ARMOR', value: '30 - 85', color: '#f6ee71' },
		{ name: 'SHIELD', value: '20 - 60', color: '#f6ee71' },
		{ name: 'ATTACK RANGE', value: '1.8', color: '#e19efb' },
		{ name: 'MOVE SPEED', value: '3.5', color: '#e19efb' },
	],
	model: [{ image: 'Ronablurred' }, { tmodel: 'Rona' }],
	skills: [
		{
			video:
				'https://www.vainglorygame.com/wp-content/uploads/2015/08/P-Rona-Berserkers-Fury-Large.mp4',
			name: "BERSERKERS' FURY",
			type: 'Perk',
			image: 'Rona-P',
			text: [
				'Rona attacks faster than most heroes, but she deals 85% damage with each attack.',
				"• Rona's abilities use Bloodrage instead of energy, a unique resource that is generated from basic attacks, abilities, and taking damage from enemies.",
				'• Critical strikes and basic attacks against targets afflicted by Mortal Wounds will generate additional Bloodrage.',
				'This caps at 100 and decays when Rona has been out of combat for 5s.',
			],
		},
		{
			video:
				'https://www.vainglorygame.com/wp-content/uploads/2015/08/A-Rona-Into-the-Fray-Large.mp4',
			name: 'INTO THE FRAY',
			type: 'A ABILITY',
			image: 'Rona-A',
			text: [
				'Rona leaps into battle, gaining Bloodrage for each enemy hero she collides with. After a short delay, the ground ruptures for 3s, dealing damage and slowing enemies who pass over it by 40%.',
				'• Rona is additionally granted fortified health for each enemy hero struck by the rupture.',
				'• Deals 50% less damage to minions.',
			],
		},
		{
			video:
				'https://www.vainglorygame.com/wp-content/uploads/2015/08/B-Rona-Foesplitter-Large.mp4',
			name: 'FOESPLITTER',
			type: 'B ABILITY',
			image: 'Rona-B',
			text: [
				'A two-part axe attack that can catch up to - then brutalize - an unsuspecting target.',
				'First activation: Rona lunges at her target, landing an empowered basic attack and granting her increased move speed and Bloodrage.',
				'Second activation: Expend the bonus move speed and all of her Bloodrage to deal 1% bonus damage for each point consumed and apply Mortal Wounds to her target.She is them temporarily granted additional attack speed.',
				"Each of Rona's basic attacks reduce Foesplitter's cooldown by 1s.",
			],
		},
		{
			video:
				'https://www.vainglorygame.com/wp-content/uploads/2015/08/C-Rona-Red-Mist-Large.mp4',
			name: 'RED MIST',
			type: 'ULTIMATE',
			image: 'Rona-C',
			text: [
				'Rona drains her Bloodrage and spins in a whirlwind, dealing weapon damage to nearby enemies. While spinning, Rona moves slower and gains fortified health each second.',
				'• Can be cancelled at any time by reactivating it or using another ability.',
				'• Requires at least 25 Bloodrage to activate.',
				'• Deals 50% less damage to minions.',
			],
		},
	],
	talents: [
		{
			name: 'MOAR Rage',
			type: 'Rare',
			color: '#6393F9',
			text: [
				'Increases maximum Bloodrage. Rona passively gains weapon power.',
				'• Bonus Alt Energy 60 (+10)',
				'• Passive Weapon Power +5% (+1.5%)',
			],
			image: 'Rona_Rare',
		},
		{
			name: 'Heroic Brawler',
			type: 'Epic',
			color: '#7A02EA',
			text: [
				'Basic attacks reduce the cooldown of Into the Fray (A) by 10%. Rona passively gains attack speed.',
				'• Passive Attack Speed +25% (+5%)',
				'• Damage 50% (+7.5%)',
			],
			image: 'Rona_Epic',
		},
		{
			name: 'Fast Whirlwind',
			type: 'Legendary',
			color: '#FF9000',
			text: [
				'Red Mist (Ult) grants Rona 1.2s bonus move speed.',
				'• Damage 100%',
				'• Cooldown 125%',
			],
			image: 'Rona_Legendary',
		},
	],
	skins: [
		{
			color: '#6393F9',
			name: 'Fury Rona',
			type: 'Rare',
			image: 'Rona_Fury',
		},
		{
			color: '#7A02EA',
			name: 'Peacekeeper Rona',
			type: 'Epic',
			image: 'Rona_Peacekeeper',
		},
		{
			color: '#FF9000',
			name: 'Churnguard Rona',
			type: 'Legendary',
			image: 'Rona_Churnguard',
		},
		{
			color: '#FF9000',
			name: 'Red Rona',
			type: 'Legendary',
			image: 'Rona_Red',
		},
		{
			color: 'red',
			name: 'Killer Bunny Rona',
			type: 'Special Edition',
			image: 'Rona_Killer_Bunny_SE',
		},
		{
			color: '#FADA5E',
			name: 'Killer Bunny Rona',
			type: 'Limited Edition',
			image: 'Rona_Killer_Bunny_LE',
		},
	],
};