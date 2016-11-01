import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import BenchesMiddleware from './benches_middleware';

const MasterMiddleware = applyMiddleware(
  SessionMiddleware,
  BenchesMiddleware
);

export default MasterMiddleware;
