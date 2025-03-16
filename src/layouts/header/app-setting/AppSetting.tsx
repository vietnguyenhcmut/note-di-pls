import { Button, Popover } from "antd";
import { FaGear } from "react-icons/fa6";
import useThemeStore from "@/store/useTheme";

const AppSetting = () => {
  const { setTheme, themeContainer } = useThemeStore();

  const content = (
    <div className="flex flex-col items-start gap-2">
      <h3>App Setting</h3>
      <p>Setting for this app.</p>
      <Button onClick={() => setTheme("dark-gray-white")}>🌙 Dark Mode</Button>
      <Button onClick={() => setTheme("light-white-black")}>
        🌞 Light Mode
      </Button>
    </div>
  );

  return (
    <Popover content={content}>
      <div
        className={`${themeContainer["app.common.borderAll.color"]} ${themeContainer["app.common.text.color"]} rounded-lg h-10 w-10 flex justify-center items-center hover:opacity-50`}
      >
        <FaGear className="" />
      </div>
    </Popover>
  );
};

export default AppSetting;
