import { UserInfo } from "./UserInfo";

export interface CombinedData {
    User: UserInfo;
  SevenDaysClasses: any[];
  // You can expand this with other fields like:
  // MemberCount?: number;
  // CoachCount?: number;
  // AllClasses?: any[];
  // Club?: any;
  // Groups?: any[];
  // GlobalSettings?: any;
  [key: string]: any;
  }