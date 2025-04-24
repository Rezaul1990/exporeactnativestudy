// 📁 store/useAuthStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCombinedData } from '@/services/ProfileService';
import { AuthStateModel } from '@/models/AuthStateModel';



export const useAuthStore = create<AuthStateModel>()(
  persist(
    (set, get) => ({
      email: '',
      password: '',
      pin: '',
      clubId: null,
      userId: null,
      profile: null,
      userInfo: null,
      sevenDaysClasses: null,

      setCredentials: (email, password, pin = '') => set({ email, password, pin }),

      setUserInfo: async (clubId, userId, profile) => {
        const { email, password, setUserData, setSevenDaysClasses } = get();
        set({ clubId, userId, profile });

        try {
          const data = await getCombinedData(clubId, userId, email, password);

          if (data?.User) {
            setUserData(data.User);
          }

          if (Array.isArray(data?.SevenDaysClasses)) {
            setSevenDaysClasses(data.SevenDaysClasses);
          }
        } catch (error) {
          console.error('[Store] Failed to fetch user or class data:', error);
        }
      },

      setUserData: (user) =>
        set({
          userInfo: {
            FullName: user?.FullName,
            Email: user?.Email,
            Permissions: user?.Permissions || [],
            payments: user?.payments || [],
            classes: user?.classes || [],
            PermissionId: user?.PermissionId,
            SystemRole: user?.SystemRole,
          },
        }),

      setSevenDaysClasses: (classes) => set({ sevenDaysClasses: classes }),

      clearCredentials: () =>
        set({
          email: '',
          password: '',
          pin: '',
          clubId: null,
          userId: null,
          profile: null,
          userInfo: null,
          sevenDaysClasses: null,
        }),
    }),
    {
      name: 'auth-storage',
      storage: {
        getItem: async (key) => {
          const value = await AsyncStorage.getItem(key);
          return value ? JSON.parse(value) : null;
        },
        setItem: async (key, value) => {
          await AsyncStorage.setItem(key, JSON.stringify(value));
        },
        removeItem: async (key) => {
          await AsyncStorage.removeItem(key);
        },
      },
      partialize: (state) => {
        const { userInfo, sevenDaysClasses, ...rest } = state;
        return rest;
      },
    }
  )
);
