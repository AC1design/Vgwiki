export default {
	name: 'Churnwalker',
	type: ['CAPTAIN', 'WARRIOR'],
	role: ['CAPTAIN'],
	description:
		'A disruptor who throws multiple skillshot hooks, chaining victims to him.',
	spotlight: 'kFb2bUxln4E',
	stats: [
		{ name: 'HEALTH', value: '863 - 2749', color: '#4eec8b' },
		{ name: 'HEALTH REGEN', value: '4.05 - 6.8', color: '#4eec8b' },
		{ name: 'ENERGY', value: '380 - 732', color: '#5bbcff' },
		{ name: 'ENERGY REGEN', value: '2.38 - 4.69', color: '#5bbcff' },
		{ name: 'WEAPON DAMAGE', value: '80 - 165', color: '#f48596' },
		{ name: 'ATTACK SPEED', value: '100% - 122%', color: '#f48596' },
		{ name: 'ARMOR', value: '35 - 100', color: '#f6ee71' },
		{ name: 'SHIELD', value: '25 - 75', color: '#f6ee71' },
		{ name: 'ATTACK RANGE', value: '1.7', color: '#e19efb' },
		{ name: 'MOVE SPEED', value: '3.2', color: '#e19efb' },
	],
	model: [{ image: 'Churnwalkerblurred' }, { tmodel: 'Churnwalker' }],
	skills: [
		{
			name: 'FUTILITY OF LIFE',
			type: 'Perk',
			image: 'Churnwalker-P',
			text: [
				'• Whenever chained victims take damage from any source, Churnwalker regenerates 20% of that damage as health.',
				'• Whenever any chained victim takes damage, 30% of that damage is conferred on all other chained victims.',
			],
		},
		{
			name: 'HOOK & CHAIN',
			type: 'A ABILITY',
			text: [
				'Churnwalker throws a skillshot hook that damages, briefly slows and chains victims to him.',
				'• Chained heroes take damage over time.',
				'• If a chained victim can get far enough away, the chain will break.',
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
			name: 'TORMENT',
			type: 'B ABILITY',
			image: 'Churnwalker-B',
			text: [
				'Torment yanks all chained victims toward Churnwalker a fixed distance, damaging them.',
				'• Overdrive: Yanks victims closer to Churnwalker.',
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
			name: 'TRESPASS',
			type: 'ULTIMATE',
			image: 'Churnwalker-C',
			text: [
				'Churnwalker channels churn power for a short time, then travels to the target location, stunning all chained victims and breaking all chains.',
				'• Churnwalker requires a chained target to cast this ability.',
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
			name: 'Churn Tank',
			type: 'Rare',
			color: '#6393F9',
			text: [
				'Futility of Life (Perk) has significantly increased healing but decreased damage share.',
				'• Heal 210% (+10%)',
				'• Damage 50% (+1%)',
			],
			image: 'Churnwalker_Rare',
		},
		{
			name: 'Cloud of Torment',
			type: 'Epic',
			color: '#7A02EA',
			text: [
				'Activating Torment (B) releases a powerful Churn Cloud that damages enemies over time, making Churnwalker a dangerous threat at close range. Cooldown increased.',
				'• Duration 3s (+ 0.25s)',
				'• Damage/Sec 50 (+40)',
				'• Radius 4',
				'• Cooldown 3s (-0.2s)',
			],
			image: 'Churnwalker_Epic',
		},
		{
			name: 'Grappling Hook',
			type: 'Legendary',
			color: '#FF9000',
			text: [
				'Churnwalker’s Hook & Chain (A) gains a grappling hook. This ability has dramatically increased range and can grapple to targets, pulling Churnwalker to the hooked location.',
				'• Bonus Range 20 (+5)',
				'• Range 2 (+0.2)',
			],
			image: 'Churnwalker_Legendary',
		},
	],
	skins: [
		{
			color: '#FF9000',
			name: 'Clownwalker',
			type: 'Legendary',
			image: 'Churnwalker_Clownwalker',
		},
	],
};
