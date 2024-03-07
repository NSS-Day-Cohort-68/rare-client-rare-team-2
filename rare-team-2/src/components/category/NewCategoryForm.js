import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../services/categoryServices.js";

export const NewCategoryForm = (props) => {
  const [category, setCategory] = useState({
    label: "",
  });

  let navigate = useNavigate();

  const updateCategory = (evt) => {
    const { id, value } = evt.target;
    setCategory(prevCategory => ({
      ...prevCategory,
      [id]: value
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await createCategory(category);
      navigate("/categoryManager");
    } catch (error) {
        console.error("Error creating category:", error);
        navigate("/categoryManager");
      
      // Handle error if necessary
    }
  };

  return (
    <main style={{ textAlign: "center" }}>
      <form className="form-login" onSubmit={handleSubmit}>
        <h1>New Category</h1>
        <h2>Please Fill all Fields</h2>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateCategory}
              type="text"
              id="label"
              className="form-control"
              placeholder="Enter your category name"
              value={category.label}
              required
              autoFocus
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <button className="login-btn btn-info text-dark" type="submit">
              Submit Category
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  );
};
