import React, {
  createContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';
import { DefaultTheme } from 'styled-components';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

export type BlogThemeProviderProps = {
  children: React.ReactNode;
};

export type BlogThemeContextValues = {
  theme: DefaultTheme;
  setTheme?: (mode: 'default' | 'inverted') => void;
};

export const BlogThemeContext = createContext<BlogThemeContextValues>({
  theme,
});

export const BlogThemeProvider = ({ children }: BlogThemeProviderProps) => {
  const [blogTheme, setBlogTheme] = useState(theme);

  const useEffectControl = useRef(false);

  useEffect(() => {
    if (useEffectControl.current === false) {
      const localTheme = localStorage.getItem('theme');
      if (!localTheme) return;
      const newTheme = JSON.parse(localTheme);
      setBlogTheme(newTheme);
      useEffectControl.current = true;
    }
  }, []);

  const handleSetTheme: BlogThemeContextValues['setTheme'] = useCallback(
    (mode = 'default') => {
      if (mode === 'default') {
        setBlogTheme(theme);
        localStorage.setItem('theme', JSON.stringify(theme));
      } else {
        const newTheme = {
          ...theme,
          name: 'inverted',
          colorsThemes: {
            primary: '#FFFFFF',
            darkText: '#F9f9f9',
            secondary: '#dc143c',
            white: '#000000',
            mediumGray: '#f9f9f9',
            darkerGray: '#CCCCCC',
          },
        };
        setBlogTheme(newTheme);
        localStorage.setItem('theme', JSON.stringify(newTheme));
      }
    },
    [],
  );

  return (
    <BlogThemeContext.Provider
      value={{ theme: blogTheme, setTheme: handleSetTheme }}
    >
      <ThemeProvider theme={blogTheme}>{children}</ThemeProvider>
    </BlogThemeContext.Provider>
  );
};
