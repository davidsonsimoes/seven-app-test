import { loadUsersSuccess, LOAD_USERS } from '../actions/users';
import usersMiddleware from './users';

describe('users middleware', () => {
  describe('load users flow', () => {
    const [loadUsersFlow] = usersMiddleware;

    const dummyUsers = {
      id: '1',
      title: 'Dummy users',
      completed: true
    };
    const api = {
      users: {
        getAll: jest
          .fn()
          .mockImplementationOnce(
            () => new Promise((resolve) => resolve([dummyUsers]))
          )
      }
    };
    const dispatch = jest.fn();
    const next = jest.fn();
    const action = {
      type: LOAD_USERS
    };

    it('passes action to next middleware', async () => {
      await loadUsersFlow({ api })({ dispatch })(next)(action);

      expect(next).toHaveBeenCalledWith(action);
    });

    it('calls api.users.getAll at least once', async () => {
      await loadUsersFlow({ api })({ dispatch })(next)(action);

      expect(api.users.getAll).toHaveBeenCalled();
    });
  });
});
