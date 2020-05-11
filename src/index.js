import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App';
import Table from './components/table';
import Table1 from './components/newTable';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
  <App />
  <Table />
  <Table1 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
