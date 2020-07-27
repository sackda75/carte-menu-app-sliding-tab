import React from 'react'
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { TabBar } from './TabBar'
import { EntreesScreen } from '../../screens/EntreesScreen'
import { PlatsScreen } from '../../screens/PlatsScreen'
import { DessertsScreen } from '../../screens/DessertsScreen'
import { BoissonsScreen } from '../../screens/BoissonsScreen'
import { VideoScreen } from '../../screens/VideoScreen'
import { useSafeArea } from 'react-native-safe-area-context'
import { View, StyleSheet } from 'react-native'

export const BottomMenu = () => {
  const Tab = createBottomTabNavigator()
  return (
    <View style={styles.leno1}>
      <Tab.Navigator
        tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
      >
        <Tab.Screen name='silverware-fork' component={EntreesScreen} />
        <Tab.Screen name='pot-mix' component={PlatsScreen} />
        <Tab.Screen name='food-apple' component={DessertsScreen} />
        <Tab.Screen name='bottle-wine' component={BoissonsScreen} />
        <Tab.Screen name='information-outline' component={VideoScreen} />
      </Tab.Navigator>
      {useSafeArea().bottom > 0 && (
        <View
          style={{
            height: useSafeArea().bottom - 5,
            backgroundColor: 'white'
          }}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  leno1: {
    flex: 1, 
    position: 'relative'
  }
})