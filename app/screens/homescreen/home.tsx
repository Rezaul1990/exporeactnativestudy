import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import { useAuthStore } from '@/store/useAuthStore';
import { useTodayClasses } from '@/hooks/useTodayClasses';
import { Link } from 'expo-router';

export default function Home() {
  const profile = useAuthStore((state) => state.profile);
  const { todayClasses, count } = useTodayClasses();
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome back</Text>
          <Text style={styles.userName}>{profile?.FirstName} {profile?.LastName}</Text>
          <Text style={styles.subTitle}>Member - {profile?.ClubName}</Text>
        </View>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Info Cards */}
      <View style={styles.cardContainer}>
        <View style={[styles.infoCard, { borderColor: '#f8d7da' }]}> 
          <FontAwesome name="money" size={24} color="#dc3545" style={styles.cardIcon} />
          <View>
            <Text style={styles.cardTitle}>You have outstanding payments</Text>
            <Text style={styles.cardSubtitle}>View & Pay your outstanding bills</Text>
          </View>
        </View>

        <View style={[styles.infoCard, { borderColor: '#d4edda' }]}> 
          <View style={styles.bookingBadge}><Text style={styles.bookingNumber}>2</Text></View>
          <View>
            <Text style={styles.cardTitle}>You have {count} bookings today</Text>
            <Text style={styles.cardSubtitle}>See your bookings for today</Text>
          </View>
        </View>
      </View>

      {/* Action List */}
      <Text style={styles.sectionTitle}>What would you like to do?</Text>
      {actions.map((item, index) => {
          
          return (
            <Link key={index} href={item.href} asChild>
              <TouchableOpacity style={styles.actionRow}>
                <View style={styles.iconWrap}>
                  <Ionicons name={item.icon} size={24} color={item.color || '#000'} />
                </View>
                <View style={styles.actionContent}>
                  <Text style={styles.actionTitle}>{item.title}</Text>
                  <Text style={styles.actionSubtitle}>{item.subtitle}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#000" />
              </TouchableOpacity>
            </Link>
          );
        })}
    </ScrollView>
  );
}

const actions = [
  {
    title: 'Club Schedule',
    subtitle: 'What is on & book sessions or courses',
    icon: 'calendar-outline',
    href: '/schedule'
  },
  {
    title: 'Manage & Make bookings',
    subtitle: 'Manage your current bookings',
    icon: 'book-outline',
    href: '/screens/booking/booking'
  },
  {
    title: 'Check in to a class',
    subtitle: 'Check into a class',
    icon: 'log-in-outline',
    href: '/checkin'
  },
  {
    title: 'Manage your payments',
    subtitle: 'See transactions and pay bills',
    icon: 'card-outline',
    href: '/payments'
  },
  {
    title: 'Buy from the club store',
    subtitle: 'Purchase items from the club store',
    icon: 'cart-outline',
    href: '/store'
  },
  {
    title: 'Upcoming fixtures',
    subtitle: 'You have been selected for a fixture',
    icon: 'trophy-outline',
    href: '/fixtures'
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  header: {
    backgroundColor: '#003366',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 14,
  },
  userName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  subTitle: {
    color: '#fff',
    fontSize: 12,
  },
  cardContainer: {
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  infoCard: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  cardIcon: {
    marginRight: 15,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#555'
  },
  bookingBadge: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#c8f7c5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  bookingNumber: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  iconWrap: {
    width: 30,
  },
  actionContent: {
    flex: 1,
    paddingHorizontal: 10,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  actionSubtitle: {
    fontSize: 12,
    color: '#555'
  }
});
