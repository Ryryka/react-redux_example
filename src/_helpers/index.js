import {mainConstants} from '../_constants';

export function request(type, data) {
  return {type, data};
}

export function success(type, payload) {
  return {type, payload};
}

export function failure(error) {
  return {
    type: mainConstants.REQUEST_FAILED,
    payload: error,
  };
}
