export const createComment = (comment) => {
  return fetch("http://localhost:8088/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });
};

export const getCommentsByPostId = (postId) => {
  return fetch(`http://localhost:8088/comments/${postId}`).then((res) =>
    res.json()
  );
};
