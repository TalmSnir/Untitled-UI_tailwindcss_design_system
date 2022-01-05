import React from 'react';
import BadgeGroupSupport from './BadgeGroupSupport';
export default function BadgeGroup({ children }) {
  return (
    <div className='text-danger-700 font-semibold flex items-center gap-6 py-2 pl-2 pr-4 w-max rounded-full bg-danger-50'>
      {children}
    </div>
  );
}

Object.assign(BadgeGroup, { Support: BadgeGroupSupport });
