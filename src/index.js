import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const injectGA = () => {
  if (typeof window == 'undefined') {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-BRCY2C9YJX');
};

root.render(
  <React.StrictMode>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-BRCY2C9YJX">
    </script>
    <script>
      {injectGA}
    </script>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
