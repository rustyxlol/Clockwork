import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import 'normalize.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider  theme={{ colorScheme: 'light' }}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
