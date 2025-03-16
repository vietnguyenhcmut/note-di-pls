import { UUIDTypes, v4 as uuidv4 } from "uuid";

type saveEditedNoteProps = {
  id: UUIDTypes;
  title: string;
  brief: string;
  content: string;
};

type pushSaveEditedNoteProps = (note: saveEditedNoteProps) => void;

export const pushSaveEditedNote: pushSaveEditedNoteProps = ({
  id,
  title,
  brief,
  content,
}: saveEditedNoteProps) => {
  const newId = uuidv4().toString();
  console.log("newId of the new note:", newId);
  fetch("http://localhost:3001/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id,
      title: title,
      brief: brief,
      content: content,
      date: new Date().toISOString(),
    }),
  });
};
