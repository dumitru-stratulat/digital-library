import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider as ShelfProvider } from  './context/ShelfContext' 
import { Provider as ReviewProvider } from './context/ReviewContext'
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.render(
  <ThemeProvider>
    <ReviewProvider>
      <ShelfProvider>
        {/* Deleted strictmode bacause of ant design, bad move */}
        <App />


      </ShelfProvider>
    </ReviewProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
