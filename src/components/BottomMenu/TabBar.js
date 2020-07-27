import React, { useState } from 'react'
import { View, TouchableOpacity, Dimensions, Animated, StyleSheet } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { BottomMenuItem } from './BottomMenuItem'
import { green } from '../../styles'

export const TabBar = ({
  state,
  descriptors,
  navigation
}: BottomTabBarProps) => {
  const [translateValue] = useState(new Animated.Value(0))
  const totalWidth = Dimensions.get('window').width
  const tabWidth = totalWidth / state.routes.length
  return (
    <View style={[styles.tabContainer, { width: totalWidth }]}>
      <View style={styles.ganja1}>
        <Animated.View
          style={[
            styles.slider,
            {
              transform: [{ translateX: translateValue }],
              width: tabWidth - 20
            }
          ]}
        />

        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }

            Animated.spring(translateValue, {
              toValue: index * tabWidth,
              velocity: 10,
              useNativeDriver: true,
            }).start()
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }

          return (
            <TouchableOpacity
              style={styles.ganja2}
              key={index}
              accessibilityRole='button'
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <BottomMenuItem iconName={label.toString()} isCurrent={isFocused} />
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tabContainer: {
    height: 60,
    shadowOffset: {
      width: 0,
      height: -1
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.0,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 10,
    position: 'absolute',
    bottom: 0
  },
  slider: {
    height: 5,
    position: 'absolute',
    top: 0,
    left: 10,
    backgroundColor: green,
    borderRadius: 10
  },
  ganja1: {
    flexDirection: 'row'
  },
  ganja2: {
    flex: 1
  }
})