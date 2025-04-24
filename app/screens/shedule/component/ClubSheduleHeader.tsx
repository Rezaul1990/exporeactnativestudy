import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; // for three vertical dots icon
import { useAuthStore } from '@/store/useAuthStore';

export default function ClubSheduleHeader() {
  const profile = useAuthStore((state) => state.profile);
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Text style={styles.subTitle}>{profile?.ClubName}</Text>
        <Text style={styles.title}>Club Schedule</Text>
      </View>
      <TouchableOpacity style={styles.right}>
        <Entypo name="dots-three-vertical" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0f4c81',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  subTitle: {
    color: 'white',
    fontSize: 14,
    marginBottom: 2,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  right: {
    paddingLeft: 10,
  },
});
