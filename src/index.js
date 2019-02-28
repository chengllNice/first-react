import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/'
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader';
import store from './store/store';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import './assets/js/setRem';
import './assets/css/base.css'

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )
};
render(Route);
// ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./router/', () => {
    render(Route);
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
