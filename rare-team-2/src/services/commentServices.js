export const createComment = (comment) => {
  return fetch("http://localhost:8088/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });
};

export const deleteComment = (commentId) => {
  return fetch(`http://localhost:8088/comments/${commentId}`, {
    method: "DELETE",
  });
};
