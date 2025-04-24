import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useAuthStore } from '@/store/useAuthStore';

const MoneyHeader = () => {
  const profile = useAuthStore((state) => state.profile);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subTitle}>{profile?.ClubName}</Text>
        <Text style={styles.title}>Money & Payments</Text>
      </View>

      <Entypo name="dots-three-vertical" size={20} color="#fff" />
    </View>
  );
};

export default MoneyHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0C4A7E',
    padding: 16,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitle: {
    color: '#fff',
    fontSize: 13,
    marginBottom: 4,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
