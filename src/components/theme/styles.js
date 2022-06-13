/* eslint-disable quotes */
import { css } from 'styled-components';
import { transparentize } from 'polished';

export const space = [0, 4, 8, 16, 32, 64];

export const colors = {
  primary: '#0C4B5B',
  secondary: '#51B3A7',
  accent: '#F24F28',
  black: '#252728',
  tertiary: '#33B9E3',
  error: '#EB5757',
  success: '#27AE60',
  shades: {
    primary: ['#0C4B5B', '#126F87', '#1895B4', '#1EBAE1'],
    secondary: ['#51B3A7', '#75C3B9', '#98D2CB', '#BCE2DD'],
    accent: ['#F24F28', '#F57557', '#F89D87', '#FBC4B7'],
    tertiary: ['#33B9E3', '#46CBF4', '#59D7FF', '#88E2FF'],
  },
  gray: [
    '#3D4042',
    '#6E7477',
    '#A2A6A9',
    '#BDC0C2',
    '#D7D9DA',
    '#E4E6E7',
    '#F7F7F8',
    '#FFFFFF',
  ],
};

export const typography = {
  googleFont:
    'https://fonts.googleapis.com/css2?family=Sen:wght@400;700&display=swap',
  fontFamily: "'Sen', sans-serif",
  color: colors.gray[1],
  sizes: {
    base: 16,
  },
};

export const body = {
  fontSize: typography.sizes.base,
  fontFamily: typography.fontFamily,
  lineHeight: 1.6,
  color: colors.gray[0],
};

export const transition = {
  base: '.2s ease-in-out',
  all: 'all .2s ease-in-out',
};

export const zIndex = {
  navbar: 1000,
  sticky: 1010,
  menuNav: 1020,
  navbarDropdown: 990,
};

export const borderRadius = {
  small: 12,
  normal: 18,
  large: 24,
  xLarge: 28,
  xxLarge: 32,
  xxxLarge: 64,
};

export const radii = { ...borderRadius };

export const shadows = {
  primary: `0px 24px 32px ${transparentize(0.86, colors.primary)}`,
  secondary: `0px 24px 32px ${transparentize(0.86, colors.secondary)}`,
  accent: `0px 24px 32px ${transparentize(0.86, colors.accent)}`,
  black: `0px 24px 32px ${transparentize(0.86, colors.black)}`,
};

export const global = css`
  blockquote {
    footer {
      display: flex;
      align-items: center;

      &::before {
        display: block;
        width: 40px;
        height: 1px;
        margin-top: 2px;
        margin-right: 16px;
        content: '';
        background-color: currentColor;
      }
    }
  }
`;

export const breakpoints = ['450px', '768px', '1170px', '1440px'];
// eslint-disable-next-line prefer-destructuring
breakpoints.sm = breakpoints[0];
// eslint-disable-next-line prefer-destructuring
breakpoints.md = breakpoints[1];
// eslint-disable-next-line prefer-destructuring
breakpoints.lg = breakpoints[2];
// eslint-disable-next-line prefer-destructuring
breakpoints.xl = breakpoints[3];
