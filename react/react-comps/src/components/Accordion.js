import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
      return;
    }
    setExpandedIndex(nextIndex);
  };
  const renderItems = items?.map((item, index) => {
    const isExpand = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpand ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={item.label}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpand && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderItems}</div>;
};

export default Accordion;
