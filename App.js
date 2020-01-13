/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import AppContainer from './Source/Navigations/Navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ListView from './Source/ListView/ListView'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    )
  }
}



