import { v4 as uuidv4 } from "uuid";

type createNewNoteProps = {
  type: string;
  title: string;
  brief: string;
  content: string;
};

export const pushCreateNewNote = async ({
  type,
  title,
  brief,
  content,
}: createNewNoteProps) => {
  const newId = uuidv4().toString();
  return await fetch("http://localhost:3001/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: newId,
      type: type,
      title: title,
      brief: brief,
      content: content,
      date: new Date().toISOString(),
    }),
  });
};
