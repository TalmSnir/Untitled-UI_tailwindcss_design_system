import React from 'react';

import CloseButton from '../CloseButton';

export default function NotificationHeader({
  children,
  closeButton,
  onClose,
  show,
}) {
  return (
    <div className='flex items-center justify-between mb-8'>
      {children}
      {closeButton && <CloseButton onClose={onClose} />}
    </div>
  );
}
