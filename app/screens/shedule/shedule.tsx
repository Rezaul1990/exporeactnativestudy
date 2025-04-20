import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ClubSheduleHeader from './component/ClubSheduleHeader'
import ClubCalendar from './component/ClubCalender'
import SheduleCard from './component/SheduleCard'
import moment from 'moment'

const shedule = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };
  return (
    <View>
      <ClubSheduleHeader/>
      <ClubCalendar onDateSelect={handleDateSelect} />
      {selectedDate && (
        <SheduleCard
          date={moment(selectedDate).format('Do MMMM YYYY')} // nicely format date
        />
      )}
    </View>
  )
}

export default shedule

const styles = StyleSheet.create({})