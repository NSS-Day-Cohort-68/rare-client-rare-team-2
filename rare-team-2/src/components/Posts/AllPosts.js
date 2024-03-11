import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPostsWithAuthorAndCategory } from "../../services/postServices.js";

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

   
  

  return (
    <div>
             {allPosts.map((post) => (
            <Link>
          <div key={post.id}>
            <div>{post.title}</div>

            <div>{post.author}</div>
            <div>{post.category}</div>
          </div>
            </Link>
        ))
      }
    </div>
  );
};
