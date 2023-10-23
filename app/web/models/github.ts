export default {
  namespace: 'github',
  state: {
    list: [],
  },
  effects: {},
  reducers: {
    list(state, {payload}) {
      console.log("测试")
      state.list = payload;
    },
  },
};
