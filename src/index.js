import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContentstackUIExtension from "@contentstack/ui-extensions-sdk";

ContentstackUIExtension.init().then((extension) => {
  ReactDOM.render(
    <React.StrictMode>
      <App stack={extension} />
    </React.StrictMode>,
    document.getElementById('root')
  );

})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
