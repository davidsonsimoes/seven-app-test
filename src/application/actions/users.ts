export const LOAD_USERS = '[user] load';
export const LOAD_USERS_SUCCESS = '[user] load success';
export const LOAD_USERS_FAILURE = '[user] load failure';
export const SET_USERS = '[user] set';
export const PUT_USER = '[user] put';

export const loadUsers = {
  type: LOAD_USERS
};

export const loadUsersSuccess = (user: any) => ({
  type: LOAD_USERS_SUCCESS,
  payload: user
});

export const loadUsersFailure = (error: any) => ({
  type: LOAD_USERS_FAILURE,
  payload: error
});

export const setUsers = (users: any) => ({
  type: SET_USERS,
  payload: users
});
