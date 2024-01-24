import React from "react";

const Accordion = ({ items }) => {
  const renderItems = items?.map((item) => {
    return (
      <div key={item.label}>
        <div>{item.label}</div>
        <div>{item.content}</div>
      </div>
    );
  });
  return <div>{renderItems}</div>;
};

export default Accordion;
