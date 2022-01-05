import React from 'react';

export const context = React.createContext(null);
const styles = {
  colors: {
    primary: 'bg-primary-50 text-primary-700 ring-1 ring-primary-300',
    secondary: 'bg-secondary-50 text-secondary-700 ring-1 ring-secondary-300',
    success: 'bg-success-50 text-success-700 ring-1 ring-success-300',
    warning: 'bg-warning-50 text-warning-700 ring-1 ring-warning-300',
    danger: 'bg-danger-50 text-danger-700 ring-1 ring-danger-300',
    info: 'bg-info-50 text-info-700 ring-1 ring-info-300',
  },
};
export default function AlertContext({ children, theme }) {
  const [componentTheme, setComponentTheme] = React.useState(null);
  React.useEffect(() => {
    if (theme) {
      theme.includes('-')
        ? setComponentTheme(theme.split('-')[1])
        : setComponentTheme(theme);
    }
  }, [theme]);

  return (
    <context.Provider value={{ styles, theme: componentTheme }}>
      {children}
    </context.Provider>
  );
}
