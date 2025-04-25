import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
import BookDetailPage from './pages/BookDetailPage';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/books" exact component={BookListPage} />
          <Route path="/book/:id" component={BookDetailPage} />
          <Route path="/profile" component={UserProfilePage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
