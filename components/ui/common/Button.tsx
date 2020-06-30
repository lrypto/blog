import React from 'react';

/*  allows client to add additional tailwind styles (twClasses) to be appended 
    another option/alternative is to expose some design 
    system options (sm, lg, xl, blue, grey, etc.)
*/



const SMALL_BASE = `inline-block px-1 py-2 rounded-lg text-xs
  focus:outline-none focus:shadow-outline uppercase tracking-wider font-semibold`;

const BASE = `inline-block px-5 py-3 rounded-lg text-sm
  focus:outline-none focus:shadow-outline uppercase tracking-wider font-semibold`;


const DEFAULT_BUTTON = ` bg-gray-400 hover:bg-gray-300 
  active:bg-gray-500 text-gray-700`;

const PRIMARY_BUTTON = ` bg-indigo-500 hover:bg-indigo-400 
  active:bg-indigo-600 text-white`;

const DARK_BUTTON = ` bg-blue-800 hover:bg-blue-600 
  active:bg-blue-700 text-white`;

const HIGHLIGHT_BUTTON = ` bg-orange-500 hover:bg-orange-400 
  active:bg-orange-600 text-white`;

/* 
  Passes through children, additional tailwind/css classes and 
  button props (expecting onClick)
*/


interface ButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  type?: string;
  size?: string;
}


export const Button = ({ children, type, size, className, ...buttonProps }: ButtonProps) => {
  let buttonClasses = '';

  const BASE_BUTTON = size === 'sm' ? SMALL_BASE : BASE;


  switch (type) {
    case 'primary':
      buttonClasses = BASE_BUTTON + PRIMARY_BUTTON;
      break;
    case 'dark':
      buttonClasses = BASE_BUTTON + DARK_BUTTON;
      break;
    case 'highlight':
      buttonClasses = BASE_BUTTON + HIGHLIGHT_BUTTON;
      break;
    case 'secondary':
      break;
    case 'ghost':
      break;
    default:
      buttonClasses = BASE_BUTTON + DEFAULT_BUTTON;
  }

  return (
    <a href="/"
      className={`${buttonClasses} ${className}`}
      {...buttonProps}
    >
      {children}
    </a>
  )
}
