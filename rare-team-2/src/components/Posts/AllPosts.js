import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPostsWithAuthorAndCategory } from "../../services/postServices.js";
import { deletePost } from "../../services/postServices.js";

export const AllPosts = ({ currentUser }) => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    getAndSetPosts();
  }, []);

  const getAndSetPosts = () => { 
      getAllPostsWithAuthorAndCategory().then((posts) => {
        setAllPosts(posts);
      });
    }

    const handleDeletePost = (postId) => {
      deletePost(postId).then(() => {
          // Once the post is deleted, fetch and set the updated list of posts
          getAndSetPosts();
      });
  };

   
  

  return (
    <div>
             {allPosts.map((post) => (
            <Link to={`/myposts/${post?.id}`}>
          <div key={post.id}>
            <div>{post.title}</div>
            <div>{post.author}</div>
            <div>{post.category}</div>
          </div>
          <button onClick={() => handleDeletePost(post.id)}>Delete Post</button>
            </Link>
        
        ))
      }

      <Link to="/newpost">
     <button>New Post!</button> 
      </Link>
    </div>
  );
};
