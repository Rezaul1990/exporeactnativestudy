import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTodayClasses } from '@/hooks/useTodayClasses';

export default function BookingToday() {
  const { todayClasses } = useTodayClasses();

  const renderItem = ({ item }: any) => (
    <View style={styles.classCard}>
      <Text style={styles.title}>{item.ClassName}</Text>
      <Text>Date: {new Date(item.ClassDate1).toLocaleDateString()}</Text>
      <Text>Time: {item.ClassStart} - {item.ClassEnd}</Text>
      <Text>Venue: {item.VenueName}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Today's Booked Classes</Text>
      {todayClasses.length === 0 ? (
        <Text>No classes booked for today.</Text>
      ) : (
        <FlatList
          data={todayClasses}
          keyExtractor={(item) => item.ClassID.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  classCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
});
