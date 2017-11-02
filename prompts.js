module.exports = [
	{
		type: 'list',
		name: 'serviceLib',
		message: 'Which service lib do you want to use?',
		choices: [
			{
				name: 'VeamsHttp',
				value: 'veamsHttp'
			},
			{
				name: 'Axios',
				value: 'axios'
			}
		],
		default: 'veamsHttp'
	}
];