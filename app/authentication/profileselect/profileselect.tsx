import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { getProfileData } from '@/services/ProfileService';
import { Profile } from '@/models/Profile';
import { useAuthStore } from '@/store/useAuthStore';

export default function ProfileSelect() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const setUserInfo = useAuthStore((state) => state.setUserInfo);
  const { pin,} = useAuthStore();

  useEffect(() => {
    (async () => {
      try {
        const result = await getProfileData();
        setProfiles(result);
      } catch (err) {
        console.error('[DEBUG] Controller error:', err);
      } finally {
        setLoading(false);
      }
    })();
    console.log('[DEBUG] Zustand PIN:', pin);
  }, []);

  const handleDashboardNavigation = () => {
    if (!selectedProfile) return;
    const { ClubID, UserID } = selectedProfile;
    setUserInfo(ClubID, UserID, selectedProfile); // ✅ full profile passed
    router.push('/screens/homescreen/home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="leaf" size={36} color="#fff" style={styles.logo} />
      </View>

      <Text style={styles.title}>Profile.</Text>
      <Text style={styles.subtitle}>Which profile would you like to log into?</Text>

      {loading ? (
        <ActivityIndicator color="#bfff00" size="large" />
      ) : (
        <ScrollView contentContainerStyle={styles.profileGrid}>
          {profiles.map((profile, index) => {
            const imageUrl = profile.ProfilePhoto
              ? `https://appwebservices.coacha.app/uploads/${profile.ProfilePhoto}`
              : 'https://via.placeholder.com/150';
              console.log('[DEBUG] Image URL:', imageUrl); // 👈 Add this line

            const isSelected = selectedProfile?.UserID === profile.UserID;

            return (
              <TouchableOpacity
                key={index}
                style={styles.profileBox}
                onPress={() => {
                  console.log('[DEBUG] Selected profile:', profile); // 👈 Add this line
                  setSelectedProfile(profile)
                }}
              >
                <Image
                  source={{ uri: imageUrl }}
                  resizeMode="cover"
                  style={[styles.image, isSelected && styles.selectedImage]}
                />
                <Text style={styles.profileName}>{profile.FirstName}</Text>
                <Text style={styles.profileName}>{profile.LastName}</Text>
                <Text style={styles.roleText}>{profile.ClubName}</Text>
                <Text style={styles.orgText}>{profile.SystemRole}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dashboardButton}
          disabled={!selectedProfile}
          onPress={handleDashboardNavigation}
        >
          <Text style={styles.dashboardText}>DASHBOARD</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerNote}>
        <Text style={styles.noteBold}>NOTE:</Text> You can switch profiles once in the Coacha App
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  header: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  logo: {
    backgroundColor: '#0078D7',
    padding: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    marginTop:  20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 20,
    columnGap: 20,
    width: '100%',
    paddingBottom: 20,
  },
  profileBox: {
    width: '47%',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  profileName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  roleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 2,
    textAlign: 'center',
  },
  orgText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  backButton: {
    width: '48%',
    backgroundColor: '#b3e0ff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  dashboardButton: {
    width: '48%',
    backgroundColor: '#bfff00',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  backText: {
    color: '#003366',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dashboardText: {
    color: '#003366',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerNote: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  noteBold: {
    fontWeight: 'bold',
  },
  image: {
    width: 115,
    height: 115,
    borderRadius: 57,
    borderWidth: 5,
    borderColor: '#000080',
  },
  selectedImage: {
    borderColor: '#FFD700',
  },
});
