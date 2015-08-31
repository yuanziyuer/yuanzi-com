var deployTo = '/home/yuanzi-com';
module.exports = function (shipit) {
	require('shipit-deploy')(shipit);
	require('shipit-pm2')(shipit);
	require('shipit-npm')(shipit);
	var env = shipit.options.environment;
	if (env !== 'production') {
		deployTo = '/home/yuanzi/yuanzi-com';
	}

	shipit.initConfig({
		default: {
			workspace: '/home/ubuntu/yuanzi-com',
			repositoryUrl: 'git@github.com:yuanziyuer/yuanzi-com.git',
			branch: env !== 'production' ? 'develop' : 'master',
			ignores: ['.git', 'node_modules'],
			shallowClone: false,
			keepReleases: 1,
			npm: {
				remote: true,
				installFlags: ['--production']
			},
			pm2: {
				json: './app.json'
			}

		},
		development: {
			servers: 'root@101.251.204.42',
			deployTo: deployTo
		},
		production: {
			servers: {
				host: '101.251.204.43',
				user: 'root'
			},
			deployTo: deployTo
		}
	});

	shipit.on('deploy', function() {
		shipit.log('==================================shipit deploy started===============================');

	});

};
