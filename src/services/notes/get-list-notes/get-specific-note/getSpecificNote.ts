export const getSpecificNote = async (fileName: string) => {
  return await fetch(`http://localhost:3001/notes/${fileName}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res);
};
