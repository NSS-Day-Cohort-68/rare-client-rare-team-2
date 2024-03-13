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

export const getAllTags = () => {
  return fetch(`http://localhost:8088/tags`).then((res) =>
    res.json()
  );
};

export const putTag = (tagId, tagToUpdate) => {
  return fetch(`http://localhost:8088/tags/${tagId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tagToUpdate),
  })
 
};


