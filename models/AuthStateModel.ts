import { Profile } from "./Profile";
import { UserInfo } from "./UserInfo";

export interface AuthStateModel {
    email: string;
    password: string;
    pin: string;
    clubId: number | null;
    userId: number | null;
    profile: Profile | null;
    userInfo: UserInfo | null;
    sevenDaysClasses: any[] | null;
  
    setCredentials: (email: string, password: string, pin?: string) => void;
    setUserInfo: (clubId: number, userId: number, profile: Profile) => Promise<void>;
    setUserData: (user: any) => void;
    setSevenDaysClasses: (classes: any[]) => void;
    clearCredentials: () => void;
  }