import useThemeStore from "@/store/useTheme";
import { FaPenToSquare } from "react-icons/fa6";
import Link from "next/link";
import { routesConfig } from "@/routes/routesConfig";

const ButtonAddNote = () => {
  const { themeContainer } = useThemeStore();
  return (
    <Link href={routesConfig.createNewNote}>
      <div
        className="h-10 w-10 hover:bg-gray-200 flex justify-center items-center transition-all duration-200 cursor-pointer"
        style={{ borderRadius: "50%" }}
      >
        <FaPenToSquare
          className={`text-2xl font-bold ${themeContainer["app.common.text.color"]}`}
        />
      </div>
    </Link>
  );
};

export default ButtonAddNote;
