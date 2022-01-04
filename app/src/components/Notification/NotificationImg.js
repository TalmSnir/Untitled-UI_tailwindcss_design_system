import React from 'react';

export default function NotificationImg({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt || 'notification'}
      className='object-cover w-full h-full'
    />
  );
}
