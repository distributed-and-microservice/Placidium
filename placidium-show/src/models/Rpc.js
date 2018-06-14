import { queryAll, queryOne, updateOne } from '../services/Rpc'
export default {

  namespace: 'rpc',

  state: {
    rpcInfos: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetchAll({ payload }, { call, put }) {  // eslint-disable-line
      const { data } = yield call(queryAll);
      if (data.success) {
        yield put({
          type: 'update',
          payload: {
            rpcInfos: data.value,
          },
        });
      }
    },
    *fetchOne({ payload, success }, { call, put }) {
      const { data } = yield call(queryOne, payload);
      if (data.success) {
        success(data.value);
      }
    },
    *updateRpc({ payload, success, error }, { call, put }) {
      const { data } = yield call(updateOne, payload);
      if (data.success) {
        success(data.value);
      } else {
        error(data.errorMessage);
      }
    }
  },

  reducers: {
    update(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
