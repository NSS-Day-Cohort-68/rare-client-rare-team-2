export const getPostsByUserId = async (userId) => {
  const res = await fetch(`http://localhost:8088/posts?user_Id=${userId}`);
  return await res.json();
};

export const getAllPosts = () => {
  return fetch(`http://localhost:8088/posts`).then((res) =>
    res.json()
  );
};

export const getAllPostsWithAuthorAndCategory = () => {
  return fetch(`http://localhost:8088/posts?_expand=users&_expand=categories`).then((res) =>
    res.json()
  );
};

export const createPost = (post) => {
  return fetch("http://localhost:8088/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  }).then((res) => res.json());
};

export const getPostdets = async (id) => {
  const res = await fetch(`http://localhost:8088/posts/${id}`);
  return res.json(); 
};