'use strict'
const foregroundColor = '#e4f0fb'
const backgroundColor = '#1b1e28'
const red = '#d0679d'
const green = '#5DE4c7'
const yellow = '#fffac2'
const blue = '#ADD7FF'
const magenta = '#f087bd'
const cyan = '#91B4D5'

exports.decorateConfig = (config) =>
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: 'transparent',
    cursorColor: '#97979b',
    cursorAccentColor: backgroundColor,
    selectionColor: '#717cb425',
    colors: {
      black: backgroundColor,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white: '#f1f1f0',
      lightBlack: '#686868',
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: foregroundColor,
    },
    css: `
		/* Hide title when only one tab */
		.tabs_title {
			display: none !important;
		}
		.tab_tab.tab_active {
            background: #30334080;
		}
		/* Fade the title of inactive tabs and the content of inactive panes */
		.tab_text,
		.term_term {
			opacity: 0.6;
			will-change: opacity;
		}
		.tab_active .tab_text,
		.term_active .term_term {
			opacity: 1;
			transition: opacity 0.12s ease-in-out;
		}
		/* Allow custom css / overrides */
		${config.css}
	`,
  })
