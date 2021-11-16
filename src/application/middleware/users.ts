import {
  loadUsersFailure,
  loadUsersSuccess,
  LOAD_USERS,
  PUT_USER,
  setUsers
} from '../actions/users';
import { UserEntityType } from '../../application/entities/UserEntityType';
import * as uiActions from '../actions/ui';

const loadUsersFlow =
  ({ api }: any) =>
  ({ dispatch }: any) =>
  (next: any) =>
  async (action: any) => {
    next(action);

    if (action.type === LOAD_USERS) {
      try {
        dispatch(uiActions.setLoading(true));
        const users = await api.users.getAll();
        dispatch(loadUsersSuccess(users));
        dispatch(uiActions.setLoading(false));
      } catch (error) {
        dispatch(loadUsersFailure(error));
      }
    }
  };

const putUsersFlow =
  () =>
  ({ dispatch, getState }: any) =>
  (next: any) =>
  (action: any) => {
    if (action.type === PUT_USER) {
      const oldUsersClone = getState().users.allUsers.map(
        (user: UserEntityType) => ({
          ...user
        })
      );

      const newUser = action.payload;

      const index = oldUsersClone.findIndex(
        (user: any) => user.id === newUser.id
      );

      oldUsersClone[index] = newUser;

      dispatch(setUsers(oldUsersClone));
    }

    next(action);
  };

const arrayUsersFlow = [loadUsersFlow, putUsersFlow];
export default arrayUsersFlow;
