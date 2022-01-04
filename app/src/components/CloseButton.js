import React from 'react';

export default function CloseButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className='p-1 focus:ring-4 focus:ring-primary-100 rounded'>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M18 6L6 18M6 6L18 18'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </button>
  );
}
