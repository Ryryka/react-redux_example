import React, {Component} from 'react';
import {Provider} from 'react-redux';

import store from './_store';
import UsersTable from './components/UsersTable';
import {NewUserForm, Summary} from './components';

class App extends Component {
  state = {};

  render() {
    return (
      <Provider store={store}>
        <div>
          <UsersTable />
          <NewUserForm />
          <Summary />
        </div>
      </Provider>
    );
  }
}

export default App;
