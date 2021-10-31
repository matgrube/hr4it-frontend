import React from 'react';
import "antd/dist/antd.css";
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initStore } from './store/initStore';
import { Routes } from './routes/Routes';

const history = createBrowserHistory();
const store = initStore();

class App extends React.Component {
  render(): JSX.Element  {
    return(
      <Provider store={store}>
        <div className="app">
          <Router history={history}>
            <Routes />
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App;
