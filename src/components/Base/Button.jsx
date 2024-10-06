import PropTypes from "prop-types";

const Button = ({
  type = "button",
  onClick = () => {},
  children,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`lg:px-6 md:px-4 sm:px-1.5 py-1 bg-primary lg:text-xl md:text-lg text-base text-white font-medium rounded-md hover:bg-yellow-500 transition duration-300 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
