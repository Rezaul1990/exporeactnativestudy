import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useAuthStore } from '@/store/useAuthStore';

const SevenDaysClasses = () => {
  const sevenDaysClasses = useAuthStore((state) =>
    Array.isArray(state.combinedData?.SevenDaysClasses)
      ? state.combinedData.SevenDaysClasses
      : []
  );

  const renderItem = ({ item }: any) => (
    <View style={styles.classCard}>
      <Text style={styles.classTitle}>
        Class Name: {item.ClassName || 'N/A'}
      </Text>
      <Text>Date: {new Date(item.ClassDate1).toLocaleDateString()}</Text>
      <Text>
        Time:{' '}
        {item.ClassStart && item.ClassEnd
          ? `${new Date(item.ClassStart).toLocaleTimeString()} - ${new Date(item.ClassEnd).toLocaleTimeString()}`
          : 'N/A'}
      </Text>
      <Text>Venue: {item.VenueName || 'N/A'}</Text>

      <Text style={styles.bookingHeader}>Booking Options:</Text>
      {(item.BookingOptions || []).map((option: any, idx: number) => (
        <Text key={idx} style={styles.bookingOption}>
          - {option.DisplayValue} | £
          {option.Cost ? parseFloat(option.Cost).toFixed(2) : 'N/A'}
        </Text>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming 7 Days Classes</Text>
      {sevenDaysClasses.length === 0 ? (
        <Text>No classes found.</Text>
      ) : (
        <FlatList
          data={sevenDaysClasses}
          renderItem={renderItem}
          keyExtractor={(item) => item.ClassID.toString()}
        />
      )}
    </View>
  );
};

export default SevenDaysClasses;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  classCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  classTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bookingHeader: {
    marginTop: 8,
    fontWeight: '600',
  },
  bookingOption: {
    marginLeft: 8,
  },
});
