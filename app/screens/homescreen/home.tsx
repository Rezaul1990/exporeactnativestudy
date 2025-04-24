import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useTodayClasses } from '@/hooks/useTodayClasses';
import { Link, router } from 'expo-router';
import HeaderBar from './component/HeaderBar';
import ProfileDrawer from './component/ProfileDrawer';
import { useAuthStore } from '@/store/useAuthStore';

export default function Home() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { count } = useTodayClasses();

  return (
    <View style={{ flex: 1 }}>
      {/* Main scrollable content */}
      <ScrollView style={styles.container} contentContainerStyle={{ opacity: drawerVisible ? 0.3 : 1 }}>
        <HeaderBar onProfilePress={() => setDrawerVisible(true)} />
        
        {/* Info Cards */}
        <View style={styles.cardContainer}>
          <View style={[styles.infoCard, { borderColor: '#f8d7da' }]}>
            <FontAwesome name="money" size={24} color="#dc3545" style={styles.cardIcon} />
            <View>
              <Text style={styles.cardTitle}>You have outstanding payments</Text>
              <Text style={styles.cardSubtitle}>View & Pay your outstanding bills</Text>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.infoCard, { borderColor: '#d4edda' }]}
            onPress={() => router.push('/screens/bookingtoday/BookingToday')}
          >
            <View style={styles.bookingBadge}>
              <Text style={styles.bookingNumber}>{count}</Text>
            </View>
            <View>
              <Text style={styles.cardTitle}>You have {count} bookings today</Text>
              <Text style={styles.cardSubtitle}>See your bookings for today</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Action List */}
        <Text style={styles.sectionTitle}>What would you like to do?</Text>
        {actions.map((item, index) => {
          const handlePress = () => {
            if (item.onPress) {
              item.onPress(); // call custom handler if present
            } else {
              router.push(item.href);
            }
          };

          return (
            <TouchableOpacity key={index} style={styles.actionRow} onPress={handlePress}>
              <View style={styles.iconWrap}>
                <Ionicons name={item.icon} size={24} color={item.color || '#000'} />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>{item.title}</Text>
                <Text style={styles.actionSubtitle}>{item.subtitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#000" />
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Drawer - overlay */}
      {drawerVisible && (
        <ProfileDrawer onClose={() => setDrawerVisible(false)} />
      )}
    </View>
  );
}


const actions = [
  {
    title: 'Club Schedule',
    subtitle: 'What is on & book sessions or courses',
    icon: 'calendar-outline',
    href: '/screens/shedule/shedule'
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
    onPress: () => {
      const classes = useAuthStore.getState().sevenDaysClasses;
      console.log('[DEBUG] SevenDaysClasses on Check-in:', classes);
      router.push('/screens/checkintoclass/checkintoclass');
    }
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
