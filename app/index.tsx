import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { useAuthStore } from "@/store/useAuthStore";

export default function Index() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const { email } = useAuthStore();
  const isLoggedIn = !!email;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 50); // Slight delay to allow Zustand to hydrate

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isReady) {
      if (isLoggedIn) {
        router.replace("/authentication/pinset/pinset"); // your main app route
      } else {
        router.replace("/authentication/login/login");
      }
    }
  }, [isReady, isLoggedIn]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
