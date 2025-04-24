import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function BookOneTwoOneFixed() {
  return (
    <View style={styles.container}>
      <Text style={styles.backText}>{`<< Back`}</Text>

      <View style={styles.profileWrapper}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
          style={styles.profileImage}
        />
        <View style={styles.dot} />
      </View>

      <Text style={styles.title}>1-2-1 Booking</Text>
      <Text style={styles.subtitle}>with Coach Christopher Davis</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Your booking details</Text>
        <Text style={styles.timeslotLabel}>You have booked timeslot :</Text>
        <Text style={styles.timeslot}>1 Hour | 6.00pm | 17/04/25</Text>

        <Text style={styles.infoText}>1 hour - Cost : £45</Text>
        <Text style={styles.infoText}>Location - Virtus Academy</Text>
        <Text style={styles.infoText}>Coach Christopher Davis</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelBtn}>
            <Text style={styles.cancelText}>CANCEL BOOKING</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.payBtn}>
            <Text style={styles.payText}>PAY NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#fff',
    flex: 1,
  },
  backText: {
    color: '#003B73',
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 16,
  },
  profileWrapper: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: '#00BFFF',
  },
  dot: {
    width: 20,
    height: 20,
    backgroundColor: '#FF90A6',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
    position: 'absolute',
    top: -5,
    right: '35%',
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
    color: '#003B73',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#003B73',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#eee',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
  timeslotLabel: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 4,
  },
  timeslot: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 6,
    color: '#000',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  cancelBtn: {
    backgroundColor: '#E3F2FD',
    flex: 1,
    marginRight: 10,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    color: '#003B73',
    fontWeight: 'bold',
    fontSize: 14,
  },
  payBtn: {
    backgroundColor: '#F76B6B',
    flex: 1,
    marginLeft: 10,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  payText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
