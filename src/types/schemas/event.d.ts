type SmartsheetEvent = {
  eventId: string;
  objectType: 'SHEET' | 'WORKSPACE';
  action: string | 'CREATE' | 'DELETE';
  objectId: string;
  eventTimeStamp: string;
  userId: number;
  requestUserId: number;
  accessTokenName: string;
  source: string;
  additionalDetails: Record<string | number, unknown>;
};
