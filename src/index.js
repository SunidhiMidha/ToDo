import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from './components/store'
// import { Provider } from 'react-redux';
// import { addTask, ADD_TASK, COM_TASK, toggleTask } from './components/actions/types';

// const myState = store.getState()
// store.subscribe(() => console.log(store.getState()));
// const unsubscribe = store.subscribe(() =>
//   console.log('State after dispatch: ', store.getState())
// )
// store.dispatch(addTask("hello"))
// store.dispatch(toggleTask("clean the car"))

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store = {store} > */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
