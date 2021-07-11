import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/carousel.js';
import SimpleReactLightbox from 'simple-react-lightbox';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox >
      <App />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
);
