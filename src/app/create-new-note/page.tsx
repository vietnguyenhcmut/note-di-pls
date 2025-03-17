"use client";

import { noteTypes } from "@/components/leftbar/select-note-types/SelectNoteTypes";
import { pushCreateNewNote } from "@/services/notes/push-create-new-note/pushCreateNewNote";
import useThemeStore from "@/store/useTheme";
import { Button, Input, Modal, Select } from "antd";
import { useState } from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa6";

const CreateNewNote = () => {
  const { themeContainer } = useThemeStore();
  const [title, setTitle] = useState("");
  const [addBrief, setAddBrief] = useState(false);
  const [brief, setBrief] = useState("Không có nội dung tóm tắt !");
  const [type, setType] = useState("unset");
  const [content, setContent] = useState("");

  const [resMsg, setResMsg] = useState();

  const handleBtnClickPushCreateNewNote = async () => {
    if (title && content) {
      try {
        const res = pushCreateNewNote({
          type: type,
          title: title,
          brief: brief,
          content: content,
        });
        res.then((data) => data.json()).then((msg) => setResMsg(msg.message));
      } catch (error) {
        console.log("Error when creating new note !", error);
      }
    }
  };

  const resetForm = () => {
    setType("");
    setTitle("");
    setAddBrief(false);
    setBrief("");
    setContent("");
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-start w-full p-2">
      {resMsg && (
        <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
          <div className="w-2/3 h-60">{resMsg}</div>
        </Modal>
      )}
      <div className="w-full flex flex-row items-center justify-between mb-5">
        <p
          className={`text-xl font-semibold ${themeContainer["app.common.text.color"]}`}
        >
          Tạo ghi chú mới
        </p>
        <div className="flex flex-row gap-2">
          <Button
            variant="outlined"
            color="default"
            onClick={() => resetForm()}
          >
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
        <div className="flex flex-col sm:w-full md:w-full lg:w-1/2 gap-2">
          <Input
            placeholder="Tiêu đề"
            className="w-full"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          {addBrief && (
            <Input
              placeholder="Tóm tắt"
              className="w-full"
              value={brief}
              onChange={(event) => setBrief(event.target.value)}
            />
          )}
        </div>
        <Button
          className="w-32"
          icon={<FaPlus />}
          iconPosition="start"
          onClick={() => setAddBrief((prev) => !prev)}
        >
          Thêm tóm tắt
        </Button>
        <Select
          className="w-32"
          placeholder="Phân loại"
          options={noteTypes}
          onChange={(lable) => setType(lable)}
        />
      </div>
      <div id="editor-container" className="w-full"></div>
      <textarea
        className={`min-h-80 w-full rounded-lg p-2 ${themeContainer["app.common.borderAll.color"]} ${themeContainer["app.common.background.color"]}`}
        placeholder="Nội dung..."
        value={content}
        onChange={(event) => setContent(event.target.value)}
      ></textarea>
    </div>
  );
};

export default CreateNewNote;
