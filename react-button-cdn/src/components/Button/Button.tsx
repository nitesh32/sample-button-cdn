import React, { ButtonHTMLAttributes, useState } from "react";
import "./Button.css";

// Define the props interface, extending standard button attributes
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // The main button text
  text?: string;

  // Primary background color
  color?: string;

  // Button size variant
  size?: "small" | "medium" | "large";

  // Whether to show a click counter
  showCounter?: boolean;

  // Optional additional class names
  className?: string;
}

// The Button component implementation
export const Button: React.FC<ButtonProps> = ({
  text = "Button",
  color = "#3498db",
  size = "medium",
  showCounter = false,
  className = "",
  onClick,
  children,
  ...rest
}) => {
  // State for tracking clicks when counter is enabled
  const [count, setCount] = useState(0);

  // Handle click events, incrementing counter and calling provided handler
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (showCounter) {
      setCount((prev) => prev + 1);
    }

    // Call the original onClick handler if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={`cdn-button cdn-button-${size} ${className}`}
      style={{ backgroundColor: color }}
      onClick={handleClick}
      {...rest}
    >
      {text || children}
      {showCounter && count > 0 && (
        <span className="cdn-button-counter">({count})</span>
      )}
    </button>
  );
};

// Export as default for easier imports
export default Button;
