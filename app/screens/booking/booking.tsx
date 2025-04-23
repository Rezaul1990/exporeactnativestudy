import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BookingHeader from './component/bookingheader'
import BookingCard from './component/bookingcard'
import ViewBookingsLink from './component/viewbookinglink'
import BookOptions from './component/bookingoption'
import TodayScheduleCard from './component/TodayScheduleCard'

const booking = () => {
  return (
    <ScrollView>
      <BookingHeader />
      <BookingCard />
      
      <TodayScheduleCard
        time="6.00pm"
        title="Fundamentals class"
        duration="1 hour"
        cost="£7.50"
        location="Virtus Academy"
        coach="Christopher Davis"
        status="paid"
        onPress={() => console.log('Show Details')}
      />

      <TodayScheduleCard
        time="6.00pm"
        title="Fundamentals class"
        duration="1 hour"
        cost="£7.50"
        location="Virtus Academy"
        coach="Christopher Davis"
        status="unpaid"
        onPress={() => console.log('Pay Now')}
      />

      <TodayScheduleCard
        time="2.00pm"
        title="121 with Coach Chris"
        duration="1 hour"
        location="Virtus Academy"
        coach="Christopher Davis"
        status="info"
        onPress={() => console.log('Show Details')}
      />
      <ViewBookingsLink />
      <BookOptions/>
      
    </ScrollView>
  )
}

export default booking

const styles = StyleSheet.create({})