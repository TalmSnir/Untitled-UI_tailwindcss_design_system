import React from 'react';

export default function AlertTitle({ children }) {
  return (
    <span className='text-gray-900 text-lg font-bold capitalize'>
      {children}
    </span>
  );
}
