import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import App from './components/App.jsx';
import 'modern-normalize';
import './index.css';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);