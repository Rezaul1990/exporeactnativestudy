import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import OverviewTab from '../overviewtab/OverviewTab';
import TransactionsTab from '../transactionstab/TransactionsTab';
import PaybillsTab from '../paybillstab/PaybillsTab';

const tabs = ['Overview', 'Transactions', 'Pay bills'];

const MoneyTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <OverviewTab />;
      case 1:
        return <TransactionsTab />;
      case 2:
        return <PaybillsTab />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabRow}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tabButton,
              activeTab === index && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab(index)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === index && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Render Selected Tab Component */}
      <View style={styles.content}>
        {renderTabContent()}
      </View>

      {/* Pagination Dots */}
      <View style={styles.dotsContainer}>
        {tabs.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === activeTab && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default MoneyTab;

const styles = StyleSheet.create({
  container: {
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    gap: 8,
  },
  tabButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  activeTabButton: {
    backgroundColor: '#0288D1',
    borderColor: '#0288D1',
  },
  tabText: {
    color: '#666',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#fff',
  },
  content: {
    alignItems: 'center',
    marginVertical: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
  },
  activeDot: {
    backgroundColor: '#0288D1',
    width: 10,
    height: 10,
  },
});
