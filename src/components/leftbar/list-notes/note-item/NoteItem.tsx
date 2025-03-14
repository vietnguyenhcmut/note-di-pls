import useThemeStore from "@/store/useTheme";
import { NoteTypeProps } from "../../select-note-types/SelectNoteTypes";

type NoteItemProps = {
  noteType: NoteTypeProps;
  title: string;
  brief: string;
  date: Date;
};

const NoteItem: React.FC<NoteItemProps> = ({
  noteType,
  title,
  brief,
  date,
}) => {
  const { themeContainer } = useThemeStore();

  return (
    <div className="w-full hover:bg-gray-100 hover:opacity-75 rounded-xl p-2 cursor-pointer transition-all duration-100">
      <p
        className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-${noteType.customTailwindTextTransparentColor}-500 to-black `}
        style={{ fontSize: "18px" }}
      >
        {title}
      </p>
      <p
        className={`opacity-70 ${themeContainer["app.common.text.color"]}`}
        style={{ fontSize: "14px" }}
      >
        {brief}
      </p>
      <div className="flex flex-row items-center justify-start gap-2">
        {/* <MdCircle
          className={`opacity-40 ${themeContainer["app.common.text.color"]}`}
          style={{ fontSize: "8px" }}
        /> */}
        <p
          className={`text-sm opacity-40 ${themeContainer["app.common.text.color"]}`}
          style={{ fontSize: "20px" }}
        >
          &#9900;{" "}
        </p>
        <p
          className={`text-sm italic opacity-40 ${themeContainer["app.common.text.color"]}`}
          style={{ fontSize: "12px" }}
        >
          {date.toUTCString()}
        </p>
      </div>
    </div>
  );
};

export default NoteItem;
