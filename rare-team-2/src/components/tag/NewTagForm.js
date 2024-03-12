import React, { useState } from "react";
import { createTag } from "../../services/tagServices.js";
import { useNavigate } from "react-router-dom";

export const NewTagForm = () => {
  const [tag, setTag] = useState({
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
      await createTag(tag);
      navigate("/tags");
    } catch (error) {
      navigate("/tags");
    }
  };

  return (
    <>
      <h1>New Tag Form</h1>
      <input
        type="text"
        name="label"
        placeholder="New Tag"
        value={tag.label}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Save</button>
    </>
  );
};
