import { createTheme, ThemeProvider } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
const theme = createTheme({
  components: {},
  palette: {
    background: { default: '#FFFFFF', paper: '#F7FAFD' },
  },
  typography: (palette) => ({
    fontFamily: '"Open Sans",sans-serif',
    color: 'black',
    allVariants: { fontFamily: '"Open Sans", sans-serif' },

    button: { fontFamily: '"Open Sans"' },
  }),
});
const ErrorElement = () => (
  <div style={{ backgroundColor: 'red' }}>404 Not Found</div>
);

const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <ErrorElement /> },
  { path: '/error', element: <ErrorElement /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
