import React from 'react';
import clsx from 'clsx';

const STYLES = {
  colors: {
    primary: 'bg-primary-600 text-primary-100 focus:ring-primary-300',
    secondary: 'bg-secondary-600 text-secondary-100 focus:ring-secondary-300',
    success: 'bg-success-600 text-success-100 focus:ring-success-300',
    warning: 'bg-warning-600 text-warning-100 focus:ring-warning-300',
    danger: 'bg-danger-600 text-danger-100 focus:ring-danger-300',
    info: 'bg-info-600 text-info-100 focus:ring-info-300',

    'outline-primary':
      'text-primary-600 ring ring-current focus:outline-0 focus:bg-primary-50',
    'outline-secondary': 'text-secondary-600 focus:ring-secondary-300',
    'outline-success': 'text-success-600 focus:ring-success-300',
    'outline-warning': 'text-warning-600 focus:ring-warning-300',
    'outline-danger': ' text-danger-600 focus:ring-danger-300',
    'outline-info': ' text-info-600 focus:ring-info-300',

    'link-primary': ' text-primary-700 focus:ring-primary-300',
    'link-secondary': ' text-secondary-700 focus:ring-secondary-300',
    'link-success': ' text-success-700 focus:ring-success-300',
    'link-warning': ' text-warning-700 focus:ring-warning-300',
    'link-danger': ' text-danger-700 focus:ring-danger-300',
    'link-info': ' text-info-700 focus:ring-info-300',
  },
  shapes: {
    pill: 'rounded-full',
    rounded: 'rounded',
  },
  sizes: {
    xs: 'py-1 px-3',
    sm: 'py-2 px-4 ',
    md: 'py-3 px-5',
    lg: 'py-4 px-6',
    xl: 'py-5 px-7',
  },
};
export default React.forwardRef(function Button({
  ref,
  children,
  onClick,
  size,
  variant,
  className,
  shape,
  block,
  theme,
  ...rest
}) {
  const classNames = clsx(
    `inline-block  font-semibold  hover:opacity-90 focus:ring cursor-pointer `,
    theme && !variant && STYLES.colors[theme],
    variant && STYLES.colors[variant],
    shape && STYLES.shapes[shape],
    size && variant && !variant?.includes('link') && STYLES.sizes[size],
    block && 'w-full flex item-center justify-center',
    className
  );
  return (
    <button ref={ref} onClick={onClick} className={classNames} {...rest}>
      {children}
    </button>
  );
});
