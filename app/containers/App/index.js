/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import MainMenu from 'containers/MainMenu/Loadable';
import QuizPage from 'containers/QuizPage/Loadable';
import ErrorPage from 'containers/ErrorPage/Loadable';
import GlobalStyle from '../../global-styles';
import saga from './saga';
import reducer from './reducer';

export default function App() {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainMenu} />
        <Route exact path="/quiz/:subcat" component={QuizPage} />
        <Route path="/error" component={ErrorPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
