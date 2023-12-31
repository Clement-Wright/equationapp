import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from 'aws-amplify';
import { ThemeProvider } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import {EquationNoteCardCollection, EquationNoteCard, NewNavBar} from "./ui-components";
import { BrowserRouter } from 'react-router-dom';
import {studioTheme} from './ui-components';
Amplify.configure(awsconfig);



const container = document.getElementById("root");

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={studioTheme}>
        <App/>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
