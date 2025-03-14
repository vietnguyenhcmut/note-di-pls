import useThemeStore from "@/store/useTheme";

type AppNameProps = {
  appName: string;
};

const AppName: React.FC<AppNameProps> = ({ appName }) => {
  const { themeContainer } = useThemeStore();
  return (
    <p
      className={`text-3xl font-bold ${themeContainer["app.common.text.color"]}`}
    >
      {appName}
    </p>
  );
};

export default AppName;
