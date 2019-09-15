import {mainConstants} from '../_constants';

const INITIAL_STATE = {
  users: [],
};

export default function mainReducer(state = INITIAL_STATE, action) {
  const {type, payload} = action;

  switch (type) {
    case mainConstants.GET_USERS_SUCCESS: {
      return {
        ...state,
        users: [...payload],
      };
    }

    case mainConstants.CREATE_USER_SUCCESS: {
      const _users = [...state.users];
      _users.push(payload);
      return {
        ...state,
        users: _users,
      };
    }

    case mainConstants.DELETE_USER_SUCCESS: {
      const {id} = payload;
      const _users = state.users.filter(user => user.id !== id);
      return {
        ...state,
        users: _users,
      };
    }

    default:
      return state;
  }
}
