import { create } from 'zustand';
import { getCombinedData } from '@/services/ProfileService';
import { Buffer } from 'buffer';
import { Profile } from '@/models/Profile'; // ✅ Add this

type AuthState = {
  email: string;
  password: string;
  pin: string;
  clubId: number | null;
  userId: number | null;
  profile: Profile | null;              // ✅ Add profile here
  combinedData: any;
  setCredentials: (email: string, password: string,pin?: string) => void;
  setUserInfo: (clubId: number, userId: number, profile: Profile) => Promise<void>; // ✅ add profile param
  setCombinedData: (data: any) => void;
  clearCredentials: () => void;
};

export const useAuthStore = create<AuthState>((set, get) => ({
  email: '',
  password: '',
  clubId: null,
  userId: null,
  profile: null,                         // ✅ Initial value
  combinedData: null,
  pin: '',

  setCredentials: (email, password,pin = '') => set({ email, password,pin  }),

  setUserInfo: async (clubId, userId, profile) => {
    const { email, password } = get();
    set({ clubId, userId, profile });   // ✅ Store profile too

    try {
      const data = await getCombinedData(clubId, userId, email, password);
      console.log('[DEBUG] Combined data response:', data);
      set({ combinedData: data });
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
      pin: ''
    }),
}));
