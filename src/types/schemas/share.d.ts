type Share = {
  id: string;
  groupId: number;
  userId: number;
  type: 'GROUP' | 'USER';
  accessLevel: AccessLevel;
  ccMe: boolean;
  createdAt: string | number;
  email: string;
  message: string;
  modifiedAt: string | number;
  name: string;
  scope: 'ITEM' | 'WORKSPACE';
  subject: string;
};
