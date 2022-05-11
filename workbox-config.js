module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{jsx,js,css}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};