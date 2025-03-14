import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  AppThemeProps,
  DarkGrayWhite,
  LightWhiteBlack,
} from "@/theme/AppTheme";

type ThemeType = "light-white-black" | "dark-gray-white";

type ThemeStore = {
  themeType: ThemeType;
  themeContainer: AppThemeProps;
  setTheme: (type: ThemeType) => void;
};

const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      themeType: "light-white-black",
      themeContainer: LightWhiteBlack,
      setTheme: (type: ThemeType) =>
        set({
          themeType: type,
          themeContainer:
            type === "dark-gray-white" ? DarkGrayWhite : LightWhiteBlack,
        }),
    }),
    {
      name: "theme-storage",
    }
  )
);

export default useThemeStore;
