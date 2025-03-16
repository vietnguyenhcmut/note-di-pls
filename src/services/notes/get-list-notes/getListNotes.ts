export const getListNotes = async () => {
  return await fetch("http://localhost:3001/notes", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => data);
};
