import React from 'react';
import clsx from 'clsx';

const STYLES = {
  colors: {
    primary: 'focus:ring-primary-300',
    secondary: 'focus:ring-secondary-300',
    success: 'focus:ring-success-300',
    warning: 'focus:ring-warning-300',
    danger: 'focus:ring-danger-300',
    info: ' focus:ring-info-300',
  },
};

export default function CloseButton({ onClick, variant, className }) {
  const classNames = clsx(
    'p-1 focus:ring-4  rounded',
    variant && STYLES.colors[variant],
    className
  );
  return (
    <button onClick={onClick} className={classNames}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M18 6L6 18M6 6L18 18'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
}
