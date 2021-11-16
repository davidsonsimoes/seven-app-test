import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './application/store';
import services from './infrastructure/services';
import App from './views';
import reportWebVitals from './reportWebVitals';
import { Wrapper, GlobalStyle } from './views/skin/base';

ReactDOM.render(
  <Wrapper>
    <GlobalStyle />
    <Provider store={configureStore(services)}>
      <App />
    </Provider>
  </Wrapper>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
