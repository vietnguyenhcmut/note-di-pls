"use client";

import NoteItem from "./note-item/NoteItem";
import { noteTypes } from "../select-note-types/SelectNoteTypes";
import { useEffect, useState } from "react";
import { getListNotes } from "@/services/notes/get-list-notes/getListNotes";

const ListNotes = () => {
  const [listNotes, setListNotes] = useState([]);
  useEffect(() => {
    const res = getListNotes();
    res.then((data) => {
      setListNotes(data);
    });
  }, []);
  console.log(listNotes);

  return (
    <div className="flex flex-col gap-2">
      <NoteItem
        noteType={noteTypes[0]}
        title="Kế hoạch đi Vũng Tàu ngày xx/xx/xxxx"
        brief="Dự kiến đi 3 ngày 2 đêm cùng nhóm bạn 12 người"
        date={new Date()}
      />
      <NoteItem
        noteType={noteTypes[1]}
        title="Kế hoạch tập thể thao bóng đá"
        brief="Đội hình 5:5 tại TpHCM"
        date={new Date()}
      />
      <NoteItem
        noteType={noteTypes[2]}
        title="Danh sách thuốc khám bệnh"
        brief="Đã đi khám tại bệnh viện A"
        date={new Date()}
      />
      <NoteItem
        noteType={noteTypes[4]}
        title="Đám cưới B ngày xx/xx/xxxx"
        brief="Mừng cưới 100.000đ"
        date={new Date()}
      />
      <NoteItem
        noteType={noteTypes[3]}
        title="Title 5"
        brief="Brief"
        date={new Date()}
      />
      <NoteItem
        noteType={noteTypes[3]}
        title="Title 6"
        brief="Brief"
        date={new Date()}
      />
      <NoteItem
        noteType={noteTypes[3]}
        title="Title 7"
        brief="Brief"
        date={new Date()}
      />
      <NoteItem
        noteType={noteTypes[3]}
        title="Title 8"
        brief="Brief"
        date={new Date()}
      />
      <NoteItem
        noteType={noteTypes[3]}
        title="Title 9"
        brief="Brief"
        date={new Date()}
      />
      <NoteItem
        noteType={noteTypes[3]}
        title="Title 10"
        brief="Brief"
        date={new Date()}
      />
      <NoteItem
        noteType={noteTypes[3]}
        title="Title 11"
        brief="Brief"
        date={new Date()}
      />
      <NoteItem
        noteType={noteTypes[3]}
        title="Title 12"
        brief="Brief"
        date={new Date()}
      />
      <NoteItem
        noteType={noteTypes[3]}
        title="Title 13"
        brief="Brief"
        date={new Date()}
      />
    </div>
  );
};

export default ListNotes;
