"use client";

import useThemeStore from "@/store/useTheme";
import { Button } from "antd";
import { FaArrowRight } from "react-icons/fa6";

const CreateNewNote = () => {
  const { themeContainer } = useThemeStore();
  return (
    <div className="flex flex-col items-start w-full p-2">
      <div className="w-full flex flex-row items-center justify-between mb-5">
        <p
          className={`text-xl font-semibold ${themeContainer["app.common.text.color"]}`}
        >
          Tạo ghi chú mới
        </p>
        <div className="flex flex-row gap-2">
          <Button variant="outlined" color="default">
            Hủy <FaArrowRight />
          </Button>
          <Button variant="solid" color="primary">
            Tạo ghi chú <FaArrowRight />
          </Button>
        </div>
      </div>
      <div id="editor-container" className="w-full"></div>
      <textarea
        className={`h-40 w-full rounded-lg p-2 ${themeContainer["app.common.borderAll.color"]} ${themeContainer["app.common.background.color"]}`}
      ></textarea>
    </div>
  );
};

export default CreateNewNote;
