import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1DBEB4',
      contrastText: '#fff',
      fontWeight: 700,

    },
    secondary: {
      main: '#545776',
    },
  },
});

export default function Palette({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}