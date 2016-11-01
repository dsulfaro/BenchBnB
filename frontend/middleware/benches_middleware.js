import { REQUEST_BENCHES,
         RECEIVE_BENCHES,
         receiveBenches} from '../actions/bench_actions.js';
import { fetchBenches } from '../util/bench_api_util';

const BenchesMiddleware = ({getState, dispatch}) => next => action => {

  const fetchBenchesSuccess = data => dispatch(receiveBenches(data));

  switch(action.type){
    case REQUEST_BENCHES:
      fetchBenches(fetchBenchesSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default BenchesMiddleware;
