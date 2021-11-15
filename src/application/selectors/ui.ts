type StateUi = {
  loading: boolean;
};

type StateType = {
  ui: StateUi;
};

export const getLoading = (state: StateType) => state.ui.loading;
