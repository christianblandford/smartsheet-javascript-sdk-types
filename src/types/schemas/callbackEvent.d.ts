type CallbackEvent = {
  id: number;
  columnId: Column['id'];
  rowid: Row['id'];
  userid: User['id'];
  objectType: 'attachment' | 'cell' | 'column' | 'comment' | 'discussion' | 'row' | 'sheet';
  changeAgent: string;
  eventType: 'created' | 'deleted' | 'updated';
  timestamp: string;
};
