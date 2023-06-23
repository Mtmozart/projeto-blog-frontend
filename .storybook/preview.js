import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global-styles';
import { theme } from '../src/styles/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colorsThemes.white,
      },
      {
        name: 'dark',
        value: theme.colorsThemes.primary,
      },
    ],
  },
};

export const decorators = [
  (StoryFn) => (
    <ThemeProvider theme={theme}>
      <StoryFn />
      <GlobalStyles />
    </ThemeProvider>
  ),
];
