import React from 'react';

import clsx from 'clsx';

const STYLES = {
  colors: {
    primary: 'bg-primary-50 text-primary-700 focus:ring-primary-300',
    secondary: 'bg-secondary-50 text-secondary-700 focus:ring-secondary-300',
    success: 'bg-success50 text-success-700 focus:ring-success-300',
    warning: 'bg-warning-50 text-warning-700 focus:ring-warning-300',
    danger: 'bg-danger-50 text-danger-700 focus:ring-danger-300',
    info: 'bg-info-50 text-info-700 focus:ring-info-300',
  },
  sizes: {
    xs: 'py-1 px-3',
    sm: 'py-2 px-4 ',
    md: 'py-3 px-5',
    lg: 'py-4 px-6',
    xl: 'py-5 px-7',
  },
  shapes: {
    pill: 'rounded-full',
    rounded: 'rounded',
  },
};
export default React.forwardRef(function Badge({
  ref,
  children,
  variant = 'primary',
  shape = 'square',
  className,
  size = 'sm',
}) {
  const classNames = clsx(
    `inline-block px-4 py-1 font-semibold  `,
    variant && STYLES.colors[variant],
    size && STYLES.sizes[size],
    shape && STYLES.shapes[shape],
    className
  );

  return (
    <span ref={ref} className={classNames}>
      {children}
    </span>
  );
});

// Badge.displayName = 'Badge';
