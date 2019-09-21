import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  className,
  ...otherProps
}) => (
  <button
    className={`${
      isGoogleSignIn ? "google-sign-in " : ""
    }custom-button ${className}`.trim()}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
