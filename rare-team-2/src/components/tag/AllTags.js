import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteTag, getAllTags } from "../../services/tagServices.js";

export const AllTags = ({ currentUser }) => {
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    getAndSetTags();
  }, []);

  const getAndSetTags = () => {
    getAllTags().then((tags) => {
      setAllTags(tags);
    });
  };

  const handleDeleteTag = (e) => {
    if (window.confirm("Are you sure?")) {
      deleteTag(e.target.value).then(() => {
        getAndSetTags();
      });
    }
  };

  return (
    <div>
      {allTags.map((tag) => (
        <div key={tag.id}>
          <div>{tag.label}</div>
          <button value={tag.id} onClick={handleDeleteTag}>
            Delete Tag
          </button>
          <button>Edit Tag</button>
        </div>
      ))}

      <Link to="/newtag">
        <button>New Tag!</button>
      </Link>
    </div>
  );
};
