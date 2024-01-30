import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const renderItems = items?.map((item, index) => {
    const isExpand = index === expandedIndex;
    const icon = (
      <span>{isExpand ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );
    return (
      <div key={item.label}>
        <div onClick={() => setExpandedIndex(index)}>
          {icon}
          {item.label}
        </div>
        {isExpand && <div>{item.content}</div>}
      </div>
    );
  });
  return <div>{renderItems}</div>;
};

export default Accordion;
