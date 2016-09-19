import config from './config';
import { load } from './store/actions/session';
import store from './store';

store.dispatch(load());

export { store, config };