import React from 'react';

export default function NotificationTitle({ children }) {
  return (
    <span className='text-gray-900 text-lg font-bold capitalize'>
      {children}
    </span>
  );
}
