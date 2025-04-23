import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import * as SecureStore from 'expo-secure-store';
import { getCombinedData } from '@/services/ProfileService';
import { Buffer } from 'buffer';
import { Profile } from '@/models/Profile';

// 🔐 SecureStore wrapper for zustand persist
const secureStorage = {
  getItem: async (key: string) => {
    const value = await SecureStore.getItemAsync(key);
    return value ? JSON.parse(value) : null;
  },
  setItem: async (key: string, value: any) => {
    await SecureStore.setItemAsync(key, JSON.stringify(value));
  },
  removeItem: async (key: string) => {
    await SecureStore.deleteItemAsync(key);
  },
};

type AuthState = {
  email: string;
  password: string;
  pin: string;
  clubId: number | null;
  userId: number | null;
  profile: Profile | null;
  combinedData: {
    SevenDaysClasses?: any[];
    MemberCount?: number;
    CoachCount?: number;
    AllMembers?: any[];
    AllClasses?: any[];
    Club?: any;
    Groups?: any[];
    GlobalSettings?: any;
  } | null;
  setCredentials: (email: string, password: string, pin?: string) => void;
  setUserInfo: (clubId: number, userId: number, profile: Profile) => Promise<void>;
  setCombinedData: (data: any) => void;
  clearCredentials: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      email: '',
      password: '',
      clubId: null,
      userId: null,
      profile: null,
      combinedData: null,
      pin: '',

      setCredentials: (email, password, pin = '') =>
        set({ email, password, pin }),

      setUserInfo: async (clubId, userId, profile) => {
        const { email, password } = get();
        set({ clubId, userId, profile });

        try {
          const data = await getCombinedData(clubId, userId, email, password);
          const filteredData = {
            SevenDaysClasses: data.SevenDaysClasses,
            MemberCount: data.MemberCount,
            CoachCount: data.CoachCount,
            AllMembers: data.AllMembers,
            AllClasses: data.AllClasses,
            Club: data.Club,
            Groups: data.Groups,
            GlobalSettings: data.GlobalSettings,
          };
          set({ combinedData: filteredData });
        } catch (error) {
          console.error('[Store] Combined data fetch failed:', error);
        }
      },

      setCombinedData: (data) => set({ combinedData: data }),

      clearCredentials: () =>
        set({
          email: '',
          password: '',
          clubId: null,
          userId: null,
          profile: null,
          combinedData: null,
          pin: '',
        }),
    }),
    {
      name: 'auth-storage',
      storage: secureStorage,
    }
  )
);
