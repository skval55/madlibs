import React, { useState } from "react";
import MadLibsForm from "./MadLibsForm";
import Story from "./Story";

const MadLib = () => {
  const [formEntries, setFormEntries] = useState(null);

  const addEntries = (entries) => {
    setFormEntries(entries);
  };

  const reset = () => {
    setFormEntries(null);
  };

  return (
    <>
      <h1>MadLibs!</h1>
      {formEntries == null ? (
        <MadLibsForm addEntries={addEntries} />
      ) : (
        <Story
          noun={formEntries.noun}
          noun2={formEntries.noun2}
          adjective={formEntries.adjective}
          color={formEntries.color}
          reset={reset}
        />
      )}
    </>
  );
};

export default MadLib;
