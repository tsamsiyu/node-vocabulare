import config from './config';
import { loadSettings } from './store/actions/settings';
import store from './store';

store.dispatch(loadSettings(config));

export { store, config };