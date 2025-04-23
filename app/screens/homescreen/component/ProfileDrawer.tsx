import React, { useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useRouter } from 'expo-router'; // ✅ make sure this is imported
import { useAuthStore } from '@/store/useAuthStore';

const { width } = Dimensions.get('window');

export default function ProfileDrawer({ onClose }) {
  const slideAnim = useRef(new Animated.Value(width)).current;
  const router = useRouter();
  const clearCredentials = useAuthStore((state) => state.clearCredentials);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, []);

  const handleClose = () => {
    Animated.timing(slideAnim, {
      toValue: width,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      onClose();
    });
  };

  const menuItems = [
    { label: 'Go to your profile', href: '/screens/memberprofile/MemberProfile' },
    { label: 'Switch to another profile', href: '/switch-profile' },
    { label: 'App settings', href: '/screens/setting/setting' },
    { label: 'Log out', action: 'logout' }, // 👈 custom logic here
  ];

  const handleMenuPress = (item) => {
    if (item.action === 'logout') {
      clearCredentials(); // clear zustand state
      router.replace('/authentication/login/login'); // go to login screen
      console.log('Logging out...');
    } else {
      router.push(item.href);
    }
    handleClose();
  };

  return (
    <View
      style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
      }}
    >
      {/* Tap outside to close */}
      <TouchableOpacity
        onPress={handleClose}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: '25%',
          zIndex: 1,
        }}
      />

      <Animated.View
        style={{
          position: 'absolute',
          right: 0,
          width: '75%',
          height: '100%',
          backgroundColor: '#004080',
          padding: 20,
          transform: [{ translateX: slideAnim }],
        }}
      >
        {/* Close Arrow */}
        <TouchableOpacity onPress={handleClose} style={{ alignSelf: 'flex-start' }}>
          <Ionicons name="arrow-forward" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Profile Info */}
        <Image
          source={require('../../../../assets/images/profile.png')}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            alignSelf: 'center',
            marginTop: 10,
          }}
        />
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 10,
          }}
        >
          Christopher Davis
        </Text>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          Club Member
        </Text>

        {/* Menu Items */}
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleMenuPress(item)}>
            <Text style={{ color: '#d0e6ff', marginVertical: 8, fontSize: 14 }}>
              • {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </View>
  );
}