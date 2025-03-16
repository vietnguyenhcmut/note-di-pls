import { v4 as uuidv4 } from "uuid";

type createNewNoteProps = {
  title: string;
  brief: string;
  content: string;
};

type pushCreateNewNoteProps = (note: createNewNoteProps) => void;

export const pushCreateNewNote: pushCreateNewNoteProps = async ({
  title,
  brief,
  content,
}: createNewNoteProps) => {
  const newId = uuidv4().toString();
  console.log("newId of the new note:", newId);
  fetch("http://localhost:3001/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: newId,
      title: title,
      brief: brief,
      content: content,
      date: new Date().toISOString(),
    }),
  });
};
