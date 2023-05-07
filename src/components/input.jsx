import React from "react";

export const Input = ({ isPassword, isEmail, label, onChange }) => {
  return (
    <div className="flex flex-col items-end my-2 w-full mx-auto">
      <label className="text-right mb-1" htmlFor="password">
        {label}
      </label>
      <input
        type={isPassword ? "password" : isEmail ? "email" : "text"}
        name={label}
        id={label}
        className="bg-gray-300 py-2 rounded-md w-full text-right px-2 focus:outline-black"
        onChange={onChange}
      />
    </div>
  );
};
