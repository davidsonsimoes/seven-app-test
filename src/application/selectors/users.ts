type StateAllUsers = {
  allUsers: any;
};

type StateType = {
  users: StateAllUsers;
};
export const getUsers = (state: StateType) => state.users.allUsers;
