import types from '../actions/index'
import * as reducers from '../reducers/index'

export default (ctx) => {
  return (type, ...args) => {
    switch (type) {
      case types.HOME_DATA:
        reducers.getHomeData(ctx, ctx.$data, ...args);
        break;

      case types.FEATURE_DATA:
        reducers.getFeatureData(ctx, ctx.$data, ...args);
        break;
      default:
        break;
    }
  }
}
