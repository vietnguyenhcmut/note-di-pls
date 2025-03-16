"use client";

import useThemeStore from "@/store/useTheme";
import { Button, Input } from "antd";
import { useState } from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa6";

type StateOfNoteProps = {
  title: string;
  brief: string;
  content: string;
};

const ViewOrEditNote = () => {
  const { themeContainer } = useThemeStore();
  const [enableEditNote, setEnableEditNote] = useState(false);
  const [addNewBrief, setAddNewBrief] = useState(false);
  const [initialStateOfNote, setInitialStateOfNote] =
    useState<StateOfNoteProps>({
      title: "",
      brief: "",
      content: "",
    });

  const [newStateOfNote, setNewStateOfNote] = useState<StateOfNoteProps>({
    title: "",
    brief: "",
    content: "",
  });

  return (
    <div className="flex flex-col items-start w-full p-2">
      <div className="w-full flex flex-row items-center justify-between mb-5">
        <p
          className={`text-xl font-semibold ${themeContainer["app.common.text.color"]}`}
        ></p>
        {enableEditNote ? (
          <div className="flex flex-row gap-2">
            <Button
              variant="outlined"
              color="danger"
              onClick={() => setEnableEditNote(false)}
            >
              Hủy <FaArrowRight />
            </Button>
            <Button
              variant="solid"
              className="w-32"
              color="green"
              onClick={() => {
                setEnableEditNote(false);
                // update action
              }}
            >
              Hoàn tất <FaArrowRight />
            </Button>
          </div>
        ) : (
          <Button
            variant="solid"
            className="w-32"
            color="primary"
            onClick={() => setEnableEditNote(true)}
          >
            Chỉnh sửa <FaArrowRight />
          </Button>
        )}
      </div>
      <div className="flex flex-row items-start">
        <div className="w-full gap-2 mb-5 flex flex-col items-start">
          <Input placeholder="Tiêu đề" />
          {!initialStateOfNote.brief ? null : <Input placeholder="Tóm tắt" />}
        </div>
        <div className="w-32 gap-2 mb-5 flex flex-row items-center">
          {!enableEditNote ? null : initialStateOfNote.brief ? (
            <Button
              className="w-full"
              icon={<FaPlus />}
              iconPosition="start"
              disabled={!enableEditNote}
              color="danger"
              variant="outlined"
              onClick={() => {
                if (addNewBrief === false) {
                  setAddNewBrief(true);
                } else {
                  setAddNewBrief(false);
                }
              }}
            >
              Bỏ tóm tắt
            </Button>
          ) : (
            <Button
              className="w-full"
              icon={<FaPlus />}
              iconPosition="start"
              disabled={!enableEditNote}
              onClick={() => {
                if (addNewBrief === false) {
                  setAddNewBrief(true);
                } else {
                  setAddNewBrief(false);
                }
              }}
            >
              {addNewBrief ? "Bỏ tóm tắt" : "Thêm tóm tắt"}
            </Button>
          )}
        </div>
      </div>
      <div id="editor-container" className="w-full"></div>
      <textarea
        className={`h-40 w-full rounded-lg p-2 ${themeContainer["app.common.borderAll.color"]} ${themeContainer["app.common.background.color"]}`}
        placeholder="Nội dung..."
      ></textarea>
    </div>
  );
};

export default ViewOrEditNote;
