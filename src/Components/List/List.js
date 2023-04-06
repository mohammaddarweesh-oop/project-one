import React from "react";

const List = ({ children, items }) => {
  const chiled = items.map((el) =>
    React.cloneElement(children, { item: el, key: el.id })
  );

  return <div className="list">{chiled}</div>;
};

export default List;
/**
 * 
 * 
 *  
 * const chiled = items.map((el) =>
    React.cloneElement(children, { item: el, key: el.id })
  );

  return <div className="list">{chiled}</div>;
 * 
 * 
 * 
 */
