export const createTag = async (tag) => {
  const res = await fetch("http://localhost:8088/createtag", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tag),
  });
  return await res.json();
};
