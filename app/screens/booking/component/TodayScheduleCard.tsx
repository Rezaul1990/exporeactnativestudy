import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Status = 'paid' | 'unpaid' | 'info';

type Props = {
  time: string;
  title: string;
  duration: string;
  cost?: string;
  location: string;
  coach: string;
  status: Status;
  onPress: () => void;
};

const statusColor = {
  paid: '#A4D400', // Green dot
  unpaid: '#F38C8C', // Red dot
  info: '#2DA8F8', // Blue dot
};

const buttonColor = {
  paid: '#C6F000',
  unpaid: '#F5C6C6',
  info: '#2DA8F8',
};

const buttonText = {
  paid: 'Details',
  unpaid: 'Pay Now',
  info: 'Details',
};

const TodayScheduleCard = ({
  time,
  title,
  duration,
  cost,
  location,
  coach,
  status,
  onPress,
}: Props) => {
  return (
    <View style={styles.row}>
      {/* Dot and Info */}
      <View style={{ flex: 1 }}>
        <View style={styles.rowWithDot}>
          <View style={[styles.dot, { backgroundColor: statusColor[status] }]} />
          <Text style={styles.title}>{`${time} – ${title}`}</Text>
        </View>
        <Text style={styles.subText}>
          {duration} {cost && `– Cost : ${cost}`} | {location}
        </Text>
        <Text style={styles.subText}>Coach {coach}</Text>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonColor[status] }]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText[status]}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodayScheduleCard;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 12,
  },
  rowWithDot: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginTop: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  subText: {
    fontSize: 13,
    color: '#333',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 13,
  },
});
