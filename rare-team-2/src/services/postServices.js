export const getPostsByUserId = (userId) => {
  return fetch(`http://localhost:8088/posts?user_Id=${userId}`).then((res) =>
    res.json()
  );
};
