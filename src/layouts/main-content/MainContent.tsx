"use client";
import useThemeStore from "@/store/useTheme";
import { ReactNode } from "react";

type MainContentProps = {
  children: ReactNode;
};

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  const { themeContainer } = useThemeStore();
  return (
    <div
      className={`w-full h-full flex flex-col p-5 rounded-3xl ${themeContainer["app.mainContent.background.color"]} ${themeContainer["app.common.borderLeft.color"]} ${themeContainer["app.common.borderTop.color"]}`}
    >
      {children}
    </div>
  );
};

export default MainContent;
