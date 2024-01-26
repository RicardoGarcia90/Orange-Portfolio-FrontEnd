import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: '#444466',
      main: '#222244',
      dark: '#111133',
    },
    secondary: {
      light: '#FFEECC',
      main: '#FF5522',
    },
    error: {
      main: '#DD0000',
    },
    warning: {
      main: '#FF8833',
    },
    success: {
      main: '#118822',
    },
    info: {
      main: '#315FCE',
    },
    text: {
      secondary: '#515255',
    }

  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
