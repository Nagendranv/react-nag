import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const props = {
  persons: [
    {
      name: 'Nagendran',
      age: '28',
      qualification: 'BE(CSE)',
    },
    {
      name: 'Soundharya',
      age: '25',
      qualification: 'BSC',
    },
    {
      name: 'Srinivasan',
      age: '27',
      qualification: 'BE(EEE)',
    },
    {
      name: 'Sundhara Varadhan',
      age: '28',
      qualification: 'BE(CIVIL)',
    },
    {
      name: 'Gokul',
      age: '28',
      qualification: 'BE(CIVIL)',
    },
    {
      name: 'Manikandan',
      age: '29',
      qualification: 'BE(EEE)',
    },
  ],
};
root.render(
  <StrictMode>
    <App {...props} />
  </StrictMode>
);
