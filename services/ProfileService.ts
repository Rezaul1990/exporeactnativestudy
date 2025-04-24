
import axios from 'axios';
import { Buffer } from 'buffer';
import { API_BASE_URL } from '@/constants/AuthApi';
import { Profile } from '@/models/Profile';
import { useAuthStore } from '@/store/useAuthStore';
import { CombinedData } from '@/models/CombinedDataModel';

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



export async function getCombinedData(
  clubId: number,
  userId: number,
  email: string,
  password: string
): Promise<CombinedData> {
  const token = Buffer.from(`${email}:${password}`).toString('base64');

  const url = `${API_BASE_URL}api/data/combineddata3/?v=cPEp5lh0Ynel&clubId=${clubId}&userId=${userId}&country=UK`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `Basic ${token}`,
      Accept: 'application/json',
    },
  });

  if (!response.data || (typeof response.data === 'string' && response.data.trim() === '')) {
    throw new Error('Empty response from API');
  }

  return typeof response.data === 'string'
    ? JSON.parse(response.data)
    : response.data;
}
