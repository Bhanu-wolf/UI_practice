/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import ScreenOneContainer from './screens/ScreenOne/container';
import ScreenSecondContainer from './screens/ScreenSecond/container';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      {/* <ScreenOneContainer /> */}
      <ScreenSecondContainer/>
    </SafeAreaView>
  );
}

export default App;
