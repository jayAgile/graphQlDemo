import axios, {AxiosError, AxiosResponse} from 'axios';
import Config from 'react-native-config';
// import {loaderChange} from '../AuthSlice';

const reduxApiMiddleware =
  (store: {dispatch: (arg0: any) => void}) =>
  (next: (arg0: any) => void) =>
  (action: {type: any; payload: any}) => {
    if (next) {
      next(action);
    }

    const {type, payload} = action;

    if (type === 'API') {
      const {
        url,
        data,
        success,
        error,
        //   hideLoader = false,
        method = 'get',
      } = payload;

      // if (!hideLoader) {
      //   store.dispatch(loaderChange(true));
      // }

      return axios({
        baseURL: Config.BASE_URL,
        method,
        url,
        data,
      })
        .then((res: AxiosResponse) => {
          // store.dispatch(loaderChange(false));

          if (success) {
            store.dispatch(success(res.data));
          }

          return Promise.resolve(res.data);
        })
        .catch((err: AxiosError) => {
          // store.dispatch(loaderChange(false));

          if (error) {
            store.dispatch(error(err.response?.data));
          }

          return Promise.reject(err.response?.data);
        });
    }
  };

export default reduxApiMiddleware;
