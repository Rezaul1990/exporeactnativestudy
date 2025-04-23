import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function  ClubCalendar({ onDateSelect }) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const todayStr = `${yyyy}-${mm}-${dd}`;

  const classDays = ['05', '10', '15', '20', '25'].map(
    (d) => `${yyyy}-${mm}-${d}`
  );

  const [selectedDate, setSelectedDate] = useState(null);
  const [markedDates, setMarkedDates] = useState({});

  const generateMarks = (selected) => {
    const marks = {};

    classDays.forEach((date) => {
      marks[date] = {
        customStyles: {
          container: {
            borderColor: '#c4e500',
            borderWidth: 2,
            borderRadius: 999,
          },
          text: {
            color: '#000',
          },
        },
      };
    });

    if (selected) {
      marks[selected] = {
        customStyles: {
          container: {
            backgroundColor: '#c4e500',
            borderRadius: 999,
          },
          text: {
            color: '#fff',
            fontWeight: 'bold',
          },
        },
      };
    }

    return marks;
  };

  useEffect(() => {
    setSelectedDate(todayStr);
    setMarkedDates(generateMarks(todayStr));
    onDateSelect(todayStr); // auto-select today on load
  }, []);

  const onDayPress = (day) => {
    const selected = day.dateString;
    setSelectedDate(selected);
    setMarkedDates(generateMarks(selected));
    onDateSelect(selected);
  };

  return (
    <View style={styles.container}>
      <Calendar
        markingType={'custom'}
        markedDates={markedDates}
        onDayPress={onDayPress}
        current={todayStr}
        theme={{
          calendarBackground: '#fff',
          dayTextColor: '#003366',
          monthTextColor: '#003366',
          textMonthFontSize: 20,
          textMonthFontWeight: 'bold',
          textDayFontSize: 16,
          textDayHeaderFontSize: 14,
          arrowColor: '#003366',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
