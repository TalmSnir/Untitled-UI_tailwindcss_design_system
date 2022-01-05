import React from 'react';

import CloseButton from '../CloseButton';
import { context } from './AlertContext';

export default function AlertHeader({ children, closeButton, onClose }) {
  const { theme } = React.useContext(context);
  return (
    <div className='flex items-center justify-between mb-8'>
      {children}
      {closeButton && <CloseButton onClose={onClose} variant={theme} />}
    </div>
  );
}
