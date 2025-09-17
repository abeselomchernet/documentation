import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "secondary";
  size?: "icon" | "default";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  className = "",
  children,
  ...props
}) => {
  const base = "px-4 py-2 rounded font-medium transition-colors focus:outline-none";
  let variantClass = "";
  let sizeClass = "";

  if (variant === "outline") variantClass = "border border-gray-700 bg-transparent text-gray-200 hover:bg-gray-800";
  if (variant === "secondary") variantClass = "bg-gray-800 text-gray-200 hover:bg-gray-700";

  if (size === "icon") sizeClass = "w-10 h-10 flex items-center justify-center p-0";

  return (
    <button className={`${base} ${variantClass} ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  );
};
