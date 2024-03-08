export const getPostsByUserId = async (userId) => {
  const res = await fetch(`http://localhost:8088/posts?user_Id=${userId}`);
  return await res.json();
};
