import React from "react";

interface ButtonProps {
  text: string;
  bgColorCode: string;
}

const Button: React.FC<ButtonProps> = ({ text, bgColorCode }) => {
  return (
    <button
      style={{ backgroundColor: bgColorCode }}
      className={`px-7 py-3 rounded-lg text-white font-medium`}
    >
      {text}
    </button>
  );
};

export default Button;
