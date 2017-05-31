import React from 'react';
import './App.css';

import { createStore, applyMiddleware } from 'redux';
import projectReducers from './reducers';
import { Provider } from 'react-redux';
import { browserHistory, Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux';

import { SESSION_STORAGE_KEY } from './constants'

import Home from './routes/Home';
import Header from './routes/Header';
import Friends from './routes/Friends';
import Meetings from './routes/Meetings';
import MeetingDetail from './routes/MeetingDetail';
import Login from './routes/Login';
import NoMatch from './routes/NoMatch';
import '../assets/react-toolbox/theme.css';
import theme from '../assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';


const App = () => {

  const middleware = routerMiddleware(browserHistory);
  const store = createStore(projectReducers, applyMiddleware(middleware));

  let requireAuth = function ({history, location}) {
    let profileObj = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY.PROFILE));
    if (profileObj && profileObj.isLogin) {
      let pathname = location.pathname;
      if (pathname.split('/meetings').length > 1) {
          return (<Meetings />);
      } else if (pathname.split('/meetings/').length > 1) {
      console.log(location.pathname);
      console.log(pathname.split('/meetings'));
          return (<MeetingDetail />);
      } else {
          return (<Home />);
      }
    } else {
      return (<Redirect to="/login"/>);
    }
  };

  return (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <div>
            <Header></Header>
            <div className="contents">
              <Switch>
                <Route exact path="/" render={requireAuth} />
                <Route exact path="/meetings" render={requireAuth} />
                <Route path="/meetings/:id" render={requireAuth} />
                <Route path="/login" component={Login} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  </Provider>
  );
};

export default App;
