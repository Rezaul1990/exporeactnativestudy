import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const payments = [
  {
    id: 1,
    amount: 7.5,
    title: 'Fundamentals class',
    date: '17.07.25',
    time: '6.30pm',
    duration: '1 Hour',
    status: 'Paid',
    type: 'One-off',
    borderColor: '#C6F000',
  },
  {
    id: 2,
    amount: 45.0,
    title: 'Gold Membership',
    date: '17.07.25',
    status: 'Paid',
    type: 'Subscription | Paid 1st of month',
    borderColor: '#5DC6FF',
  },
  {
    id: 3,
    amount: 7.5,
    title: 'Fundamentals class',
    date: '17.07.25',
    time: '6.30pm',
    duration: '1 Hour',
    status: 'Paid',
    type: 'One-off',
    borderColor: '#C6F000',
  },
  {
    id: 4,
    amount: 45.0,
    title: 'Club T-Shirt',
    date: '17.07.25',
    type: 'Store | 11/07/2025',
    status: 'Unpaid',
    borderColor: '#F8D3D3',
  },
];

const RecentPayments = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your recent payments</Text>
      <ScrollView>
        {payments.map((item) => (
          <View key={item.id} style={styles.paymentRow}>
            <View style={[styles.amountBox, { borderColor: item.borderColor }]}>
              <Text style={styles.amount}>£{item.amount.toFixed(2)}</Text>
              <Text style={styles.sub}>
                {item.date} |{' '}
                <Text style={[styles.status, item.status === 'Unpaid' && styles.unpaid]}>
                  {item.status}
                </Text>
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.detail}>
                {item.type}
                {item.time ? ` | ${item.time}` : ''} {item.duration ? `| ${item.duration}` : ''}
              </Text>

              <TouchableOpacity>
                <Text style={styles.link}>View details</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RecentPayments;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    margin: 12,
    elevation: 2,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0C4A7E',
    marginBottom: 16,
  },
  paymentRow: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 12,
  },
  amountBox: {
    borderWidth: 2,
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 6,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#0C4A7E',
  },
  sub: {
    fontSize: 12,
    color: '#666',
  },
  status: {
    color: 'green',
    fontWeight: 'bold',
  },
  unpaid: {
    color: '#F38C8C',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  detail: {
    color: '#444',
    fontSize: 13,
    marginVertical: 2,
  },
  link: {
    color: '#0C4A7E',
    textDecorationLine: 'underline',
    fontWeight: '500',
    fontSize: 13,
  },
});
