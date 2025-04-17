import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router';

const setting = () => {
  return (
    <View>
      <Text>setting page</Text>
       <TouchableOpacity style={{paddingTop:50}}  onPress={() => {
        router.replace('/authentication/pinset/pinset');
        }}>
          <Text>Profile Change</Text>
        </TouchableOpacity>
    </View>
  )
}

export default setting

const styles = StyleSheet.create({})