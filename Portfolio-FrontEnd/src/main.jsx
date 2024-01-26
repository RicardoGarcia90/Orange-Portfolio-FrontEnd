import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#EDEFF2',
      colorPrincipal70: '#EDEFF2',
      colorPrincipal80: '#444466',
      colorPrincipal90: '#222244',
      colorPrincipal100: '#111133',
    },
    secondary: {
      main: '#FFEECC',
      colorSecondary60: '#FFEECC',
      colorSecondary70: '#FFCC99',
      colorSecondary80: '#FFAA66',
      colorSecondary90: '#FF8833',
      colorSecondary100: '#FF5522',
      colorSecondary110: '#CC4400',
      colorSecondary120: '#993300',
      colorSecondary130: '#662200',
    },
    neutral: {
      colorNeutral60: '#FCFDFF',
      colorNeutral70: '#E6E9F2',
      colorNeutral80: '#C2C4CC',
      colorNeutral90: '#A1A3AA',
      colorNeutral100: '#818388',
      colorNeutral110: '#515255',
      colorNeutral120: '#303133',
      colorNeutral130: '#0B0C0D',
    },
    success: {
      main: '#EEFFBB',
      colorSuccess60: '#EEFFBB',
      colorSuccess70: '#BBEE88',
      colorSuccess80: '#88CC66',
      colorSuccess90: '#55BB44',
      colorSuccess100: '#229922',
      colorSuccess110: '#118822',
      colorSuccess120: '#006622',
      colorSuccess130: '#004422',
    },
    alert: {
      colorAlert60: '#FFFFCC',
      colorAlert70: '#FFEE99',
      colorAlert80: '#FFEE66',
      colorAlert90: '#FFDD33',
      colorAlert100: '#FFCC00',
      colorAlert110: '#CC9900',
      colorAlert120: '#997700',
      colorAlert130: '#664400',
    },
    error: {
      main: '#FFDDCC',
      colorError60: '#FFDDCC',
      colorError70: '#FFAA99',
      colorError80: '#FF7766',
      colorError90: '#FF4433',
      colorError100: '#DD0000',
      colorError110: '#BB0000',
      colorError120: '#880000',
      colorError130: '#660000',
    },
    info: {
      main: '#ADCBFA',
      colorInfo60: '#ADCBFA',
      colorInfo70: '#82A9F0',
      colorInfo80: '#608AE1',
      colorInfo90: '#315FCE',
      colorInfo100: '#2348B1',
      colorInfo110: '#183594',
      colorInfo120: '#0F2477',
      colorInfo130: '#091862',
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
      color: '#0B0C0D'
    },
    h3: {
      fontSize: '48px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '40px' /* 83.333% */,
      color: '#0B0C0D'
    },
    h4: {
      fontSize: '34px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '34px' /* 1007% */,
      letterSpacing: '0.25px',
      color: '#0B0C0D'
    },
    h5: {
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '24px' /* 100% */,
      color: '#0B0C0D'
    },
    h6: {
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '20px' /* 100% */,
      letterSpacing: '0.15px',
      color: '#0B0C0D'
    },
    subtitle1: {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '16px' /* 100% */,
      letterSpacing: '0.15px',
      color: '#0B0C0D'
    },
    subtitle2: {
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '24px' /* 171.429% */,
      letterSpacing: '0.1px',
      color: '#0B0C0D'
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
      color: '#0B0C0D'
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
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
