import store from './store';
import { loadSettings } from './store/actions';

store.dispatch(loadSettings());

export { store };