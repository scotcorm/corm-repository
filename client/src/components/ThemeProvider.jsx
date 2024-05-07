import React from 'react';
// import useSelector to have access to redux toolkit global states
import { useSelector } from 'react-redux';

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className='bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen'>
        {children}
      </div>
    </div>
  );
}
// min-h-screen pushes the footer to take up blank space at the bottom
// then wrap the site with this themeProvider in main.jsx
