import React, { Dispatch, SetStateAction } from 'react';
import { THEMES } from './Theme.config';
import { ThemeType, Theme } from './Theme.model';

interface ThemeContextProps {
  themeType: ThemeType;
  theme: Theme,
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeType: 'light',
  theme: THEMES['light'],
} as ThemeContextProps);

export const ThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeType>('light');

  return (
    <ThemeContext.Provider value={{
      themeType: currentTheme,
      theme: THEMES[currentTheme],
      setCurrentTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => React.useContext(ThemeContext);