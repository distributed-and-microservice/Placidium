import { queryAll, saveSystem, updateSystem } from '../services/System'
export default {

  namespace: 'system',

  state: {
    systemInfos: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    * fetchAll({ payload }, { call, put }) {  // eslint-disable-line
      const { data } = yield call(queryAll);
      if (data.success) {
        yield put({
          type: 'update',
          payload: {
            systemInfos: data.value,
          },
        });
      }
    },
    * addSystem({ payload, success,error }, { call, put }) {
      const { data } = yield call(saveSystem, payload);
      if(data && data.success) {
        success();
      } else {
        error();
      }
    },
    * updateSystem({ payload, success, error }, { call, put }) {
      console.log(payload)
      const { data } = yield call(updateSystem, payload);
      if(data && data.success) {
        success();
      } else {
        error();
      }
    }
  },

  reducers: {
    update(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
