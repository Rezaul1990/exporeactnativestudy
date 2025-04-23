import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const tabs = [
  { title: 'General', component: require('./General').default },
  { title: 'More Info', component: require('./MoreInfo').default },
  { title: 'Medical Notes', component: require('./MedicalNotes').default },
  { title: 'Member Notes', component: require('./MemberNotes').default },
  { title: 'Groups & Skills', component: require('./GroupsAndSkills').default },
  { title: 'Additional Info', component: require('./AdditionalInfo').default },
  { title: 'Illness and Absence', component: require('./IllnessAndAbsence').default },
];

const screenWidth = Dimensions.get('window').width;

const MemberProfileTab = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveComponent = tabs[activeIndex].component;

  const goLeft = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const goRight = () => {
    if (activeIndex < tabs.length - 1) setActiveIndex(activeIndex + 1);
  };

  return (
    <View style={styles.container}>
      {/* Navigation */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={goLeft} disabled={activeIndex === 0}>
          {activeIndex > 0 ? (
            <Entypo name="chevron-left" size={24} color="#0C4A7E" />
          ) : <View style={{ width: 24 }} />}
        </TouchableOpacity>

        <View style={styles.tab}>
          <Text style={styles.tabText}>{tabs[activeIndex].title}</Text>
        </View>

        <TouchableOpacity onPress={goRight} disabled={activeIndex === tabs.length - 1}>
          {activeIndex < tabs.length - 1 ? (
            <Entypo name="chevron-right" size={24} color="#0C4A7E" />
          ) : <View style={{ width: 24 }} />}
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <View style={styles.content}>
        <ActiveComponent />
      </View>

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {tabs.map((_, idx) => (
          <View
            key={idx}
            style={[
              styles.dot,
              activeIndex === idx && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default MemberProfileTab;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  navBar: {
    width: screenWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  tab: {
    backgroundColor: '#0288D1',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  tabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    minHeight: 200,
    padding: 12,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#0288D1',
  },
});
