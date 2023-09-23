export default {
  namespace: 'test',
  state: {
    title: null,
  },
  effects: {},
  reducers: {
    test(state, { payload }) {
      console.log(payload)
      state.title = 'hello umi';
    },
  },
};
