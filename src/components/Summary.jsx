import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';

const Summary = props => {
  const {users} = props;

  const getSumOfAges = () => {
    const currentDate = new Date();
    const oldestUsersTimestamps = users
      .map(user => {
        const {dob} = user;
        return moment(dob, 'DD.MM.YYYY').toDate();
      })
      .sort((a, b) => a - b)
      .slice(0, 3);

    const usersAge = oldestUsersTimestamps.map(
      timestamp => new Date(currentDate - timestamp).getFullYear() - 1970,
    );
    const sumOfAges = usersAge.reduce((a, b) => a + b);

    return sumOfAges;
  };

  const getCountOfCityUsers = () => {
    const countUsers = users.filter(user => {
      const {location} = user;
      const _location = location.toLowerCase().trim();

      return _location === 'kyiv' || _location === 'kiev';
    });
    return countUsers.length;
  };

  const getLongestFullName = () => {
    let longestPair = users[0].first_name + users[0].last_name;
    let requiredUser = users[0];

    users.forEach(user => {
      const pair = user.first_name + user.last_name;
      if (pair.length > longestPair.length) {
        longestPair = pair;
        requiredUser = user;
      }
    });

    return `${requiredUser.first_name} ${requiredUser.last_name}`;
  };

  return (
    <div>
      <h3>Summary</h3>

      {users && users.length > 0 && (
        <dl>
          <dt>Count of users from Kyiv or kiev</dt>
          <dd>{getCountOfCityUsers()}</dd>

          <dt>Sum of ages of three oldest users from table</dt>
          <dd>{getSumOfAges()}</dd>

          <dt>Longest string of first name + last name pair</dt>
          <dd>{getLongestFullName()}</dd>
        </dl>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  const {users} = state;

  return {
    users,
  };
}

const connectedSummary = connect(mapStateToProps)(Summary);
export {connectedSummary as Summary};

Summary.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};

Summary.defaultProps = {
  users: [],
};
