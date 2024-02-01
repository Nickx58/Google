import React, { useState } from "react";

const DropDown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(null);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    console.log(option);
  };
  const renderOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });
  return (
    <div>
      <div onClick={handleClick}>Select</div>
      {isOpen && <div>{renderOptions}</div>}
    </div>
  );
};

export default DropDown;
