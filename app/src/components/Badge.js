import React from 'react';

import clsx from 'clsx';
import { styles } from '../styles';

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
    styles.colors.text.bold[variant],
    styles.colors.bg.light[variant],
    styles.shapes[shape],
    styles.sizes[size],
    className
  );

  return (
    <span ref={ref} className={classNames}>
      {children}
    </span>
  );
});
