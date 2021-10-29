const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			serif: ['Montserrat', ...defaultTheme.fontFamily.serif],
			cursive: ['Cursive']
		},
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
