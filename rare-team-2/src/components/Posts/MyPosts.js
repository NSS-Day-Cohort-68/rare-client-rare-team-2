import React, { useEffect, useState } from "react";
import { getPostsByUserId } from "../../services/postServices.js";

export const MyPosts = ({ currentUser }) => {
  const [postsByUserId, setPostsByUserId] = useState([]);

  useEffect(() => {
    getAndSetPosts(currentUser.id);
  }, [currentUser]);

  const getAndSetPosts = (userId) => {
    if (userId) {
      getPostsByUserId(userId).then((posts) => {
        setPostsByUserId(posts);
      });
    }
  };

  return (
    <div>
      {postsByUserId.length === 0 ? (
        <div>No posts to display.</div>
      ) : (
        postsByUserId.map((post) => (
          <div key={post.id}>
            <div>{post.title}</div>
            <div>{post.author}</div>
            <div>{post.category}</div>
          </div>
        ))
      )}
    </div>
  );
};
