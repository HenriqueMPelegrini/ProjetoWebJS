import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//Importar bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './redux/store';
import { Provider } from 'react-redux';


// PAra uso do redux e necessario a instalação dos seguintes modulos:
//npm install react-redux @reduxjs/toolkit
//Não esqueça de  installar as  extrensõe sReact Developer Tools e redux devtools no navegador



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* forncendo uma store para a aplicação com provider */}
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

