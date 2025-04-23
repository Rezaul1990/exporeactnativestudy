import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { getUserClubs } from '@/services/authService';
import { useAuthStore } from '@/store/useAuthStore';

export default function Login() {
  const [email, setEmail] = useState('mashrul@gmail.com');
  const [password, setPassword] = useState('Server123!');
  const [isLoading, setIsLoading] = useState(false); // ✅ Loader state

  const router = useRouter();
  const { setCredentials } = useAuthStore();

  const handleLogin = async () => {
    if (!email || !password) {
      return Alert.alert("Missing Fields", "Please enter email and password");
    }
  
    setIsLoading(true);
    try {
      const clubs = await getUserClubs(email, password, 'UK');
      console.log('[DEBUG] Club Fetch Response:', clubs);
  
      if (Array.isArray(clubs) && clubs.length > 0) {
        console.log('[DEBUG] ClubID:', clubs[0].ClubID);
        console.log('[DEBUG] UserID:', clubs[0].UserID);
      }
  
      setCredentials(email, password);
      router.replace('/authentication/pinset/pinset');
    } catch (error: any) {
      console.error('[Login Error]', error);
      const message = error?.response?.data?.message || 'Invalid credentials or server error';
      Alert.alert('Login Failed', message);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <Button title="Login" onPress={handleLogin} disabled={isLoading} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});
