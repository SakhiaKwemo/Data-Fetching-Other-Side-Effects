import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Title from './Components/Title';
import Interval from './Components/Interval';
import Fetch from './Components/Fetch';
import Fetch2 from './Components/Fetch2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Fetch2 />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

