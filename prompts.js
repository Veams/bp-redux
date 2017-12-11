module.exports = (context) => {
	return [
		{
			when: (answers) => answers.blueprints.indexOf('/services/bp.service.js.ejs') !== -1,
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
		},
		{
			when: answers => answers.service,
			type: 'input',
			name: 'serviceUrl',
			message: 'Which Api URL is the service going to call?',
			default: `http://localhost:3000/api/${context.options.name}`
		}
	];
};