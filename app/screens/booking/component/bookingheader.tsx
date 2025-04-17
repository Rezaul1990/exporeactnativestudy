import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BookingHeader() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subtitle}>Virtus Jiu Jitsu Academy</Text>
        <Text style={styles.title}>Your bookings</Text>
      </View>
      <TouchableOpacity style={styles.menuButton}>
        <Ionicons name="ellipsis-vertical" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D4C88', // Close to the blue in the image
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 20,
  },
  subtitle: {
    color: '#ffffffcc', // Semi-transparent white
    fontSize: 14,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
  menuButton: {
    padding: 8,
  },
});
