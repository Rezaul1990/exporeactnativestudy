import React from 'react';
import { ScrollView } from 'react-native';
import { router } from 'expo-router';
import BookingListAll from './bookinglistall';

export default function BookOptions() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <BookingListAll
        title="Book a session"
        subtitle="Book onto an upcoming session"
        borderColor="#B4E800"
        leftDotColor="#B4E800"
        arrowBg="#B4E800"
        onPress={() => router.push('/screens/bookonetwooneprivate/BookOneTwoOnePrivate')}
      />

      <BookingListAll
        title="Book onto an upcoming course"
        subtitle="Find and book upcoming courses"
        borderColor="#A3D2F2"
        leftDotColor="#64B5F6"
        arrowBg="#64B5F6"
        onPress={() => router.push('/screens/bookonetwooneprivate/BookOneTwoOnePrivate')}
      />

      <BookingListAll
        title="Book a 121 or private training"
        subtitle="Book time with a coach"
        borderColor="#B97EFF"
        leftDotColor="#B97EFF"
        arrowBg="#B97EFF"
        onPress={() => router.push('/screens/bookonetwooneprivate/BookOneTwoOnePrivate')}
      />

      <BookingListAll
        title="Book a Court"
        subtitle="Book a court at the academy"
        borderColor="#003366"
        leftDotColor="#003366"
        arrowBg="#003366"
        onPress={() => router.push('/screens/bookonetwooneprivate/BookOneTwoOnePrivate')}
      />
    </ScrollView>
  );
}
