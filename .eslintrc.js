module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},
		sourceType: 'module',
	},
	plugins: [
		'react'
	],
	rules: {
		'indent': [ 'error', 'tab', { SwitchCase: 1 } ],
		'quotes': [ 'error', 'single' ],
		'semi': [ 'error', 'always' ],
		'object-curly-spacing': [ 'error', 'always' ],
		// 'eol-last': [ 'warn', 'always' ],
	},
}