import React, { useEffect, useState } from "react";
import { getPostsByUserId } from "../../services/postServices.js";
import { Link } from "react-router-dom";

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
          <Link to={`/posts/${post.id}`}>
          <div key={post.post_id}> 
            <div>{post.title}</div>
            <div>{post.author}</div>
            <div>{post.category}</div>
          </div>
      </Link>
        ))
      )}
    </div>
  );
};
