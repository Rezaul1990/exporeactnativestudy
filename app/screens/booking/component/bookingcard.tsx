import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BookingCard() {
  return (
    <View style={styles.container}>
      {/* Card 1 */}
      <View style={[styles.card, { borderColor: '#B4E800' }]}>
        <Text style={styles.number}>10</Text>
        <Text style={styles.title}>Available classes today</Text>
        <Text style={styles.subtitle}>Or view full schedule below</Text>
      </View>

      {/* Card 2 */}
      <View style={[styles.card, { borderColor: '#3CA3D9' }]}>
        <Text style={styles.number}>2</Text>
        <Text style={styles.title}>Upcoming courses</Text>
        <Text style={styles.subtitle}>View all courses below</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  card: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 5,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  number: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 6,
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 2,
  },
});
