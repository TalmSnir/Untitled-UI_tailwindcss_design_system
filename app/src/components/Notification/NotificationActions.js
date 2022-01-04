import React from 'react';

export default function NotificationActions({ children, position }) {
  return (
    <div
      className={`mt-8 flex gap-4 items-center ${
        position === 'start' ? 'justify-start' : 'justify-end'
      }`}>
      {children}
    </div>
  );
}
