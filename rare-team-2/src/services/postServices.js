export const getPostsByUserId = async (userId) => {
  const res = await fetch(`http://localhost:8088/posts?user_Id=${userId}`);
  return await res.json();
};

export const getPostdets = async (id) => {
  const res = await fetch(`http://localhost:8088/posts/${id}`);
  return res.json(); 
};