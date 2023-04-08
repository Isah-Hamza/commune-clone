import React from "react";
import { RxDoubleArrowRight } from "react-icons/rx";

const Button = ({ text, className, clickHandler, props }) => {
  return (
    <button
      onClick={clickHandler || null}
      className={`group justify-center duration-300 transition-all ease-in-out font-medium hover:bg-[#e6690d] text-white flex items-center gap-2 bg-appcolor-900 rounded-md px-6 py-3 ${className}`}
      {...props}
    >
      <span >{text || "Button"} </span>
      <div className="text-xs transition-all duration-500 ease-in-out group-hover:translate-x-1">
        <RxDoubleArrowRight size={15} />
      </div>
    </button>
  );
};

export default Button;
