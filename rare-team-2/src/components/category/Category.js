import React, { useEffect, useState } from "react";
import { deleteCategory, getAllCategories } from "../../services/categoryServices.js";
import { Link } from "react-router-dom";

export const Category = () => {
    const [allCategories, setAllCategories] = useState([]);

    const getAndSetCategories = () => {
        getAllCategories().then(setAllCategories);
    };

    useEffect(() => {
        getAndSetCategories();
    }, []);

    const handleDeleteCategory = (categoryId) => {
        deleteCategory(categoryId).then(() => {
            // Once the category is deleted, fetch and set the updated list of categories
            getAndSetCategories();
        });
    };
    

    return (
        <div>
            <h1>Categories</h1>
            {allCategories.map((categoryObj, index) => (
                <div key={index}>
                    Category: {categoryObj.label}
                    <button onClick={() => handleDeleteCategory(categoryObj.id)}>Delete Category</button>
                    <button>Edit Category</button>
                </div>
            ))}
            <Link to={"/newCategory"}>
                <button>New Category</button>
            </Link>
        </div>
    );
};

