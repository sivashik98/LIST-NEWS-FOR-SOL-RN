import * as React from 'react';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';
import rootSaga from './store/sagas';
import configureStore from './store/configureStore';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({}, sagaMiddleware);
sagaMiddleware.run(rootSaga);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
