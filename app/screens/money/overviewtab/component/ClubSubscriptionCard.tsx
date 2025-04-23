import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; // for calendar-check icon

type Props = {
  price: number;
  description: string;
};

const ClubSubscriptionCard = ({ price, description }: Props) => {
  return (
    <View style={styles.container}>
      <Feather name="calendar" size={28} color="#0C4A7E" style={styles.icon} />

      <View>
        <Text style={styles.title}>
          Your club subscription : <Text style={styles.price}>{price}pcm</Text>
        </Text>
        <Text style={styles.subtitle}>{description}</Text>
      </View>
    </View>
  );
};

export default ClubSubscriptionCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#EAF7FF',
    borderWidth: 1.5,
    borderColor: '#0077C2',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    gap: 12,
  },
  icon: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
  },
  title: {
    fontWeight: '600',
    color: '#0C4A7E',
  },
  price: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 13,
    color: '#333',
    marginTop: 2,
  },
});
