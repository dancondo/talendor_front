import React from 'react';
import { ThemeProvider } from 'styled-components';

import 'assets/styles/reset.css';
import 'assets/styles/global.css';
import themeConfig from 'styles/theme';
import { Gutter } from '../Gutter/styles';

interface Props {
  children: React.ReactNode
}


const Layout = ({ children }: Props) => (
  <ThemeProvider
    theme={themeConfig}
  >
    <Gutter
      padding="md"
    >
      <main>{children}</main>
    </Gutter>
  </ThemeProvider>
);

export default Layout;