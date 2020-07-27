import React from 'react'
require('react-native').unstable_enableLogBox()
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { BottomMenu } from './src/components/BottomMenu/BottomMenu'

// https://medium.com/@baptiste.arnaud95/animated-sliding-tab-bar-in-react-native-aa3b9da02af9

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
          <BottomMenu/>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}