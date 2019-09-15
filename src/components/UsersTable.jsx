/* eslint-disable camelcase */
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {actions} from '../_actions/actions';

const UsersTable = props => {
  useEffect(_ => {
    props.dispatch(actions.getUsers());
  }, []);

  const deleteUser = id => {
    const {dispatch} = props;

    dispatch(actions.deleteUser({id}));
  };

  const getUsersTableHead = () => {
    return (
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>DOB</th>
        <th>Location</th>
        <th>Actions</th>
      </tr>
    );
  };

  const getUsersTableBody = () => {
    const {users} = props;

    return users.map(user => {
      const {id, first_name, last_name, dob, location} = user;

      return (
        <tr key={id}>
          <td>{first_name}</td>
          <td>{last_name}</td>
          <td>{dob}</td>
          <td>{location}</td>
          <td>
            <button onClick={_ => deleteUser(id)}>Delete</button>
          </td>
        </tr>
      );
    });
  };

  const getUsersTable = () => (
    <table>
      <thead>{getUsersTableHead()}</thead>
      <tbody>{getUsersTableBody()}</tbody>
    </table>
  );

  return <div>{getUsersTable()}</div>;
};

function mapStateToProps(state) {
  const {users} = state;

  return {
    users,
  };
}

export default connect(mapStateToProps)(UsersTable);

UsersTable.propTypes = {
  dispatch: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.object),
};

UsersTable.defaultProps = {
  users: [],
};
