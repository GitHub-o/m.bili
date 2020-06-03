import types from '../actions/rank'
import * as reducers from '../reducers/rank'

export default (ctx) => {
  return (type, ...args) => {
    switch (type) {
      case types.FIELD:
        reducers.handleChangeField(ctx, ctx.$data, ...args);
        break;

      case types.LIST_DATA:
        reducers.getListData(ctx, ctx.$data, ...args);
        break;

      case types.CACHE_DATA:
        reducers.checkCacheData(ctx, ctx.$data, ...args);
        break;
      default:
        break;
    }
  }
}
