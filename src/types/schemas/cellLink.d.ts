type CellLinkStatus = 'BLOCKED' | 'BROKEN' | 'CIRCULAR' | 'DISABLED' | 'INACCESSIBLE' | 'INVALID' | 'NOT_SHARED' | 'OK';

type CellLink = {
  columnId: number;
  rowId: number;
  sheetId: number;
  sheetName: string;
  status: CellLinkStatus;
};
