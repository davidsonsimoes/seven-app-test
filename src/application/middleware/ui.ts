import { PAGE_LOADED } from '../actions/ui';
import * as usersActions from '../actions/users';

const pageLoadedFlowItem =
  ({ log }: any) =>
  ({ dispatch }: any) =>
  (next: any) =>
  (action: any) => {
    next(action);

    if (action.type === PAGE_LOADED) {
      log('page loaded');
      dispatch(usersActions.loadUsers);
    }
  };

const pageLoadedFlow = [pageLoadedFlowItem];

export default pageLoadedFlow;
