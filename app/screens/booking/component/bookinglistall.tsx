import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  title: string;
  subtitle: string;
  borderColor: string;
  leftDotColor: string;
  arrowBg: string;
  onPress?: () => void;
};

export default function BookingListAll({
  title,
  subtitle,
  borderColor,
  leftDotColor,
  arrowBg,
  onPress,
}: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, { borderColor }]}>
      <View style={styles.row}>
        {/* Left Dot */}
        <View style={[styles.leftDot, { backgroundColor: leftDotColor }]} />

        {/* Text Area */}
        <View style={styles.textSection}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        {/* Arrow Button */}
        <View style={[styles.arrowWrap, { backgroundColor: arrowBg }]}>
          <Ionicons name="arrow-forward" size={20} color="#fff" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 8,
    padding: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 12,
  },
  textSection: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
    color: '#111',
  },
  subtitle: {
    fontSize: 12,
    color: '#555',
  },
  arrowWrap: {
    padding: 8,
    borderRadius: 6,
  },
});
