import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      contrastText: '#EDEFF2',
      light: '#444466',
      main: '#222244',
      dark: '#111133',
    },
    secondary: {
      contrastText: '#FFEECC',
      colorSecondary60: '#FFEECC',
      light: '#FFCC99',
      colorSecondary80: '#FFAA66',
      colorSecondary90: '#FF8833',
      main: '#FF5522',
      colorSecondary110: '#CC4400',
      colorSecondary120: '#993300',
      dark: '#662200',
    },
    neutral: {
      contrastText: '#FCFDFF',
      light: '#E6E9F2',
      colorNeutral80: '#C2C4CC',
      colorNeutral90: '#A1A3AA',
      main: '#818388',
      colorNeutral110: '#515255',
      colorNeutral120: '#303133',
      dark: '#0B0C0D',
    },
    success: {
      contrastText: '#EEFFBB',
      light: '#BBEE88',
      colorSuccess80: '#88CC66',
      colorSuccess90: '#55BB44',
      main: '#229922',
      colorSuccess110: '#118822',
      colorSuccess120: '#006622',
      dark: '#004422',
    },
    warning: {
      contrastText: '#FFFFCC',
      light: '#FFEE99',
      colorAlert80: '#FFEE66',
      colorAlert90: '#FFDD33',
      main: '#FFCC00',
      colorAlert110: '#CC9900',
      colorAlert120: '#997700',
      dark: '#664400',
    },
    error: {
      contrastText: '#FFDDCC',
      light: '#FFAA99',
      colorError80: '#FF7766',
      colorError90: '#FF4433',
      main: '#DD0000',
      colorError110: '#BB0000',
      colorError120: '#880000',
      dark: '#660000',
    },
    info: {
      contrastText: '#ADCBFA',
      light: '#82A9F0',
      colorInfo80: '#608AE1',
      colorInfo90: '#315FCE',
      main: '#2348B1',
      colorInfo110: '#183594',
      colorInfo120: '#0F2477',
      dark: '#091862',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '96px',
      fontStyle: 'normal',
      fontWeight: '300',
      lineHeight: '40px' /* 41.667% */,
      letterSpacing: '-1.5px',
      fontFeatureSettings: "'clig' off, 'liga' off",
      color: '#0B0C0D',
    },
    h2: {
      fontSize: '60px',
      fontStyle: 'normal',
      fontWeight: '300',
      lineHeight: '50px' /* 83.333% */,
      letterSpacing: '-0.5px',
      color: '#0B0C0D',
    },
    h3: {
      fontSize: '48px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '40px' /* 83.333% */,
      color: '#0B0C0D',
    },
    h4: {
      fontSize: '34px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '34px' /* 1007% */,
      letterSpacing: '0.25px',
      color: '#0B0C0D',
    },
    h5: {
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '24px' /* 100% */,
      color: '#0B0C0D',
    },
    h6: {
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '20px' /* 100% */,
      letterSpacing: '0.15px',
      color: '#0B0C0D',
    },
    subtitle1: {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '16px' /* 100% */,
      letterSpacing: '0.15px',
      color: '#0B0C0D',
    },
    subtitle2: {
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '24px' /* 171.429% */,
      letterSpacing: '0.1px',
      color: '#0B0C0D',
    },
    label: {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '24px' /* 150% */,
      letterSpacing: '0.15px',
      fontFeatureSettings: "'clig' off, 'liga' off",
      color: '#0B0C0D',
    },
    body1: {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '16px' /* 100% */,
      letterSpacing: '0.5px',
      color: '#0B0C0D',
    },
    body2: {
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '14px' /* 100% */,
      letterSpacing: '0.25px',
      color: '#0B0C0D',
    },
    caption: {
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '16px' /* 133.333% */,
      letterSpacing: '0.4px',
      color: '#0B0C0D',
    },
    overline: {
      fontSize: '10px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '12px' /* 120% */,
      letterSpacing: '1.5px',
      color: '#0B0C0D',
    },
    button: {
      fontSize: '15px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '26px' /* 173.333% */,
      letterSpacing: '0.46px',
      textTransform: 'uppercase',
      fontFeatureSettings: "'clig' off, 'liga' off",
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        sizeSmall: {
          width: '28px',
          height: '28px',
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
