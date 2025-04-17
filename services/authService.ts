import axios from 'axios';
import { Buffer } from 'buffer';
import { API_BASE_URL } from '@/constants/AuthApi';
import { Club } from '@/models/Club';

export const getUserClubs = async (email: string, password: string, country: string): Promise<Club[]> => {
  const token = Buffer.from(`${email}:${password}`).toString('base64');

  const response = await axios.get(`${API_BASE_URL}api/data/userclubs`, {
    params: { country },
    headers: {
      Authorization: `Basic ${token}`,
    },
  });
  console.log('[DEBUG] User clubs response:', response.data); // 👈 SEE WHAT CAME BACK

  return response.data;
};
