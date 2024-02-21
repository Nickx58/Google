import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

const Link = ({ to, children, className }) => {
  const { navigate } = useNavigation();
  const classes = classNames("text-blue-500", className);

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
