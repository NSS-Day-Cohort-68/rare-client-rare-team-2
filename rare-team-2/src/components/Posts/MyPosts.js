import React from "react";

export const MyPosts = ({ currentUser }) => {
  return (
    <div>
      <h2>My Posts</h2>
      <p>Current User ID: {currentUser.id}</p>
    </div>
  );
};
