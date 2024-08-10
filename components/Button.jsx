import React from "react";

const Button = ({ dark, text }) => {
  return (
    <button
      className={`${
        dark ? "bg-white text-black" : "bg-black text-white"
      } border-2 border-white py-2 px-4 rounded-full font-semibold`}
    >
      {text}
    </button>
  );
};

export default Button;
