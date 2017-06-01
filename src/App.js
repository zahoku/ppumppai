import React from 'react';
import './App.css';

import { createStore, applyMiddleware } from 'redux';
import projectReducers from './reducers';
import { Provider } from 'react-redux';
import {browserHistory} from 'react-router';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from './routes/AuthRoute';
import { routerMiddleware } from 'react-router-redux';

import Home from './routes/Home';
import Header from './routes/Header';
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

  return (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <div>
            <Header></Header>
            <div className="contents">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/meetings" component={Meetings}/>
                <Route path="/meetings/:id" component={MeetingDetail}/>
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
