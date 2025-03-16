"use client";

import { pushCreateNewNote } from "@/services/notes/push-create-new-note/pushCreateNewNote";
import useThemeStore from "@/store/useTheme";
import { Button, Input } from "antd";
import { useState } from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa6";

const CreateNewNote = () => {
  const { themeContainer } = useThemeStore();
  const [title, setTitle] = useState("");
  const [addBrief, setAddBrief] = useState(false);
  const [brief, setBrief] = useState("");
  const [content, setContent] = useState("");

  const handleBtnClickPushCreateNewNote = () => {
    pushCreateNewNote({
      title: title,
      brief: brief,
      content: content,
    });
  };

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
          <Button
            variant="solid"
            color="primary"
            onClick={() => handleBtnClickPushCreateNewNote()}
          >
            Tạo ghi chú <FaArrowRight />
          </Button>
        </div>
      </div>
      <div className="w-full mb-5 gap-2 flex flex-row items-start">
        <div className="flex flex-col">
          <Input
            placeholder="Tiêu đề"
            className="w-full"
            onChange={(event) => setTitle(event.target.value)}
          />
          {addBrief && (
            <Input
              placeholder="Tóm tắt"
              className="w-full"
              onChange={(event) => setBrief(event.target.value)}
            />
          )}
        </div>
        <Button
          className="w-32"
          icon={<FaPlus />}
          iconPosition="start"
          onClick={() => setAddBrief(true)}
        >
          Thêm tóm tắt
        </Button>
      </div>
      <div id="editor-container" className="w-full"></div>
      <textarea
        className={`h-40 w-full rounded-lg p-2 ${themeContainer["app.common.borderAll.color"]} ${themeContainer["app.common.background.color"]}`}
        placeholder="Nội dung..."
        onChange={(event) => setContent(event.target.value)}
      ></textarea>
    </div>
  );
};

export default CreateNewNote;
