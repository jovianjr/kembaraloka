module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Metropolis'],
			deco: ['Gilligan Shutter']
		},
		colors: {
			inherit: 'inherit',
			transparent: 'transparent',
			current: 'currentColor',
			neutral: {
				50: '#F5F5F5',
				300: '#D5D5D7',
				400: '#B6B7BA',
				500: '#95969D',
				600: '#747680',
				700: '#565962',
				800: '#393A41',
				900: '#1D1D21'
			},
			'c-yellow': {
				50: '#FEEEC3',
				100: '#FDDE86',
				300: '#FCCD4A',
				500: '#FFC00E',
				700: '#C99403',
				900: '#8D6802'
			},
			'c-blue': {
				50: '#C5CBE8',
				100: '#99A4D6',
				300: '#6D7DC5',
				500: '#4254A6',
				700: '#344383',
				900: '#232D58'
			},
			'c-orange': {
				50: '#FCE5D9',
				100: '#F7BEA1',
				300: '#F39668',
				500: '#F06522',
				700: '#D05011',
				900: '#973A0C'
			},
			'c-green': {
				50: '#F1F6CB',
				100: '#E4EC98',
				300: '#D6E364',
				500: '#C9DA2A',
				700: '#9EAC20',
				900: '#6F7916'
			},
			'c-teal': {
				50: '#C2FBFF',
				100: '#9AF8FE',
				300: '#5DF3FE',
				500: '#01B8C6',
				700: '#01858E',
				900: '#004C51'
			},
			'c-purple': {
				50: '#EDBFED',
				100: '#D35FD3',
				300: '#C035C0',
				500: '#912891',
				700: '#601A60',
				900: '#300D30'
			},
			'c-red': {
				50: '#F4A4B4',
				100: '#F07F96',
				300: '#EA4869',
				500: '#D1193D',
				700: '#A41330',
				900: '#5B0B1B'
			},
			shades: {
				0: '#FFFFFF',
				100: '#000000'
			}
		},
		extend: {
			screens: {
				mdp: '1060px',
				emdp: { min: '1060px', max: '1535px' },
				'2exl': { min: '1536px', max: '1539px' },
				pxl: { min: '1540px', max: '1910px' },
				epxl: { min: '1910px', max: '2217px' },
				eepxl: { min: '2217px' }
			},
			fontSize: {
				h1: ['61.04px', '64px'],
				h2: ['48.84px', '52px'],
				h3: ['39.06px', '40px'],
				h4: ['31.25px', '32px'],
				h5: ['25px', '28px'],
				h6: ['20px', '24px'],
				'b-2xl': ['1.25rem', '1.875rem'],
				'b-xl': ['1.125rem', '1.6875rem'],
				'b-lg': ['1rem', '1.5rem'],
				'b-md': ['0.8rem', '1.2rem'],
				'b-sm': ['0.64rem', '0.96rem'],
				'd-xl': ['61.04px', '64.1px'],
				'd-lg': ['48.84px', '51px'],
				'd-md': ['39.06px', '41px'],
				'd-sm': ['31.25px', '33px']
			},
			dropShadow: {
				lv1: '0px 4px 14px rgba(0, 0, 0, 0.15)',
				lv2: '0px 6px 16px rgba(0, 0, 0, 0.15)',
				lv3: '0px 8px 18px rgba(0, 0, 0, 0.15)',
				lv4: '0px 10px 20px rgba(0, 0, 0, 0.15);',
				lv5: '0px 12px 22px rgba(0, 0, 0, 0.15);'
			},
			borderRadius: {
				'4xl': '2rem'
			},
			backgroundImage: {
				'beranda-hero': `url('${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/beranda/gsp-fix.webp')`,
				'beranda-selamat-datang': `url('${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/bg/bgselamatdatang.png')`,
				'beranda-palapedia': `url('${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/puzzle/bgsectionpalapedia.webp')`,
				'beranda-palapedia2': `url('${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/puzzle/bgpalapedianewbanget.png')`,
				'beranda-vmaps': `url('${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/puzzle/bgvmaps.png')`,
				'beranda-penutup': `url('${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/puzzle/bgsectionfaq.webp')`,
				'info-terkini': `url('${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/puzzle/BGPuzzleOrange.png')`,
				'puzzle-white': `url('${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/bg/puzzle-bg-white.webp')`,
				'placeholder-yellow': `url('${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/video-placeholder/corner-yellow.svg')`,
				'placeholder-blue': `url('${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/video-placeholder/corner-blue.svg')`,
				'kuis-kiprah': `url('${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/puzzle/bg-green-repeat.png')`
			}
		}
	},
	safelist: [
		{
			pattern:
				/(bg|text|border|ring|outline)-c-(yellow|blue|orange|green|teal|purple)-(50|100|300|500|700|900)/,
			variants: ['active', 'hover', 'disabled', 'focus']
		},
		{
			pattern: /(bg|text|border|ring|outline)-(shades)-(0|100)/,
			variants: ['active', 'hover', 'disabled', 'focus']
		}
	],
	plugins: [require('@tailwindcss/line-clamp')]
};
