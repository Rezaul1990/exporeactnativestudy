import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BookingHeader from './component/bookingheader'
import BookingCard from './component/bookingcard'
import ViewBookingsLink from './component/viewbookinglink'
import BookOptions from './component/bookingoption'

const booking = () => {
  return (
    <View>
      <BookingHeader />
      <BookingCard />
      <ViewBookingsLink />
      <BookOptions/>
    </View>
  )
}

export default booking

const styles = StyleSheet.create({})