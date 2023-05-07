import React from "react";

export const Input = ({
  isPassword,
  isEmail,
  label,
  onChange,
  icon,
  placeholder,
  textRight = true,
}) => {
  return (
    <div className="flex flex-col items-end my-2 w-full mx-auto">
      {label && (
        <label className="text-right mb-1" htmlFor="password">
          {label}
        </label>
      )}
      {icon && icon}
      <input
        type={isPassword ? "password" : isEmail ? "email" : "text"}
        name={label}
        id={label}
        placeholder={placeholder}
        className={`bg-secondary-400 py-2 rounded-md w-full ${
          textRight ? "text-right" : "text-left pl-8"
        } px-2 focus:outline-black pl-6`}
        onChange={onChange}
      />
    </div>
  );
};
