import { DefaultTheme } from 'styled-components';

const themeConfig: DefaultTheme = {
  colors: {
    primaryUp: '#ff7b4d',
    primaryPure: '#ff6833',
    primaryDown: '#e55d2d',
    primaryDeep: '#cc5328',

    complementaryUp: '#5b1e63',
    complementaryPure: '#491850',
    complementaryDown: '#37123c',
    complementaryDeep: '#250c28',

    highlightUp: '#88d9e3',
    highlightPure: '#73d2de',
    highlightDown: '#5ecbd9',
    highlightDeep: '#4ac5d4',

    lightUp: '#F7F8FB',
    lightPure: '#FFFFFF',
    lightDown: '#E5E7EE',
    lightDeep: '#CDD2DC',

    darkUp: '#B8BAC3',
    darkPure: '#19180a',
    darkDown: '#707587',
    darkDeep: '#414760',

    statusError: '#FF3666',
    statusSuccess: '#00CC99',
    statusWarning: '#FFC857',

    transparent: 'transparent',
  },
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '40px',
    none: '0px',
  },
  font: {
    sizes: {
      text: '16px',
      title: '40px',
      headline: '64px',
      subtitle: '32px',
    },
  },
  border: {
    radius: {
      full: '80px',
      round: '16px',
      shaped: '8px',
      none: '0px',
    },
  },
  shadow: {
    none: '',
    light: '0px 0px 10px rgba(112, 112, 112, 0.16)',
    medium: '0px 0px 10px rgba(112, 112, 112, 0.32)',
    intense: '0px 0px 10px rgba(112, 112, 112, 0.48)',
  }
};

export default themeConfig;