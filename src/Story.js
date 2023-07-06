import React from "react";

const Story = ({ noun, noun2, adjective, color, reset }) => {
  return (
    <>
      <p>
        there was a {color} {noun} who loved a {adjective} {noun2}!
      </p>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Story;
