import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import usePaymentSummary from '../hooks/usePaymentSummary'
import MoneySummary from './component/MoneySummary';
import ClubSubscriptionCard from './component/ClubSubscriptionCard';
import RecentPayments from './component/RecentPayments';

const OverviewTab = () => {
    const { paid, outstanding } = usePaymentSummary();
  return (
    <View>
      <MoneySummary paidAmount={paid} outstandingAmount={outstanding} />
        <ClubSubscriptionCard
            price={45}
            description="Gold Membership – Every 1st month"
        />
        <RecentPayments />
    </View>
  )
}

export default OverviewTab

const styles = StyleSheet.create({})