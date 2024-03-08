import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { putCategory } from "../../services/categoryServices.js";

export const EditCategoryForm = ({ categoryData }) => {
  const { categoryId } = useParams(); // Correctly access categoryId from URL params
  const [category, setCategory] = useState({
    label: "",
    id: parseInt(categoryId) // Set category id obtained from URL params
  });

  useEffect(() => {
    if (categoryData) {
      setCategory(categoryData);
    }
  }, [categoryData]);

  let navigate = useNavigate();

  const updateCategory = (evt) => {
    const { id, value } = evt.target;
    setCategory((prevCategory) => ({
      ...prevCategory,
      [id]: value,
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await putCategory(parseInt(categoryId), category); // Pass category object to putCategory
      navigate("/categoryManager");
    } catch (error) {
      console.error("Error updating category:", error);
      navigate("/categoryManager");
      // Handle error if necessary
    }
  };

  return (
    <main style={{ textAlign: "center" }}>
      <form className="form-login" onSubmit={handleSubmit}>
        <h1>Edit Category</h1>
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

