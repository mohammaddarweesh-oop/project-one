import React from "react";
import "./ButtonGroup.css";

const ButtonGroup = ({ children }) => {
  const cloneElement = React.Children.map(children, (child) => {
    const text = child.props.children + "!";
    return React.cloneElement(
      child,
      {
        color: "red",
        customClass: "group",
        callBackFn: child.props.callBackFn,
      },
      text
    );
  });

  return <div>{cloneElement}</div>;
};

export default ButtonGroup;

/**
 * 
 * 
 * const callBackFunction = () => {
    console.log("Clicked");
  };
  console.log(children.props);
  const text = children.props.children;

  const cloneElement = React.cloneElement(
    children,
    {
      color: "red",
      customClass: "group",
      callBackFunction,
    },
    text
  );
  return <div>{cloneElement}</div>;
 */
