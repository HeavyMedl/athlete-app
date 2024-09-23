/** @type {import('tailwindcss').Config} */

import {
  CdrBreakpointXs,
  CdrBreakpointSm,
  CdrBreakpointMd,
  CdrBreakpointLg,
} from '@rei/cdr-tokens';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,mts}'],
  theme: {
    extend: {},
    screens: {
      xs: `${CdrBreakpointXs}px`,
      sm: `${CdrBreakpointSm}px`,
      md: `${CdrBreakpointMd}px`,
      lg: `${CdrBreakpointLg}px`,
    },
  },
  plugins: [],
};
