import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button className="btn color-change-2x" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
