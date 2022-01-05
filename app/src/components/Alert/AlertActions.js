import React from 'react';
import { context } from './AlertContext';

export default function AlertActions({ children }) {
  const { theme } = React.useContext(context);
  console.log(theme);
  return (
    <div className='mt-8 flex gap-4 items-center justify-start'>
      {children.map(child => {
        // const props = { ...child.props, theme };
        return React.cloneElement(child, { theme: `link-${theme}` });
      })}
    </div>
  );
}
