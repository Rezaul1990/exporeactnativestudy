import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MoneyHeader from './component/MoneyHeader'
import MoneyTab from './component/MoneyTab'

const money = () => {
  
  return (
    <View style={{ flex: 1 }}>
      <MoneyHeader/>
      <MoneyTab/>
      

    </View>
  )
}

export default money

const styles = StyleSheet.create({})