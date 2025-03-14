import { StaticAppColor } from "@/static-app-color/StaticAppColor";
import useThemeStore from "@/store/useTheme";
import { Popover } from "antd";
import { FaUser } from "react-icons/fa6";

const UserMenu = () => {
  const { themeContainer } = useThemeStore();
  const content = (
    <div>
      <h3>User Menu</h3>
    </div>
  );

  return (
    <Popover content={content}>
      <div
        className={`${themeContainer["app.common.borderAll.color"]} rounded-lg h-10 w-10 flex justify-center items-center hover:opacity-50`}
      >
        <FaUser className="" style={{ color: StaticAppColor }} />
      </div>
    </Popover>
  );
};

export default UserMenu;
