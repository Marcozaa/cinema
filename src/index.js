import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from "react-router-dom";
import Store from './Store';
import { Provider } from 'react-redux'
//  Estendiamo il tema per includere font custom, colori, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
    bg: '#0E1F60',
  },
}

const theme = extendTheme({ colors })


ReactDOM.render(
  <MantineProvider theme={{ colorScheme: 'dark' }}>
    <Provider store={Store}>
    <BrowserRouter>
  <React.StrictMode>
 
    <App />
 
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
  </MantineProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
