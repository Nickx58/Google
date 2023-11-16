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
  return (
    <button className="bg-blue-500 text-white px-3 py-1.5 border border-blue-600">
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
