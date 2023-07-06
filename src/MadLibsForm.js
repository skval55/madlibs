import React, { useState } from "react";
import "./MadLibsForm.css";

const MadLibsForm = ({ addEntries }) => {
  const INITIAL_STATE = {
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
  };
  const [flashFillForm, setFlashFillForm] = useState(false);
  const [formData, setFormData] = useState(INITIAL_STATE);

  const validateForm = (formData) => {
    for (let key in formData) {
      if (formData[key] === "") {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(formData)) {
      addEntries(formData);
      setFormData(INITIAL_STATE);
      setFlashFillForm(false);
    } else {
      setFlashFillForm(true);
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };
  return (
    <>
      {flashFillForm && (
        <p className="MadLibsForm-flash">Please fill all form entries</p>
      )}
      <form className="MadLibsForm" onSubmit={handleSubmit}>
        <input
          id="noun"
          name="noun"
          value={formData.noun}
          onChange={handleChange}
          placeholder="Noun"
        />
        <br />
        <input
          id="noun2"
          name="noun2"
          value={formData.noun2}
          onChange={handleChange}
          placeholder="Noun 2"
        />
        <br />
        <input
          id="adjective"
          name="adjective"
          value={formData.adjective}
          onChange={handleChange}
          placeholder="Adjective"
        />
        <br />
        <input
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
          placeholder="color"
        />
        <br />
        <button>Get Story</button>
      </form>
    </>
  );
};

export default MadLibsForm;
