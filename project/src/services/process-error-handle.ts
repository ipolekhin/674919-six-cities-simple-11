import {store} from '../store';
// import {clearErrorAction, setError} from '../store/data/reducer';
import {setError} from '../store/data/reducer';
import {clearErrorAction} from '../store/api';
import {giveMeSomeTime} from '../store/data/api';

const ProcessErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
  store.dispatch(giveMeSomeTime());
};

export default ProcessErrorHandle;
