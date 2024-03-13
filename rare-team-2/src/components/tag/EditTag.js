import React, { useState } from "react";
import { createTag, putTag } from "../../services/tagServices.js";
import { useNavigate, useParams } from "react-router-dom";

export const EditTag = () => {
  const {tagId} = useParams()
  const [tag, setTag] = useState({
    id: parseInt(tagId),
    label: "",
  });
  const navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setTag((prevTag) => ({
      ...prevTag,
      [name]: value,
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await putTag(parseInt(tagId), tag);
      navigate("/tagmanager");
    } catch (error) {
      navigate("/tagmanager");
    }
  };

  return (
    <>
      <h1>New Tag Form</h1>
      <input
        type="text"
        name="label"
        placeholder="Edit Tag"
        value={tag.label}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Save</button>
    </>
  );
};