import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  paidAmount: number;
  outstandingAmount: number;
};

const MoneySummary = ({ paidAmount, outstandingAmount }: Props) => {
  return (
    <View style={styles.container}>
      {/* Paid Box */}
      <View style={[styles.box, styles.greenBox]}>
        <Text style={styles.boxTitle}>Paid this month</Text>
        <Text style={styles.amountBlue}>£{paidAmount.toFixed(2)}</Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>View this month's payments</Text>
        </TouchableOpacity>
      </View>

      {/* Outstanding Box */}
      <View style={[styles.box, styles.redBox]}>
        <Text style={styles.boxTitle}>Outstanding bills</Text>
        <Text style={styles.amountRed}>£{outstandingAmount.toFixed(2)}</Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Pay your outstanding balance</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MoneySummary;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    marginTop: 16,
  },
  box: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 2,
  },
  greenBox: {
    borderColor: '#C6F000', // light green border
  },
  redBox: {
    borderColor: '#F5C6C6', // light red border
  },
  boxTitle: {
    fontWeight: '600',
    marginBottom: 6,
  },
  amountBlue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0C4A7E',
    marginBottom: 8,
  },
  amountRed: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F38C8C',
    marginBottom: 8,
  },
  linkText: {
    textDecorationLine: 'underline',
    color: '#000',
    fontSize: 13,
  },
});
