module.exports = (context) => [
	{
		type: 'confirm',
		name: 'service',
		message: 'Do you want to configure your service?',
		default: true
	},
	{
		when: answers => answers.service,
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
	},
	{
		when: answers => answers.service,
		type: 'checkbox',
		name: 'methods',
		message: 'Which methods do you need in your service?',
		choices: [
			{
				name: 'Create',
				value: 'create'
			},
			{
				name: 'Read',
				value: 'read'
			},
			{
				name: 'Update',
				value: 'update'
			},
			{
				name: 'Delete',
				value: 'delete'
			}
		],
		default: ['read']
	}
];