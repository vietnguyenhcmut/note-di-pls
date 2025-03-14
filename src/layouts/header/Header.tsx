"use client";
import useThemeStore from "@/store/useTheme";
import AppName from "./app-name/AppName";
import AppSetting from "./app-setting/AppSetting";
import UserMenu from "./user-menu/UserMenu";
import ButtonAddNote from "@/components/leftbar/button-add-note/ButtonAddNote";

type HeaderProps = {
  appName: string;
};
const Header: React.FC<HeaderProps> = ({ appName }) => {
  const { themeContainer } = useThemeStore();
  return (
    <div
      className={`transition-all duration-500 flex flex-row items-center justify-between p-2 h-14 ${themeContainer["app.common.background.color"]}`}
    >
      <div
        className="flex flex-row items-center justify-between"
        style={{ width: "390px" }}
      >
        <AppName appName={appName} />
        <ButtonAddNote />
      </div>
      <div className="flex flex-row gap-2">
        <AppSetting />
        <UserMenu />
      </div>
    </div>
  );
};

export default Header;
