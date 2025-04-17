
import axios from 'axios';
import { Buffer } from 'buffer';
import { API_BASE_URL } from '@/constants/AuthApi';
import { Profile } from '@/models/Profile';
import { useAuthStore } from '@/store/useAuthStore';

export const getProfileData = async (): Promise<Profile[]> => {
  const { email, password } = useAuthStore.getState(); // ✅ Zustand works outside React too

  const token = Buffer.from(`${email}:${password}`).toString('base64');

  const response = await axios.get(`${API_BASE_URL}api/data/getsiblings`, {
    params: { country: 'UK' },
    headers: {
      Authorization: `Basic ${token}`,
    },
  });
  console.log('[DEBUG] Profile data response:', response.data); // 👈 SEE WHAT CAME BACK
  return response.data;
};

export async function getCombinedData(clubId: number, userId: number, email: string, password: string): Promise<any> {
  const authHeader = 'Basic ' + Buffer.from(`${email}:${password}`).toString('base64');
  const url = `https://appwebservices.coacha.app/api/data/combineddata3/?v=cPEp5lh0Ynel&clubId=${clubId}&userId=${userId}&country=UK`;

  const res = await fetch(url, {
    headers: {
      Authorization: authHeader,
      Accept: 'application/json',
    },
  });

  const text = await res.text();
  if (!text || text.trim() === '') throw new Error('Empty response from API');

  return JSON.parse(text);
}
