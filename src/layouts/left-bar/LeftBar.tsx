"use client";
import InputSearch from "@/components/leftbar/input-search/InputSearch";
import ListNotes from "@/components/leftbar/list-notes/ListNotes";
import SelectNoteTypes from "@/components/leftbar/select-note-types/SelectNoteTypes";
import useThemeStore from "@/store/useTheme";

const LeftBar = () => {
  const { themeContainer } = useThemeStore();
  return (
    <div
      className={`transition-all duration-500 w-full h-full flex flex-col ${themeContainer["app.common.background.color"]} pl-2 pr-2`}
    >
      <InputSearch />
      <div className="mt-5">
        <SelectNoteTypes />
      </div>
      <div
        className="mt-5 overflow-auto"
        style={{ height: "calc(100vh - 200px)" }}
      >
        <ListNotes />
      </div>
    </div>
  );
};

export default LeftBar;
