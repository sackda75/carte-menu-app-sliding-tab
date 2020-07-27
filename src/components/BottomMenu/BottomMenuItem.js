import React from 'react'
import { View, StyleSheet } from 'react-native'
import { green, grey } from '../../styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'

type Props = {
  iconName: string;
  isCurrent?: boolean
}

export const BottomMenuItem = ({ iconName, isCurrent }: Props) => {
  return (
    <View style={styles.oppo1}>
      <MaterialCommunityIcons style={{ color: isCurrent ? green : grey }} name={iconName} size={32} />
    </View>
  )
}

const styles = StyleSheet.create({
  oppo1: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})