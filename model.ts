import { Reducer } from 'redux';
import { Effect } from 'dva';
import { commonApiEffect } from '@/utils/model';
import { routerRedux } from 'dva/router';
import { demoGet } from './service';

export interface StateType {
  status: undefined;
}

export interface EvaluationModelType {
  namespace: string;
  state: StateType;
  effects: {
    demoGet: Effect;
    demoPost: Effect;
  };
  reducers: {
    setState: Reducer<StateType>;
  };
}

const Model: EvaluationModelType = {
  namespace: 'demo',
  state: {
    status: undefined,
  },
  effects: {
    *demoGet(action, effects) {
      const { call } = effects;
      yield call(commonApiEffect, action, effects, demoGet);
    },
    *demoPost(action, effects) {
      const { payload } = action;
      const { put } = effects;
      yield put(routerRedux.push(`/goods/pay/${payload.orderId}`));
    },
  },

  reducers: {
    setState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default Model;
