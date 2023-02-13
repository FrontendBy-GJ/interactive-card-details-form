import React from 'react';

export default function Labels({ children, title, htmlFor, className }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`${className} uppercase flex flex-col gap-2`}
    >
      {title}
      {children}
    </label>
  );
}
