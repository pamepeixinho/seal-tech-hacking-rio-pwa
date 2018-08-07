/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Logo from './logo.png';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HomePageTeacher from '../HomePageTeacher';

export default function App() {
  return (
    <div>
      <img
        src={Logo} style={{
          height: '31px',
          width: '42px',
          position: 'absolute',
          left: '24px',
          top: '24px',
          background: 'none',
        }}
      />
      <Switch>
        <Route exact path="/" component={HomePageTeacher} />
        <Route exact path="/professor" component={HomePageTeacher} />
        <Route exact path="/aluno" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
