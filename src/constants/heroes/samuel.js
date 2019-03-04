export default {
	name: 'Samuel',
	type: ['LANE, MAGE'],
	role: ['LANE'],
	description: 'Dark zone-control mage who can put enemies to sleep.',
	spotlight: 'S01AKcC0TR0',
	stats: [
		{ name: 'HEALTH', value: '652 - 2040', color: '#4eec8b' },
		{ name: 'HEALTH REGEN', value: '4.01 - 7.42', color: '#4eec8b' },
		{ name: 'ENERGY', value: '290 - 620', color: '#5bbcff' },
		{ name: 'ENERGY REGEN', value: '2.15 - 7.1', color: '#5bbcff' },
		{ name: 'WEAPON DAMAGE', value: '78 - 148', color: '#f48596' },
		{ name: 'ATTACK SPEED', value: '100% - 129.7%', color: '#f48596' },
		{ name: 'ARMOR', value: '25 - 75', color: '#f6ee71' },
		{ name: 'SHIELD', value: '20 - 55', color: '#f6ee71' },
		{ name: 'ATTACK RANGE', value: '6.3', color: '#e19efb' },
		{ name: 'MOVE SPEED', value: '3.3', color: '#e19efb' },
	],
	model: [{ image: 'Samuelblurred' }, { tmodel: 'Samuel' }],
	skills: [
		{
			name: 'CORRUPTED GENIUS',
			type: 'Perk',
			image: 'Samuel-P',
			text: [
				'Every 6s, Samuels next basic attack fires a bolt of dark power that deals bonus crystal damage and draws health & energy back to Samuel.',
				'• Crystal Damage: 50-60 (level 1-12).',
				'• Healing: 20-200 (level 1-12).',
				'• Recharge: 30-200 (level 1-12) energy.',
				'• The restorative powers are only 25% as effective against non-heroes.',
			],
		},
		{
			name: 'MALICE & VERDICT',
			type: 'A ABILITY',
			image: 'Samuel-A',
			text: [
				'Samuel fires two bolts from his wands at a target location, impacting the first enemy hit. Samuel can move between the shots.',
				'If Samuel is standing inside the energy field from Drifting Dark, these bolts move faster, travel farther and deal additional area damage. In addition, the cooldown is significantly reduced.',
				'• Empowered shots deal 50% less damage to minions.',
			],
		},
		{
			name: 'DRIFTING DARK',
			type: 'B ABILITY',
			image: 'Samuel-B',
			text: [
				'Samuel creates a large field of darkness that slowly drifts forward, damaging enemies who stand inside it. If Samuel also stands inside, Malice & Verdict is greatly empowered and he heals for a small amount for each affected target.',
				'• The field will disappear if Samuel moves more than 16 meters away from it.',
				'• Deals 50% less damage to minions.',
			],
		},
		{
			name: 'OBLIVION',
			type: 'ULTIMATE',
			image: 'Samuel-C',
			text: [
				'After a short delay, Samuel summons a phantasm at the target location, which puts nearby enemies to sleep. Enemies inflicted are unable to move or act.',
				'• Dealing direct damage to a sleeping enemy with an attack or ability will wake them up.',
			],
		},
	],
	talents: [
		{
			name: 'Power Siphon',
			type: 'Rare',
			color: '#6393F9',
			text: [
				'Corrupted Genius (Perk) occurs more frequently.',
				'• Heal 150% (+10%)',
				'• Charge Time 2s',
			],
			image: 'Samuel_Rare',
		},
		{
			name: 'Unwaking Nightmare',
			type: 'Epic',
			color: '#7A02EA',
			text: [
				'Enemies put to sleep by Oblivion (Ult) will not wake up when taking damage.',
				'• Cooldown 70% (-2.5%)',
				'• Sleep Duration 2s (+0.1s)',
			],
			image: 'Samuel_Epic',
		},
		{
			name: 'Viscous Darkness',
			type: 'Legendary',
			color: '#FF9000',
			text: [
				'Drifting Dark (B) moves slower and slows enemies caught within.',
				'• Heal 150%',
				'• Damage 150%',
				'• Duration 6s',
				'• Slow Strength 50%',
			],
			image: 'Samuel_Legendary',
		},
	],
	skins: [
		{
			color: '#6393F9',
			name: 'Apprentice Samuel',
			type: 'Rare',
			image: 'Samuel_Apprentice',
		},
		{
			color: '#7A02EA',
			name: 'Evolution Samuel',
			type: 'Epic',
			image: 'Samuel_Evolution',
		},
	],
};