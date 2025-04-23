import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; // For the 3-dot icon

type Props = {
  name: string;
  age: number;
  role: string;
  clubName: string;
  imageUrl: string;
  onMenuPress?: () => void;
};

const MemberProfileHeader = ({
  name,
  age,
  role,
  clubName,
  imageUrl,
  onMenuPress,
}: Props) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.avatar} />

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.meta}>
          ({role}) - Age : {age}
        </Text>
        <Text style={styles.club}>{clubName}</Text>
      </View>

      <TouchableOpacity onPress={onMenuPress}>
        <Entypo name="dots-three-vertical" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default MemberProfileHeader;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0C4A7E',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  meta: {
    color: '#fff',
    marginTop: 2,
  },
  club: {
    color: '#D1D5DB', // light grayish text
    marginTop: 4,
    fontSize: 12,
  },
});
