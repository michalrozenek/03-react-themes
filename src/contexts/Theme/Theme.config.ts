import { Color } from '../../models/color.model';
import { ThemeType, Theme } from './Theme.model';

export const THEMES: Record<ThemeType, Theme> = {
  light: {
    '--primary': Color.VIOLET,
    '--secondary': Color.DARK_VIOLET,
    '--background': Color.LIGHT_GRAY,
    '--white': Color.WHITE,
  },
  dark: {
    '--primary': Color.VIOLET,
    '--secondary': Color.WHITE,
    '--background': Color.DARK_VIOLET,
    '--white': Color.WHITE,
  }
};
