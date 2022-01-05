import clsx from 'clsx';
import React from 'react';
import { context } from './AlertContext';

const STYLES = {
  colors: {
    primary: 'text-primary-600',
    secondary: 'text-secondary-600',
    success: 'text-success-600',
    warning: 'text-warning-600',
    danger: 'text-danger-600',
    info: 'text-info-600',
  },
};

export default function AlertSupportText({ children, className }) {
  const { theme } = React.useContext(context);
  const classNames = clsx(
    'text-base font-normal',
    STYLES.colors[theme],
    className
  );
  return <p className={classNames}>{children}</p>;
}
