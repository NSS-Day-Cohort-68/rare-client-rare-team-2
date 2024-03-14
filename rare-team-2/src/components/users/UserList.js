import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../services/userService.js";

export const UserList = () => {
    const [allUsers, setAllUsers] = useState([]);

    const getAndSetUsers = () => {
        getAllUsers().then(setAllUsers);
    };

    useEffect(() => {
        getAndSetUsers();
    }, []);

    // const handleDeleteCategory = (categoryId) => {
    //     deleteCategory(categoryId).then(() => {
    //         // Once the category is deleted, fetch and set the updated list of categories
    //         getAndSetCategories();
    //     });
    // };
    

    return (
        <div>
            <h1>Users</h1>
            {allUsers.map((userObj, index) => (
                <div key={index}>
                    User Full Name: {userObj.first_name} {userObj.last_name}
                    <div>
                    Username: {userObj.username}
                    </div>
                    <div>
                    Account Type: N/A
                    </div>
                    <button>Delete User</button>
                    <button>Edit User</button>
                </div>
            ))}
            <Link to={"/newCategory"}>
                <button>New Category</button>
            </Link>
        </div>
    );
};
