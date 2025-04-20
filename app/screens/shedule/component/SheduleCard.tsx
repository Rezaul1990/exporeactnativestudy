import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ScheduleCard({ date = "6th August 2023" }) {
  const sessions = [
    {
      time: "7.30pm",
      title: "All levels class",
      color: "#f5d9c4",
      dotColor: "#f5d9c4",
      buttonText: "More",
      buttonBg: "#f5d9c4",
      textColor: "#000",
    },
    {
      time: "8.30pm",
      title: "Open Mat",
      color: "#c4e500",
      dotColor: "#c4e500",
      buttonText: "More",
      buttonBg: "#c4e500",
      textColor: "#000",
    },
    {
      time: "Summer Camp",
      subtitle: "Starts 25/03/2025 – View Details",
      cost: "£45",
      location: "Virtus Academy",
      coach: "Coach Christopher Davis",
      color: "#0097e0",
      dotColor: "#0097e0",
      buttonText: "Booked",
      buttonBg: "#0097e0",
      textColor: "#fff",
    },
  ];

  return (
    <View style={styles.card}>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.divider} />
      {sessions.map((item, index) => (
        <View key={index} style={styles.row}>
          <View style={styles.left}>
            <View style={[styles.dot, { backgroundColor: item.dotColor }]} />
            <View style={styles.info}>
              <Text style={styles.time}>
                {item.time} - <Text style={styles.bold}>{item.title}</Text>
              </Text>
              {item.subtitle ? (
                <View>
                  <Text style={styles.subtext}>{item.subtitle}</Text>
                  <Text style={styles.subtext}>
                    Cost {item.cost} | Location – {item.location}
                  </Text>
                  <Text style={styles.subtext}>Coach Christopher Davis</Text>
                </View>
              ) : (
                <>
                  <Text style={styles.subtext}>Location – Virtus Academy</Text>
                  <Text style={styles.subtext}>Coach Christopher Davis</Text>
                </>
              )}
            </View>
          </View>
          <TouchableOpacity style={[styles.button, { backgroundColor: item.buttonBg }]}>
            <Text style={[styles.buttonText, { color: item.textColor }]}>{item.buttonText}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    margin: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 5,
  },
  date: {
    textAlign: "right",
    color: "#003366",
    fontWeight: "bold",
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  left: {
    flexDirection: "row",
    flex: 1,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginTop: 6,
    marginRight: 8,
  },
  info: {
    flex: 1,
  },
  time: {
    fontSize: 15,
    marginBottom: 4,
    color: "#000",
  },
  bold: {
    fontWeight: "bold",
  },
  subtext: {
    fontSize: 13,
    color: "#444",
    marginBottom: 2,
  },
  button: {
    alignSelf: "center",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 13,
  },
});
