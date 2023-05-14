import React from "react";

export const Input = ({
  isPassword,
  isEmail,
  label,
  onChange,
  icon,
  placeholder,
  textRight = true,
  filled = true,
  styles,
}) => {
  return (
    <div className={`flex flex-col items-end my-2 w-full mx-auto ${styles}`}>
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
        className={`${
          filled
            ? "bg-secondary-400"
            : "bg-white border-secondary-100 border-[1px]"
        } 
        py-2 rounded-md w-full 
        ${textRight ? "text-right" : "text-left pl-8"} 
        px-2 focus:outline-black pl-6`}
        onChange={onChange}
      />
    </div>
  );
};
