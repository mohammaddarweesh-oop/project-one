import React from "react";
import "./Button.css";

const Button = ({ color, customClass, children, callBackFn }) => {
  return (
    <div
      style={{ color: color }}
      className={`${customClass ? "button" + customClass : "button"}`}
      onClick={() => callBackFn(children)}
    >
      {children}
    </div>
  );
};

export default Button;
