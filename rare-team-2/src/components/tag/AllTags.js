import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllTags } from "../../services/tagServices.js";

export const AllTags = ({ currentUser }) => {
  const [allTags, setAllTags] = useState([]);

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
            <button>Edit Tag</button>
          </div>
        
        ))
      }

      <Link to="/newtag">
     <button>New Tag!</button> 
      </Link>
    </div>
  );
};