import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllTags } from "../../services/tagServices.js";

export const AllTags = ({ currentUser }) => {
  const [allTags, setAllTags] = useState([]);
  const navigate = useNavigate(); // Use destructuring assignment to import useNavigate

  useEffect(() => {
    getAndSetTags();
  }, []);

  const getAndSetTags = () => { 
    getAllTags().then((tags) => {
      setAllTags(tags);
    });
  }

  return (
    <div>
      {allTags.map((tag) => (
        <div key={tag.id}>
          <div>{tag.label}</div>
          <button>Delete Tag</button>
          {/* Use an arrow function to pass parameters to onClick */}
          <button onClick={() => navigate(`/editTag/${tag.id}`)}>Edit Tag</button>
        </div>
      ))}
      <Link to="/newtag">
        <button>New Tag!</button> 
      </Link>
    </div>
  );
};
