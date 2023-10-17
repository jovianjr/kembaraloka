// FIXME automated

// import resolveConfig from 'tailwindcss/resolveConfig';
// import tailwindConfig from '../../../tailwind.config';

// const config = resolveConfig(tailwindConfig);
// const breakpoints = config.theme.screens;

// const removePx = breakpoints => {
// 	let BREAKPOINTS = {};

// 	// remove px in '...px'
// 	for (let b in breakpoints) {
// 		BREAKPOINTS[b] = Number(breakpoints[b].slice(0, -2));
// 	}

// 	return BREAKPOINTS;
// };

// export const BREAKPOINTS = removePx(breakpoints);

export const BREAKPOINTS = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	'2xl': 1536
};
