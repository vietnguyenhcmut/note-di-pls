"use client";

import { useEffect, useState } from "react";
import { getListNotes } from "@/services/notes/get-list-notes/getListNotes";
import { getSpecificNote } from "@/services/notes/get-list-notes/get-specific-note/getSpecificNote";
import NoteItem from "./note-item/NoteItem";

type NoteFromBackendProps = {
  file: string;
};

type NoteFieldProps = {
  type: string;
  title: string;
  brief: string;
  date: string;
  content: string;
};

const ListNotes = () => {
  const [listNoteNames, setListNoteNames] = useState<NoteFromBackendProps[]>(
    []
  );
  useEffect(() => {
    const res = getListNotes();
    res.then((data) => {
      setListNoteNames(data);
    });
  }, []);
  console.log(listNoteNames);

  const [listNoteTexts, setListNoteTexts] = useState<string[]>([]);

  async function getSpecificNoteFromBackend(name: string) {
    return await getSpecificNote(name);
  }

  useEffect(() => {
    if (listNoteNames.length > 0) {
      async function updateTextList() {
        const tmpTextList = await Promise.all(
          listNoteNames.map(async (name) => {
            const res = getSpecificNoteFromBackend(name.file);
            return res.then((data) => data.text());
          })
        );
        setListNoteTexts(tmpTextList);
      }
      updateTextList();
    }
  }, [listNoteNames]);

  const [listNoteObjects, setListNoteObjects] = useState<NoteFieldProps[]>();
  function parseNoteString(text: string): NoteFieldProps {
    const match = text.match(
      /Type:\s*(.+?)\r?\nTitle:\s*(.+?)\r?\nBrief:\s*(.+?)\r?\nDate:\s*(.+?)\r?\nContent:\r?\n([\s\S]*)/
    );

    if (match) {
      return {
        type: match[1],
        title: match[2],
        brief: match[3],
        date: match[4],
        content: match[5].trim(),
      };
    }
    return {
      type: "",
      title: "",
      brief: "",
      date: "",
      content: "",
    };
  }
  useEffect(() => {
    if (listNoteTexts.length > 0) {
      const tmpListObjs: NoteFieldProps[] = listNoteTexts.map((text) =>
        parseNoteString(text)
      );
      setListNoteObjects(tmpListObjs);
    }
  }, [listNoteTexts]);

  return (
    <div className="flex flex-col gap-2">
      {listNoteObjects && listNoteObjects.length > 0 ? (
        listNoteObjects.map((noteObject: NoteFieldProps, index: number) => (
          <NoteItem
            key={index}
            type={noteObject.type}
            title={noteObject.title}
            brief={noteObject.brief}
            date={new Date(noteObject.date)}
          />
        ))
      ) : (
        <p className="text-center opacity-75">Không có ghi chú nào !</p>
      )}
    </div>
  );
};

export default ListNotes;
