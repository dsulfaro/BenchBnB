import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, replace } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import BenchIndexContainer from './benches_show/bench_index_container';

class Root extends React.Component {

  constructor(props) {
    super(props);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _redirectIfLoggedIn() {
    if (this.props.store.getState().session.currentUser) {
      this.props.router.replace("/");
    }
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={BenchIndexContainer} benches={this.props.store.benches} />
            <Route path="/login"
              component={SessionFormContainer}
              onEnter={this._redirectIfLoggedIn} />
            <Route path="/signup"
              component={SessionFormContainer}
              onEnter={this._redirectIfLoggedIn} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Root;
