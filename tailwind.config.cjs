const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			serif: ['Montserrat', ...defaultTheme.fontFamily.serif],
			cursive: ['Great Vibes']
		},
		fontSize: {
			...defaultTheme.fontSize,
			'6xl': [
				'10rem',
				{
					letterSpacing: '0.3px',
					lineHeight: '10rem'
				}
			],
			'7xl': [
				'18rem',
				{
					letterSpacing: '0.3px',
					lineHeight: '15rem'
				}
			]
		},
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
