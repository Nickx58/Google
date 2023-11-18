import React from "react";
import className from "classnames";
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  const classes = className('px-3 py-1.5 border', {
    'bg-blue-500 text-white  border-blue-500': primary,
    'bg-gray-900 text-white  border-gray-900': secondary,
    'bg-green-500 text-white  border-green-500': success,
    'bg-yellow-400 text-white  border-yellow-400': warning,
    'bg-red-500 text-white  border-red-500': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-500':outline && primary,
    'text-gray-900':outline && secondary, 
    'text-green-500':outline && success, 
    'text-yello-500':outline && warning, 
    'text-red-500':outline && danger, 

  })
  return (
    <button className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValues: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error("One one of type can be true");
    }
  },
};
export default Button;
