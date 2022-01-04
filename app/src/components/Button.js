import React from 'react';
import clsx from 'clsx';
import { styles } from '../styles';
export default React.forwardRef(function Button({
  ref,
  children,
  onClick,
  size = 'sm',
  variant = 'primary',
  className,
  shape,
  block,
  ...restProps
}) {
  const classNames = clsx(
    `inline-block  font-semibold  hover:opacity-90 focus:ring  `,
    variant && styles.colors.bg.bold[variant],
    shape && styles.shapes[shape],
    size && styles.sizes[size],
    block && 'w-full flex item-center justify-center',
    className
  );
  return (
    <button ref={ref} onClick={onClick} className={classNames} {...restProps}>
      {children}
    </button>
  );
});
