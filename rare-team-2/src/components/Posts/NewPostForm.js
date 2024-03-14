import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/postServices.js";
import { getAllCategories } from "../../services/categoryServices.js";

export const NewPostForm = ({ currentUser }) => {
  const [post, setPost] = useState({
    title: "",
    publication_date: new Date(),
    image_url: "",
    content: "",
    approved: 0,
    category_id: 0,
    user_id: currentUser.id
  });

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const updatePost = (evt) => {
    const { id, value } = evt.target;
    setPost((prevPost) => ({
      ...prevPost,
      [id]: value
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await createPost(post);
      navigate("/allposts");
    } catch (error) {
      console.error("Error publishing post:", error);
      navigate("/allposts");
      // Handle error if necessary
    }
  };

  return (
    <main style={{ textAlign: "center" }}>
      <form className="form-login" onSubmit={handleSubmit}>
        <h1>New Post!</h1>
        <h2>Please Fill all Fields</h2>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updatePost}
              type="text"
              id="title"
              className="form-control"
              placeholder="Enter your post title"
              value={post.title}
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <textarea
              onChange={updatePost}
              id="content"
              className="form-control"
              placeholder="Enter your post content"
              value={post.content}
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <select
              onChange={updatePost}
              id="category_id"
              className="form-control"
              value={post.category_id}
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <button className="login-btn btn-info text-dark" type="submit">
              Submit Post
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  );
};
