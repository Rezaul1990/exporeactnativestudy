import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import MemberProfileHeader from './component/MemberProfileHeader'
import MemberProfileTab from './component/MemberProfileTab'

const MemberProfile = () => {
  return (
    <ScrollView>
      <MemberProfileHeader
        name="Christopher Davis"
        age={45}
        role="member"
        clubName="Virtus Brazilian Jiu Jitsu Academy"
        imageUrl="https://randomuser.me/api/portraits/men/75.jpg"
        onMenuPress={() => console.log('Menu pressed')}
        />
        <MemberProfileTab/>
    </ScrollView>
  )
}

export default MemberProfile

const styles = StyleSheet.create({})