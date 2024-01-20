type User = {
  id: number;
  admin: boolean;
  customWelcomeScreenViewed: string;
  email: string;
  firstName: string;
  groupAdmin: boolean;
  lastLogin: string;
  lastName: string;
  licensedSheetCreator: boolean;
  name: string;
  profileImage: Image;
  resourceViewer: boolean;
  sheetCount: number;
  status: 'ACTIVE' | 'DECLINED' | 'PENDING' | 'DEACTIVATED';
};

type UserProfile = {
  id: User['id'];
  account: Account;
  admin: boolean;
  alternateEmails: AlternateEmail | AlternateEmail[];
  company: string;
  customWelcomeScreenViewed: string;
  department: string;
  email: string;
  firstName: string;
  groupAdmin: boolean;
  jiraAdmin: boolean;
  lastLogin: string;
  lastName: string;
  licensedSheetCreator: boolean;
  locale: LocaleCode;
  mobilePhone: string;
  profileImage: Image;
  resourceViewer: boolean;
  role: string;
  salesforceAdmin: boolean;
  salesforceUser: boolean;
  sheetCount: number;
  timeZone: string;
  title: string;
  workPhone: string;
};

type Account = {
  id: number;
  name: string;
};
