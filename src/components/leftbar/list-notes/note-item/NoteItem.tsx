"use client";
import useThemeStore from "@/store/useTheme";
import { noteTypes } from "../../select-note-types/SelectNoteTypes";

type NoteItemProps = {
  type: string;
  title: string;
  brief: string;
  date: Date;
};

const NoteItem: React.FC<NoteItemProps> = ({ type, title, brief, date }) => {
  const { themeContainer } = useThemeStore();

  const formattedDate = (date: Date) =>
    date.toLocaleString("vi-VN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

  return (
    <div
      className={`w-full hover:opacity-50 rounded-xl p-2 cursor-pointer transition-all duration-100`}
    >
      <p
        className={`font-bold ${
          noteTypes.filter((typeObj) => typeObj.value === type)[0]
            ?.customTailwindTextTransparentColor
        }`}
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
          {formattedDate(date)}
        </p>
      </div>
    </div>
  );
};

export default NoteItem;
