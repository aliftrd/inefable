module.exports = {
	apps: [
		{
			name: 'website-portofolio',
			exec_mode: 'cluster',
			instances: 1,
			script: './build/index.js',
			interpreter: 'bun'
		}
	]
};
