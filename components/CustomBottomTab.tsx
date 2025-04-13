import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

const tabs = [
    { route: "/screens/homescreen/home", label: "Dashboard", icon: "home" },
    { route: "/screens/shedule/shedule", label: "Schedule", icon: "calendar-alt" },
    { route: "/screens/money/money", label: "Money", icon: "money-bill-wave" },
    { route: "/screens/profilescreen/profile", label: "Profile", icon: "calendar-check" },
    { route: "/screens/setting/setting", label: "Setting", icon: "comment-alt" },
  ];

export default function CustomBottomTab() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;

  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab, index) => {
        const active = isActive(tab.route);
        return (
          <TouchableOpacity
            key={index}
            style={styles.tabButton}
            onPress={() => router.push(tab.route)}
          >
            <FontAwesome5
              name={tab.icon as any}
              size={22}
              color={active ? "#003B73" : "#009DFF"}
            />
            <Text style={[styles.tabLabel, { color: active ? "#003B73" : "#009DFF" }]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingBottom: Platform.OS === "ios" ? 20 : 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  tabButton: {
    alignItems: "center",
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: "500",
  },
});
