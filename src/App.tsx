import './App.css'
import React from 'react'
import { useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './AppRoutes/AppRoutes';
import { Provider } from 'react-redux';
import {Store} from './Redux/store'

// ThemeProvider - Not Working

export type Theme = {
  colors: {
    buttonLogin: string;
    bgNavbar: string;
    bgTitlebar: string;
    bgContent: string;
    button: string;
  };
  fontSize: string;
};



const App: React.FC = () =>{

  

  const theme:Theme = useMemo(() => ({
    colors: {
      buttonLogin: '#0070f3',
      bgNavbar: '#fff',
      bgTitlebar: '#fff',
      bgContent: '#aaa',
      button:''
    },
    fontSize: '16px',
  }), []);
  return (
    <ThemeProvider theme ={theme}>
      <Provider store={Store}>
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  )
}

export default App
