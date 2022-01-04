import React from 'react';
import AlertActions from './AlertActions';
import AlertHeader from './AlertHeader';
import AlertIcon from './AlertIcon';
import AlertSupportText from './AlertSupportText';
import AlertTitle from './AlertTitle';
import clsx from 'clsx';
const COLORS = {
  primary: 'bg-primary-50 text-primary-700',
  secondary: 'bg-secondary-50 text-secondary-700',
  success: 'bg-success-50 text-success-700',
  warning: 'bg-warning-50 text-warning-700',
  danger: 'bg-danger-50 text-danger-700',
  info: 'bg-info-50 text-info-700',
};
export default function Alert({ children, variant, className }) {
  const classNames = ('font-semibold', COLORS[variant], className);
  return <div className={classNames}>{children}</div>;
}

Object.assign(Alert, {
  Header: AlertHeader,
  SupportText: AlertSupportText,
  Title: AlertTitle,
  Actions: AlertActions,
  Icon: AlertIcon,
});
