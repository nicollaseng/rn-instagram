import React from 'react';
import {useEffect, useState} from 'react';

import {Root} from 'native-base';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

// Redux
import {Provider} from 'react-redux';
import store from './redux/store';

// Navigation
import Routers from './routes';

// Global
import {ViewContainer} from './global/general';
import {colors} from './global';

import codePush from 'react-native-code-push';

// __DEV__ Debugger
import './config/ReactotronConfig';

console.disableYellowBox = true;

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
};

const App = () => {
  const [initializate, setInitializate] = useState(false);

  useEffect(() => {
    if (!initializate) setInitializate(true);

    if (initializate) {
      SplashScreen.hide();
    }
  });

  return (
    <Root>
      <Provider store={store}>
        <ViewContainer>
          {initializate ? (
            <StatusBar
              translucent
              backgroundColor={colors.primary}
              barStyle="light-content"
            />
          ) : null}
          <Routers />
        </ViewContainer>
      </Provider>
    </Root>
  );
};

export default codePush(codePushOptions)(App);
