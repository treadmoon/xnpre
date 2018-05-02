import * as types from "./mutation-types";

export default {
  [types.ADD_FUND](state, fund) {
    state.fundList.push(fund);
  }
}
