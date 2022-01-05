import React from 'react';
import AlertActions from './AlertActions';
import AlertHeader from './AlertHeader';
import AlertIcon from './AlertIcon';
import AlertSupportText from './AlertSupportText';
import AlertTitle from './AlertTitle';
import clsx from 'clsx';
import AlertContext from './AlertContext';

const STYLES = {
  colors: {
    primary: 'bg-primary-50 text-primary-700 ring-1 ring-primary-300',
    secondary: 'bg-secondary-50 text-secondary-700 ring-1 ring-secondary-300',
    success: 'bg-success-50 text-success-700 ring-1 ring-success-300',
    warning: 'bg-warning-50 text-warning-700 ring-1 ring-warning-300',
    danger: 'bg-danger-50 text-danger-700 ring-1 ring-danger-300',
    info: 'bg-info-50 text-info-700 ring-1 ring-info-300',
  },
};
export default function Alert({ children, show, variant, icon, className }) {
  const classNames = clsx(
    'font-semibold shadow-md p-6 rounded-xl',
    icon && 'flex  gap-8 items-start',
    STYLES.colors[variant],
    className
  );
  return (
    <AlertContext theme={variant}>
      <div show={show} className={classNames}>
        {icon ? (
          <>
            <div>{children.slice(0, 1)}</div>
            <div>{children.slice(1)}</div>
          </>
        ) : (
          { children }
        )}
      </div>
    </AlertContext>
  );
}

Object.assign(Alert, {
  Header: AlertHeader,
  SupportText: AlertSupportText,
  Title: AlertTitle,
  Actions: AlertActions,
  Icon: AlertIcon,
});
