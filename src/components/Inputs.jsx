import React from 'react';

export default function Inputs(props) {
  const {
    id,
    type = 'text',
    placeholder,
    name,
    value,
    onChange,
    empty,
    className,
    ...rest
  } = props;
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
        className={`border rounded-md px-5 py-2 text-very-dark-violet placeholder:text-light-violet focus:border-gradient-one outline-none ${
          !empty ? 'border-light-violet' : 'border-red'
        } ${className}`}
      />
    </>
  );
}
