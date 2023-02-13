import React from 'react';

export default function Button({ disabled, className, children }) {
  return (
    <button
      className={`bg-very-dark-violet w-full py-3 rounded-md text-light-violet mt-5 outline-none ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
