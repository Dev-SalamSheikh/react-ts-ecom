import React from "react";

interface ButtonProps {
  text: string;
  bgColorCode: string;
}

const Button: React.FC<ButtonProps> = ({ text, bgColorCode }) => {
  return (
    <button
      style={{ backgroundColor: bgColorCode }}
      className={`md:px-7 md:py-3 py-3 px-5 md:text-base text-sm rounded-lg text-white font-medium`}
    >
      {text}
    </button>
  );
};

export default Button;
