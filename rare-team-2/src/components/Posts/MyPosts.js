import React, { useEffect, useState } from "react";
import { getPostsByUserId } from "../../services/postServices.js";
import { Link } from "react-router-dom";
import { deletePost } from "../../services/postServices.js";

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

  const handleDeletePost = (postId) => {
    deletePost(postId).then(() => {
        // Once the post is deleted, fetch and set the updated list of posts
        getAndSetPosts();
    });
};

  return (
    <div>
      {postsByUserId.length === 0 ? (
        <div>No posts to display.</div>
      ) : (
        postsByUserId.map((post) => (
          <Link to={`/myposts/${post?.id}`}>
          <div key={post.post_id}> 
            <div>{post.title}</div>
            <div>{post.author}</div>
            <div>{post.category}</div>
            <button onClick={() => handleDeletePost(post.id)}>Delete Post</button>
          </div>
      </Link>
        ))
      )}
    </div>
  );
};
