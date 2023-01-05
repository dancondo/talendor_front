import 'styled-components';

declare interface ThemeConfig {
  colors: {
    // primary
    primaryUp: string;
    primaryPure: string;
    primaryDown: string;
    primaryDeep: string;

    // complementary
    complementaryUp: string;
    complementaryPure: string;
    complementaryDown: string;
    complementaryDeep: string;

    // hightlight
    highlightUp: string;
    highlightPure: string;
    highlightDown: string;
    highlightDeep: string;

    // light
    lightUp: string;
    lightPure: string;
    lightDown: string;
    lightDeep: string;

    // dark
    darkUp: string;
    darkPure: string;
    darkDown: string;
    darkDeep: string;

    // status
    statusError: string;
    statusSuccess: string;
    statusWarning: string;

    transparent: string;
  }

  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    none: string
  }

  font: {
    sizes: {
      text: string
      title: string
      subtitle: string
      headline: string
    }
  }

  border: {
    radius: {
      none: string;
      full: string;
      round: string;
      shaped: string;
    }
  }

  shadow: {
    none: string;
    light: string;
    medium: string;
    intense: string;
  }
}

declare type DefaultTheme = ThemeConfig;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeConfig {}
}