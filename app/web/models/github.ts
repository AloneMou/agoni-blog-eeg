export default {
  namespace: 'github',
  state: {
    list: [],
  },
  effects: {},
  reducers: {
    list(state, { payload }) {
      state.list = payload;
    },
  },
};
