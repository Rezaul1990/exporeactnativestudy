import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { useAuthStore } from '@/store/useAuthStore';

const HeaderBar = ({onProfilePress} ) => {
    const profile = useAuthStore((state) => state.profile);
  return (
    <View>
       {/* Header */}
       <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome back</Text>
          <Text style={styles.userName}>{profile?.FirstName} {profile?.LastName}</Text>
          <Text style={styles.subTitle}>Member - {profile?.ClubName}</Text>
        </View>
        <TouchableOpacity onPress={onProfilePress}>
          <Entypo name="dots-three-vertical" size={20} color="white" />
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default HeaderBar

const styles = StyleSheet.create({
    welcomeText: {
        color: '#fff',
        fontSize: 14,
      },
      userName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
      },
      subTitle: {
        color: '#fff',
        fontSize: 12,
      },
      header: {
        backgroundColor: '#003366',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      },
})