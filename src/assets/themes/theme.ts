import { DarkTheme, DefaultTheme } from "react-native-paper";

declare global {
  namespace ReactNativePaper {
    interface ThemeFonts {
      superLight: ThemeFont;
    }
    interface ThemeColors {
      customColor: string;
    }
    interface ThemeAnimation {
      customProperty: number;
    }
    interface Theme {
      userDefinedThemeProperty: boolean;
    }
  }
}

export const CustomDarkTheme: ReactNativePaper.Theme = {
  ...DarkTheme,
  userDefinedThemeProperty: true,
  roundness: 2,
  colors: {
    ...DarkTheme.colors,
    customColor: "#BADA55",
    text: "#ffff",
  },
  fonts: {
    ...DarkTheme.fonts,
    superLight: { ...DarkTheme.fonts["light"] },
  },
  animation: {
    ...DarkTheme.animation,
    customProperty: 1,
  },
};
