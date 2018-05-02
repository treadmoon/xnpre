import * as types from "./mutation-types"

export default {
  addfund({
    commit
  }, fund) {
    commit(types.ADD_FUND, fund)
  }
}
