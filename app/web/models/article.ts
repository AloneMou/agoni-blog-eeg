export default {
  namespace: 'article',
  state: {
    detail: {
      id: '',
      title: '',
      isOriginal: true,
      author: '',
      provenanceLink: '',
      creator: '',
      content: '',
      summary: '',
      type: 1,
    },
  },
  effects: {},
  reducers: {
    detail(state, {payload}) {
      state.detail = payload;
    },
  },
};
