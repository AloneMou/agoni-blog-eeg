export default {
  namespace: 'test',
  state: {
    title: null,
  },
  effects: {},
  reducers: {
    test(state, {}) {
      state.title = 'hello umi';
    },
  },
};
