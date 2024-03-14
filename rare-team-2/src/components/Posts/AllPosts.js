import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPostsWithAuthorAndCategory } from "../../services/postServices.js";
import { deletePost } from "../../services/postServices.js";
import { getAllCategories } from "../../services/categoryServices.js";
import { PostFilterBar } from "./PostFilterBar.js";

export const AllPosts = ({ currentUser }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [showChosenCategoryOnly, setChosenCategoryOnly] = useState(0);

  useEffect(() => {
    getAndSetPosts();
  }, []);

  const getAndSetPosts = () => {
    getAllPostsWithAuthorAndCategory().then((posts) => {
      setAllPosts(posts);
    });
  };

  const getAndSetCategories = () => {
    getAllCategories().then(setCategories);
  };

  useEffect(() => {
    getAndSetCategories();
  }, []);

  useEffect(() => {
    if (showChosenCategoryOnly === "0") {
      setFilteredPosts(allPosts);
    } else if (showChosenCategoryOnly) {
      const filtered = allPosts.filter(
        (post) => post.category.category_id === parseInt(showChosenCategoryOnly)
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(allPosts);
    }
  }, [allPosts, showChosenCategoryOnly]);

  const handleDeletePost = (postId) => {
    deletePost(postId).then(() => {
      // Once the post is deleted, fetch and set the updated list of posts
      getAndSetPosts();
    });
  };

  return (
    <section className="post-list">
      <PostFilterBar
        setChosenCategoryOnly={setChosenCategoryOnly}
        categories={categories}
      />
      <div>
        {filteredPosts.map((post) => (
          <Link key={post.id} to={`/myposts/${post?.id}`}>
            <div>
              <div>{post.title}</div>
              <div>{post.author}</div>
              <div>{post.category.category}</div>
            </div>
            <button onClick={() => handleDeletePost(post.id)}>
              Delete Post
            </button>
          </Link>
        ))}

        <Link to="/newpost">
          <button>New Post!</button>
        </Link>
      </div>
    </section>
  );
};
