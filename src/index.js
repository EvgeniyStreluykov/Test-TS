import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/redux-store'
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Provider } from 'react-redux';

let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>
  );
}

rerenderEntireTree(store.getState())
store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state);
});

reportWebVitals();
