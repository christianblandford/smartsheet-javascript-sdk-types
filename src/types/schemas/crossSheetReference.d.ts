type CrossSheetReferenceStatus =
  | 'BLOCKED'
  | 'BROKEN'
  | 'CIRCULAR'
  | 'DISABLED'
  | 'INVALID/UNKNOWN'
  | 'NOT-SHARED'
  | 'OK';

type CrossSheetReference = {
  endColumnId?: Column['id'];
  endRowId?: Row['id'];
  id?: number;
  name?: string;
  startColumnId?: Column['id'];
  startRowId?: Row['id'];
  status: CrossSheetReferenceStatus;
  sourceSheetId: Sheet['id'];
};
