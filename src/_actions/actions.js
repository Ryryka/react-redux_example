import mainRequest from '../_services';
import {mainConstants} from '../_constants';
import {request, failure, success} from '../_helpers';

function getUsers() {
  return dispatch => {
    dispatch(request(mainConstants.WAIT_FOR_RESPONSE, 'users'));
    mainRequest('get', 'users').then(data => {
      if (data.status === 'error') {
        dispatch(failure(data));
      } else {
        dispatch(success(mainConstants.GET_USERS_SUCCESS, data.data));
      }
    });
  };
}

function createUser(req) {
  return dispatch => {
    dispatch(request(mainConstants.WAIT_FOR_RESPONSE, req));
    mainRequest('post', 'users', req).then(data => {
      if (data.status === 'error') {
        dispatch(failure(data));
      } else {
        const payload = {...req, ...data.data};
        dispatch(success(mainConstants.CREATE_USER_SUCCESS, payload));
      }
    });
  };
}

function deleteUser(req) {
  const {id} = req;
  return dispatch => {
    dispatch(request(mainConstants.WAIT_FOR_RESPONSE, req));
    mainRequest('delete', `users/${id}`, id).then(data => {
      if (data.status === 'error') {
        dispatch(failure(data));
      } else {
        dispatch(success(mainConstants.DELETE_USER_SUCCESS, req));
      }
    });
  };
}

export const actions = {
  getUsers,
  createUser,
  deleteUser,
};
